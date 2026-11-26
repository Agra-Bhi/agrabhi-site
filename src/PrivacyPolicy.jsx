import React, { useState } from "react";
import logo from "/blogo.png";
import agrilife from "/agrilife.jpg";

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E2E8F0] font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-full mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo Link */}
          <div className="flex items-center text-lg sm:text-xl font-bold tracking-tighter text-white whitespace-nowrap">
            <div>
              <a
                href="https://agrabhi.com"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://agrabhi.com";
                }}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-center md:justify-start">
                  <img src={logo} alt="Logo" className="h-6 w-auto" />
                  <h2 className="text-xl font-bold text-white leading-none">
                    Agra<span className="text-emerald-400">Bhi</span>
                  </h2>
                </div>
              </a>
            </div>

            <p className="px-2.5 sm:px-3 text-sm sm:text-sm font-normal text-slate-400">
              in collaboration with
            </p>
            <img
              src={agrilife}
              alt="AgriLife Logo"
              className="h-8 sm:h-9 w-auto translate-y-[1px]"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://agrabhi.com/updates.html"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://agrabhi.com/updates.html";
              }}
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              Project Updates
            </a>

            <a
              href="https://agrabhi.com/about.html"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://agrabhi.com/about.html";
              }}
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              About Us
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nathan-sharma/AgraBhi"
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-400 hover:text-white focus:outline-none ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0D1117] border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
            <a
              href="https://agrabhi.com/updates.html"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                window.location.href = "https://agrabhi.com/updates.html";
              }}
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              Project Updates
            </a>

            <a
              href="https://agrabhi.com/about.html"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                window.location.href = "https://agrabhi.com/about.html";
              }}
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              About Us
            </a>

            <a
              href="https://github.com/nathan-sharma/AgraBhi"
              onClick={toggleMenu}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-24 md:pt-32 px-6 md:py-12 py-8 max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Effective Date: November 26, 2026
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            <strong className="text-white">AgraBhi</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
            or &ldquo;the app&rdquo;) is a mobile controller application for agricultural research
            rovers. We respect your privacy and are committed to transparency about how the app
            handles data.
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            1. Data We Do Not Collect
          </h2>
          <p className="text-slate-400 leading-relaxed">
            AgraBhi does <strong className="text-slate-200">not</strong> collect, sell, rent, or
            share personal information with third parties, advertisers, or analytics providers. The
            app contains no third-party advertising SDKs or behavioral tracking tools.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            2. Information Stored Locally on Your Device
          </h2>
          <p className="text-slate-400 leading-relaxed">
            To operate, AgraBhi stores the following data{" "}
            <strong className="text-slate-200">only on your iPhone/iPad</strong>:
          </p>
          <ul className="list-disc list-inside text-slate-400 leading-relaxed space-y-1.5 pl-2">
            <li>
              <strong className="text-slate-200">Connection Settings:</strong> Your selected
              connection mode (Cloud Relay or Direct Wi-Fi), server URL/IP address, Rover ID, and
              passcode are saved locally on your device so you do not have to re-enter them.
            </li>
            <li>
              <strong className="text-slate-200">CSV Field Logs:</strong> When you log soil samples
              or stability runs, AgraBhi saves CSV files (containing rover GPS coordinates,
              altitude, fix quality, mound status, soil moisture, soil temperature, and IMU
              roll/pitch/yaw telemetry) locally in the app&rsquo;s storage until you share or delete
              them.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            3. Rover &amp; Relay Communication
          </h2>
          <p className="text-slate-400 leading-relaxed">
            AgraBhi transmits control commands and receives rover telemetry (GPS coordinates, soil
            sensor readings, battery voltage, and IMU data) over WebSocket connections solely to the
            Direct Wi-Fi rover address or Cloud Relay server that{" "}
            <strong className="text-slate-200">you</strong> configure. Any data transmitted through
            a relay server is routed only between your device and your paired rover.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            4. Device Permissions
          </h2>
          <ul className="list-disc list-inside text-slate-400 leading-relaxed space-y-1.5 pl-2">
            <li>
              <strong className="text-slate-200">Local Network (iOS):</strong> Used only when you
              choose <strong className="text-slate-200">Direct Wi-Fi</strong> mode to communicate
              with a rover on the same local Wi-Fi network.
            </li>
            <li>
              <strong className="text-slate-200">File Sharing:</strong> Used only when you
              explicitly tap <strong className="text-slate-200">Share</strong> to export a CSV log
              file via AirDrop, email, or the Files app.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            5. Data Deletion
          </h2>
          <p className="text-slate-400 leading-relaxed">
            You can delete saved CSV logs directly inside the app&rsquo;s{" "}
            <strong className="text-slate-200">CSV Files</strong> tab at any time, or delete all
            locally stored app data by uninstalling AgraBhi from your device.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            6. Children&rsquo;s Privacy
          </h2>
          <p className="text-slate-400 leading-relaxed">
            AgraBhi is a technical field-control tool not directed at children under 13, and we do
            not knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            7. Changes to This Policy
          </h2>
          <p className="text-slate-400 leading-relaxed">
            We may update this Privacy Policy from time to time. Any updates will be posted on this
            page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2 pb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            8. Contact Us
          </h2>
          <p className="text-slate-400 leading-relaxed">
            If you have questions about this Privacy Policy, contact us at nathansharma007@gmail.com or morrisonlandon51@gmail.com.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#0D1117] py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-1">
              <img src={logo} alt="Logo" className="h-5 w-auto" />
              <h2 className="text-lg font-bold text-white leading-none">
                Agra<span className="text-emerald-400">Bhi</span>
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Created by <span className="text-slate-200">Nathan Sharma &amp; Landon Morrison</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-x-6 gap-y-0 md:gap-y-1 text-center">
            <a
              href="mailto:nathansharma007@gmail.com"
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              nathansharma007@gmail.com
            </a>

            <a
              href="mailto:morrisonlandon51@gmail.com"
              className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              morrisonlandon51@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}