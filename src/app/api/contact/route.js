import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export async function POST(req) {
  const form = new formidable.IncomingForm({
    maxFileSize: 5 * 1024 * 1024,
  });

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return resolve(
          new Response(JSON.stringify({ error: "File too large" }), { status: 400 })
        );
      }

      try {
        const name = fields.name?.[0];
        const email = fields.email?.[0];
        const phone = fields.phone?.[0] || "";
        const message = fields.message?.[0];

        if (!name || !email || !message) {
          return resolve(
            new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
          );
        }

        let attachments = [];
        const file = files.file?.[0];

        if (file) {
          attachments.push({
            filename: file.originalFilename,
            content: fs.readFileSync(file.filepath),
          });
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.RECEIVER_EMAIL,
          subject: `New Form - ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
          `,
          attachments,
        });

        resolve(
          new Response(JSON.stringify({ success: true }), { status: 200 })
        );

      } catch (error) {
        console.error(error);
        resolve(
          new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
        );
      }
    });
  });
}