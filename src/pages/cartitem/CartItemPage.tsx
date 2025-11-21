import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
	MinusIcon,
	PlusIcon,
	TrashIcon,
	UserIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Header from "../../components/layout/Header";
import type { CartItem } from "../../types/ApiDataTypes";

const initialPersonalItems: CartItem[] = [
	{
		id: "1",
		name: "유기농 사과",
		price: 8000,
		quantity: 2,
		imageUrl:
			"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
	},
	{
		id: "2",
		name: "통밀 식빵",
		price: 4500,
		quantity: 1,
		imageUrl:
			"https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
	},
];

const initialSharedItems: CartItem[] = [
	{
		id: "3",
		name: "아몬드 우유",
		price: 12500,
		quantity: 3,
		imageUrl:
			"https://images.unsplash.com/photo-1600788886242-5c96a98fdb33?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
	},
	{
		id: "4",
		name: "대용량 세제",
		price: 25000,
		quantity: 1,
		imageUrl:
			"https://images.unsplash.com/photo-1585832967913-98b93932381c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
	},
];

export default function CartItemPage() {
	// 현재 탭 상태 ( 공유 장바구니 & 개인 장바구니 )
	const [activeTab, setActiveTab] = useState<"personal" | "shared">("personal");

	// 장바구니 아이템 상태
	const [personalItems, setPersonalItems] =
		useState<CartItem[]>(initialPersonalItems);
	const [sharedItems, setSharedItems] =
		useState<CartItem[]>(initialSharedItems);

	// 선택된 아이템 ID 목록 상태
	const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

	// 현재 탭에 맞는 아이템 목록 가져오기
	const currentItems = activeTab === "personal" ? personalItems : sharedItems;
	const setCurrentItems =
		activeTab === "personal" ? setPersonalItems : setSharedItems;

	// 수량 변경 핸들러
	const handleQuantityChange = (id: string, change: number) => {
		setCurrentItems((prev) =>
			prev.map((item) => {
				if (item.id === id) {
					const newQuantity = Math.max(1, item.quantity + change);
					return { ...item, quantity: newQuantity };
				}
				return item;
			})
		);
	};

	// 아이템 삭제 핸들러
	const handleDelete = (id: string) => {
		setCurrentItems((prev) => prev.filter((item) => item.id !== id));
		// 삭제된 아이템 선택 해제
		if (selectedItems.has(id)) {
			const newSelected = new Set(selectedItems);
			newSelected.delete(id);
			setSelectedItems(newSelected);
		}
	};

	// 개별 선택 핸들러
	const handleSelect = (id: string) => {
		const newSelected = new Set(selectedItems);
		if (newSelected.has(id)) {
			newSelected.delete(id);
		} else {
			newSelected.add(id);
		}
		setSelectedItems(newSelected);
	};

	// 전체 선택 핸들러
	const handleSelectAll = () => {
		if (selectedItems.size === currentItems.length) {
			setSelectedItems(new Set());
		} else {
			setSelectedItems(new Set(currentItems.map((item) => item.id)));
		}
	};

	// 총 결제 금액 계산 (선택된 아이템만)
	const totalAmount = useMemo(() => {
		return currentItems
			.filter((item) => selectedItems.has(item.id))
			.reduce((sum, item) => sum + item.price * item.quantity, 0);
	}, [currentItems, selectedItems]);

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<Header />

			<main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<h2 className="text-3xl font-bold text-gray-900 mb-14">장바구니</h2>

				{/* 탭 전환 버튼 */}
				<div className="flex space-x-4 mb-8 border-b border-gray-200">
					<button
						onClick={() => {
							setActiveTab("personal");
							setSelectedItems(new Set()); // 탭 변경 시 선택 초기화
						}}
						className={`flex items-center pb-4 px-2 border-b-2 font-medium text-lg transition-colors ${
							activeTab === "personal"
								? "border-green-500 text-green-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}>
						<UserIcon className="w-5 h-5 mr-2" />
						개인 장바구니
					</button>
					<button
						onClick={() => {
							setActiveTab("shared");
							setSelectedItems(new Set()); // 탭 변경 시 선택 초기화
						}}
						className={`flex items-center pb-4 px-2 border-b-2 font-medium text-lg transition-colors ${
							activeTab === "shared"
								? "border-green-500 text-green-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}>
						<UsersIcon className="w-5 h-5 mr-2" />
						공유 장바구니
					</button>
				</div>

				{/* 장바구니 내용 */}
				<div className="flex flex-col lg:flex-row gap-8">
					{/* 왼쪽: 아이템 목록 */}
					<div className="flex-grow">
						{/* 전체 선택 헤더 */}
						<div className="bg-white p-4 rounded-t-xl border-b border-gray-100 flex items-center shadow-sm">
							<input
								type="checkbox"
								checked={
									currentItems.length > 0 &&
									selectedItems.size === currentItems.length
								}
								onChange={handleSelectAll}
								className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
							/>
							<span className="ml-3 text-sm font-medium text-gray-700">
								전체 선택 ({selectedItems.size}/{currentItems.length})
							</span>
						</div>

						{/* 아이템 리스트 */}
						<div className="bg-white rounded-b-xl shadow-sm divide-y divide-gray-100">
							{currentItems.length === 0 ? (
								<div className="p-12 text-center text-gray-500">
									장바구니에 담긴 상품이 없습니다.
								</div>
							) : (
								currentItems.map((item) => (
									<div key={item.id} className="p-6 flex items-center gap-6">
										{/* 체크박스 */}
										<input
											type="checkbox"
											checked={selectedItems.has(item.id)}
											onChange={() => handleSelect(item.id)}
											className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer flex-shrink-0"
										/>

										{/* 상품 이미지 */}
										<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
											<img
												src={item.imageUrl || ""}
												alt={item.name}
												className="h-full w-full object-cover object-center"
											/>
										</div>

										{/* 상품 정보 */}
										<div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between">
											<div className="mb-4 sm:mb-0">
												<h3 className="text-base font-medium text-gray-900">
													{item.name}
												</h3>
												<p className="mt-1 text-sm font-bold text-gray-900">
													{item.price.toLocaleString()}원
												</p>
											</div>

											{/* 수량 조절 및 삭제 */}
											<div className="flex items-center gap-6">
												<div className="flex items-center border border-gray-300 rounded-md">
													<button
														type="button"
														onClick={() => handleQuantityChange(item.id, -1)}
														className="p-2 text-gray-600 hover:bg-gray-50 rounded-l-md transition-colors">
														<MinusIcon className="w-4 h-4" />
													</button>
													<span className="px-4 py-1 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center">
														{item.quantity}
													</span>
													<button
														type="button"
														onClick={() => handleQuantityChange(item.id, 1)}
														className="p-2 text-gray-600 hover:bg-gray-50 rounded-r-md transition-colors">
														<PlusIcon className="w-4 h-4" />
													</button>
												</div>

												<button
													type="button"
													onClick={() => handleDelete(item.id)}
													className="text-gray-400 hover:text-red-500 transition-colors"
													aria-label="상품 삭제">
													<TrashIcon className="w-5 h-5" />
												</button>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>

					{/* 오른쪽 결제 정보 요약 */}
					<div className="w-full lg:w-80 flex-shrink-0">
						<div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
							<h3 className="text-lg font-bold text-gray-900 mb-6">
								결제 예정 금액
							</h3>

							<div className="space-y-4 border-b border-gray-200 pb-6 mb-6">
								<div className="flex justify-between text-sm text-gray-600">
									<span>총 상품 금액</span>
									<span>{totalAmount.toLocaleString()}원</span>
								</div>
								<div className="flex justify-between text-sm text-gray-600">
									<span>배송비</span>
									<span>0원</span>
								</div>
								<div className="flex justify-between text-sm text-gray-600">
									<span>세금</span>
									<span className="text-green-600">0원</span>
								</div>
							</div>

							<div className="flex justify-between items-center mb-6">
								<span className="text-base font-bold text-gray-900">
									총 결제금액
								</span>
								<span className="text-xl font-bold text-green-600">
									{totalAmount.toLocaleString()}원
								</span>
							</div>

							<Link
								to="/payment"
								className={`block w-full py-4 px-4 rounded-lg text-center font-bold text-white shadow-md transition-all transform active:scale-[0.98] ${
									selectedItems.size > 0
										? "bg-green-500 hover:bg-green-600 hover:shadow-lg"
										: "bg-gray-300 cursor-not-allowed"
								}`}
								onClick={(e) => {
									if (selectedItems.size === 0) e.preventDefault();
								}}>
								구매하기 ({selectedItems.size})
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
