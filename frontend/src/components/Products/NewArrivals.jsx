import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiSpeaker } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  //   to check container can be scroll or not below
  const [isDragging, setIsDragging] = useState(false);
  //   startting axix of scroll
  const [startX, setStartX] = useState(0);
  //   initial scroll pos of container
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  //   to determine if can scroll right
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/4820222/pexels-photo-4820222.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/5961259/pexels-photo-5961259.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/16821746/pexels-photo-16821746.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/7682122/pexels-photo-7682122.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/19989286/pexels-photo-19989286.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/6000119/pexels-photo-6000119.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/34704489/pexels-photo-34704489.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylist Jacket",
      price: 120,
      images: [
        {
          url: "https://images.pexels.com/photos/18866330/pexels-photo-18866330.jpeg",
          altText: "Stylist Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollWidth > leftScroll + container.clientWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative ">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway,freshly added to
          your wardrobe on the cutting edge of fashion.
        </p>
        {/* scroll buttons  */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* scrollable content  */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              className="w-full h-[450px] object-cover rounded-lg"
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              draggable={false}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/products/${product._id}`}>
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
