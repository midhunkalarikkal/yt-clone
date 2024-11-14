import React from "react";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const sideMenuOpen = useSelector((store) => store.state.isSidebarOpen);
  return (
    <section
      className={`flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800 px-4 mt-14 ${
        sideMenuOpen ? "w-[86%] ml-[14%]" : "w-[95%] ml-[5%]"
      }`}
    >
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>429
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we've hit the daily API usage limit.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But don't worry, you can try again later or explore other features
            on our homepage.
          </p>
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Go to profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
