import React from "react";
import Header from "./Header";
import Title from "./Title";
import Articles from "./Articles";
import Footer from "./Footer";
const T_articles = [
  {image:"./images/face1.png" , title:"Face 1" , prix: 80.00  ,reductionprix :0 },
  {image:"./images/face2.png" , title:"Face 2" , prix: 20.00  ,reductionprix :18.00 },
  {image:"./images/face3.png" , title:"Face 3" , prix: 50.00  ,reductionprix :25.00 },
  {image:"./images/face4.png" , title:"Face 4" , prix: 40.00  ,reductionprix :0 }
]

export default function App() {
  
  return (
    <div className="App">
        <Header />
        <Title title="Shop in Style" />
        <Articles articles={T_articles} />
        <Footer />
    </div>
  );
}
