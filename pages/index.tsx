import About from "@/components/About";
import BecomeCreator from "@/components/BecomeCreator";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<Nav />
			<Hero />
			<About />
			<BecomeCreator />
		</div>
	);
};

export default HomePage;
