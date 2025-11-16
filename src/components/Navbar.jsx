import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
	const navLinkClass = ({ isActive }) =>
		["mx-2 px-0 hover:bg-white active:bg-white", isActive ? "active" : ""].join(
			" "
		);

	const links = (
		<>
			<li>
				<NavLink
					className={navLinkClass}
					to={"/"}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={navLinkClass}
					to={"/allApps"}
				>
					Apps
				</NavLink>
			</li>
			<li>
				<NavLink
					className={navLinkClass}
					to={"/installation"}
				>
					Installation
				</NavLink>
			</li>
		</>
	);

	return (
		<div className="bg-white shadow-sm">
			<nav className="w-11/12 p-0 mx-auto navbar max-w-7xl">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="w-auto p-2 mt-3 font-bold shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1"
						>
							{links}
						</ul>
					</div>
					<Link
						to={"/"}
						className="flex items-center font-bold lg:text-xl gradient_text group"
					>
						<img
							className="w-8 ml-2 mr-2 lg:ml-0"
							src="/assets/logo.png"
							alt=""
						/>
						HERO.IO
					</Link>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 font-bold menu menu-horizontal">{links}</ul>
				</div>
				<div className="navbar-end">
					<Link
						to={"https://github.com/arfanur04"}
						target="_blank"
						className="btn gradient_bg hover:bg-red-500"
					>
						<FaGithub className="text-lg" />
						Contribute
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
