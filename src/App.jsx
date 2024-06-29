import React from "react";

function App() {
  return (
    <div className="App">
      <div className="grid lg:grid-cols-2 lg:bg-white 2xl:grid-cols-5">
        <div className="pt-8 max-w-md mx-auto sm:max-w-xl sm:pt-12 lg:px-12 lg:py-24 2xl:col-span-2">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Work<span className="text-indigo-500">cation</span>
          </h1>
          <img
            className="mt-2 rounded-lg shadow-grey-500 shadow-xl sm:mt-4 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
            src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imgage"
          />
          <h2 className="mt-6 text-2xl font-semibold sm:mt-8 sm:text-4xl lg:text-3xl">
            You can work from anywhere. <br />
            <span className="text-indigo-500">Take Advantage of it</span>
          </h2>
          <p className="mt-2 text-gray-800 sm:mt-4 sm:text-xl">
            workstation finds you work rentals in beutifull locations so you can
            enjoy some nice weateher even when youre not on cacation
          </p>
          <div className="mt-4 space-x-4 sm:mt-6">
            <button className="btn btn-primary">Book your escape</button>
            <button className="btn btn-secondary">Learn more</button>
          </div>
        </div>
        <div className="relative hidden lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-grey-500 shadow-xl"
            src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imgage"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
