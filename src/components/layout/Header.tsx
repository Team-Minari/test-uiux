import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	// 페이지 이동 핸들러 함수
	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<header className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
				<button
					type="button"
					className="text-2xl font-bold text-green-500"
					onClick={() => handleNavigate("/")}>
					GongJang
				</button>

				<nav className="flex items-center space-x-6">
					<button
						type="button"
						className="text-sm text-gray-600 hover:text-gray-800"
						onClick={() => handleNavigate("/login")}>
						로그인
					</button>

					<button
						type="button"
						className="text-sm text-gray-600 hover:text-gray-800"
						onClick={() => handleNavigate("/products")}>
						상품목록
					</button>

					<button
						type="button"
						className="text-sm text-gray-600 hover:text-gray-800"
						onClick={() => handleNavigate("/mypage")}>
						마이페이지
					</button>
				</nav>
			</div>
		</header>
	);
}
