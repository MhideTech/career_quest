const HeroSection = () => {
  return (
    <section className="flex h-screen md:flex-row flex-col">
      <div className="md:w-1/2 sm:w-full bg-gray-100 p-4 sm:p-9 flex items-center flex-col justify-center h-5/6">
        <p className="me-auto">Special Offer for First Time Customer</p>
        <h1 className="text-7xl font-bold mt-4 mb-7">
          learn anytime, anywhere with LNRY
        </h1>
        <form action="" className="flex me-auto w-auto">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your e-mail"
            className="px-3 py-2 text-xl focus:outline-none rounded-s"
          />
          <input
            type="button"
            value="Subscribe"
            className="px-6 py-2 bg-cyan-600 rounded text-white"
          />
        </form>
      </div>
      <div className="md:w-1/2 sm:w-full bg-gray-300 flex h-5/6 justify-center items-center py-4">
        <div className="w-96 h-fit bg-gray-100 -rotate-6">
          <img
            src="src\assets\hero.png"
            className="object-cover w-auto h-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
