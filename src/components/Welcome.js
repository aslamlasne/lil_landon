import React, { useState, useEffect } from "react";
//import galleryLinkData from "./data/gallery_images.json";

const Welcome = () => {
  const [galleryLinkData, setGalleryLinkData] = useState([]);
  const loanGalleryLinkData = async () => {
    const resp = await fetch(
      "https://5ak34wf4u5.execute-api.us-west-2.amazonaws.com/Production/galleryimages"
    );
    let jsonData = await resp.json();
    setGalleryLinkData(jsonData);
  };
  useEffect(() => {
    loanGalleryLinkData();
  }, []);
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryLinkData.map((link) => (
            <img
              className={link.className}
              key={link.src}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
