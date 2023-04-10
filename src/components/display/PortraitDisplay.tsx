import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { useImage } from "react-image";
import { device } from "../../styles/breakpoints";
import DefaultModal from "../Modal/DefaultModal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectPortraitInfo } from "../../redux/features/portraitsSlice";

interface Props {
	imgSrc: string;
	date: string;
	title: string;
	desc: string;
	isLeft: boolean; //image is positioned on the left
}

const PortraitDisplay: React.FC<Props> = ({ imgSrc, date, title, desc, isLeft }) => {
	const [data, setData] = useState<Props>({ imgSrc, date, title, desc, isLeft });
	const [toggle, setToggle] = useState(false);
	const theme: any = useTheme();
	const { src } = useImage({
		srcList: imgSrc,
	});

	const toggleModal = () => {
		setToggle((curr) => !curr);
	};

	useEffect(() => {
		setData({ imgSrc, date, title, desc, isLeft });
	}, []);

	console.log(toggle);

	return (
		<Main>
			<Content isLeft={isLeft}>
				<Date>{date}</Date>
				<Title>{title}</Title>
				<Desc>{desc}</Desc>
				<ButtonPrimary
					variant={theme.variant.btn.prt}
					title={"View case study"}
					handleClick={() => {
						toggleModal();
					}}
				/>
			</Content>
			<ImgWrapper isLeft={isLeft}>
				<img src={src} />
			</ImgWrapper>
			<DefaultModal
				data={[
					<>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Date>{date}</Date>
							<Desc style={{ textAlign: "center" }}>{desc}</Desc>
						</div>
						<img src={src} style={{ width: "90vmin", height: "90vmin" }} />
					</>,
				]}
				title={data.title}
				toggle={toggle}
				toggleHandle={() => toggleModal()}
			/>
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
		
		align-items: "flex-start";
		& button {
			
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
