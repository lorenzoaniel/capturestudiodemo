import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Gallery from "../../components/gallery";

const Projects = () => {
	const projectsrc = [
		"../assets/images/projects/aishapatel.jpg",
		"../assets/images/projects/fatimahassan.jpg",
		"../assets/images/projects/isabellacosta.jpg",
	];
	return (
		<Main>
			<Gallery imgsrc={projectsrc} />
		</Main>
	);
};

const Main = styled(motion.section)(
	({ theme }) => `
  background: ${theme.background.darkgreen};
  height: 98.4rem;
`
);

export default Projects;
