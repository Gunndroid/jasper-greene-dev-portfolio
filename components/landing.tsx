import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../app/globals.css";

const Landing: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const onSubmit = (data: any) => {
    fetch("https://formspree.io/f/xqkveroe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Clear the form
          reset();
          // Close the modal
          setShowModal(false);
          // Display success message
          setShowSuccessMessage(true);
          // Hide the success message after some time (e.g., 3 seconds)
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        } else {
          console.error("Formspree submission error");
        }
      })
      .catch((error) => {
        console.error("There was an error submitting the form", error);
      });
  };

  // const onSubmit = (data: any) => {
  //   // You can use data to send an email
  //   // Usually, you would call a server function here to send the email.
  //   console.log(data);

  //   // Close the modal
  //   setShowModal(false);
  // };

  return (
    <div
      id="home-section"
      className="bg-c-green-dark h-screen w-full flex items-center " // add justify-between here
    >
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-c-gray p-8 rounded w-1/3 text-center">
            <h2 className="text-c-green-darker text-xl">
              Form successfully submitted!
            </h2>
          </div>
        </div>
      )}
      <div className="text-c-gray w-1/3 ml-28">
        <p>Hello, my name is</p>
        <h2 className="text-5xl font-bold mb-2">Gunnar Curry</h2>
        <h1>
          <strong>Frontend Developer</strong> based in Chicago
        </h1>
        <button
          onClick={handleContactClick}
          className="bg-c-gray text-c-green-dark px-4 py-2 rounded mt-4"
        >
          Let&apos;s Talk
        </button>
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img src="../img/gunnarEdit.png" className="w-[95vh] opacity-90" />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-c-gray p-8 rounded w-1/3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-c-green-dark text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className="shadow appearance-none border border-c-green-darker rounded w-full py-2 px-3 text-c-green-dark bg-c-gray"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-c-green-dark text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className="shadow appearance-none border border-c-green-darker rounded w-full py-2 px-3 text-c-green-dark bg-c-gray"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-c-green-dark text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="shadow appearance-none border border-c-green-darker rounded w-full py-2 px-3 text-c-green-dark bg-c-gray"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-c-green-dark text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  {...register("subject", { required: true })}
                  className="shadow appearance-none border border-c-green-darker rounded w-full py-2 px-3 text-c-green-dark bg-c-gray"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-c-green-dark text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className="shadow appearance-none border border-c-green-darker rounded w-full py-2 px-3 text-c-green-dark bg-c-gray"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-c-green-medium text-c-gray px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="ml-4 text-c-green-darker"
              >
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
