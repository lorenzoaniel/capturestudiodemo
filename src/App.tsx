import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { default_theme } from "./styles/themes/default_theme";
import Intro from "./sections/intro";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={default_theme}>
			<GlobalStyle />
			<AnimatePresence>
				<Main>
					<Intro />
				</Main>
			</AnimatePresence>
		</ThemeProvider>
	);
};

const Main = styled(motion.main)(
	({ theme }) => `
`
);

export default App;
