import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import contactImg from "../../assets/contactImg.png";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#212428] py-10 px-4">
      <div className="text-center mb-12">
        <p
          className="uppercase text-[#ff014f]  tracking-widest mb-3"
          data-aos="fade-up"
        >
          Contact
        </p>
        <h2
          className="text-4xl font-bold text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact With Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Contact Card */}
        <motion.div
          className="bg-[#1E1F25] rounded-xl p-6 shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: false }}
        >
          <img
            src={contactImg}
            alt="Contact"
            className="rounded-lg w-full mb-4"
          />
          <div className="space-y-3 text-gray-300">
            <h3 className="text-xl font-semibold uppercase">Md. Ramjan Ali</h3>
            <p className="">Full Stack Web Developer</p>
            <p className=" ">
              I am available for Job. You can reach out via email or phone.
            </p>

            <p>
              <span className="text-lg font-bold">Phone :</span> +880 1928
              294516
            </p>
            <p>
              <span className="xt-lg font-bold">Email :</span>{" "}
              gmramjanali8888@gmail.com
            </p>
          </div>

          <p className="mt-6 mb-3 uppercase">Find With Me</p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/gm.romjan.50"
              target="_blank"
              rel="noreferrer"
              className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="www.linkedin.com/in/md-ramjan-ali-1bb369324"
              target="_blank"
              rel="noreferrer"
              className="bg-[#17171d] p-2 rounded hover:scale-110 transition text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          className="bg-[#1E1F25] rounded-xl p-6 shadow-md h-full "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: false }}
        >
          <form className="flex flex-col justify-between h-full text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-3 text-sm">YOUR NAME</label>
                <input
                  type="text"
                  className="bg-[#17171d] text-white p-3 rounded w-full focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-3 text-sm">PHONE NUMBER</label>
                <input
                  type="number"
                  className="bg-[#17171d] text-white p-3 rounded w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-3 text-sm">EMAIL</label>
              <input
                type="email"
                className="bg-[#17171d] text-white p-3 rounded w-full focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-3 text-sm">SUBJECT</label>
              <input
                type="text"
                className="bg-[#17171d] text-white p-3 rounded w-full focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-3 text-sm">YOUR MESSAGE</label>
              <textarea
                rows="5"
                className="bg-[#17171d] text-white p-3 rounded w-full focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#ff014f] text-white w-full py-3 rounded mt-6 font-semibold hover:bg-[#ff014dea] transition"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
