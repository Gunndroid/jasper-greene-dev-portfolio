// pages/_error.tsx
import React from "react";
import Link from "next/link";
import "../app/globals.css";

interface NotFoundProp {
  colorScheme: string;
}

const NotFoundPage: React.FC<NotFoundProp> = ({ colorScheme }) => (
  <div className="bg-c-green-dark h-screen flex flex-col justify-center items-center text-c-green-gray">
    <h1 className="text-9xl font-bold mb-10">404</h1>
    <p className="text-2xl mb-10">Oops! Page not found</p>
    <Link legacyBehavior href="/">
      <a
        className={`text-lg bg-c-${colorScheme}-gray text-c-green-dark px-5 py-2 rounded-full hover:bg-opacity-80 transition-all`}
      >
        Return Home
      </a>
    </Link>
  </div>
);

export default NotFoundPage;
