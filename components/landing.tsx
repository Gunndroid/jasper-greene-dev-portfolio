import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Landing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContactClick = () => {
    setShowModal(true);
  };

  const onSubmit = (data: any) => {
    // You can use data to send an email
    // Usually, you would call a server function here to send the email.
    console.log(data);

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="bg-c-green-dark h-screen w-full flex items-center">
      <div className="text-c-gray w-1/3 ml-28">
        <p>Hello, my name is</p>
        <h2 className="text-5xl font-bold mb-2">Gunnar Curry</h2>
        <h1>
          <strong>Frontend Developer</strong> based in Chicago
        </h1>
        <button
          onClick={handleContactClick}
          className="bg-white text-c-green-dark px-4 py-2 rounded mt-4"
        >
          Let&apos;s Talk
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded w-1/3">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="email"
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="tel"
                />
              </div> */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"></textarea>
              </div>
              <button
                type="submit"
                className="bg-c-green-medium text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button onClick={() => setShowModal(false)} className="ml-4">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
