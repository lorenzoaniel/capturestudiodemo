import { motion } from "framer-motion";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { device } from "../../styles/breakpoints";
import { useAppSelector } from "../../redux/hooks";
import { selectContactInfo } from "../../redux/features/contactSlice";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import Footer from "../../components/footer";
import DefaultModal from "../../components/Modal/DefaultModal";
import DefaultForm from "../../components/form";

const Contact: React.FC = () => {
	const [toggle, setToggle] = useState(false);
	const contactInfo = useAppSelector(selectContactInfo);
	const theme: any = useTheme();

	const toggleModal = () => {
		setToggle((curr) => !curr);
	};

	return (
		<Main id={"contact"}>
			<ContactSection>
				<Title>{contactInfo.main.title}</Title>
				<Desc>{contactInfo.main.desc}</Desc>
				<ButtonPrimary
					variant={theme.variant.btn.cnt}
					title={"Contact us"}
					handleClick={() => toggleModal()}
				/>
				<DefaultModal
					data={
						<>
							<DefaultForm />
						</>
					}
					title={"Contact Us"}
					toggle={toggle}
					toggleHandle={() => toggleModal()}
				/>
			</ContactSection>
			<FooterSection>
				<Footer />
			</FooterSection>
		</Main>
	);
};

const Main = styled(motion.section)(
	({ theme }) => `
  background: ${theme.background.darkgreen};
  height: fit-content;
`
);

const ContactSection = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.section.padding}
  ${theme.mixins.flex.cntrcol}
  padding: 12rem 0;
`
);

const Title = styled(motion.h2)(
	({ theme }) => `
  max-width: 67.4rem;
  margin: 0;
  margin-bottom: 2.4rem;
  text-align: center;

  font-weight: 500;
  font-size: 5rem;
  line-height: 105%;
  letter-spacing: -0.02em;
  color: ${theme.color.orange.primary};

  @media ${device.laptop} {
    font-size: 10rem;
  }
`
);

const Desc = styled(motion.h3)(
	({ theme }) => `
  max-width: 68rem;
  margin-bottom: 5.6rem;
  padding: 0 4rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  color: ${theme.color.orange.primary};
`
);

const FooterSection = styled(motion.section)(
	({ theme }) => `
  padding: "padding: 0 7.5%;",

`
);

export default Contact;
