import React from "react";
import "./Tab.css";
import { useState } from "react";

const Tab = () => {
  const [selected, setSelected] = useState("");
  const onClickHandler = (selected) => {
    setSelected(selected);
  };
  return (
    <div className="boxContainer">
      <div className="box" onClick={() => onClickHandler("visitPlace")}>
        <div>宿泊先</div>
        {selected == "visitPlace" && <div className="underLine"></div>}
      </div>
      　
      <div className="box" onClick={() => onClickHandler("experience")}>
        <div>体験</div>
        {selected == "experience" && <div className="underLine"></div>}
      </div>
      　
      <div className="box" onClick={() => onClickHandler("onlineExperience")}>
        <div>オンライン体験</div>
        {selected == "onlineExperience" && <div className="underLine"></div>}
      </div>
      　<div className="box">{selected}</div>　
    </div>
  );
};
export default Tab;
