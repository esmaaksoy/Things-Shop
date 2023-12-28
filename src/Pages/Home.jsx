const Home = () => {
  return (
    <>
      <section className="relative bg-[url(https://cdn.pixabay.com/photo/2016/09/30/19/22/old-window-1706131_1280.jpg)] bg-cover">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              WELCOME
              <strong className="block font-extrabold text-teal-400">
                Things <span className="text-[#E58C88]">Shop</span>
              </strong>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-[#E58C88] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-200 hover:text-teal-800 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-red-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
