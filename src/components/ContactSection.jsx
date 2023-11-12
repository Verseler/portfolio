export default function ContactSection() {
  return (
    <section id="contact-section" className="text-center text-white bg-stone-800 lg:text-start">
      <div className="w-5/6 py-20 m-auto border-b-2 border-white md:w-3/5 lg:flex lg:w-5/6 lg:gap-44 max-w-7xl">
        <div className="container pb-10">
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl lg:mb-8">Contact</h1>
          <p className="text-gray-300">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form className="container text-start">
          <label className="block ml-5 text-gray-400" htmlFor="contact-name">NAME</label>
          <input className="w-full mb-6 bg-transparent border-b-2 border-gray-300" id="contact-name" type="text" />
          <label className="block ml-5 text-gray-400" htmlFor="contact-email">EMAIL</label>
          <input className="w-full mb-6 bg-transparent border-b-2 border-gray-300 " id="contact-email" type="text" />
          <label className="block ml-5 text-gray-400" htmlFor="contact-message">MESSAGE</label>
          <textarea rows="4" cols="50" className="w-full mb-6 bg-transparent border-b-2 border-gray-300 " id="contact-message"></textarea>
          <input className="block py-2 ml-auto text-lg tracking-wider border-b-2 border-green-400 cursor-pointer" type="submit" value="SEND MESSAGE" />
        </form>
      </div>  
    </section>
  );
}
