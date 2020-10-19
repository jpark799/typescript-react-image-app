import React, { useState, useEffect } from "react";
import "./styles.css";
import {Header} from "./components"

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
	const [loadComplete, setLoadComplete] = useState(false);
	useEffect(() => {
		fetch("https://picsum.photos/v2/list")
			.then((response) => response.json())
			.then((data: IImage[]) => {
				data.sort((a: IImage, b: IImage) => a.author.localeCompare(b.author));
				data.map((data) => {data.height= 133; data.width=200})
				setImages(data);
				setLoadComplete(true);
			});
	}, []);

	const	resize = (number: number) => {
    const img = document.getElementsByTagName('img')[number]; 
    img.style.height = '200px'; 
    img.style.width = '300px';
}

	return (
    <div className="App">
			<Header/>
      {!loadComplete ? (
        <div className="loader" />
      ) : (
        <div>
          {images.map((image) => (
            <div className="image-row" key={image.id}>
              <img className="image" width={image.width} height={image.height} src={image.download_url} alt={image.author} onClick={() => {image.height=200; image.width=300; setImages([...images])}} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}