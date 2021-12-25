// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Ear({grade, setOption, optionPer}) {
    const classname = "ear"

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
                    <option value = {100}>{"상관 없음"}</option>
<option value = {9.3023}>{"STR : +12%"}</option>
<option value = {9.3023}>{"DEX : +12%"}</option>
<option value = {9.3023}>{"INT : +12%"}</option>
<option value = {9.3023}>{"LUK : +12%"}</option>
<option value = {9.3023}>{"최대 HP : +12%"}</option>
<option value = {9.3023}>{"최대 MP : +12%"}</option>
<option value = {9.3023}>{"방어력 : +12%"}</option>
<option value = {6.9767}>{"올스탯 : +9%"}</option>
<option value = {6.9767}>{"모든 스킬의 MP 소모 : -15%"}</option>
<option value = {6.9767}>{"모든 스킬의 MP 소모 : -30%"}</option>
<option value = {6.9767}>{"메소 획득량 : +20%"}</option>
<option value = {6.9767}>{"아이템 드롭률 : +20%"}</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {10.2273}>{"STR : +9%"}</option>
<option value = {10.2273}>{"DEX : +9%"}</option>
<option value = {10.2273}>{"INT : +9%"}</option>
<option value = {10.2273}>{"LUK : +9%"}</option>
<option value = {12.2727}>{"최대 HP : +9%"}</option>
<option value = {12.2727}>{"최대 MP : +9%"}</option>
<option value = {8.1818}>{"방어력 : +9%"}</option>
<option value = {8.1818}>{"올스탯 : +6%"}</option>
<option value = {8.1818}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {0.9302}>{"STR : +12%"}</option>
<option value = {0.9302}>{"DEX : +12%"}</option>
<option value = {0.9302}>{"INT : +12%"}</option>
<option value = {0.9302}>{"LUK : +12%"}</option>
<option value = {0.9302}>{"최대 HP : +12%"}</option>
<option value = {0.9302}>{"최대 MP : +12%"}</option>
<option value = {0.9302}>{"방어력 : +12%"}</option>
<option value = {0.6977}>{"올스탯 : +9%"}</option>
<option value = {0.6977}>{"모든 스킬의 MP 소모 : -15%"}</option>
<option value = {0.6977}>{"모든 스킬의 MP 소모 : -30%"}</option>
<option value = {0.6977}>{"메소 획득량 : +20%"}</option>
<option value = {0.6977}>{"아이템 드롭률 : +20%"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {11.2500}>{"STR : +9%"}</option>
<option value = {11.2500}>{"DEX : +9%"}</option>
<option value = {11.2500}>{"INT : +9%"}</option>
<option value = {11.2500}>{"LUK : +9%"}</option>
<option value = {13.5000}>{"최대 HP : +9%"}</option>
<option value = {13.5000}>{"최대 MP : +9%"}</option>
<option value = {9.0000}>{"방어력 : +9%"}</option>
<option value = {9.0000}>{"올스탯 : +6%"}</option>
<option value = {9.0000}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {0.0930}>{"STR : +12%"}</option>
<option value = {0.0930}>{"DEX : +12%"}</option>
<option value = {0.0930}>{"INT : +12%"}</option>
<option value = {0.0930}>{"LUK : +12%"}</option>
<option value = {0.0930}>{"최대 HP : +12%"}</option>
<option value = {0.0930}>{"최대 MP : +12%"}</option>
<option value = {0.0930}>{"방어력 : +12%"}</option>
<option value = {0.0698}>{"올스탯 : +9%"}</option>
<option value = {0.0698}>{"모든 스킬의 MP 소모 : -15%"}</option>
<option value = {0.0698}>{"모든 스킬의 MP 소모 : -30%"}</option>
<option value = {0.0698}>{"메소 획득량 : +20%"}</option>
<option value = {0.0698}>{"아이템 드롭률 : +20%"}</option>
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
                    <option value = {100}>{"상관 없음"}</option>
<option value = {11.3636}>{"STR : +9%"}</option>
<option value = {11.3636}>{"DEX : +9%"}</option>
<option value = {11.3636}>{"INT : +9%"}</option>
<option value = {11.3636}>{"LUK : +9%"}</option>
<option value = {13.6364}>{"최대 HP : +9%"}</option>
<option value = {13.6364}>{"최대 MP : +9%"}</option>
<option value = {9.0909}>{"방어력 : +9%"}</option>
<option value = {9.0909}>{"올스탯 : +6%"}</option>
<option value = {9.0909}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {13.993500000000001}>{"STR : +??%"}</option>
<option value = {13.993500000000001}>{"DEX : +??%"}</option>
<option value = {13.993500000000001}>{"INT : +??%"}</option>
<option value = {13.993500000000001}>{"LUK : +??%"}</option>
<option value = {14.2207}>{"최대 HP : +??%"}</option>
<option value = {14.2207}>{"최대 MP : +??%"}</option>
<option value = {8.6234}>{"방어력 : +??%"}</option>
<option value = {6.052}>{"올스탯 : +??%"}</option>
<option value = {12.8571}>{"STR : +6%"}</option>
<option value = {12.8571}>{"DEX : +6%"}</option>
<option value = {12.8571}>{"INT : +6%"}</option>
<option value = {12.8571}>{"LUK : +6%"}</option>
<option value = {12.8571}>{"최대 HP : +6%"}</option>
<option value = {12.8571}>{"최대 MP : +6%"}</option>
<option value = {7.7143}>{"방어력 : +6%"}</option>
<option value = {5.1429}>{"올스탯 : +3%"}</option>
<option value = {1.1364}>{"STR : +9%"}</option>
<option value = {1.1364}>{"DEX : +9%"}</option>
<option value = {1.1364}>{"INT : +9%"}</option>
<option value = {1.1364}>{"LUK : +9%"}</option>
<option value = {1.3636}>{"최대 HP : +9%"}</option>
<option value = {1.3636}>{"최대 MP : +9%"}</option>
<option value = {0.9091}>{"방어력 : +9%"}</option>
<option value = {0.9091}>{"올스탯 : +6%"}</option>
<option value = {0.9091}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {14.256499999999999}>{"STR : +??%"}</option>
<option value = {14.256499999999999}>{"DEX : +??%"}</option>
<option value = {14.256499999999999}>{"INT : +??%"}</option>
<option value = {14.256499999999999}>{"LUK : +??%"}</option>
<option value = {14.2793}>{"최대 HP : +??%"}</option>
<option value = {14.2793}>{"최대 MP : +??%"}</option>
<option value = {8.5766}>{"방어력 : +??%"}</option>
<option value = {5.748}>{"올스탯 : +??%"}</option>
<option value = {14.1429}>{"STR : +6%"}</option>
<option value = {14.1429}>{"DEX : +6%"}</option>
<option value = {14.1429}>{"INT : +6%"}</option>
<option value = {14.1429}>{"LUK : +6%"}</option>
<option value = {14.1429}>{"최대 HP : +6%"}</option>
<option value = {14.1429}>{"최대 MP : +6%"}</option>
<option value = {8.4857}>{"방어력 : +6%"}</option>
<option value = {5.6571}>{"올스탯 : +3%"}</option>
<option value = {0.1136}>{"STR : +9%"}</option>
<option value = {0.1136}>{"DEX : +9%"}</option>
<option value = {0.1136}>{"INT : +9%"}</option>
<option value = {0.1136}>{"LUK : +9%"}</option>
<option value = {0.1364}>{"최대 HP : +9%"}</option>
<option value = {0.1364}>{"최대 MP : +9%"}</option>
<option value = {0.0909}>{"방어력 : +9%"}</option>
<option value = {0.0909}>{"올스탯 : +6%"}</option>
<option value = {0.0909}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
                    </select>
                </div>
            </div>
        )
    }

    else if (grade === 'E'){
        return (
          <div className={classname}>
            <div id={"option1"}>
              <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={14.2857}>{"STR : +6%"}</option>
                <option value={14.2857}>{"DEX : +6%"}</option>
                <option value={14.2857}>{"INT : +6%"}</option>
                <option value={14.2857}>{"LUK : +6%"}</option>
                <option value={14.2857}>{"최대 HP : +6%"}</option>
                <option value={14.2857}>{"최대 MP : +6%"}</option>
                <option value={8.5714}>{"방어력 : +6%"}</option>
                <option value={5.7143}>{"올스탯 : +3%"}</option>
              </select>
            </div>

            <div id={"option2"}>
              <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={8.1786}>{"STR : +??%"}</option>
                <option value={8.1786}>{"DEX : +??%"}</option>
                <option value={8.1786}>{"INT : +??%"}</option>
                <option value={8.1786}>{"LUK : +??%"}</option>
                <option value={5.9286}>{"최대 HP : +??%"}</option>
                <option value={5.9286}>{"최대 MP : +??%"}</option>
                <option value={5.3571}>{"방어력 : +??%"}</option>
                <option value={6.75}>{"STR : +12"}</option>
                <option value={6.75}>{"DEX : +12"}</option>
                <option value={6.75}>{"INT : +12"}</option>
                <option value={6.75}>{"LUK : +12"}</option>
                <option value={6.75}>{"최대 HP : +120"}</option>
                <option value={6.75}>{"최대 MP : +120"}</option>
                <option value={4.5}>{"방어력 : +120"}</option>
                <option value={6.75}>{"STR : +3%"}</option>
                <option value={6.75}>{"DEX : +3%"}</option>
                <option value={6.75}>{"INT : +3%"}</option>
                <option value={6.75}>{"LUK : +3%"}</option>
                <option value={4.5}>{"최대 HP : +3%"}</option>
                <option value={4.5}>{"최대 MP : +3%"}</option>
                <option value={4.5}>{"방어력 : +3%"}</option>
                <option value={4.5}>{"올스탯 : +5"}</option>
                <option value={1.4286}>{"STR : +6%"}</option>
                <option value={1.4286}>{"DEX : +6%"}</option>
                <option value={1.4286}>{"INT : +6%"}</option>
                <option value={1.4286}>{"LUK : +6%"}</option>
                <option value={1.4286}>{"최대 HP : +6%"}</option>
                <option value={1.4286}>{"최대 MP : +6%"}</option>
                <option value={0.8571}>{"방어력 : +6%"}</option>
                <option value={0.5714}>{"올스탯 : +3%"}</option>
              </select>
            </div>

            <div id={"option3"}>
              <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={7.5679}>{"STR : +??%"}</option>
                <option value={7.5679}>{"DEX : +??%"}</option>
                <option value={7.5679}>{"INT : +??%"}</option>
                <option value={7.5679}>{"LUK : +??%"}</option>
                <option value={5.0929}>{"최대 HP : +??%"}</option>
                <option value={5.0929}>{"최대 MP : +??%"}</option>
                <option value={5.0357}>{"방어력 : +??%"}</option>
                <option value={7.425}>{"STR : +12"}</option>
                <option value={7.425}>{"DEX : +12"}</option>
                <option value={7.425}>{"INT : +12"}</option>
                <option value={7.425}>{"LUK : +12"}</option>
                <option value={7.425}>{"최대 HP : +120"}</option>
                <option value={7.425}>{"최대 MP : +120"}</option>
                <option value={4.95}>{"방어력 : +120"}</option>
                <option value={7.425}>{"STR : +3%"}</option>
                <option value={7.425}>{"DEX : +3%"}</option>
                <option value={7.425}>{"INT : +3%"}</option>
                <option value={7.425}>{"LUK : +3%"}</option>
                <option value={4.95}>{"최대 HP : +3%"}</option>
                <option value={4.95}>{"최대 MP : +3%"}</option>
                <option value={4.95}>{"방어력 : +3%"}</option>
                <option value={4.95}>{"올스탯 : +5"}</option>
                <option value={0.1429}>{"STR : +6%"}</option>
                <option value={0.1429}>{"DEX : +6%"}</option>
                <option value={0.1429}>{"INT : +6%"}</option>
                <option value={0.1429}>{"LUK : +6%"}</option>
                <option value={0.1429}>{"최대 HP : +6%"}</option>
                <option value={0.1429}>{"최대 MP : +6%"}</option>
                <option value={0.0857}>{"방어력 : +6%"}</option>
                <option value={0.0571}>{"올스탯 : +3%"}</option>
              </select>
            </div>
          </div>
        );
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

export default Ear;