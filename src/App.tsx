import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {

  interface IImage {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }
  const initialState : IImage[] = [{
    id: "",
    author: "",
    width: 0,
    height: 0,
    url: "",
    download_url: ""
  }]
  const [images, setImages] = useState(initialState)
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
      data.sort((a : any , b : any ) => a.author.localeCompare(b.author))
      setImages(data)
    });
  }, [])
  

  return (
    <div className="App">

      <ol>
        <li>Get the list of photos</li>
        <li>Update all the width & height values to 200px x 133px (small)</li>
        <li>
          Display list of photos in vertical center of the page, each using the
          width/height values and 20px padding each
        </li>
        <li>
          Clicking an image toggles its width & height to 300px x 200px (large)
        </li>
        <li>
          <i>Optional:</i> Sort the list in alphabetical order (by author)
        </li>
      </ol>
      <p>
        Use best practices for html, css, TypeScript and React. Please email
        conductiv-eng@outlook.com if you have any questions.
      </p>

      <p>
        When complete, please send your name and the URL of your saved (forked)
        code sandbox to conductiv-eng@outlook.com. Thank you!
      </p>
    </div>
  );
}
