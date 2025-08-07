import React, { useState } from "react";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("⚠️ Please fill in all fields!");
            return;
        }

        // For now, just show the entered data
        alert(`✅ Thank you, ${name}! We received your message.\n\nEmail: ${email}\nMessage: ${message}`);

        // Reset fields
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4 text-primary">📩 Contact Us</h1>
            <p className="text-center mb-5">
                If you have any questions, feel free to reach out using the form below.
            </p>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write your message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
