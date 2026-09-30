import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center py-12 md:flex-row md:gap-8 md:py-20">

          {/* Hero Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Build Your Ideal
              <br />
              <span className="brand-gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg md:mx-0">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">
              <a
                href="#technologies"
                className="brand-gradient flex flex-1 items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:flex-none sm:px-5"
              >
                Explore Technologies
              </a>

              <a
                href="#technologies"
                className="flex flex-1 items-center justify-center rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-pink-300 hover:text-pink-600 sm:flex-none sm:px-6"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2">
            <img
              src={banner}
              alt="Development stack illustration"
              className="w-full max-w-[430px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;