import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useImage } from "react-image";
import { device } from "../../styles/breakpoints";

interface Props {
	imgSrc: string;
	date: string;
	title: string;
	desc: string;
	isLeft: boolean; //image is positioned on the left
}

const PortraitDisplay: React.FC<Props> = ({ imgSrc, date, title, desc, isLeft }) => {
	const theme: any = useTheme();
	const { src } = useImage({
		srcList: imgSrc,
	});

	return (
		<Main>
			<Content isLeft={isLeft}>
				<Date>{date}</Date>
				<Title>{title}</Title>
				<Desc>{desc}</Desc>
				<ButtonPrimary
					variant={theme.variant.btn.prt}
					title={"View case study"}
					handleClick={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</Content>
			<ImgWrapper isLeft={isLeft}>
				<img src={src} />
			</ImgWrapper>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
	${theme.mixins.flex.cntrcol}
	row-gap: 4rem;
	width: 100%;

	@media ${device.laptop} {
		flex-direction: row;
	}
`
);

interface ChildComps {
	isLeft: boolean;
}

const Content = styled(motion.div)<ChildComps>(
	({ theme, isLeft }) => `
	${theme.mixins.flex.cntrcol}
	row-gap: 2.4rem;
  order: 2;
	height: 100%;
	flex: 1 1;
	align-items: flex-start;
	

	@media ${device.laptop} {
		order: ${isLeft ? 2 : 1};
		padding-left: ${isLeft ? "19rem" : "9"};
		// align-items: ${isLeft ? "flex-end" : "flex-start"};
		align-items: "flex-start";
		& button {
			// align-self: ${isLeft ? "flex-end" : "flex-start"};
			align-self: "flex-start";
		}
	}
`
);

const Date = styled(motion.div)(
	({ theme }) => `
  font-weight: 400;
	font-size: 1.4rem;
	line-height: 150%;
	color: ${theme.color.orange.primary};
`
);

const Title = styled(motion.div)(
	({ theme }) => `
	color: ${theme.color.orange.primary};
  font-weight: 500;
	font-size: 4.8rem;
	line-height: 105%;

	letter-spacing: -0.065em;
`
);

const Desc = styled(motion.div)(
	({ theme }) => `
	color: ${theme.color.orange.primary};
  font-weight: 400;
	font-size: 1.6rem;
	line-height: 150%;
	max-width: 45rem;
`
);

const ImgWrapper = styled(motion.div)<ChildComps>(
	({ theme, isLeft }) => `
	order: 1;
	flex: 1 1;

	& img {
		width: 100%;
	}

	@media ${device.laptop} {
		order: ${isLeft ? 1 : 2};
	}
`
);

export default PortraitDisplay;
