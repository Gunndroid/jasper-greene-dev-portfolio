import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../app/globals.css";

interface LandingProps {
  colorScheme: string;
}

const Landing: React.FC<LandingProps> = ({ colorScheme }) => {
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

  return (
    <div
      id="home-section"
      className={`bg-c-${colorScheme}-dark h-screen w-full flex items-center relative  transition-all duration-700 ease-in-out`}
    >
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-c-${colorScheme}-gray p-8 rounded w-1/3 text-center transition-all duration-700 ease-in-out`}
          >
            <h2
              className={`text-c-${colorScheme}-darker text-xl transition-all duration-700 ease-in-out`}
            >
              Form successfully submitted!
            </h2>
          </div>
        </div>
      )}
      <div
        className={`text-c-${colorScheme}-gray w-1/3 ml-32 transition-all duration-700 ease-in-out`}
      >
        <p>Hello, my name is</p>
        <h2 className="text-5xl font-bold mb-2">Gunnar Curry</h2>
        <h1>
          <strong>Frontend Developer</strong> based in Chicago
        </h1>
        <button
          onClick={handleContactClick}
          className={`bg-c-${colorScheme}-gray text-c-${colorScheme}-dark px-4 py-2 rounded mt-4 transition-all duration-700 ease-in-out`}
        >
          Let&apos;s Talk
        </button>
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img
          src="../img/gunnarEdit.png"
          className="w-[100vh] opacity-90"
          alt="Image of Gunnar Curry, the Developer of the portfolio."
        />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div
            className={`bg-c-${colorScheme}-gray p-8 rounded w-1/3 transition-all duration-700 ease-in-out`}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  className={`block text-c-${colorScheme}-dark text-sm font-bold mb-2 transition-all duration-700 ease-in-out`}
                >
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className={`shadow appearance-none border border-c-${colorScheme}-darker rounded w-full py-2 px-3 text-c-${colorScheme}-dark bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-c-${colorScheme}-dark text-sm font-bold mb-2 transition-all duration-700 ease-in-out`}
                >
                  Last Name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className={`shadow appearance-none border border-c-${colorScheme}-darker rounded w-full py-2 px-3 text-c-${colorScheme}-dark bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-c-${colorScheme}-dark text-sm font-bold mb-2 transition-all duration-700 ease-in-out`}
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className={`shadow appearance-none border border-c-${colorScheme}-darker rounded w-full py-2 px-3 text-c-${colorScheme}-dark bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-c-${colorScheme}-dark text-sm font-bold mb-2 transition-all duration-700 ease-in-out`}
                >
                  Subject
                </label>
                <input
                  {...register("subject", { required: true })}
                  className={`shadow appearance-none border border-c-${colorScheme}-darker rounded w-full py-2 px-3 text-c-${colorScheme}-dark bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-c-${colorScheme}-dark text-sm font-bold mb-2 transition-all duration-700 ease-in-out`}
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className={`shadow appearance-none border border-c-${colorScheme}-darker rounded w-full py-2 px-3 text-c-${colorScheme}-dark bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`bg-c-${colorScheme}-medium text-c-${colorScheme}-gray px-4 py-2 rounded transition-all duration-700  ease-in-out`}
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={`ml-4 text-c-${colorScheme}-darker transition-all duration-700 ease-in-out`}
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
