import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
	interface IImage {
		id: string;
		author: string;
		width: number;
		height: number;
		url: string;
		download_url: string;
	}
	const initialState: IImage[] = [
		{
			id: "",
			author: "",
			width: 0,
			height: 0,
			url: "",
			download_url: "",
		},
	];
	const [images, setImages] = useState(initialState);
	useEffect(() => {
		fetch("https://picsum.photos/v2/list")
			.then((response) => response.json())
			.then((data) => {
				data.sort((a: any, b: any) => a.author.localeCompare(b.author));
				setImages(data);
			});
	}, []);

	return (
		<div className="App">
			<div>
				{images.map((image) => (
					<img src={image.download_url}/>
				))}
			</div>
		</div>
	);
}
