import { motion } from "framer-motion";
import React from "react";
import { useImage } from "react-image";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import GalleryModal from "../Modal/GalleryModal";
import { selectGalleryInfo } from "../../redux/features/gallerySlice";
import { useAppSelector } from "../../redux/hooks";

const Gallery: React.FC = () => {
	let galleryInfo = useAppSelector(selectGalleryInfo);

	const showOnlyAmount = (amount: number) => {
		let tempArray = [];
		let tempArray2 = [];
		const prjlen = galleryInfo.galleryProjects.size;

		for (const [key, val] of galleryInfo.galleryProjects) {
			const { src } = useImage({
				srcList: val.src,
			});

			tempArray.push(
				<ImgWrapper key={key}>
					<img src={src} alt="Intro image" />
					<LabelDate>{val.date}</LabelDate>
					<LabelName>{key}</LabelName>
				</ImgWrapper>
			);
		}

		if (amount <= prjlen) {
			for (let i = 0; i <= amount - 1; i++) {
				tempArray2.push(tempArray[i]);
			}
		} else {
			throw Error("amount cannot be negative or greater than amount of images available");
		}

		return tempArray2;
	};

	return (
		<Main>
			{showOnlyAmount(galleryInfo.prjShownAmount)}
			<GalleryModal data={showOnlyAmount(galleryInfo.galleryProjects.size)} />
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
  ${theme.mixins.flex.cntrcol}
  row-gap: 7rem;
  width: 100%;
  
  & img {
    width: 100%;
  }

  @media ${device.laptop} {
    column-gap: 2.8rem;
    flex-direction: row;
    justify-content: space-between;
  }
`
);

const ImgWrapper = styled(motion.div)(
	({ theme }) => `
    ${theme.mixins.flex.cntrcol}
    row-gap: 2rem;
  `
);

const LabelName = styled(motion.div)(
	({ theme }) => `
	font-weight: 500;
  font-size: 1.8rem;
  line-height: 105%;
  letter-spacing: -0.065em;
  color: ${theme.color.orange.primary};
  align-self: flex-start;
`
);

const LabelDate = styled(motion.div)(
	({ theme }) => `
	font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  color: rgba(252, 67, 8, 0.8);
  align-self: flex-start;
`
);

export default Gallery;
