import React, { useRef, useState, useEffect } from "react";

import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIAT3RNUGEM6TRZ3657",
  secretAccessKey: "KxQ867oH7WMmTcToWmXvTkQyyWjB16sQbTsroo04",
  region: "us-east-1", // Replace with your AWS region (e.g., 'us-east-1')
});

const EmailForm = ({ onClose, email }) => {
  const [recipientEmail, setRecipientEmail] = useState(email);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const ses = new AWS.SES();

    const params = {
      Destination: {
        ToAddresses: [recipientEmail],
      },
      Message: {
        Body: {
          Text: {
            Data: emailBody,
          },
        },
        Subject: {
          Data: emailSubject,
        },
      },
      Source: "pranaysalve25@gmail.com", // Replace with your sender email address verified in SES
    };

    try {
      await ses.sendEmail(params).promise();
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <h2 className="text-2xl font-bold mb-4">Send Email</h2>

          <form onSubmit={(e) => sendEmail(e)}>
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
                value={recipientEmail}
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
                value={emailSubject}
                placeholder="Enter email subject"
                onChange={(e) => setEmailSubject(e.target.value)}
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
                value={emailBody}
                rows="4"
                placeholder="Enter email message"
                onChange={(e) => setEmailBody(e.target.value)}
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
