import React from "react";
import Navbar from "./navbar";
import { useEffect , useState } from "react";
import Card from "./Card";
import Footer from "./footer";

function News() {
    const [newsData , setNewsData]=useState(null);
 
  const News_API = "20b9316157b6446bbc26b861679fc075";
  useEffect(()=>{
    getData("Pakistan")
  },[]);
  const getData = async (search) => {
    console.log(search)
    const response = await fetch(
      `http://newsapi.org/v2/everything?q=${search}&apiKey=${News_API}`
    );
    const response_json = await response.json();
    console.log(response_json.articles);
    setNewsData(response_json.articles)
  };



  return (
    <div className="">
      <Navbar onChecked={getData} />
      <div className="news">
        <Card
        data={newsData}
        />

      </div>
     {/* <div className="footer">
     <Footer/>
     </div> */}
    </div>
    

  );
}

export default News;
