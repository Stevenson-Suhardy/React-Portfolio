import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/qalppgwa"
        method="post"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </p>
          <p className="py-4">
            Submit the form below to contact me or alternatively, you can email
            me at vensen.teng@gmail.com
          </p>
        </div>
        <input
          className="p-2 border border-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 border border-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="border border-black p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-black border-2 hover:text-white hover:font-bold hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
