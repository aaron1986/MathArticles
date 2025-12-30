import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //test in console!
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

    return (
        <>
        <div className="article_title">Contact Page</div>
        <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name..." />
            </div> {/* end div for form_group */}

             <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
        </div> {/* end div for form_group */}

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Tell us more about your inquiry..." />
        </div> {/* end div for form_group */}

        <button type="submit" className="submit-btn">Send Message</button>
        
        </form>
        </div>
        </>
    )
}