import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { selectPortraitInfo } from "../../redux/features/portraitsSlice";
import PortraitDisplay from "../../components/display/PortraitDisplay";
import { useImage } from "react-image";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";

const Portraits: React.FC = () => {
	const portraitInfo = useAppSelector(selectPortraitInfo);
	const theme: any = useTheme();
	const { src } = useImage({
		srcList: portraitInfo.portraitSecondary.src,
	});

	const createPortraits = () => {
		let tempArray = [];
		for (const [key, val] of portraitInfo.portraitsPrimary) {
			tempArray.push(
				<PortraitDisplay
					key={key}
					imgSrc={val.src}
					date={val.date}
					title={key}
					desc={val.desc}
					isLeft={val.isLeft}
				/>
			);
		}
		return tempArray;
	};

	return (
		<Main id={"portraits"}>
			<ContentPrimary>{createPortraits()}</ContentPrimary>
			<ContentSecondary>
				<Date>{portraitInfo.portraitSecondary.date}</Date>
				<Title>{portraitInfo.portraitSecondary.title}</Title>
				<ImgWrapper>
					<img src={src} />
				</ImgWrapper>
				<ButtonPrimary
					variant={theme.variant.btn.prt}
					title={"View case study"}
					handleClick={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
			</ContentSecondary>
		</Main>
	);
};

const Main = styled(motion.section)(
	({ theme }) => `
  ${theme.mixins.section.padding}
	background: ${theme.background.lightgreen.secondary};
	height: fit-content;
	display: flex;
	flex-direction: column;
`
);

const ContentPrimary = styled(motion.section)(
	({ theme }) => `
  ${theme.mixins.flex.cntrcol}
	row-gap: 10rem;
	padding: 8rem 0;
`
);

const ContentSecondary = styled(motion.section)(
	({ theme }) => `
	${theme.mixins.flex.cntrcol}
  padding: 8rem 0;
	// row-gap: 2.4rem;

	& button {
		align-self: center !important;
	}
`
);

const Date = styled(motion.div)(
	({ theme }) => `
  font-weight: 400;
	font-size: 1.4rem;
	line-height: 150%;
	color: ${theme.color.orange.primary};
	margin-bottom: 2.4rem;
`
);

const Title = styled(motion.div)(
	({ theme }) => `
	margin-bottom: 6rem;
	color: ${theme.color.orange.primary};
  font-weight: 500;
	font-size: 4.8rem;
	line-height: 105%;
	letter-spacing: -0.065em;
	text-align: center;
`
);

const ImgWrapper = styled(motion.div)(
	({ theme }) => `
	margin-bottom: 4.8rem;

	& img {
		width: 100%;
	}
`
);

export default Portraits;
