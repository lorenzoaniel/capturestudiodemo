import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import Navbar from "../navbar";
import { RiFacebookFill, RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { device } from "../../styles/breakpoints";

const Footer: React.FC = () => {
	const theme: any = useTheme();

	return (
		<Main className="test">
			<Navbar fixed={false} />
			<Socials>
				<Copyright>
					{
						"© 2023 Capture Studio. All rights reserved. Developed And Modified By: Mikhail Lorenzo Aniel For Educational Purposes"
					}
				</Copyright>
				<SocialWrapper>
					<RiFacebookFill style={theme.icon.default} />
					<FiInstagram style={theme.icon.default} />
					<RiTwitterFill style={theme.icon.default} />
					<RiLinkedinBoxFill style={theme.icon.default} />
				</SocialWrapper>
			</Socials>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.section.paddingfooter}
  padding-bottom: 4.2rem;
  & nav {
    margin-bottom: 4rem;
  }
`
);

const Socials = styled(motion.div)(
	({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 4rem;
  padding-top: 3.4rem;
  border-top: 0.1rem solid ${theme.color.orange.primary};

  @media ${device.laptop} {
    flex-direction: row;
  }
`
);

const Copyright = styled(motion.div)(
	({ theme }) => `
  order: 2;
  color: ${theme.color.orange.primary};

  @media ${device.laptop} {
    order: 1;
  }
`
);

const SocialWrapper = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  justify-content: space-between;
  width: 13.5rem; 
  order: 1;

  & > svg:hover {
    transition: transform 0.3s ease;
    transform: scale(1.1);
  }

  & > svg:active {
    transition: transform 0.3s ease;
    transform: scale(1);
  }

  @media ${device.laptop} {
    order: 2;
  }
`
);

export default Footer;
