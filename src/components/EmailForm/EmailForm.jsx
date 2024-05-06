import "./EmailForm.css"; // Css

// Component trả về form nhập Email
function EmailForm() {
  return (
    // Section form email
    <section className="email-form">
      <div className="page-wide email-control">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" required />

          {/* Nút */}
          <button className="button--blue">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

// Trả về
export default EmailForm;
