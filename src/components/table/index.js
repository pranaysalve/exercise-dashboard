import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal";
import EmailForm from "../emailform";
const Table = ({ data, columns }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const openModal = (data, e) => {
    e.preventDefault();
    setEmail(data.email);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-wrap">
      <div className="overflow-x-auto">
        <table className="min-w-fit divide-y divide-gray-200 mr-20">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => {
                return Object.keys(column).map((key, index) => {
                  return (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column[key]}
                    </th>
                  );
                });
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  {Object.keys(row).map((key, columnIndex) => {
                    return (
                      <td
                        key={columnIndex}
                        className="px-6 py-4 whitespace-nowrap overflow-ellipsis overflow-hidden"
                      >
                        {key === "quickActions" ? (
                          <Link to="/sendemail">
                            <button
                              onClick={(e) => openModal(row, e)}
                              className="border border-gray-300 px-4 py-2 rounded-md"
                            >
                              Send Email
                            </button>
                          </Link>
                        ) : (
                          row[key]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          onClose={(e) => closeModal(e)}
          title="Send Email"
          content={<EmailForm onClose={(e) => closeModal(e)} email={email} />}
        />
      </div>
    </div>
  );
};

export default Table;
