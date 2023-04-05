import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { motion_props } from "../../styles/mixins/motion_props";

const ButtonNavLogo: React.FC = () => {
	const logosrc = "./public/assets/logo/Logo.svg";
	const logotext = "Capture Studio";

	return (
		<Main>
			<ReactSVG src={logosrc} />
			<LogoText>{logotext}</LogoText>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  column-gap: 1rem;
`
);

const LogoText = styled(motion.h1)(
	({ theme }) => `
  ${theme.font.navlogo}
`
);

// const _MotionVariants = {
// 	LogoText: {
// 		exit: {
// 			transition: {
// 				duration: 0.5,
// 				ease: "easeInOut",
// 			},
// 		},
// 	},
// };
// {...motion_props} variants={_MotionVariants.LogoText}
export default ButtonNavLogo;
