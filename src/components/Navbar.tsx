function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          LexiCloud
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-blue-600 transition">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;