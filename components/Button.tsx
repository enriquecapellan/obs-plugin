import React, { FC } from "react";
import styled from "styled-components";

const Button: FC<{ text: string; onClick: () => void }> = ({ text, ...props }) => {
	return <StyledButton {...props}>{text}</StyledButton>;
};

const StyledButton = styled.button`
	background-color: #1976d2;
	border: none;
	border-radius: 4px;
	height: 2rem;
	cursor: pointer;
	color: white;
	display: inline-block;
	width: fit-content;
`;

export default Button;
