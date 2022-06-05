import React, { FC, useState, useRef } from "react";
import styled, { css } from "styled-components";

const Tab: FC<ITabProps> = ({ items = [] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const tabHeaders = useRef<(HTMLElement | null)[]>([]);
	const activeItem = tabHeaders.current[activeIndex];
	const { width, left } = activeItem?.getBoundingClientRect() || {};

	return (
		<TabWrapper className="tab__wrapper" width={width} left={left}>
			<div className="tab__header">
				{items.map((item, index) => (
					<TabItem
						key={index}
						color={"iris"}
						active={activeIndex == index}
						ref={(ref) => (tabHeaders.current[index] = ref)}
						onClick={() => setActiveIndex(index)}
					>
						<span>{item.title}</span>
					</TabItem>
				))}
				<div className="active_indicator" />
			</div>
			<div className="tab_content">{items[activeIndex]?.content}</div>
		</TabWrapper>
	);
};

export const TabWrapper = styled.div<{ left?: number; width?: number }>`
	display: flex;
	width: 100%;
	flex-direction: column;

	.tab__header {
		position: relative;
		display: flex;
		border-bottom: 1px solid transparent;

		.active_indicator {
			height: 2px;
			background-color: white;
			position: absolute;

			width: ${({ width }) => width || 0}px;
			left: calc(${({ left }) => left || 0}px - 16px);
			transition: all 1s ease-in-out;
			bottom: 0;
		}
	}

	.tab_content {
		display: flex;
		padding-top: 16px;
	}
`;

export const TabItem = styled.div<{ color: string; active?: boolean }>`
	display: inline-flex;
	gap: 6px;
	padding: 12px;
	align-items: center;
	justify-content: center;

	font-family: azo-sans-web;
	font-weight: 700;
	font-size: 12px;
	cursor: pointer;
	color: #c4c4c4;
	transition: all 0.5s ease-in-out;

	${({ active, color }) =>
		active &&
		css`
			color: white;
		`};
`;

export default Tab;
