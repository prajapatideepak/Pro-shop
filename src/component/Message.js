import React from "react";

export default function Message({ error }) {
  return (
    <div className="dark:bg-gray-900">
      <div className="h-16 bg-red-200 rounded text-red-900 opacity-75 px-6 font-bold flex items-center ">
        <div className="flex items-end">
          <div className="mr-2 mt-0.5 sm:mt-0 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={22}
              height={22}
              fill="currentColor"
            >
              <path
                className="heroicon-ui"
                d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
              />
            </svg>
          </div>
          <p className="mr-2 text-base font-bold text-red-500">Error</p>
        </div>

        <div className="h-1 w-1 bg-red-500 rounded-full mr-2 hidden xl:block" />
        <p className="text-base text-red-500"> {error}</p>
      </div>
    </div>
  );
}
