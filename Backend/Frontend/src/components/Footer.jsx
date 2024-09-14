import React from "react";

function Footer() {
  return (
    <div className="bg-gray-200 dark:bg-slate-800">
      <hr />
      <footer
        id="footer"
        className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white"
      >
        <div className="grid grid-cols-1 gap-6">
          {/* Contact Us Section */}
          <div className="text-center mb-6">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p className="mb-1">XYZ Plot 23</p>
            <p className="mb-1">Nashik, 422003</p>
            <p className="mb-1">Phone: +91 9022222989</p>
            <p className="mb-1">Email: sharvariborse03@example.com</p>
          </div>

          {/* Social Media Icons */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <path d="M12 2.163c3.203 0 3.584.012 4.85.07 1.269.059 2.438.38 3.318 1.26.881.881 1.2 2.06 1.26 3.318.059 1.266.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.059 1.269-.38 2.438-1.26 3.318-.881.881-2.06 1.2-3.318 1.26-1.266.059-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.269-.059-2.438-.38-3.318-1.26-.881-.881-1.2-2.06-1.26-3.318-.059-1.266-.07-1.647-.07-4.85s.012-3.584.07-4.85c.059-1.269.38-2.438 1.26-3.318.881-.881 2.06-1.2 3.318-1.26 1.266-.059 1.647-.07 4.85-.07zm0-2.163c-3.235 0-3.638.012-4.912.071-1.274.059-2.529.292-3.646 1.321-1.106 1.02-1.71 2.309-1.769 3.785-.06 1.282-.069 1.766-.069 4.908 0 3.141.012 3.638.069 4.918.059 1.476.663 2.766 1.769 3.785 1.117 1.029 2.372 1.263 3.646 1.321 1.274.059 1.677.071 4.912.071 3.235 0 3.638-.012 4.912-.071 1.274-.059 2.529-.292 3.646-1.321 1.106-1.02 1.71-2.309 1.769-3.785.06-1.282.069-1.766.069-4.918 0-3.142-.012-3.626-.069-4.908-.059-1.476-.663-2.766-1.769-3.785-1.117-1.029-2.372-1.262-3.646-1.321-1.274-.059-1.677-.071-4.912-.071zm0 5.834c-3.39 0-6.144 2.753-6.144 6.144s2.754 6.144 6.144 6.144 6.144-2.753 6.144-6.144-2.754-6.144-6.144-6.144zm0 10.34c-2.309 0-4.188-1.879-4.188-4.188 0-2.309 1.879-4.188 4.188-4.188 2.309 0 4.188 1.879 4.188 4.188 0 2.309-1.879 4.188-4.188 4.188zm4.516-8.582c-.746 0-1.354-.608-1.354-1.354 0-.746.608-1.354 1.354-1.354s1.354.608 1.354 1.354c0 .746-.608 1.354-1.354 1.354z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-red-600 hover:text-red-800 transition-colors"
                >
                  <path d="M23.498 6.186c-.238-1.782-.94-3.35-1.897-4.577-1.006-1.187-2.26-1.98-3.54-2.462-2.601-.723-8.235-.723-8.235-.723s-5.633 0-8.233.723c-1.279.482-2.534 1.274-3.54 2.462-1.128 1.227-1.66 2.796-1.897 4.577-.274 2.136-.274 6.538-.274 6.538s0 4.384.274 6.519c.238 1.782.94 3.35 1.897 4.577 1.006 1.187 2.26 1.98 3.54 2.462 2.601.723 8.235.723 8.235.723s5.633 0 8.233-.723c1.279-.482 2.534-1.274 3.54-2.462 1.128-1.227 1.66-2.796 1.897-4.577.274-2.136.274-6.519.274-6.519s0-4.384-.274-6.538zm-14.748 9.023v-8.096l8.222 4.048-8.222 4.048z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <aside className="text-center mt-6">
          <p>Copyright © 2024 - Sharvari Borse</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
