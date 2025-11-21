import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import ProductPage from "../pages/product/ProductPage.tsx";
import LoginPage from "../pages/login/LoginPage.tsx";
import MyPage from "../pages/mypage/MyPage.tsx";
import IntroducePage from "../pages/introduce/IntroducePage.tsx";
import PaymentPage from "../pages/payment/PaymentPage.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<MainPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="introduce" element={<IntroducePage />} />
			<Route path="mypage" element={<MyPage />} />
			<Route path="products" element={<ProductPage />} />
			<Route path="products/payment" element={<PaymentPage />} />
		</Route>
	)
);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
