import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // simple email validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("⚠️ Invalid email format.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      {/* Decorative SVGs - replace these src paths with your own SVGs */}
      <img src="/Footer Vector.svg" alt="" className="decor mandala-left" />
      <img src="/Footer Vector 2.svg" alt="" className="decor mandala-top-right" />
      <img src="/assets/camera-left.svg" alt="" className="decor camera-left" />

      {/* Main layout container */}
      <div className="contact-container">
        {/* Left copy block */}
        <aside className="contact-left">
          <div className="left-card">
            <p>
              Whether you have an idea, a question, or simply want to explore how V can
              work with you — we’re just a message away.
            </p>
            <p>Let’s catch up over coffee and conversation.</p>
            <p>Great stories always begin with a good conversation.</p>

            {/* small social/quick icons placeholder */}
            <div className="icon-row" aria-hidden="true">
              <img src="/assets/icon-1.svg" alt="" />
              <img src="/assets/icon-2.svg" alt="" />
              <img src="/assets/icon-3.svg" alt="" />
            </div>
          </div>
        </aside>

        {/* Right form card */}
        <main className="contact-right" role="main">
          <div className="form-wrapper" aria-hidden="false">
            <h3 id="contact-heading" className="form-title">Join the Story</h3>
            <p className="form-sub">Ready to bring your vision to life? Let’s talk.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span className="sr-only">Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                <span className="sr-only">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  placeholder="Your message*"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>

              <div className="submit-row">
                <button className="submit-btn" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Status message */}
              {status && <p className="status-msg">{status}</p>}

              <div className="contact-line">
                <a href="mailto:vernita@varnanfilms.co.in">vernita@varnanfilms.co.in</a>
                <span className="sep">|</span>
                <a href="tel:+91987684567">+91 98736 84567</a>
              </div>
            </form>
          </div>
        </main>
      </div>

      {/* subtle bottom progress bar like in design */}
      <div className="bottom-bar" aria-hidden="true">
        <div className="bottom-bar-inner"></div>
      </div>
    </section>
  );
};

export default Contact;
