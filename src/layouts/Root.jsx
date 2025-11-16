import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Root = () => {
	const navigation = useNavigation();

	return (
		<div className="scroll_stable">
			<Navbar />
			<main>
				{navigation.state === "loading" ? (
					<>
						<Loader />
					</>
				) : (
					<Outlet />
				)}
			</main>
			<Footer />
		</div>
	);
};

export default Root;
