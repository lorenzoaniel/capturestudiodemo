import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={{}}>
			<GlobalStyle />
			<Main>test</Main>
		</ThemeProvider>
	);
};

const Main = styled(motion.main)(({ theme }) => ``);

export default App;
