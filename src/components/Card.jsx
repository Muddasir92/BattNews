import React from "react";

function Card(props) {
  const { data } = props;
  console.log(data);
  if (!data || !Array.isArray(data)) {
    return <div>loading......</div>; // Show a fallback message when data is null or undefined
  }

  function readmore(url) {
    console.log("url");
    window.open(url);
  }
  return (
    <div className="cardContainer">
      {data.map((currentItem, index) => {
        if (!currentItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card">
              <div className="imgCon">
                <img src={currentItem.urlToImage} alt="" />
              </div>
              <div className="title" onClick={() => readmore(currentItem.url)}>
                <p>
                  <b>
                    <a href="">{currentItem.title}</a>
                  </b>
                </p>
              </div>
              <div className="content">
                <p>{currentItem.content}</p>
              </div>
              <div
                className="readmore"
                onClick={() => readmore(currentItem.url)}
              >
                <button className="read_more">Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
