const NewsFeeds = () => {
  // News JSON Data --->
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

  return (
    <div>
      {/* Section Header */}
      <h3 className="text-lg text-primary dark:font-bold">
        --- News Feeds ---
      </h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
        Stay Updated with Vobon Manager
      </h1>
      {/* News Container */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#1b1b1b] rounded shadow hover:shadow-lg transition grid place-content-stretch cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <p className="text-base text-gray-500 dark:text-gray-300 mb-2 font-semibold">
                {item.date} | By {item.author}
              </p>
              <h3 className="text-xl dark:text-white font-semibold mb-2 tracking-widest">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-[#ececec] tracking-widest">
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
        ))}
      </div>
    </div>
  );
};

export default NewsFeeds;
