const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Destination = require("./Models/destinationsSchema");
const Package = require("./Models/packagesSchema");

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");


    await Destination.deleteMany();
    await Package.deleteMany();


    await Destination.insertMany([
      { name: "Jammu & Kashmir", price: 4999, image: "jammu.jpg" },
      { name: "Himachal Pradesh", price: 4999, image: "himachal.jpg" },
      { name: "Goa", price: 4999, image: "goa.jpg" },
      { name: "Assam", price: 4999, image: "assam.jpg" },
      { name: "Maharashtra", price: 4999, image: "maharashtra.jpg" },
      { name: "Kerala", price: 4999, image: "kerala.jpg" },
    ]);


    await Package.insertMany([
      {
        name: "Golden Temple Tour",
        price: 8500,
        duration: "3 Days",
        image: "golden-temple.jpg",
        sales: 1250,
      },
      {
        name: "Amazing Kerala Tour",
        price: 15000,
        duration: "5 Days",
        image: "amazing-kerala.jpg",
        sales: 1100,
      },
      {
        name: "Kashmir Holiday Tour",
        price: 13500,
        duration: "4 Days",
        image: "kashmir-holiday.jpg",
        sales: 1300,
      },
      {
        name: "Rajasthan Tour",
        price: 600,
        duration: "5 Days",
        image: "rajasthan.jpg",
        sales: 280,
      },
      {
        name: "Trip to Goa",
        price: 10000,
        duration: "3 Days",
        image: "trip-goa.jpg",
        sales: 1600,
      },
      {
        name: "Nainital Escape",
        price: 13000,
        duration: "3 Days",
        image: "nainital.jpg",
        sales: 1020,
      },
      {
        name: "Andaman Island Tour",
        price: 18000,
        duration: "6 Days",
        image: "andaman.jpg",
        sales: 890,
      },
      {
        name: "Sikkim Scenic Tour",
        price: 16000,
        duration: "5 Days",
        image: "sikkim.jpg",
        sales: 780,
      },
    ]);

    console.log("✅ Seed data inserted for destinations and packages");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.disconnect();
  }
};

seedData();
