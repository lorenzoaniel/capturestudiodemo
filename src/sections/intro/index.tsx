import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import { device } from "../../styles/breakpoints";

const Intro: React.FC = () => {
	const herotitle = "We Capture the World";
	const herodesc =
		"At our studio, we don't just take pictures - we capture the world. Our passion for photography goes beyond just snapping a photo - we strive to create images that tell a story, evoke emotions, and capture the essence of the world around us.";
	return (
		<Main>
			<Navbar />
			<Hero title={herotitle} desc={herodesc} />
		</Main>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
	${theme.mixins.section.padding}
	background: ${theme.background.lightgreen.primary};
	height: fit-content;
	display: flex;
	flex-direction: column;
`
);

export default Intro;
