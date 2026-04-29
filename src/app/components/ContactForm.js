"use client";

import { useState } from "react";
import { useRef } from "react";
import { UploadCloud, CheckCircle, X } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const fileInputRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE (REAL-TIME ERROR REMOVE) =================
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    // remove error instantly
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    if (!form.message.trim()) newErrors.message = "Message is required";

    if (form.file && form.file.size > 5 * 1024 * 1024) {
      newErrors.file = "File must be less than 5MB";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // simulate API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  // ================= DRAG DROP =================
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleChange("file", file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border">

      <h2 className="text-2xl font-semibold mb-8">
        Request Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className={`w-full border p-3 rounded-lg ${errors.name
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className={`w-full border p-3 rounded-lg ${errors.email
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            maxLength={10}
            className={`w-full border p-3 rounded-lg ${errors.phone
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            value={form.phone}
            onChange={(e) =>
              handleChange("phone", e.target.value.replace(/\D/g, ""))
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            rows="4"
            placeholder="Your Message"
            className={`w-full border p-3 rounded-lg ${errors.message
              ? "border-red-500"
              : "border-gray-300 focus:ring-2 focus:ring-blue-600"
              }`}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* FILE UPLOAD */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Upload Report (optional)
          </label>

          <div
            onClick={() => fileInputRef.current.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${dragActive
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300 bg-gray-50"
              }`}
          >
            <UploadCloud size={28} className="mx-auto text-gray-400 mb-2" />

            <p className="text-sm text-gray-600">
              {form.file
                ? form.file.name
                : "Drag & drop file or click to upload"}
            </p>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) =>
                handleChange("file", e.target.files[0])
              }
            />
          </div>

          {/* FILE PREVIEW */}
          {form.file && (
            <div className="flex justify-between items-center mt-2 text-sm">
              <span className="text-gray-600 truncate">
                {form.file.name}
              </span>

              <button
                type="button"
                onClick={() => {
                  handleChange("file", null);
                  fileInputRef.current.value = "";
                }}
                className="text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {errors.file && (
            <p className="text-red-500 text-sm mt-1">{errors.file}</p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] text-white py-3 rounded-lg hover:opacity-90 transition shadow-lg"
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>

        {/* SUCCESS */}
        {submitted && (
          <div className="mt-4 flex items-center gap-2 text-green-600 text-sm">
            <CheckCircle size={18} />
            Request submitted successfully
          </div>
        )}

      </form>
    </div>
  );
}