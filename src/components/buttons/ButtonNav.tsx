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
  padding: 0.2rem 1rem;
`
);

const _MotionVariants = (theme: any) => {
	return {
		Main: {
			initial: {
				border: `0.1rem solid rgba(252, 67, 8, 0)`,
				borderRadius: `0.3rem`,
			},
			whileHover: {
				border: `0.1rem solid rgba(252, 67, 8, 1)`,
				borderRadius: `0.3rem`,
				transition: {
					ease: "easeInOut",
				},
			},
		},
	};
};

export default ButtonNav;
