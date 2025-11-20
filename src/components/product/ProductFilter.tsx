import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ProductFilter() {
	// 카테고리 섹션 상태
	const [isCategoryOpen, setIsCategoryOpen] = useState(true);

	// 선택된 카테고리 인덱스 상태
	// 초기에는 전체 카테고리에 체크되어 있게
	const [selectedCategories, setSelectedCategories] = useState<Set<number>>(
		new Set([0])
	);

	// 카테고리
	const categories = [
		"전체",
		"패션의류/잡화",
		"식품",
		"생활용품",
		"가전디지털",
		"뷰티",
		"홈인테리어",
		"출산/유아동",
		"스포츠/레저",
		"주방용품",
		"완구/취미",
		"자동차용품",
		"반려동물용품",
		"문구/오피스",
		"헬스/건강식품",
		"도서/음반/DVD",
		"혜택/서비스",
	];

	// 카테고리 섹션 토글 핸들러
	const toggleCategorySection = () => {
		setIsCategoryOpen((prev) => !prev);
	};

	// 체크박스 변경 핸들러
	const handleCategoryChange = (index: number) => {
		setSelectedCategories((prev) => {
			const newSet = new Set(prev);

			// 전체를 선택한 경우
			if (index === 0) {
				// 다른 모든 선택을 해제하고 전체만 선택
				return new Set([0]);
			}

			// 다른 카테고리를 선택한 경우
			if (newSet.has(index)) {
				newSet.delete(index); // 이미 선택된 항목이면 해제
			} else {
				newSet.add(index); // 선택되지 않은 항목이면 추가
			}

			// 전체가 선택되어 있었다면 해제
			if (newSet.has(0)) {
				newSet.delete(0);
			}

			// 모든 선택이 해제된 경우 자동으로 전체 선택
			if (newSet.size === 0) {
				return new Set([0]);
			}

			return newSet;
		});
	};

	// 초기화 버튼 핸들러
	const handleReset = () => {
		setSelectedCategories(new Set([0])); // 초기화 시 '전체'만 선택
	};

	return (
		<div className="w-full lg:w-64 flex-shrink-0 lg:pr-8">
			{/* 상단 필터 타이틀 및 초기화 버튼 */}
			<div className="flex items-center justify-between pb-4 border-b border-gray-200">
				<h3 className="text-lg font-bold text-gray-900">필터</h3>
				<button
					type="button"
					onClick={handleReset}
					className="text-sm text-gray-500 hover:text-gray-700">
					초기화
				</button>
			</div>

			{/* 카테고리 필터 섹션 */}
			<div className="py-6 border-gray-200">
				{/* 섹션 헤더 (클릭 시 토글) */}
				<div
					className="flex items-center justify-between cursor-pointer select-none"
					onClick={toggleCategorySection}>
					<h4 className="text-base font-bold text-gray-900">카테고리</h4>
					{isCategoryOpen ? (
						<ChevronUpIcon className="w-5 h-5 text-gray-500" />
					) : (
						<ChevronDownIcon className="w-5 h-5 text-gray-500" />
					)}
				</div>

				{/* 카테고리 목록 (isCategoryOpen 상태에 따라 표시 여부 결정) */}
				{isCategoryOpen && (
					<div className="mt-4 space-y-3">
						{categories.map((category, index) => (
							<div key={category} className="flex items-center">
								<input
									id={`category-${index}`}
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
									checked={selectedCategories.has(index)}
									onChange={() => handleCategoryChange(index)}
								/>
								<label
									htmlFor={`category-${index}`}
									className="ml-3 text-sm text-gray-600 cursor-pointer select-none">
									{category}
								</label>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
