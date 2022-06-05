import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";

import Select from "react-select";
import Button from "../Button";

const PanelBible: FC<{ onSelect: (a: any) => void }> = ({ onSelect }) => {
	const [books, setBooks] = useState<{ value: any; label: string }[]>([]);
	const [book, setBook] = useState<any>();
	const [verses, setVerses] = useState([]);

	const [selectedVerse, setVerse] = useState<any | undefined>();

	useEffect(() => {
		fetch("/api/bible/books/")
			.then((response) => response.json())
			.then((books) =>
				setBooks(
					books
						.sort((a: any, b: any) => a.order - b.order)
						.map((book: any) => ({
							value: book,
							label: book.name
						}))
				)
			);
	}, []);

	function handleSelectVerse(verse: any) {
		onSelect(verse);
		setVerse(verse);
	}

	return (
		<Wrapper>
			{selectedVerse && <Button text="Ocultar" onClick={() => handleSelectVerse(undefined)} />}
			<Select
				options={books}
				placeholder="Seleccionar libro"
				onChange={({ value }: any) => {
					setBook(value);
				}}
			/>
			<br />
			{book && (
				<Select
					options={book.chapters.map((chapter: any) => ({ value: chapter.chapter, label: chapter.chapter }))}
					placeholder="Seleccionar capítulo"
					onChange={({ value }: any) => {
						fetch(`/api/bible/verses/${book.id}/${value}`)
							.then((res) => res.json())
							.then((verses) =>
								setVerses(
									verses.sort(
										(a: any, b: any) =>
											Number(a.id.substring(a.id.lastIndexOf(".") + 1)) -
											Number(b.id.substring(b.id.lastIndexOf(".") + 1))
									)
								)
							);
					}}
				/>
			)}
			<div className="verses__container">
				{verses.map((verse: any) => (
					<Verse
						key={verse.id}
						active={selectedVerse?.id == verse.id}
						dangerouslySetInnerHTML={{ __html: verse.text }}
						onClick={() => handleSelectVerse(verse)}
					/>
				))}
			</div>
		</Wrapper>
	);
};

const Verse = styled.div<{ active: boolean }>`
	color: white;
	cursor: pointer;
	border-radius: 4px;
	padding: 4px;
	border: 1px solid ${({ active }) => (active ? "white" : "transparent")};

	.v {
		margin-right: 0.5rem;
		vertical-align: baseline;
	}
	.s {
		display: none;
	}
`;

const Wrapper = styled.div`
	.verses__container {
		max-height: 30rem;
		overflow: auto;
	}
`;

export default PanelBible;
