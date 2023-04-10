import React, { useRef } from "react";
import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { motion_props } from "../../styles/mixins/motion_props";

interface Values {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

const DefaultForm: React.FC = () => {
	const theme: any = useTheme();
	const ref = useRef(null);

	return (
		<Main ref={ref}>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					message: "",
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					lastName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					email: Yup.string().email("Invalid email address").required("Required"),
					message: Yup.string()
						.required("Please enter a message")
						.max(500, "The message should be less than 500 characters")
						.matches(/^[^<>]*$/, "The message contains prohibited characters"),
				})}
				onSubmit={async (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
					await alert(
						`This is simply a demo, but for production replace this with either an email server API endpoint or a managed one like Formspree. Here Are your values = firstname: ${values.firstName} lastName: ${values.lastName} email: ${values.email} message: ${values.message}`
					);
					await resetForm();
					await setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<StyledForm>
						<Label htmlFor="firstName">First Name</Label>
						<StyledInput type="text" name="firstName" placeholder="John" />
						<ErrorMessage name={"firstName"} />

						<Label htmlFor="lastName">Last Name</Label>
						<StyledInput type="text" name="lastName" placeholder="Doe" />
						<ErrorMessage name={"lastName"} />

						<Label htmlFor="email">Email</Label>
						<StyledInput name="email" placeholder="john@acme.com" type="email" />
						<ErrorMessage name={"email"} />

						<Label htmlFor="message">Message</Label>
						<StyledTextArea
							name="message"
							placeholder="Write your message here..."
							type="text"
							component={"textarea"}
						/>
						<ErrorMessage name={"message"} />

						<Submit
							type="submit"
							disabled={isSubmitting}
							{...motion_props}
							variants={theme.motion.btn}
						>
							Submit
						</Submit>
					</StyledForm>
				)}
			</Formik>
		</Main>
	);
};

const Main = styled(motion.div)(
	({ theme }) => `
	flex-grow: 1;
	color: ${theme.color.orange.primary};
`
);

const StyledForm = styled(Form)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	row-gap: 2vmin;
	padding: 5vmin;
`;

const StyledInput = styled(Field)(
	({ theme }) => `
	height: 3.8rem;
  border: 0.1rem solid ${theme.color.orange.primary}; 
	font-size: 1.6rem;

  color: ${theme.color.orange.primary};

	background: transparent;
	height: 5rem;
	padding: 1rem;
	width: 50vmin;
	border: 0.01rem solid  ${theme.color.orange.primary};

	& input:-internal-autofill-selected {
		background-color: transparent !important;
	}

	&:focus {
		outline-color: ${theme.color.orange.secondary};
	}

	&::placeholder {
		color: ${theme.color.orange.primary};
	}
`
);

const StyledTextArea = styled(StyledInput)`
	height: 20rem;
	resize: none;
`;

const Label = styled(motion.label)(
	({ theme }) => `
	width: 50vmin;
	font-size: 1.6rem;

	color: ${theme.color.orange.primary};
`
);

const Submit = styled(motion.button)(
	({ theme }) => `
	height: 3.8rem;
  border: 0.1rem solid ${theme.color.orange.primary}; 
	font-size: 1.6rem;
	padding: 1rem;

  color: ${theme.color.orange.primary};
`
);

export default DefaultForm;
