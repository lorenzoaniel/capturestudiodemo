import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useImage } from "react-image";
import styled from "styled-components";

interface Props {
	imgsrc: string[];
}

const Gallery: React.FC<Props> = ({ imgsrc }) => {
	const createImg = (imgsrc: string[]) => {
		return imgsrc.map((currsrc) => {
			const { src } = useImage({
				srcList: currsrc,
			});

			return (
				<ImgSection key={currsrc}>
					<img src={src} alt="Intro image" />
				</ImgSection>
			);
		});
	};

	const [projects, setProjects] = useState<JSX.Element[]>(createImg(imgsrc));

	return <Main>{projects}</Main>;
};

const Main = styled(motion.div)(({ theme }) => ``);

const ImgSection = styled(motion.section)(
	({ theme }) => `
	${theme.mixins.flex.cntrcol}
  
  & img {
    width: 100%;
  }
`
);

export default Gallery;
