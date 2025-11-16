import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				Component: Home,
				index: true,
			},
			{
				path: "allApps",
				Component: AllApps,
			},
			{
				path: "installation",
				Component: Installation,
			},
		],
	},
]);

export default router;
