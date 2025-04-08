import { useState } from "react";
import BookCard from "../books/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";

const TopSellers = () => {
  const { data, isLoading, error } = useFetchAllBooksQuery();
  const books = data?.book || [];

  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  console.log(books);
  
  const categories = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
  ];

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border bg-[#EAEAEA] px-4 py-2 focus:outline-none rounded-md border-gray-300"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        ) : (
          <div>해당 카테고리 책 없음</div>
        )}
      </Swiper>
    </div>
  );
};

export default TopSellers;
