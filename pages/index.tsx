import About from "@/components/About";
import BecomeCreator from "@/components/BecomeCreator";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PopularNft from "@/components/PopularNft";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<Nav />
			<Hero />
			<About />
			<BecomeCreator />
			<PopularNft />
		</div>
	);
};

export default HomePage;
