import { Heading } from "../components/heading";

const ContactsPage = () => {
  return (
    <>
    <section className=" bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] mt-14 text-gray-200">
      <Heading title="Contact Me" description="Get in touch with me" />
      <div className="border-b border-gray-800 mb-8 pl-6">
      <p className="text-gray-400 mb-8 max-w-xl">
        I’m open to internships, freelance work, and junior developer opportunities. 
        Feel free to reach out — I’d love to hear from you.
      </p>

      <div className="mb-10 space-y-3">
        <p>
          <span className="text-white font-medium">
            Email:</span>{" "}
          <a
            href="mailto:your@email.com"
            className="text-blue-400 hover:underline"
          >
            your@email.com
          </a>
        </p>

        <p>
          <span className="text-white font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            github.com/yourusername
          </a>
        </p>

        <p>
          <span className="text-white font-medium">
            Location:</span>{" "}
          Juja, Kenya
        </p>
      </div>

      <form className="max-w-xl space-y-4">
        
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-yellow-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-yellow-500"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-gray-900 border border-gray-800 focus:outline-none focus:border-yellow-500"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>
      </div>
    </section>
    </>
  );
};

export default ContactsPage;