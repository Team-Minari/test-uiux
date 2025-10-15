import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function CategoryNav() {
	return (
		<div className="bg-white py-4 border-b">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-6">
				{/* Left: 카테고리 버튼 */}
				<button
					type="button"
					className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors">
					<Bars3Icon className="w-6 h-6" />
					<span>카테고리</span>
				</button>

				{/* 검색창 */}
				<div className="flex-grow max-w-2xl">
					<form className="flex items-center w-full border-2 border-green-500 rounded-md overflow-hidden">
						<div className="relative">
							<button
								type="button"
								className="flex items-center px-4 h-11 text-gray-700 bg-gray-50 border-r border-gray-300 whitespace-nowrap">
								<span className="font-semibold">전체</span>
								<ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" />
							</button>
						</div>
						<input
							type="search"
							placeholder="찾고 싶은 상품을 검색해보세요!"
							className="w-full h-11 px-4 text-gray-700 placeholder-gray-500 focus:outline-none"
						/>
						<button
							type="submit"
							aria-label="검색"
							className="p-3 text-white bg-green-500 hover:bg-green-600 h-11 flex items-center justify-center">
							<MagnifyingGlassIcon className="w-5 h-5" />
						</button>
					</form>
				</div>

				{/* 장바구니 버튼 */}
				<button
					type="button"
					aria-label="장바구니 보기"
					className="p-2 text-gray-600 hover:text-green-600 transition-colors">
					<ShoppingCartIcon className="w-8 h-8" />
				</button>
			</div>
		</div>
	);
}
