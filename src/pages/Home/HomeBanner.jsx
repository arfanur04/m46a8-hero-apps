import { Link } from "react-router";

const HomeBanner = () => {
	return (
		<div className="bg-[#f5f5f5] pt-12 lg:pt-24">
			<div className="max-w-7xl mx-auto w-11/12 flex flex-col items-center gap-6 text-center">
				<h1 className="lg:text-6xl text-3xl font-bold">
					We Build <br />
					<span className="text_gradient">Productive</span> Apps
				</h1>
				<p className="max-w-2xl mx-auto text_secondary">
					At HERO.IO, we craft innovative apps designed to make everyday life
					simpler, smarter, and more exciting.Our goal is to turn your ideas
					into digital experiences that truly make an impact.
				</p>
				<div>
					<Link
						to={"https://play.google.com"}
						className="btn mr-2"
						target="_blank"
					>
						<figure>
							<img
								className="w-6 h-6 mr-1 rounded-md"
								src="/assets/google-play.png"
								alt=""
							/>
						</figure>
						Google Play
					</Link>
					<Link
						to={"https://www.apple.com/app-store/"}
						target="_blank"
						className="btn"
					>
						<figure>
							<img
								className="w-6 h-6 mr-1 rounded-md"
								src="/assets/apple-store.png"
								alt=""
							/>
						</figure>
						App Store
					</Link>
				</div>
				<figure>
					<img
						src="/assets/hero.png"
						alt=""
					/>
				</figure>
			</div>
		</div>
	);
};

export default HomeBanner;
