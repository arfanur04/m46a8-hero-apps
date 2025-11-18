import "./HomeStates.css";

const HomeStates = () => {
	return (
		<div className="py-12 bg_gradient lg:py-24 home_state">
			<div className="w-11/12 mx-auto max-w-7xl">
				<header>
					<h2 className="lg:text-5xl text-3xl font-bold text-center max-w-[80%] mx-auto mb-10">
						Trusted By Millions, Built For You
					</h2>
				</header>
				<main className="w-full justify-evenly stats stats-vertical lg:stats-horizontal text-center">
					<div className="stat">
						<div className="stat-title">Total Downloads</div>
						<div className="stat-value">29.6M</div>
						<div className="stat-desc">21% More Than Last Month</div>
					</div>

					<div className="stat">
						<div className="stat-title">Total Reviews</div>
						<div className="stat-value">906K</div>
						<div className="stat-desc">46% More Than Last Month</div>
					</div>

					<div className="stat">
						<div className="stat-title">Active Apps</div>
						<div className="stat-value">132+</div>
						<div className="stat-desc">31 More Will Launch</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default HomeStates;
