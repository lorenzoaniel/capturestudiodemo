import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonNav from "../buttons/ButtonNav";
import ButtonNavLogo from "../buttons/ButtonNavLogo";

const Navbar: React.FC = () => {
	return (
		<Main>
			<LogoSection>
				<ButtonNavLogo />
			</LogoSection>
			<MenuSection>
				<ButtonNav title={"Projects"} />
				<ButtonNav title={"Portraits"} />
				<ButtonNav title={"Contact"} />
			</MenuSection>
		</Main>
	);
};

const Main = styled(motion.nav)(
	({ theme }) => `
  height: 6.8rem;
  list-style: none;
  display: flex;
  column-gap: 0.5rem;
`
);

const LogoSection = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  flex: 2 1 fit-content;
  display: flex;
  justify-content: flex-start;
`
);

const MenuSection = styled(motion.div)(
	({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.6rem;
  flex: 1 1 fit-content;
`
);

export default Navbar;
