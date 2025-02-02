import Image from "next/image";

const Signin = () => {
  return (
    <>
      <div className="min-h-screen grid place-content-center bg-gray-50 overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-sm h-auto font-[Helvetica] bg-white shadow-lg rounded-md p-4 sm:p-8 md:p-12 lg:p-16">
          {/* Logo */}
          <div className="flex justify-center pt-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="pb-2"
            />
          </div>

          <div className="text-center text-2xl md:text-3xl font-bold leading-8 mt-4 sm:mt-6 lg:mt-8">
            Your Account
            <br />
            For Everything
            <br />
            Nike
          </div>

          
          <div className="mt-6 space-y-4">
            <div className="border border-gray-300 rounded-sm px-4 py-2 focus:outline-none w-full sm:w-auto">
              <input
                type="email"
                name="email"
                id="1"
                placeholder="Email Address"
                className="w-full"
              />
            </div>

            <div className="border border-gray-300 rounded-sm px-4 py-2 focus:outline-none w-full sm:w-auto">
              <input
                type="password"
                name="password"
                id="2"
                placeholder="Password"
                className="w-full"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="w-5 h-5 bg-white border-gray-400 rounded"
                />
                <label htmlFor="checkbox">Keep me signed in</label>
              </div>
              <div className="text-blue-600 cursor-pointer hover:underline">
                Forgotten your password?
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-4 text-center leading-5">
            By Logging in, you agree to {'Nike\u0027s'}{" "}
            <span className="underline underline-offset-2">Privacy Policy</span> and{" "}
            <span className="underline underline-offset-2">Terms of Use</span>
          </div>

          
          <div className="mt-6">
            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300">
              SIGN IN
            </button>
          </div>

        
          <div className="mt-6 text-center text-sm text-gray-600">
            Not a Member?{" "}
            <span className="text-black underline underline-offset-2 cursor-pointer hover:text-gray-700">
              Join Us.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;