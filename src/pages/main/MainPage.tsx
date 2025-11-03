import Header from "../../components/layout/Header";
import Category from "../../components/layout/Category";
import Footer from "../../components/layout/Footer";
import MainPageCarousel from "../../components/swiper/MainPageCarousel.tsx";
import type { Product } from "../../types/ApiDataTypes";

// 상품 데이터 배열
const mockProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
	id: `product-${i + 1}`,
	name: "반포 자이",
	price: "15000원",
	imageUrl: null,
}));

export default function MainPage() {
	return (
		<>
			<Header />
			<Category />
			<main>
				<div className="mx-auto px-54 py-10">
					<MainPageCarousel />
				</div>

				<section className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-30">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">HOT</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
						{mockProducts.map((product) => (
							<div
								key={product.id}
								className="rounded-lg shadow-md overflow-hidden bg-white transition-transform hover:scale-105">
								{/* 이미지 영역: 초록색 플레이스홀더 */}
								<div className="w-full h-48 bg-green-100 flex items-center justify-center">
									<span className="text-sm text-green-600">
										이미지가 없습니다.
									</span>
								</div>
								{/* 텍스트 영역 */}
								<div className="p-4">
									<h3 className="text-lg font-semibold text-gray-800 truncate">
										{product.name}
									</h3>
									<p className="mt-1 text-gray-600">{product.price}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
