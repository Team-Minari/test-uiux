import {
	UserGroupIcon,
	CurrencyDollarIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function IntroducePage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* 메인 콘텐츠 영역 */}
			<main className="flex-grow w-full">
				{/* Hero Section */}
				<section className="relative bg-[#8d8175] py-32 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
					{/* 배경 그라데이션 효과 */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

					<div className="relative z-10 max-w-4xl mx-auto">
						<h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
							함께하면 더 가벼워지는
							<br />
							스마트한 장바구니, 공장
						</h1>
						<p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-12 max-w-2xl mx-auto">
							공장은 온라인 쇼핑을 더 즐겁고 효율적으로 만드는 공유 쇼핑
							플랫폼입니다. 가족, 친구, 이웃과 함께 장바구니를 공유하고 배송비를
							절약하며 새로운 쇼핑의 즐거움을 경험하세요.
						</p>
					</div>
				</section>

				{/* 콘텐츠 컨테이너 */}
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
					<section className="text-center max-w-3xl mx-auto">
						<span className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3 block">
							우리의 미션
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							쇼핑의 경계를 허물고
							<br />
							가치를 연결하다
						</h2>
						<p className="text-gray-600 leading-relaxed text-lg">
							우리는 단순히 물건을 사고파는 것을 넘어, 사람과 사람을 연결하는
							새로운 쇼핑 경험을 만듭니다. 혼자서는 부담스러웠던 쇼핑이
							함께함으로써 즐거운 일상이 되도록 돕습니다.
						</p>
					</section>

					<section className="text-center max-w-3xl mx-auto">
						<span className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3 block">
							우리의 비전
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							글로벌 No.1
							<br />
							협업 쇼핑 플랫폼
						</h2>
						<p className="text-gray-600 leading-relaxed text-lg">
							지역 사회를 기반으로 시작하여 전 세계 어디서나 누구나 쉽게
							협업하고 소통할 수 있는 글로벌 쇼핑 커뮤니티로 성장하는 것이
							우리의 목표입니다.
						</p>
					</section>

					<section>
						<div className="text-center mb-16">
							<span className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3 block">
								핵심 가치
							</span>
							<h2 className="text-3xl font-bold text-gray-900">
								우리가 지키는 약속
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
							<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
								<div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 mx-auto">
									<UserGroupIcon className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									함께하는 가치
								</h3>
								<p className="text-gray-600 leading-relaxed">
									개인의 이익보다 공동체의 상생을 중요하게 생각합니다. 함께
									나눌수록 더 커지는 쇼핑의 즐거움을 믿습니다.
								</p>
							</div>

							<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
								<div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 mx-auto">
									<CurrencyDollarIcon className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									합리적인 소비
								</h3>
								<p className="text-gray-600 leading-relaxed">
									배송비 절약, 대량 구매 할인 등 사용자가 체감할 수 있는
									실질적인 혜택과 경제적인 가치를 제공합니다.
								</p>
							</div>

							<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
								<div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 mx-auto">
									<ShieldCheckIcon className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									신뢰와 안전
								</h3>
								<p className="text-gray-600 leading-relaxed">
									투명한 거래 시스템과 철저한 개인정보 보호를 통해 누구나
									안심하고 이용할 수 있는 환경을 만듭니다.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
