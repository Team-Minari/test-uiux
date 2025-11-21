import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import type { CartItem } from "../../types/ApiDataTypes";

const cartItems: CartItem[] = [
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
		name: "곡물 빵",
		price: 4500,
		quantity: 1,
		imageUrl:
			"https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
	},
];

export default function PaymentPage() {
	const [paymentMethod, setPaymentMethod] = useState("credit-card");

	// 금액 계산
	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = 5000; // 고정 배송비
	const taxes = 0;
	const total = subtotal + shipping + taxes;

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			<main className="flex-grow w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold text-gray-900 mb-20">주문 확인</h2>

					<div className="bg-white shadow-sm rounded-lg overflow-hidden mb-20">
						{/* 상품 목록 섹션 */}
						<div className="p-6 border-b border-gray-200">
							<h3 className="text-lg font-bold text-gray-900 mb-4">상품</h3>
							<ul className="divide-y divide-gray-100">
								{cartItems.map((item) => (
									<li key={item.id} className="flex py-4">
										<div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
											<img
												src={item.imageUrl || ""}
												alt={item.name}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="ml-4 flex flex-1 flex-col justify-center">
											<div className="flex justify-between text-base font-medium text-gray-900">
												<h3>{item.name}</h3>
												<p className="font-bold ml-4">
													{(item.price * item.quantity).toLocaleString()}원
												</p>
											</div>
											<p className="mt-1 text-sm text-gray-500">
												수량: {item.quantity}개
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* 주문 내역 */}
						<div className="p-6 border-b border-gray-200 bg-white">
							<h3 className="text-lg font-bold text-gray-900 mb-4">주문</h3>
							<div className="space-y-2">
								<div className="flex justify-between text-sm text-gray-600">
									<p>상품 금액</p>
									<p>{subtotal.toLocaleString()}원</p>
								</div>
								<div className="flex justify-between text-sm text-gray-600">
									<p>배송비</p>
									<p>{shipping.toLocaleString()}원</p>
								</div>

								<div className="flex justify-between text-sm text-gray-600">
									<p>세금</p>
									<p>{taxes.toLocaleString()}원</p>
								</div>
								<div className="flex justify-between text-base font-bold text-gray-900 pt-4 border-t border-gray-200 mt-4">
									<p>총 결제 금액</p>
									<p>{total.toLocaleString()}원</p>
								</div>
							</div>
						</div>

						{/* 주소 입력 섹션 */}
						<div className="p-6 border-b border-gray-200">
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								배송지 정보
							</h3>
							<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div className="sm:col-span-6">
									<label
										htmlFor="address"
										className="block text-sm font-medium text-gray-700">
										주소
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="address"
											id="address"
											defaultValue="서울시 강남구 테헤란로 123"
											className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="detail-address"
										className="block text-sm font-medium text-gray-700">
										상세 주소
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="detail-address"
											id="detail-address"
											defaultValue="101동 101호"
											className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
										/>
									</div>
								</div>

								<div className="sm:col-span-3">
									<label
										htmlFor="zip"
										className="block text-sm font-medium text-gray-700">
										우편번호
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="zip"
											id="zip"
											defaultValue="12345"
											className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 border"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* 결제 수단 선택 섹션 */}
						<div className="p-6">
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								결제 수단
							</h3>
							<div className="space-y-4">
								<div
									className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
										paymentMethod === "credit-card"
											? "border-green-500 bg-green-50"
											: "border-gray-200 hover:bg-gray-50"
									}`}
									onClick={() => setPaymentMethod("credit-card")}>
									<input
										id="credit-card"
										name="payment-method"
										type="radio"
										checked={paymentMethod === "credit-card"}
										onChange={() => setPaymentMethod("credit-card")}
										className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
									/>
									<label
										htmlFor="credit-card"
										className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer w-full">
										신용카드
									</label>
								</div>
								<div
									className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
										paymentMethod === "paypal"
											? "border-green-500 bg-green-50"
											: "border-gray-200 hover:bg-gray-50"
									}`}
									onClick={() => setPaymentMethod("paypal")}>
									<input
										id="paypal"
										name="payment-method"
										type="radio"
										checked={paymentMethod === "paypal"}
										onChange={() => setPaymentMethod("paypal")}
										className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
									/>
									<label
										htmlFor="paypal"
										className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer w-full">
										카카오페이 / 네이버페이
									</label>
								</div>
							</div>
						</div>
					</div>

					{/* 주문하기 버튼 */}
					<button
						type="button"
						className="w-full bg-green-400 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors shadow-sm text-lg">
						{total.toLocaleString()}원 결제하기
					</button>
				</div>
			</main>

			<Footer />
		</div>
	);
}
