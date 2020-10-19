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
	const [loadComplete, setLoadComplete] = useState(false);
	useEffect(() => {
		fetch("https://picsum.photos/v2/list")
			.then((response) => response.json())
			.then((data: IImage[]) => {
				data.sort((a: IImage, b: IImage) => a.author.localeCompare(b.author));
				setImages(data);
				setLoadComplete(true);
			});
	}, []);

	return (
    <div className="App">
      {!loadComplete ? (
        <div className="loader" />
      ) : (
        <div>
          {images.map((image) => (
            <div className="image-row" key={image.id}>
              <img className="image" src={image.download_url} alt={image.author} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}