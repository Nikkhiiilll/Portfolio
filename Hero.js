import React from "react";

function Hero() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Nikhil Ronad
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Data Analyst & Aspiring Data Engineer  
        </p>
        <p className="mt-2 text-gray-600">
          Experienced in SQL, Python, Power BI, Tableau, and Streamlit. Skilled at building data
          solutions and dashboards that drive business decisions.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="mailto:ronadnikhil@gmail.com"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-ronad-685298200/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nikkhiiilll"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
