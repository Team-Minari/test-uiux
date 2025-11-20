import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import ProductPage from "../pages/product/ProductPage.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<MainPage />} />
			<Route path="productpage" element={<ProductPage />} />
		</Route>
	)
);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
