import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { device } from "../../styles/breakpoints";

interface Props {
	data: JSX.Element[];
	title: string;
	toggle: any;
	toggleHandle: any;
}

const DefaultModal: React.FC<Props> = ({ data, title, toggle, toggleHandle }) => {
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
		toggle ? disableScroll() : enableScroll();
	}, [toggle]);

	return (
		<ModalCustom show={toggle}>
			<Header>
				<Title>{title}</Title>
				<ButtonPrimary
					variant={theme.variant.btn.prjcls}
					title={"Close"}
					handleClick={() => toggleHandle()}
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

  font-size: 6rem;
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

export default DefaultModal;
