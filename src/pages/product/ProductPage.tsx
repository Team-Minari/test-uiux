import {
	AdjustmentsHorizontalIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Header from "../../components/layout/Header";
import Category from "../../components/layout/Category";
import Footer from "../../components/layout/Footer";
import ProductFilter from "../../components/product/ProductFilter";
import type { Product } from "../../types/ApiDataTypes";
import Pagination from "../../components/pagination/Pagination.tsx";

// 상품 데이터 배열
const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
	id: `product-${i + 1}`,
	name: "반포 자이 아파트",
	price: 15000,
	imageUrl: null,
}));

export default function ProductPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Category />

			<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
				{/* 페이지 타이틀 및 정렬 옵션 */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-gray-200 mb-8">
					<h2 className="text-2xl font-bold text-gray-900">상품 목록</h2>
					<div className="flex items-center mt-4 sm:mt-0 space-x-4">
						{/* 모바일용 필터 버튼 */}
						<button
							type="button"
							className="lg:hidden flex items-center text-gray-700 hover:text-gray-900">
							<AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
							필터
						</button>

						<span className="text-sm text-gray-500">총 124개의 상품</span>

						{/* 정렬 드롭다운 */}
						<div className="relative">
							<button
								type="button"
								className="flex items-center text-sm text-gray-700 hover:text-gray-900 font-semibold">
								추천순
								<ChevronDownIcon className="w-4 h-4 ml-1" />
							</button>
						</div>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row">
					{/* 왼쪽 필터 사이드바 */}
					<div className="hidden lg:block">
						<ProductFilter />
					</div>

					{/* 오른쪽 상품 목록 영역 */}
					<div className="flex-1 lg:pl-8 mt-8 lg:mt-0">
						{/* 상품 그리드 */}
						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{mockProducts.map((product) => (
								<div
									key={product.id}
									className="rounded-lg shadow-md overflow-hidden bg-white transition-transform hover:scale-105">
									{/* 이미지 영역 */}
									<div className="w-full h-48 bg-green-100 flex items-center justify-center relative">
										<span className="text-sm text-green-600">
											이미지가 없습니다.
										</span>
										{/* 찜하기 버튼 */}
										<button className="absolute top-2 right-2 p-1.5 bg-white rounded-full text-gray-400 hover:text-red-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-5 h-5">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
												/>
											</svg>
										</button>
									</div>
									{/* 텍스트 영역 */}
									<div className="p-4">
										<h3 className="text-lg font-semibold text-gray-800 truncate">
											{product.name}
										</h3>
										<p className="mt-1 text-lg font-bold text-gray-900">
											{product.price}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* 페이지네이션 */}
						<div className="mt-12 flex justify-center items-center py-4 border-gray-200">
							<Pagination />
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
