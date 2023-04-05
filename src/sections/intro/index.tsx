import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";

const Intro: React.FC = () => {
	return (
		<Main>
			<Navbar />
		</Main>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
	${theme.mixins.section.padding}
	background: ${theme.background.lightgreen.primary};
	height: 90.8rem;
	display: flex;
	flex-direction: column;
`
);

export default Intro;
