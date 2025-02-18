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
    // {
    //   id: 4,
    //   title: "How to Save Money on Your Monthly Rent",
    //   image:
    //     "https://i.pinimg.com/originals/05/08/0e/05080e9f303b26bb4917f8f30360be87.jpg",
    //   date: "2025-02-05",
    //   content:
    //     "Looking to save on your rent? Check out these practical tips to reduce your monthly rental expenses without compromising your lifestyle...",
    //   author: "Finance Team",
    //   tags: ["Finance", "Rent Saving", "Tips"],
    // },
    // {
    //   id: 5,
    //   title: "New Apartment Listings: February 2025 Edition",
    //   image:
    //     "https://i.pinimg.com/originals/05/08/0e/05080e9f303b26bb4917f8f30360be87.jpg",
    //   date: "2025-02-01",
    //   content:
    //     "Check out the latest apartments available for rent this month. Explore listings, pricing, and more in our February 2025 edition...",
    //   author: "Listings Team",
    //   tags: ["New Listings", "Rentals", "Monthly Update"],
    // },
  ];

  return (
    <div>
      {/* Section Header */}
      <h3 className="text-lg text-primary">--- News Feeds ---</h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold">
        Stay Updated with Vobon Manager
      </h1>
      {/* News Container */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow hover:shadow-lg transition grid place-content-stretch cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <p className="text-base text-gray-500 mb-2 font-semibold">
                {item.date} | By {item.author}
              </p>
              <h3 className="text-xl font-semibold mb-2 tracking-widest">
                {item.title}
              </h3>
              <p className="text-gray-600 tracking-widest">{item.content}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-100/80 text-primary font-semibold px-3 py-1 rounded-full"
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
