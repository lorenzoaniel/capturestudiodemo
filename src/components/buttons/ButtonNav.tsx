import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import { motion_props } from "../../styles/mixins/motion_props";

interface Props {
	title: string;
}

const ButtonNav: React.FC<Props> = ({ title }) => {
	const theme = useTheme();

	return (
		<Main {...motion_props} variants={_MotionVariants(theme).Main}>
			{title}
		</Main>
	);
};

const Main = styled(motion.button)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  ${theme.font.navbutton}
  height: 3.8rem;
  flex: 0 1 fit-content;
  padding: 0.8rem 1.6rem 0.1rem;
`
);

const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {
				border: `0.1rem solid transparent`,
				borderRadius: `0.3rem`,
			},
			whileHover: {
				border: `0.1rem solid ${theme.color.orange.primary}`,
				borderRadius: `0.3rem`,
			},
		},
	};
};

export default ButtonNav;
