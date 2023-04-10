import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { motion_props } from "../../styles/mixins/motion_props";
import { device } from "../../styles/breakpoints";
import { scroller } from "react-scroll";

interface Props {
	destination: string;
}

const ButtonNavLogo: React.FC<Props> = ({ destination }) => {
	const logosrc = "../assets/logo/Logo.svg";
	const logotext = "Capture Studio";

	return (
		<Main
			{...motion_props}
			variants={_MotionVariants.Main}
			onClick={() => {
				scroller.scrollTo(destination, {
					duration: 1500,
					delay: 100,
					smooth: true,
				});
			}}
		>
			<ReactSVG src={logosrc} />
			<LogoText>{logotext}</LogoText>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  column-gap: 1rem;

	// &:hover {
	// 	cursor: pointer;
	// }
`
);

const LogoText = styled(motion.h1)(
	({ theme }) => `
	width: 0;

  font-weight: 500;
	font-size: 2rem;
	line-height: 100%;
	font-weight: 400;
	color: ${theme.color.orange.primary};

	opacity: 0;
	transition: opacity 0.3s ease;
	

	@media ${device.tablet} {
		opacity: 1;
		width: 100%;
	}
`
);

const _MotionVariants = {
	Main: {
		whileHover: {
			cursor: "pointer",
			filter: "backdrop(0 0 1rem black)",
		},
	},
};

export default ButtonNavLogo;
