import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function LoginPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* 메인 콘텐츠 영역 */}
			<main className="flex-grow flex items-center justify-center w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-10 bg-white p-8 rounded-xl shadow-md">
					{/* 페이지 타이틀 */}
					<div className="text-center">
						<h2 className="mt-2 text-3xl font-bold text-gray-900">로그인</h2>
						<p className="mt-2 text-sm text-gray-600">
							서비스 이용을 위해 로그인이 필요합니다.
						</p>
					</div>

					{/* 로그인 폼 */}
					<form className="mt-8 space-y-6">
						<div className="rounded-md shadow-sm -space-y-px">
							{/* 이메일 입력 */}
							<div>
								<label htmlFor="email-address" className="sr-only">
									이메일
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
									placeholder="이메일을 입력해주세요"
								/>
							</div>
							{/* 비밀번호 입력 */}
							<div>
								<label htmlFor="password" className="sr-only">
									비밀번호
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
									placeholder="비밀번호를 입력해주세요"
								/>
							</div>
						</div>

						{/* 아이디 저장 및 비밀번호 찾기 */}
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900">
									아이디 저장
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-green-600 hover:text-green-500">
									비밀번호를 잊으셨나요?
								</a>
							</div>
						</div>

						{/* 로그인 버튼 */}
						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
								로그인
							</button>
						</div>
					</form>

					{/* 회원가입 링크 */}
					<div className="text-center mt-4">
						<span className="text-sm text-gray-600">
							아직 계정이 없으신가요?{" "}
						</span>
						<Link
							to="/signup"
							className="font-medium text-sm text-green-600 hover:text-green-500 hover:underline">
							회원가입
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
