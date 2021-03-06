import { useState } from "react";
import Option from "./Option";
import Option2 from "./Option2";
import cubeStyles from "./css/Cube.module.css";
import Header from "./Header";
import appstyles from "./css/App.module.css";
import Adfit from "./Adfit";

import PopUp1 from "./PopUp1";
import PopUp2 from "./PopUp2";

function App() {



  const [itemType, setItemType] = useState("X");

  // const [gradePrevious, setGradePrevious] = useState("R");
  const [, setGradePrevious] = useState("R");
  const [gradeNext, setGradeNext] = useState("E");

  const [option1, setOption1] = useState(100);
  const [option2, setOption2] = useState(100);
  const [option3, setOption3] = useState(100);

  const [option4, setOption4] = useState(100);
  const [option5, setOption5] = useState(100);
  const [option6, setOption6] = useState(100);

  const [redResult, setRedResult] = useState(0);
  const [redPrice, setRedPrice] = useState(0);
  const [redCnt, setRedCnt] = useState(0);
  // const [redGradeUpPrice, setRedGradeUpPrice] = useState(0);
  const [redGradeUpCnt, setRedGradeUpCnt] = useState(0);

  const [blackResult, setBlackResult] = useState(0);
  const [blackPrice, setBlackPrice] = useState(0);
  const [blackCnt, setBlackCnt] = useState(0);
  // const [blackGradeUpPrice, setBlackGradeUpPrice] = useState(0);
  const [blackGradeUpCnt, setBlackGradeUpCnt] = useState(0);

  function initOption() {
    setOption1(100);
    setOption2(100);
    setOption3(100);
    setOption4(100);
    setOption5(100);
    setOption6(100);
    document.querySelector("#option1 select").selectedIndex = 0;
    document.querySelector("#option2 select").selectedIndex = 0;
    document.querySelector("#option3 select").selectedIndex = 0;

    document.querySelector("#option4 select").selectedIndex = 0;
    document.querySelector("#option5 select").selectedIndex = 0;
    document.querySelector("#option6 select").selectedIndex = 0;
  }

  function setGradeUpCnt() {
    const pg = document.getElementById("previous_grade").value;
    const ng = document.getElementById("next_grade").value;

    const red_RE = 1 / (6 / 100);
    const red_EU = 1 / (1.8 / 100);
    const red_UL = 1 / (0.3 / 100);

    const black_RE = 1 / (15 / 100);
    const black_EU = 1 / (3.5 / 100);
    const black_UL = 1 / (1 / 100);

    if (pg === "R") {
      if (ng === "E") {
        setRedGradeUpCnt(red_RE);
        setBlackGradeUpCnt(black_RE);
      } else if (ng === "U") {
        setRedGradeUpCnt(red_RE + red_EU);
        setBlackGradeUpCnt(black_RE + black_EU);
      } else if (ng === "L") {
        setRedGradeUpCnt(red_RE + red_EU + red_UL);
        setBlackGradeUpCnt(black_RE + black_EU + black_UL);
      }
    } else if (pg === "E") {
      if (ng === "E") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      } else if (ng === "U") {
        setRedGradeUpCnt(red_EU);
        setBlackGradeUpCnt(black_EU);
      } else if (ng === "L") {
        setRedGradeUpCnt(red_EU + red_UL);
        setBlackGradeUpCnt(black_EU + black_UL);
      }
    } else if (pg === "U") {
      if (ng === "E") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      } else if (ng === "U") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      } else if (ng === "L") {
        setRedGradeUpCnt(red_UL);
        setBlackGradeUpCnt(black_UL);
      }
    } else if (pg === "L") {
      if (ng === "E") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      } else if (ng === "U") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      } else if (ng === "L") {
        setRedGradeUpCnt(1);
        setBlackGradeUpCnt(1);
      }
    }
  }

  function itemTypeChange(event) {
    setItemType(event.target.value);
    initOption();
  }

  function gradePreviousChange(event) {
    setGradePrevious(event.target.value);
    initOption();
    setGradeUpCnt();
  }
  function gradeNextChange(event) {
    setGradeNext(event.target.value);
    initOption();
    setGradeUpCnt();
  }
  function onClick(event) {
    console.log(option1, option2, option3);
    if (option1 === 100 && option2 === 100 && option3 === 100) {
      setRedResult((1).toFixed(7));
      setRedPrice(0);
      setRedCnt(0);
    } else {
      setRedResult(
        (1 * (option1 / 100) * (option2 / 100) * (option3 / 100)).toFixed(7)
      );
      setRedPrice(
        parseInt(
          (1 / (1 * (option1 / 100) * (option2 / 100) * (option3 / 100))) * 900
        ).toLocaleString()
      );
      setRedCnt(
        parseInt(
          1 / (1 * (option1 / 100) * (option2 / 100) * (option3 / 100))
        ).toLocaleString()
      );
    }
  }

  function onClick2(event) {
    console.log(option4, option5, option6);
    if (option4 === 100 && option5 === 100 && option6 === 100) {
      setBlackResult((1).toFixed(7));
      setBlackPrice(0);
      setBlackCnt(0);
    } else {
      setBlackResult(
        (1 * (option4 / 100) * (option5 / 100) * (option6 / 100)).toFixed(7)
      );
      setBlackPrice(
        parseInt(
          (1 / (1 * (option4 / 100) * (option5 / 100) * (option6 / 100))) * 1650
        ).toLocaleString()
      );
      setBlackCnt(
        parseInt(
          1 / (1 * (option4 / 100) * (option5 / 100) * (option6 / 100))
        ).toLocaleString()
      );
    }
  }



  return (
    
    <div className={appstyles.app}>
      <Header />

      <div style={{width:"70%", margin:"0 auto", display:"flex", minWidth: "800px"}}>
        <Adfit ad_classname = "adm2" KEY = "DAN-omTG8Orpv6IQfFBW" ad_width="325" ad_height="105"/>
        <Adfit ad_classname = "adm1" KEY = "DAN-3GHaqrVoCbUeKqdY" ad_width="325" ad_height="105"/>
      </div>

      <div className={`${appstyles.block} ${appstyles.main}`}>
        <h1>??????/?????? ?????? ???????????? ?????????</h1>
        <p style={{textAlign:"center"}}>?????? ??????? ?????? ??????? ????????? ???????????? ??? ??????????????? ?</p>
        
        <div>
          <div className={appstyles.selectComponent}>
            <div style={{display: "inline-block", width: "100%", border: "1px solid white", marginBottom: "30px"}}>
              <span className={appstyles.gradeSelectSpan}>
                <p>?????? ?????? ??????</p>
                <select onChange={itemTypeChange}>
                  <option value={"X"}>?????? ????????????.</option>
                  <option value={"weapon"}>??????</option>
                  <option value={"emblem"}>?????????</option>
                  <option value={"weapon2"}>
                    ????????????(????????????,????????? ??????)
                  </option>
                  <option value={"weapon3"}>????????????,?????????</option>
                  <option value={"hat"}>??????</option>
                  <option value={"up"}>??????</option>
                  <option value={"updown"}>?????????</option>
                  <option value={"down"}>??????</option>
                  <option value={"shoes"}>??????</option>
                  <option value={"glove"}>??????</option>
                  <option value={"cloak"}>??????</option>
                  <option value={"belt"}>??????</option>
                  <option value={"shoulder"}>????????????</option>
                  <option value={"accessory"}>
                    ????????????/?????????/?????????/??????/?????????
                  </option>
                  <option value={"heart"}>????????????</option>
                </select>
              </span>
              <span className={appstyles.gradeSelectSpan}>
                <p>?????? ????????????</p>
                <select id={"previous_grade"} onChange={gradePreviousChange}>
                  <option value={"R"}>??????</option>
                  <option value={"E"}>??????</option>
                  <option value={"U"}>?????????</option>
                  <option value={"L"}>????????????</option>
                </select>
              </span>

              <span className={appstyles.gradeSelectSpan}>
                <p>?????? ????????????</p>
                <select id={"next_grade"} onChange={gradeNextChange}>
                  <option value={"E"}>??????</option>
                  <option value={"U"}>?????????</option>
                  <option value={"L"}>????????????</option>
                </select>
              </span>
            </div>

            <div className={appstyles.gradePriceDiv}>
              <div className={appstyles.titleAndGuide}>
                <h2>?????? ??????</h2>
                <PopUp1 text={"?????????"} guide={"?????? ??????????????? ?????? ??????????????? ??????????????????. ?????? ???????????? ??????????????? ???????????? ?????? ??? ??? ?????????."}/>
              </div>
              <span className={appstyles.redGrade}>
                <p>
                  ?????? ?????? ????????????: ???{" "}
                  {parseInt(redGradeUpCnt * 900).toLocaleString()} ??????
                  ???????????????.
                </p>
                <p>??? {parseInt(redGradeUpCnt)} ?????? ?????? ????????? ???????????????.</p>
              </span>
              <span className={appstyles.blackGrade}>
                <p>
                  ?????? ?????? ????????????: ???{" "}
                  {parseInt(blackGradeUpCnt * 1650).toLocaleString()} ??????
                  ???????????????.
                </p>
                <p>
                  ??? {parseInt(blackGradeUpCnt)} ?????? ?????? ????????? ???????????????.
                </p>
              </span>
            </div>
          </div>
          <div style={{width:"100%", margin:"0 auto", display:"flex", marginBottom:"30px"}}>
            <Adfit ad_classname = "adm3" KEY = "DAN-haFXWUxdmuy2pCTn" ad_width="728" ad_height="90"/>
          </div>
          <div className={cubeStyles.cubeComponent}>
            <div className={appstyles.titleAndGuide} style={{marginBottom: "40px"}}>
              <h2>?????? ??????</h2>
              <PopUp2 text={"?????????"} guide={"????????? '?????? ??????'??? ????????? '?????? ????????????'??? ?????? ?????? ??? ????????? ????????? ??????????????????."}/>
            </div>
            <div className={cubeStyles.cubeLeft}>
              <div className={cubeStyles.cube}>
                <div className={cubeStyles.cubeTypeRed}></div>

                <Option
                  item_type={itemType}
                  grade={gradeNext}
                  setOption={[setOption1, setOption2, setOption3]}
                  optionPer={[
                    parseFloat(option1).toFixed(3),
                    parseFloat(option2).toFixed(3),
                    parseFloat(option3).toFixed(3),
                  ]}
                />
                <div className={cubeStyles.cubeResult}>
                  <p>?????? : {redResult}</p>
                  <p>???????????? : {redPrice} ???</p>
                  <p>???????????? : {redCnt} ???</p>
                </div>
                <button className={cubeStyles.btn} onClick={onClick}>
                  ??????
                </button>
              </div>
            </div>

            <div className={cubeStyles.cubeRight}>
              <div className={cubeStyles.cube}>
                <div className={cubeStyles.cubeTypeBlack}></div>

                <Option2
                  item_type={itemType}
                  grade={gradeNext}
                  setOption={[setOption4, setOption5, setOption6]}
                  optionPer={[
                    parseFloat(option4).toFixed(3),
                    parseFloat(option5).toFixed(3),
                    parseFloat(option6).toFixed(3),
                  ]}
                />
                <div className={cubeStyles.cubeResult}>
                  <p>?????? : {blackResult}</p>
                  <p>???????????? : {blackPrice} ???</p>
                  <p>???????????? : {blackCnt} ???</p>
                </div>
                <button className={cubeStyles.btn} onClick={onClick2}>
                  ??????
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default App;
