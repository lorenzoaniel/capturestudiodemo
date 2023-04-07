import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { modalToggle, selectGalleryInfo } from "../../redux/features/gallerySlice";
import { motion } from "framer-motion";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { device } from "../../styles/breakpoints";

interface Props {
	data: JSX.Element[];
}

const GalleryModal: React.FC<Props> = ({ data }) => {
	const dispatch = useAppDispatch();
	let galleryInfo = useAppSelector(selectGalleryInfo);
	const theme: any = useTheme();

	const disableScroll = () => {
		// Get the current page scroll position
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		// if any scroll is attempted,
		// set this to the previous value
		window.onscroll = () => {
			window.scrollTo(scrollLeft, scrollTop);
		};
	};

	const enableScroll = () => {
		window.onscroll = () => {};
	};

	useEffect(() => {
		galleryInfo.modalToggle ? disableScroll() : enableScroll();
	}, [galleryInfo.modalToggle]);

	return (
		<ModalCustom show={galleryInfo.modalToggle} onHide={() => dispatch(modalToggle())}>
			<Header>
				<Title>{"Our Work"}</Title>
				<ButtonPrimary
					variant={theme.variant.btn.prjcls}
					title={"Close"}
					handleClick={() => dispatch(modalToggle())}
				/>
			</Header>
			<Body>{data}</Body>
		</ModalCustom>
	);
};

const ModalCustom = styled(Modal)(
	({ theme }) => `
  ${theme.mixins.flex.cntrcol}
	position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-x: scroll;
  backdrop-filter: blur(1rem);
`
);

const Header = styled(Modal.Header)(
	({ theme }) => `
  ${theme.mixins.flex.cntrcol}
  padding: 5rem 0;
  gap: 4rem;
`
);

const Title = styled(motion.h2)(
	({ theme }) => `
  align-self: center;
.

  font-size: 60px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${theme.color.orange.primary};
`
);

const Body = styled(Modal.Body)(
	({ theme }) => `
  ${theme.mixins.flex.cntrcol}
  flex-wrap: wrap;
  gap: 8rem;

  & img {
    width: 90%;
  }

	@media ${device.laptop} {
		flex-direction: row;
    & img {
			width: 100%;
		}
  }
`
);

export default GalleryModal;
