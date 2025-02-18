const Newsletter = () => {
  return (
    <section className="w-full rounded p-[20px] border dark:border-[#ffffff] dark:border-2">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
        <div className="w-full sm:w-[80%] lg:w-[50%]">
          <img
            src="https://i.ibb.co.com/60JHjFFJ/vobon-newsletter.png"
            alt="image"
            className="w-full"
          />
        </div>

        <div className="w-full lg:w-[45%]">
          <b className="text-[1.3rem] sm:text-[2rem] dark:text-white">Get our weekly</b>
          <h1 className="text-[2.1rem] sm:text-[3.2rem] font-[800] uppercase text-accent leading-[50px]">
            newsletter
          </h1>
          <p className="text-[1rem] sm:text-[1.3rem] mt-5 sm:mt-8 dark:text-white">
            <b>Subscribe to our newsletter</b> for the latest apartments
            listings, rental offer, and exclusive coupons delivered straight to
            your inbox!
          </p>
        </div>
      </div>

      <div className="relative mt-10 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto">
        <input
          placeholder="Email Address"
          className="py-3 px-4 pr-[130px] border border-border rounded-md outline-none focus:ring-0 focus:border-accent w-full"
        />
        <button className="py-3 px-6 h-full absolute top-0 right-0 hover:bg-primary bg-accent text-white rounded-r-md duration-300">
          <b>Subscribe</b>
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
