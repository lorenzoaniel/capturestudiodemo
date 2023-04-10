import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import { motion_props } from "../../styles/mixins/motion_props";

interface Props {
	variant: string;
	title: string;
	handleClick: () => void;
}

const ButtonPrimary: React.FC<Props> = ({ variant, title, handleClick }) => {
	const theme: any = useTheme();
	return (
		<Main
			{...motion_props}
			variants={theme.motion.btn.default}
			variant={variant}
			onClick={handleClick}
		>
			{title}
		</Main>
	);
};

interface Main {
	variant: string;
}

const Main = styled(motion.button)<Main>(
	({ theme, variant }) => `
  ${variant}
  height: 3.8rem;
  border: 0.1rem solid ${theme.color.orange.primary}; 
	font-size: 1.6rem;

  color: ${theme.color.orange.primary};
`
);

export default ButtonPrimary;
