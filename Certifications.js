import React from "react";
import certs from "../data/certifications.json";

function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {certs.map((c, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
            <p className="text-sm text-gray-500">{c.issuer}</p>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
