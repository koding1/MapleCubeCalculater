// import { useState } from "react";

function Emblem({grade, setOption, optionPer}) {
    const classname = "emblem"

    function onChange(event) {
        const id = event.target.parentElement.id;
        if (id === "option1") {
            setOption[0](event.target.value);
        }
        else if (id === "option2") {
            setOption[1](event.target.value);
        }
        else if (id === "option3") {
            setOption[2](event.target.value);
        }
        else{
            console.log("error !");
        }
      }

    if (grade === 'L'){
        return (
            <div className={classname}>
                <div id = {"option1"}>
                    <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
            </div>
        )
    }

    else if (grade === 'U'){
        return (
            <div className={classname}>
                <div id = {"option1"}>
                    <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
            </div>
        )
    }

    else if (grade === 'E'){
        return (
            <div className={classname}>
                <div id = {"option1"}>
                    <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>

                    </select>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className={classname}>
                <div id = {"option1"}>
                    <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
                    <select>
                        <option>선택이 완료되지 않았습니다.</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select>
                        <option>선택이 완료되지 않았습니다.</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select>
                        <option>선택이 완료되지 않았습니다.</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Emblem;