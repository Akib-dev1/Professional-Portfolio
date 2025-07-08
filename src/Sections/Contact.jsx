import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">Contact Me</h1>
      <div className="h-0.5 w-29 -translate-x-0.5 rounded-full bg-[#444444] mb-4">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <div className="flex mt-10 flex-col md:flex-row gap-4 md:gap-10 items-center justify-center">
        <div className="">
          <p className="font-bold text-4xl">Let's talk about your project</p>
          <p className="text-lg text-[#D5D5D5] mt-4 max-w-xl">
            Let’s embark on creative journey together by shaping a visual
            narrative of your brand in the crowded digital space.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <div className="p-6 w-fit bg-[#444444] rounded-lg lg:rounded-full mt-4">
              <div className="flex max-lg:flex-col items-center gap-4">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 max-w-16 rounded-full ring-2 ring-offset-2">
                    <img src="https://i.ibb.co/Q7d0hWK1/Muhammad-Akib-Anjum.jpg" />
                  </div>
                </div>
                <div className="">
                  <p className="font-semibold max-xl:text-sm mb-2">
                    Phone/WhatsApp: +880-1985-326-982
                  </p>
                  <p className="font-semibold max-xl:text-sm">
                    Email: akibanj2017@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#444444] max-sm:w-full p-6 md:min-w-96">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input py-7 input-bordered text-lg rounded-lg w-full bg-[#333333] text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input py-7 input-bordered text-lg rounded-lg w-full bg-[#333333] text-white"
            />
            <textarea
              placeholder="Your Message"
              className="textarea min-h-32 textarea-bordered text-lg rounded-lg w-full bg-[#333333] text-white"
            ></textarea>
            <button
              type="submit"
              className="btn bg-[#007CED] border-none w-full mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
