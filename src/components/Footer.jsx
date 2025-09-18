import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        {/* Social */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Social</h6>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 hover:text-white transition" viewBox="0 0 24 24">
                <path
                  d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 
        9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482 
        13.945 13.945 0 0 1-10.125-5.138 4.822 4.822 0 0 0-.666 2.475 
        4.92 4.92 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.228-.616v.06 
        a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 
        4.936 4.936 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54 
        13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.721 13.995-14.646 
        a9.936 9.936 0 0 0 2.457-2.549z"
                />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 hover:text-white transition" viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0 
        -3.897.266-4.356 2.62-4.385 8.816 
        .029 6.185.484 8.549 4.385 8.816 
        3.6.245 11.626.246 15.23 0 
        3.897-.266 4.356-2.62 4.385-8.816 
        -.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 hover:text-white transition" viewBox="0 0 24 24">
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 
        1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 
        4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 
        0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 
        24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} Le' Maridien. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
