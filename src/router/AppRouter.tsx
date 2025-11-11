import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route index element={<MainPage />} />
		</Route>
	)
);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
