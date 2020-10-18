import * as React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <p>
        Fork from this page (top right button) and do the following using the
        API:{" "}
        <a href="https://picsum.photos/v2/list" target="_blank">
          https://picsum.photos/v2/list
        </a>
      </p>

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
