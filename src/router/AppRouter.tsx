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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<MainPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="mypage" element={<MyPage />} />
			<Route path="products" element={<ProductPage />} />
		</Route>
	)
);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
