import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonNav from "../buttons/ButtonNav";
import ButtonNavLogo from "../buttons/ButtonNavLogo";
import { device } from "../../styles/breakpoints";

interface Props {
	fixed: boolean;
}

const Navbar: React.FC<Props> = ({ fixed }) => {
	return (
		<Main fixed={fixed}>
			<LogoSection>
				<ButtonNavLogo destination={"intro"} />
			</LogoSection>
			<MenuSection>
				<ButtonNav title={"Projects"} destination={"projects"} />
				<ButtonNav title={"Portraits"} destination={"portraits"} />
				<ButtonNav title={"Contact"} destination={"contact"} />
			</MenuSection>
		</Main>
	);
};

const Main = styled(motion.nav)<Props>(
	({ theme, fixed }) => `
	${
		fixed
			? `
			width: 100%;
			left: 0;
			padding: 0 1rem;
			@media ${device.laptop} {
				width: 70%;
				left: auto;
				padding: 0;
			}`
			: ""
	}
	position: ${fixed ? "fixed" : "static"};
  height: 6.8rem;
  list-style: none;
  display: flex;
  column-gap: 0.5rem;
	backdrop-filter: blur(1rem);
`
);

const LogoSection = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  flex: 4 1 fit-content; // matches hero proportion
  display: flex;
  justify-content: flex-start;
`
);

const MenuSection = styled(motion.div)(
	({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 fit-content; // matches hero proportion
`
);

export default Navbar;
