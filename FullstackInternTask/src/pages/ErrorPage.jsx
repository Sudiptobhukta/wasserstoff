import React from 'react';


// This is the Error page it will be called incase of any other url other than home
function ErrorPage() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-800 w-full">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-96">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p className="mb-4 text-lg text-slate-50">Oops! Looks like you're lost.</p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <p className="mt-4 text-green-500">
            Let's get you back{' '}
            <a href="/" className="text-blue-500">
              home
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
