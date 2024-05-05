const Contact = () => {
  return (
    <div className="container">
      <h1
        data-aos="zoom-out"
        data-aos-delay="400"
        className="text-center fw-bold mt-8"
      >
        Contact Me
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="400"
        className="mt-6 max-w-3xl mx-auto text-gray-500"
      >
        Feel free to reach out and let&apos;s connect! I am always open for new
        opportunities.
      </p>
      <div data-aos="flip-right" data-aos-delay="400" className="container">
        <form action="#" method="post" className="d-flex flex-column mt-12">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            aria-describedby="email-desc"
            placeholder="Your Email"
            required
          />
          <small id="email-desc" className="form-text text-muted">
            I won&apos;t share your email with anyone else.
          </small>
          <textarea
            rows={4}
            id="message"
            name="message"
            placeholder="Message"
            style={{ width: "100%" }}
            className="mt-6 d-block rounded Small shadow py-3 px-4"
          ></textarea>
          <button type="submit" className="btn btn-primary my-3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
