import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MainPageCarousel() {
	const slideImage = [
		"bg-blue-500",
		"bg-black",
		"bg-yellow-400",
		"bg-red-500",
	];

	return (
		<div className="mb-10">
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				loop={true}
				className="h-60"
				autoplay={{ delay: 2500 }}
				pagination={{ clickable: true }}
				navigation={true}>
				{slideImage.map((color, index) => (
					<SwiperSlide key={index}>
						<div className={`w-full h-full ${color} rounded-lg`}></div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
