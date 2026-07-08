function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h4 className="text-2xl font-bold text-white">
            LexiCloud
          </h4>

          <p className="mt-2">
            Business solutions for modern companies.
          </p>
        </div>

        <div>
          <p>Email: info@lexicloud.com</p>
          <p className="mt-2">
            Phone: +46 123456789
          </p>
        </div>

      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        © 2026 LexiCloud. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;