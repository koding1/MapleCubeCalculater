// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Nochoice({grade, setOption, optionPer}) {
    const classname = "X"

    return (
        <div className={classname}>
            <div id = {"option1"}>
                <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>
            
            <div id = {"option2"}>
                <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>

            <div id = {"option3"}>
                <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>
        </div>
    )

}

export default Nochoice;