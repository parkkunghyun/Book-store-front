import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";

const Recommend = () => {
    const {data, isLoading, error } = useFetchAllBooksQuery()
    const books = data?.book || [];

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong...</div>;

  return (
    <div className="py-16">
         <h2 className="text-3xl font-semibold mb-6">Recommended</h2>
        <Swiper
            slidesPerView={1} // 기본 보여줄 슬라이드 개수 = 1개
            spaceBetween={30} // 슬라이드 사이 간격 = 30px
            navigation={true} // 좌우 버튼 활성화(화살표 버튼)
            breakpoints={{ // 반응형 설정
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1180: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                }
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
            {
                books.length > 0 && books.slice(8, 18).map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard  book={book} />
                    </SwiperSlide>
                ))
            }
            </Swiper>
    </div>
  )
}

export default Recommend