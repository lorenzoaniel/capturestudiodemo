import { device } from "../breakpoints";

export const default_theme = {
	mixins: {
		dimensions: {
			fill: `
        height: 100%; 
        width: 100%;
      `,
		},
		section: {
			padding: "padding: 0 15%;",
		},
		flex: {
			cntr: `
        display: flex;
        justify-content: center;
        align-items: center;
      `,
			cntrcol: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `,
		},
	},
	color: {
		orange: {
			primary: "#FC4308",
			secondary: "#8E2909",
		},
	},
	background: {
		lightgreen: {
			primary: "linear-gradient(233.95deg, #0D1E20 -73.12%, #313E2A 53.36%, #262D20 103.17%)",
			secondary: " linear-gradient(90deg, #323E2A 0%, #101815 100%)",
		},
		darkgreen: "#0E1513",
	},
};
