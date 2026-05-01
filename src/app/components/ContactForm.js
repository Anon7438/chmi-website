"use client";

import { useState, useRef, useEffect } from "react";
import { UploadCloud, X } from "lucide-react";

export default function ContactForm() {
  const fileRef = useRef();
  const dropdownRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    clinic: "",
    phone: "",
    message: "",
    file: null,
  });

  const [selected, setSelected] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [openUp, setOpenUp] = useState(false);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const options = [
    "General",
    "Vascular",
    "Musculoskeletal (MSK)",
    "Small Parts",
    "Other / Not sure",
  ];

  // HANDLE CHANGE
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // VALIDATION + FOCUS
  const validate = () => {
    let e = {};

    if (!form.name.trim()) {
      e.name = "Required";
      nameRef.current.focus();
    } else if (!form.email.trim()) {
      e.email = "Required";
      emailRef.current.focus();
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({
        name: "",
        email: "",
        clinic: "",
        phone: "",
        message: "",
        file: null,
      });
      setSelected("");
    }, 5000);
  };

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // TOGGLE DROPDOWN + AUTO POSITION
  const handleToggle = () => {
    if (!dropdownRef.current) return;

    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    setOpenUp(spaceBelow < 250);
    setDropdownOpen((prev) => !prev);
  };

  // KEYBOARD NAVIGATION
  const handleKeyDown = (e) => {
    if (!dropdownOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < options.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : options.length - 1
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        setSelected(options[highlightedIndex]);
        setDropdownOpen(false);
      }
    }

    if (e.key === "Escape") {
      setDropdownOpen(false);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-gray-200 p-10 rounded-2xl shadow-sm w-full">

      <h2 className="text-3xl font-serif text-[#0F2A44] mb-2">
        Request appointment
      </h2>

      <p className="text-gray-600 mb-8">
        Fill in the form below and our team will be in touch shortly.
      </p>

      {success ? (
        <div className="bg-[#E6F4F1] border border-[#BFE3DC] text-center p-8 rounded-xl">
          <p className="font-semibold text-[#0F2A44]">
            Request received
          </p>
          <p className="text-sm text-gray-600">
            Thanks — we’ll get back to you within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="label">Full name *</label>
              <input
                ref={nameRef}
                placeholder="Dr. Jane Smith"
                className="input-clean"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div>
              <label className="label">Clinic / Facility</label>
              <input
                placeholder="Ballarat Medical Centre"
                className="input-clean"
                value={form.clinic}
                onChange={(e) => handleChange("clinic", e.target.value)}
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="label">Email *</label>
              <input
                ref={emailRef}
                placeholder="jane@clinic.com"
                className="input-clean"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
              <label className="label">Phone</label>
              <input
                placeholder="+61..."
                className="input-clean"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          {/* DROPDOWN */}
          <div
            ref={dropdownRef}
            className="relative"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <label className="label">Service type</label>

            <div
              onClick={handleToggle}
              className="input-clean flex justify-between items-center cursor-pointer"
            >
              <span className={selected ? "text-gray-800" : "text-gray-400"}>
                {selected || "Select a service category"}
              </span>
              <span className="text-gray-400">⌄</span>
            </div>

            {dropdownOpen && (
              <div
                className={`absolute z-20 w-full bg-white border rounded-xl shadow-xl overflow-hidden
                ${openUp ? "bottom-full mb-2" : "top-full mt-2"}
                animate-dropdown`}
              >
                {options.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHighlightedIndex(i)}
                    onClick={() => {
                      setSelected(item);
                      setDropdownOpen(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer transition
                    ${
                      selected === item
                        ? "bg-[#2A9D8F] text-white"
                        : highlightedIndex === i
                        ? "bg-gray-100"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="label">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about the referral or question..."
              className="input-clean"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          {/* UPLOAD */}
          <div>
            <label className="label">Upload report (optional)</label>

            <div
              onClick={() => fileRef.current.click()}
              className="border border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition"
            >
              <UploadCloud className="mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">
                Drag & drop file or click to upload
              </p>

              <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={(e) =>
                  handleChange("file", e.target.files[0])
                }
              />
            </div>

            {form.file && (
              <div className="flex justify-between mt-2 text-sm">
                <span>{form.file.name}</span>
                <button
                  type="button"
                  onClick={() => handleChange("file", null)}
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[#1E3A5F] text-white px-7 py-3 rounded-full text-sm font-medium 
            shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all"
          >
            Submit Request
          </button>

        </form>
      )}
    </div>
  );
}