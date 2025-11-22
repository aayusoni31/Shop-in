import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/17245493/pexels-photo-17245493.jpeg",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/22065643/pexels-photo-22065643.jpeg",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/17243507/pexels-photo-17243507.jpeg",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/19806534/pexels-photo-19806534.jpeg",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/7621369/pexels-photo-7621369.jpeg",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/5880141/pexels-photo-5880141.jpeg",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 100,
    images: [
      {
        url: "https://images.pexels.com/photos/15647633/pexels-photo-15647633.jpeg",
      },
    ],
  },
];
const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* best seller section  */}
      <h2 className="text-3xl text-center font-bold mb-4">Best seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wear for Men & Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
