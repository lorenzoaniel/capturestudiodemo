import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
	variant: string;
	title: string;
	handleClick: () => void;
}

const ButtonPrimary: React.FC<Props> = ({ variant, title, handleClick }) => {
	return (
		<Main variant={variant} onClick={handleClick}>
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

  color: ${theme.color.orange.primary};
`
);

export default ButtonPrimary;
