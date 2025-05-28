import React from "react";

const ContactComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-16 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2 text-center">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Ada pertanyaan, saran, atau ingin bekerja sama? Silakan isi form di bawah ini atau hubungi kami melalui email.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Nama
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nama Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="email@domain.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Pesan
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Tulis pesan Anda di sini..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-full shadow hover:scale-105 transition"
          >
            Kirim Pesan
          </button>
        </form>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Atau email ke:{" "}
          <a
            href="mailto:lusipr142@gmail.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            lusipr142@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;