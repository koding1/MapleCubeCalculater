// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Nochoice({grade, setOption, optionPer}) {
    const classname = "X"

    return (
        <div className={classname}>
            <div id = {"option4"}>
                <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>
            
            <div id = {"option5"}>
                <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>

            <div id = {"option6"}>
                <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                <select className = {cubeStyles.optionSelect}>
                    <option>선택이 완료되지 않았습니다.</option>
                </select>
            </div>
        </div>
    )

}

export default Nochoice;