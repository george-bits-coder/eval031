import "./styles.css";
import { useRef } from "react";
import { useState } from "react";
//import { Recipe } from "./recipielist";
//import { Showit } from "./Showlist";
import { Ritem } from "./item.jsx";
export default function App() {
  let rtitle = useRef("");
  let ring = useRef("");
  let rttc = useRef("");
  let rimg = useRef("");
  let rinst = useRef("");

  //var currentlist = JSON.parse(localStorage.getItem("rlist"));
  //if (!currentlist)
  // currentlist = [];

  let [currentlist, setCurrentlist] = useState([]);

  var listtext = [];
  const getformatted = (arr) => {
    arr.forEach((ele) => {
      listtext.push(ele.title + " " + ele.timetocook);
    });

    console.log(listtext);
  };

  function addtostorage() {
    var obj = {
      title: rtitle,
      ingredients: ring,
      timetocook: rttc,
      image: rimg,
      instructions: rinst
    };

    setCurrentlist(...currentlist, obj);

    //localStorage.setItem("rlist", JSON.stringify(currentlist));
  }
  return (
    <div className="App">
      <div className="recipeapp">
        <form id="recipeform" onSubmit={addtostorage}>
          <input type="text" ref={rtitle} placeholder="Enter title" />
          <input type="text" ref={ring} placeholder="Enter ingredients" />
          <input type="text" ref={rttc} placeholder="Enter timetocook" />
          <input type="text" ref={rimg} placeholder="Enter image url" />
          <input type="text" ref={rinst} placeholder="Enter instructions" />
          <br />
          <button type="submit">Add</button>
        </form>

        <div id="recipelist">
          {currentlist.map((e, i) => (
            <div>
              <Ritem key={i} {...e} />
            </div>
          ))}
        </div>
      </div>
      <div id="details">
        <div> Details </div>
      </div>
    </div>
  );
}
