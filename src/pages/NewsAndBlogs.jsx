import { useEffect } from "react";

const NewsAndBlogs = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  // News  JSON Data --->
  const news = [
    {
      id: 1,
      title: "5 Tips for Finding the Perfect Apartment in Dhaka",
      image:
        "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2020/10/27/rupayan_photo_noor_3.jpg",
      date: "2025-02-18",
      content:
        "Finding the perfect apartment can be challenging. Here are 5 essential tips to help you find your ideal home in Dhaka...",
      author: "Admin",
      tags: ["Apartments", "Rental Tips", "Dhaka"],
    },
    {
      id: 2,
      title: "Vobon Manager Introduces New Rent Payment System",
      image:
        "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/109767.Housing.Com-Launches-Industry%E2%80%99s-First---Rent-Now,-Pay-Later-Services-with-Niro.png",
      date: "2025-02-15",
      content:
        "We’ve launched a seamless online rent payment system to make your life easier. Learn about how you can pay rent through Vobon Manager...",
      author: "Admin",
      tags: ["Announcements", "Payments", "Tech"],
    },
    {
      id: 3,
      title: "Top 10 Amenities to Look for in a Rental Apartment",
      image:
        "https://landlordgurus.com/wp-content/uploads/2022/10/Rental-Income-Taxes-33.png",
      date: "2025-02-10",
      content:
        "From swimming pools to gyms, discover the top amenities that can elevate your apartment living experience...",
      author: "Admin",
      tags: ["Apartment Living", "Amenities", "Lifestyle"],
    },
  ];

  // Blogs JSON Data --->
  const blogs = [
    {
      id: 4,
      title: "Why Renting an Apartment is a Smart Choice in 2025",
      image:
        "https://rize.sa/wp-content/uploads/2025/01/Rent-Steps-Article.webp",
      date: "2025-02-19",
      content:
        "With rising property prices, renting an apartment offers financial flexibility and fewer maintenance responsibilities. In Vobon Manager, we ensure a seamless renting experience with secure payment options and verified listings.",
      author: "Admin",
    },
    {
      id: 5,
      title: "Top 5 Tips for Finding the Perfect Apartment",
      image:
        "https://www.crescent-builders.com/blog/wp-content/uploads/2020/06/question-mark-next-to-house-model-picture-id1146964196-1024x594.jpg",
      date: "2025-02-19",
      content:
        "Looking for the perfect apartment? Consider factors like location, amenities, budget, and lease terms. Vobon Manager simplifies your search with detailed listings and transparent pricing.",
      author: "Admin",
    },
    {
      id: 6,
      title: "Understanding Rental Agreements: What You Need to Know",
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/05/20193840/Everything-you-need-to-know-about-rent-agreements-FB-1200x700-compressed.jpg",
      date: "2025-02-19",
      content:
        "Before signing a rental agreement, it's important to review lease terms, security deposits, and maintenance policies. Vobon Manager provides clear contract terms to ensure a hassle-free renting process.",
      author: "Admin",
    },
  ];

  return (
    <div className="dark:bg-black">
      <div className="py-14 w-11/12 mx-auto max-w-screen-2xl">
        {/* News Container */}
        <div>
          {/* Section Header */}
          <h3 className="text-lg text-primary dark:font-bold">
            --- News Feeds ---
          </h3>
          <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
            Stay Updated with Vobon Manager
          </h1>
          {/* News Container */}
          <div className="mt-6 flex flex-col md:flex-row items-stretch gap-6">
            <div className="w-full md:w-7/12 lg:w-6/12">
              {news.slice(0, 1).map((item) => (
                <div key={item.id} className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 h-full min-h-[400px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                        {item.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span>{item.published_date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
              {news.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center gap-2 border-2 hover:border-black duration-300 dark:bg-[#1b1b1b] dark:border-none"
                >
                  {/* Image Container */}
                  <div className="lg:w-6/12 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="w-full p-3">
                    <div>
                      <p className="text-base text-gray-500 dark:text-gray-300 mb-2 font-semibold">
                        {item.date} | By {item.author}
                      </p>
                      <h1 className="mt-2 text-2xl font-medium tracking-wider dark:text-white">
                        {item.title}
                      </h1>
                      <p className="mt-1 text-gray-600 dark:text-[#ececec] tracking-widest">
                        {item.content}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-sm bg-blue-100/80 dark:bg-white text-primary font-semibold px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Blogs Container */}
        <div className="mt-12">
          {/* Section Header */}
          <h3 className="text-lg text-primary dark:font-bold">
            --- Vobon Manager Blog ---
          </h3>
          <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
            Stay Informed & Make Smart Rental Decisions
          </h1>
          {/* Blogs Container */}
          <div className="mt-6 flex flex-col md:flex-row-reverse items-stretch gap-6">
            <div className="w-full md:w-7/12 lg:w-6/12">
              {blogs.slice(0, 1).map((item) => (
                <div key={item.id} className="h-full">
                  <div className="relative h-full overflow-hidden shadow-lg group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-300 h-full min-h-[400px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
                        {item.title}
                      </h2>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                        <span>{item.published_date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-5/12 lg:w-6/12 flex flex-col gap-6">
              {blogs.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center gap-2 border-2 hover:border-black duration-300 dark:bg-[#1b1b1b] dark:border-none"
                >
                  {/* Image Container */}
                  <div className="lg:w-6/12 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="w-full p-3">
                    <div>
                      <p className="text-base text-gray-500 dark:text-gray-300 mb-2 font-semibold">
                        {item.date} | By {item.author}
                      </p>
                      <h1 className="mt-2 text-2xl font-medium tracking-wider dark:text-white">
                        {item.title}
                      </h1>
                      <p className="mt-1 text-gray-600 dark:text-[#ececec] tracking-widest">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndBlogs;
