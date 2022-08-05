import { useState } from "react";

/**
 * # MY ACCOUNT GOOGLE PLAY:
 * @see {@link https://play.google.com/store/apps/developer?id=dzino Google Play}
 */

export default function PrivatePage(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/test", {
      method: "POST",
      body,
    });
  };

  return (
    <div>
      <div>
        <form action="/api/test" method="post" enctype="multipart/form-data">
          <input type="file" name="file"></input>
          <input type="submit" value="Upload"></input>
        </form>
      </div>
    </div>
  );
}
