import { motion } from "framer-motion";
import React, { Suspense, useState } from "react";
import { useImage } from "react-image";
import styled, { useTheme } from "styled-components";
import { device } from "../../styles/breakpoints";
import { IoMdPlay } from "react-icons/io";
import { motion_props } from "../../styles/mixins/motion_props";
import DefaultModal from "../Modal/DefaultModal";

interface Props {
	title: string;
	desc: string;
}

const Hero: React.FC<Props> = ({ title, desc }) => {
	const [toggle, setToggle] = useState(false);
	const theme: any = useTheme();
	const { src } = useImage({
		srcList: "../assets/images/intro/introimg.png",
	});

	const toggleModal = () => {
		setToggle((curr) => !curr);
	};

	return (
		<Main>
			<Content>
				<Title>{title}</Title>
				<Desc>{desc}</Desc>
				<Icon onClick={() => toggleModal()} {...motion_props} variants={theme.motion.btn.default}>
					<IoMdPlay style={{ height: "2.8rem", width: "2.8rem" }} />
				</Icon>
			</Content>
			<Suspense>
				<ImgSection>
					<img src={src} alt="Intro image" />
				</ImgSection>
			</Suspense>
			<DefaultModal
				data={[
					<div key={"../assets/video/intro/introsample.mp4"}>
						<video controls style={{ width: "90vmin", height: "90vmin" }}>
							<source src="../assets/video/intro/introsample.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>,
				]}
				title={"Sample Video"}
				toggle={toggle}
				toggleHandle={() => toggleModal()}
			/>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  margin-top: 7.4rem;
	column-gap: 5rem;
  flex: 1 1;
  padding: 8rem 0rem;
  flex-direction: column;
  row-gap: 8rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`
);

const ImgSection = styled(motion.section)(
	({ theme }) => `
	${theme.mixins.flex.cntrcol}
  flex: 2 1 fit-content; // matches navbar proportion

  & img {
    width: 100%;
  }

  @media ${device.laptop} {
    font-size: 10rem;
  }
`
);

const Content = styled(motion.section)(
	({ theme }) => `
	${theme.mixins.flex.cntrcol}
  flex: 5 1 fit-content; // matches navbar proportion
  align-items: flex-start;
  row-gap: 2.4rem;
`
);

const Title = styled(motion.h1)(
	({ theme }) => `
  max-width: 68rem;
  margin: 0;

  font-weight: 500;
  font-size: 5rem;
  line-height: 105%;
  color: ${theme.color.orange.primary};

  @media ${device.laptop} {
    font-size: 10rem;
  }
`
);

const Desc = styled(motion.h3)(
	({ theme }) => `
  max-width: 43rem;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 150%;
  color: ${theme.color.orange.primary};
`
);

const Icon = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntr}
  background: rgba(252, 67, 8, 0.1);
  height: 6.6rem;
  width: 6.6rem;
  border: 0.07rem solid ${theme.color.orange.primary};
  border-radius: 50%;

  color: ${theme.color.orange.primary};
`
);

export default Hero;
