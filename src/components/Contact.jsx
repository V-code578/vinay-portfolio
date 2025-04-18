const Contact = () => (
  <section className="container my-5">
    <h2 className="mb-4">Contact</h2>
    <div className="card shadow-sm p-4 animate__animated animate__fadeInUp">
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:vinayhn2019@gmail.com">vinayhn2019@gmail.com</a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a href="https://www.linkedin.com/in/vinay-h-n-97061b1a9/" target="_blank" rel="noopener noreferrer">
          vinay-h-n
        </a>
      </p>
      <p className="mt-3">
        <a href="/Resume-VinayHN.pdf" download className="btn btn-success">
          📄 Download Resume
        </a>
      </p>
    </div>
  </section>
);
export default Contact;
