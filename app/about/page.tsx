



// const About = () => {
//   return (
//     <section className="p-6 bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] mt-14 text-gray-200">
      
//       {/* Header */}
//       <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//         About Me
//       </h1>

//       {/* Intro */}
//       <p className="text-gray-400 mb-6 max-w-3xl">
//         I’m <span className="text-white font-semibold">Joseph Wachira</span>, a passionate 
//         web developer focused on building modern, responsive, and user-friendly 
//         web applications. I enjoy turning ideas into real, functional products 
//         that solve problems and create value.
//       </p>

//       {/* What I Do */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-white mb-3">
//           What I Do
//         </h2>
//         <p className="text-gray-400 max-w-3xl">
//           I specialize in frontend development using technologies like React, 
//           Next.js, and Tailwind CSS. I build clean interfaces, optimize performance, 
//           and ensure a smooth user experience across devices.
//         </p>
//       </div>

//       {/* Skills */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-white mb-3">
//           Skills & Technologies
//         </h2>
//         <div className="flex flex-wrap gap-3">
//           {[
//             "React",
//             "Next.js",
//             "JavaScript",
//             "TypeScript",
//             "Tailwind CSS",
//             "Git & GitHub",
//             "REST APIs",
//           ].map((skill, index) => (
//             <span
//               key={index}
//               className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Journey */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-white mb-3">
//           My Journey
//         </h2>
//         <p className="text-gray-400 max-w-3xl">
//           I started my journey in tech with a strong curiosity for how things work 
//           on the web. Over time, I’ve built multiple projects ranging from simple 
//           applications to more complex systems, continuously improving my skills 
//           and understanding of software development.
//         </p>
//       </div>

//       {/* Call to Action */}
//       <div className="mt-10">
//         <p className="text-gray-400 mb-4">
//           Interested in working together or have a project in mind?
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 px-6 rounded-lg transition"
//         >
//           Let’s Connect
//         </a>
//       </div>

//     </section>
//   );
// };

// export default About;




const About = () => {
  return (
    <section className="p-6 bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] mt-14 text-gray-200">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        About Me
      </h1>

      {/* Intro */}
      <p className="text-gray-400 mb-6 max-w-3xl">
        I’m <span className="text-white font-semibold">Joseph Wachira</span>, 
        a full stack web developer focused on building modern, scalable web applications. 
        I work across the full development stack — from responsive user interfaces to 
        backend logic, APIs, and database management.
      </p>

      {/* What You Actually Do */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          What I Build
        </h2>
        <p className="text-gray-400 max-w-3xl">
          I build complete web applications such as ticket management systems, 
          interactive dashboards, and dynamic web platforms. My work involves 
          handling real-world features like authentication, data handling, and 
          deployment to production environments.
        </p>
      </div>

      {/* Skills (grouped like a pro) */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Tech Stack
        </h2>

        <div className="space-y-3 text-gray-400">
          <p>
            <span className="text-white font-medium">Frontend:</span> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
          </p>
          <p>
            <span className="text-white font-medium">Backend:</span> Node.js, APIs, Server-side logic
          </p>
          <p>
            <span className="text-white font-medium">Tools:</span> Git, GitHub, Vercel (deployment)
          </p>
        </div>
      </div>

      {/* Proof (THIS is what matters most) */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-3">
          Featured Work
        </h2>
        <p className="text-gray-400 max-w-3xl">
          One of my key projects is a ticket management system built with Next.js, 
          where users can create, update, and manage tickets efficiently. This 
          project demonstrates my ability to handle both frontend and backend 
          development, as well as deploy real-world applications.
        </p>
      </div>

      {/* Mindset (this sells you) */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">
          My Approach
        </h2>
        <p className="text-gray-400 max-w-3xl">
          I focus on writing clean, maintainable code and building solutions that 
          are both user-friendly and scalable. I’m constantly learning and improving, 
          with a strong goal of becoming a highly skilled software engineer.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <p className="text-gray-400 mb-4">
          I’m open to internships, freelance work, and junior developer opportunities.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 px-6 rounded-lg transition"
        >
          Let’s Work Together
        </a>
      </div>

    </section>
  );
};

export default About;