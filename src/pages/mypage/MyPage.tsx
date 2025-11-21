import {
	ChevronRightIcon,
	PencilIcon,
	ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useNavigate } from "react-router-dom";

// 프로필 이미지 (임시 URL)
const PROFILE_IMAGE_URL =
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

export default function MyPage() {
	const navigate = useNavigate();

	// 페이지 이동 핸들러 함수
	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* 메인 콘텐츠 영역 */}
			<main className="flex-grow w-full bg-white py-32 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					{/* 프로필 섹션 */}
					<div className="flex flex-col items-center justify-center mb-24">
						<div className="relative">
							<img
								className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-sm"
								src={PROFILE_IMAGE_URL}
								alt="프로필 이미지"
							/>
							<button
								type="button"
								className="absolute bottom-0 right-0 bg-green-500 p-1.5 rounded-full text-white hover:bg-green-600 transition-colors shadow-sm"
								aria-label="프로필 수정">
								<PencilIcon className="h-4 w-4" />
							</button>
						</div>
						<h3 className="mt-4 text-xl font-bold text-gray-900">카리나</h3>
						<p className="text-sm text-gray-500">prettier@email.com</p>
					</div>

					{/* 메뉴 섹션 - Account */}
					<div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
						<div className="px-6 py-4 border-b border-gray-100">
							<h4 className="text-sm font-bold text-gray-900">Account</h4>
						</div>
						<div className="divide-y divide-gray-100">
							<button
								className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left"
								onClick={() => handleNavigate("/introduce")}>
								<span className="text-sm font-medium text-gray-700">
									회사 소개
								</span>
								<ChevronRightIcon className="h-4 w-4 text-gray-400" />
							</button>
							<button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left">
								<span
									className="text-sm font-medium text-gray-700"
									onClick={() => handleNavigate("/cart")}>
									공유 장바구니 관리
								</span>
								<ChevronRightIcon className="h-4 w-4 text-gray-400" />
							</button>
							<button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left">
								<span className="text-sm font-medium text-gray-700">
									프로필 수정
								</span>
								<ChevronRightIcon className="h-4 w-4 text-gray-400" />
							</button>
						</div>
					</div>

					{/* 메뉴 섹션 - Settings */}
					<div className="bg-white rounded-xl shadow-sm overflow-hidden">
						<div className="px-6 py-4 border-b border-gray-100">
							<h4 className="text-sm font-bold text-gray-900">Settings</h4>
						</div>
						<div className="divide-y divide-gray-100">
							<button className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-left">
								<span className="text-sm font-medium text-gray-700">
									환경설정
								</span>
								<ChevronRightIcon className="h-4 w-4 text-gray-400" />
							</button>
							<button className="w-full flex items-center justify-between px-6 py-4 hover:bg-red-50 transition-colors text-left group">
								<span className="text-sm font-medium text-red-500 group-hover:text-red-600">
									로그아웃
								</span>
								<ArrowRightStartOnRectangleIcon className="h-5 w-5 text-red-400 group-hover:text-red-500" />
							</button>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
