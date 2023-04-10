import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import Gallery from "../../components/gallery";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { useAppDispatch } from "../../redux/hooks";
import { modalToggle } from "../../redux/features/gallerySlice";

const Projects: React.FC = () => {
	const dispatch = useAppDispatch();
	const theme: any = useTheme();

	return (
		<Main id={"projects"}>
			<Title>{"Our Work"}</Title>
			<Gallery />
			<ButtonPrimary
				variant={theme.variant.btn.prj}
				title={"View all work"}
				handleClick={() => dispatch(modalToggle())}
			/>
		</Main>
	);
};

const Main = styled(motion.section)(
	({ theme }) => `
  ${theme.mixins.section.padding}
  ${theme.mixins.flex.cntrcol}
  background: ${theme.background.darkgreen};
  height: fit-content;
  padding-top: 8rem; // to prevent mixin clash
  padding-bottom: 8rem; // to prevent mixin clash
  row-gap: 8rem;
`
);

const Title = styled(motion.h2)(
	({ theme }) => `
  align-self: flex-start;

  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${theme.color.orange.primary};
`
);

export default Projects;
