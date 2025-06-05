
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-6 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl w-full">
        
        {/* Left - Content */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            Hi, I'm<span className="text-green-700"> KARISHMA WADASKAR</span> a Web Developer!
          </h1>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">
            Passionate about building modern, responsive web apps.
          </h2>
          <p className="text-gray-700 mb-4">
            As a fresher in web development, I specialize in creating small yet powerful modules using React, JavaScript, HTML, and CSS. My portfolio includes calculators, login systems, weather apps, to-do lists, and more.
          </p>
          <p className="text-gray-700 mb-4">
            I’m committed to writing clean code, learning modern tools like Tailwind CSS, GitHub, and REST APIs, and always exploring new technologies to improve user experience and performance.
          </p>
          <p className="text-gray-700">
            My goal is to join a dynamic team where I can contribute, learn from experienced developers, and grow into a full-stack professional. Let’s build something great together!
          </p>

          {/* Optional Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/photo.jpg" // or use an online link
            alt="Developer Illustration"
            className="w-80 h-auto rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
