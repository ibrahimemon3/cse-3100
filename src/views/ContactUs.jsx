import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section className="text-center mt-4">
      <h2 className="mb-3">Contact us</h2>
      <p className="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>
      {/* Show success message if form is submitted */}
      {submitted ? (
        <div className="alert alert-success mt-4" role="alert">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              required
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{ borderRadius: '8px', padding: '10px' }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ borderRadius: '8px', padding: '10px 20px', backgroundColor: '#5bc0de', border: 'none' }}
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
