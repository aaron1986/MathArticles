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

    return (
        <>
        <div className="article_title">Contact Page</div>
        <div className="contact-container">
            <form className="contact-form" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div> {/* end div for form_group */}
             
            <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div> {/* end div for form_group */}

            <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div> {/* end div for form_group */}

        <button type="submit" className="submit-btn">Send Message</button>
        
        </form>
        </div>
        </>
    )
}