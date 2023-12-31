import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const EmailForm = ({ onClose, email }) => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    console.log({ form: form.current });
    emailjs
      .sendForm(
        "service_tq2w21m",
        "template_4003grd",
        form.current,
        "FWwA2vqb8tRWVqQfa"
      )
      .then(
        (result) => {
          console.log({ result });
          onClose();
        },
        (error) => {
          console.log({ error });
        }
      )
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-2xl font-bold mb-4">Send Email</h2>

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="to"
              >
                To:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="to"
                value={email}
                type="email"
                name="user_email"
                placeholder="Enter recipient email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter email subject"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Enter email message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                value="Send"
                // onClick={onClose}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
              <button
                onClick={onClose}
                className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
