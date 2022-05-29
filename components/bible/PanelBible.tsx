import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Select from "react-select";

const PanelBible = () => {
	const [books, setBooks] = useState<{ value: any; label: string }[]>([]);
	const [book, setBook] = useState<any>();
	const [verses, setVerses] = useState([]);

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

	return (
		<Wrapper>
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
			<ul>
				{verses.map((verse: any) => (
					<li dangerouslySetInnerHTML={{ __html: verse.text }} />
				))}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	ul {
		list-style: none;
		overflow: scroll;
		max-height: 30rem;
		color: white;

		li {
			cursor: pointer;
			.v {
				margin-right: 0.5rem;
			}
			.s {
				display: none;
			}
		}
	}
`;

export default PanelBible;
