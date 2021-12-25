// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Up({grade, setOption, optionPer}) {
    const classname = "up"

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
                    <option value = {100}>상관 없음</option>
<option value = {9.3023}>STR : +12%</option>
<option value = {9.3023}>DEX : +12%</option>
<option value = {9.3023}>INT : +12%</option>
<option value = {9.3023}>LUK : +12%</option>
<option value = {9.3023}>최대 HP : +12%</option>
<option value = {9.3023}>최대 MP : +12%</option>
<option value = {9.3023}>방어력 : +12%</option>
<option value = {6.9767}>올스탯 : +9%</option>
<option value = {6.9767}>피격 시 10% 확률로 데미지의 20% 무시</option>
<option value = {6.9767}>피격 시 10% 확률로 데미지의 40% 무시</option>
<option value = {6.9767}>피격 후 무적시간 : +3초</option>
<option value = {6.9767}>피격 시 4% 확률로 7초간 무적</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>상관 없음</option>
<option value = {7.7484}>STR : +??%</option>
<option value = {7.7484}>DEX : +??%</option>
<option value = {7.7484}>INT : +??%</option>
<option value = {7.7484}>LUK : +??%</option>
<option value = {9.112}>최대 HP : +??%</option>
<option value = {9.112}>최대 MP : +??%</option>
<option value = {6.3847000000000005}>방어력 : +??%</option>
<option value = {6.152200000000001}>올스탯 : +??%</option>
<option value = {6.8182}>STR : +9%</option>
<option value = {6.8182}>DEX : +9%</option>
<option value = {6.8182}>INT : +9%</option>
<option value = {6.8182}>LUK : +9%</option>
<option value = {8.1818}>최대 HP : +9%</option>
<option value = {8.1818}>최대 MP : +9%</option>
<option value = {5.4545}>방어력 : +9%</option>
<option value = {5.4545}>올스탯 : +6%</option>
<option value = {5.4545}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {5.4545}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {5.4545}>피격 후 무적시간 : +2초</option>
<option value = {5.4545}>피격 시 2% 확률로 7초간 무적</option>
<option value = {5.4545}>30% 확률로 받은 피해의 50%를 반사</option>
<option value = {2.7273}>30% 확률로 받은 피해의 70%를 반사</option>
<option value = {5.4545}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
<option value = {0.9302}>STR : +12%</option>
<option value = {0.9302}>DEX : +12%</option>
<option value = {0.9302}>INT : +12%</option>
<option value = {0.9302}>LUK : +12%</option>
<option value = {0.9302}>최대 HP : +12%</option>
<option value = {0.9302}>최대 MP : +12%</option>
<option value = {0.9302}>방어력 : +12%</option>
<option value = {0.6977}>올스탯 : +9%</option>
<option value = {0.6977}>피격 시 10% 확률로 데미지의 20% 무시</option>
<option value = {0.6977}>피격 시 10% 확률로 데미지의 40% 무시</option>
<option value = {0.6977}>피격 후 무적시간 : +3초</option>
<option value = {0.6977}>피격 시 4% 확률로 7초간 무적</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>상관 없음</option>
<option value = {7.593}>STR : +??%</option>
<option value = {7.593}>DEX : +??%</option>
<option value = {7.593}>INT : +??%</option>
<option value = {7.593}>LUK : +??%</option>
<option value = {9.093}>최대 HP : +??%</option>
<option value = {9.093}>최대 MP : +??%</option>
<option value = {6.093}>방어력 : +??%</option>
<option value = {6.0698}>올스탯 : +??%</option>
<option value = {7.5000}>STR : +9%</option>
<option value = {7.5000}>DEX : +9%</option>
<option value = {7.5000}>INT : +9%</option>
<option value = {7.5000}>LUK : +9%</option>
<option value = {9.0000}>최대 HP : +9%</option>
<option value = {9.0000}>최대 MP : +9%</option>
<option value = {6.0000}>방어력 : +9%</option>
<option value = {6.0000}>올스탯 : +6%</option>
<option value = {6.0000}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {6.0000}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {6.0000}>피격 후 무적시간 : +2초</option>
<option value = {6.0000}>피격 시 2% 확률로 7초간 무적</option>
<option value = {6.0000}>30% 확률로 받은 피해의 50%를 반사</option>
<option value = {3.0000}>30% 확률로 받은 피해의 70%를 반사</option>
<option value = {6.0000}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
<option value = {0.0930}>STR : +12%</option>
<option value = {0.0930}>DEX : +12%</option>
<option value = {0.0930}>INT : +12%</option>
<option value = {0.0930}>LUK : +12%</option>
<option value = {0.0930}>최대 HP : +12%</option>
<option value = {0.0930}>최대 MP : +12%</option>
<option value = {0.0930}>방어력 : +12%</option>
<option value = {0.0698}>올스탯 : +9%</option>
<option value = {0.0698}>피격 시 10% 확률로 데미지의 20% 무시</option>
<option value = {0.0698}>피격 시 10% 확률로 데미지의 40% 무시</option>
<option value = {0.0698}>피격 후 무적시간 : +3초</option>
<option value = {0.0698}>피격 시 4% 확률로 7초간 무적</option>
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
                    <option value = {100}>상관 없음</option>
<option value = {7.5758}>STR : +9%</option>
<option value = {7.5758}>DEX : +9%</option>
<option value = {7.5758}>INT : +9%</option>
<option value = {7.5758}>LUK : +9%</option>
<option value = {9.0909}>최대 HP : +9%</option>
<option value = {9.0909}>최대 MP : +9%</option>
<option value = {6.0606}>방어력 : +9%</option>
<option value = {6.0606}>올스탯 : +6%</option>
<option value = {6.0606}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {6.0606}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {6.0606}>피격 후 무적시간 : +2초</option>
<option value = {6.0606}>피격 시 2% 확률로 7초간 무적</option>
<option value = {6.0606}>30% 확률로 받은 피해의 50%를 반사</option>
<option value = {3.0303}>30% 확률로 받은 피해의 70%를 반사</option>
<option value = {6.0606}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>상관 없음</option>
<option value = {12.5997}>STR : +??%</option>
<option value = {12.5997}>DEX : +??%</option>
<option value = {12.5997}>INT : +??%</option>
<option value = {12.5997}>LUK : +??%</option>
<option value = {12.7512}>최대 HP : +??%</option>
<option value = {12.7512}>최대 MP : +??%</option>
<option value = {7.711399999999999}>방어력 : +??%</option>
<option value = {5.342899999999999}>올스탯 : +??%</option>
<option value = {11.8421}>STR : +6%</option>
<option value = {11.8421}>DEX : +6%</option>
<option value = {11.8421}>INT : +6%</option>
<option value = {11.8421}>LUK : +6%</option>
<option value = {11.8421}>최대 HP : +6%</option>
<option value = {11.8421}>최대 MP : +6%</option>
<option value = {7.1053}>방어력 : +6%</option>
<option value = {4.7368}>올스탯 : +3%</option>
<option value = {7.1053}>피격 후 무적시간 : +1초</option>
<option value = {0.7576}>STR : +9%</option>
<option value = {0.7576}>DEX : +9%</option>
<option value = {0.7576}>INT : +9%</option>
<option value = {0.7576}>LUK : +9%</option>
<option value = {0.9091}>최대 HP : +9%</option>
<option value = {0.9091}>최대 MP : +9%</option>
<option value = {0.6061}>방어력 : +9%</option>
<option value = {0.6061}>올스탯 : +6%</option>
<option value = {0.6061}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {0.6061}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {0.6061}>피격 후 무적시간 : +2초</option>
<option value = {0.6061}>피격 시 2% 확률로 7초간 무적</option>
<option value = {0.6061}>30% 확률로 받은 피해의 50%를 반사</option>
<option value = {0.3030}>30% 확률로 받은 피해의 70%를 반사</option>
<option value = {0.6061}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>상관 없음</option>
<option value = {13.1021}>STR : +??%</option>
<option value = {13.1021}>DEX : +??%</option>
<option value = {13.1021}>INT : +??%</option>
<option value = {13.1021}>LUK : +??%</option>
<option value = {13.1172}>최대 HP : +??%</option>
<option value = {13.1172}>최대 MP : +??%</option>
<option value = {7.8764}>방어력 : +??%</option>
<option value = {5.2711}>올스탯 : +??%</option>
<option value = {13.0263}>STR : +6%</option>
<option value = {13.0263}>DEX : +6%</option>
<option value = {13.0263}>INT : +6%</option>
<option value = {13.0263}>LUK : +6%</option>
<option value = {13.0263}>최대 HP : +6%</option>
<option value = {13.0263}>최대 MP : +6%</option>
<option value = {7.8158}>방어력 : +6%</option>
<option value = {5.2105}>올스탯 : +3%</option>
<option value = {7.8158}>피격 후 무적시간 : +1초</option>
<option value = {0.0758}>STR : +9%</option>
<option value = {0.0758}>DEX : +9%</option>
<option value = {0.0758}>INT : +9%</option>
<option value = {0.0758}>LUK : +9%</option>
<option value = {0.0909}>최대 HP : +9%</option>
<option value = {0.0909}>최대 MP : +9%</option>
<option value = {0.0606}>방어력 : +9%</option>
<option value = {0.0606}>올스탯 : +6%</option>
<option value = {0.0606}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {0.0606}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {0.0606}>피격 후 무적시간 : +2초</option>
<option value = {0.0606}>피격 시 2% 확률로 7초간 무적</option>
<option value = {0.0606}>30% 확률로 받은 피해의 50%를 반사</option>
<option value = {0.0303}>30% 확률로 받은 피해의 70%를 반사</option>
<option value = {0.0606}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
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
                <option value={100}>상관 없음</option>
                <option value={13.1579}>STR : +6%</option>
                <option value={13.1579}>DEX : +6%</option>
                <option value={13.1579}>INT : +6%</option>
                <option value={13.1579}>LUK : +6%</option>
                <option value={13.1579}>최대 HP : +6%</option>
                <option value={13.1579}>최대 MP : +6%</option>
                <option value={7.8947}>방어력 : +6%</option>
                <option value={5.2632}>올스탯 : +3%</option>
                <option value={7.8947}>피격 후 무적시간 : +1초</option>
              </select>
            </div>

            <div id={"option2"}>
              <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>상관 없음</option>
                <option value={8.0658}>STR : +??%</option>
                <option value={8.0658}>DEX : +??%</option>
                <option value={8.0658}>INT : +??%</option>
                <option value={8.0658}>LUK : +??%</option>
                <option value={5.8158}>최대 HP : +??%</option>
                <option value={5.8158}>최대 MP : +??%</option>
                <option value={5.2895}>방어력 : +??%</option>
                <option value={6.75}>STR : +12</option>
                <option value={6.75}>DEX : +12</option>
                <option value={6.75}>INT : +12</option>
                <option value={6.75}>LUK : +12</option>
                <option value={6.75}>최대 HP : +120</option>
                <option value={6.75}>최대 MP : +120</option>
                <option value={4.5}>방어력 : +120</option>
                <option value={6.75}>STR : +3%</option>
                <option value={6.75}>DEX : +3%</option>
                <option value={6.75}>INT : +3%</option>
                <option value={6.75}>LUK : +3%</option>
                <option value={4.5}>최대 HP : +3%</option>
                <option value={4.5}>최대 MP : +3%</option>
                <option value={4.5}>방어력 : +3%</option>
                <option value={4.5}>올스탯 : +5</option>
                <option value={1.3158}>STR : +6%</option>
                <option value={1.3158}>DEX : +6%</option>
                <option value={1.3158}>INT : +6%</option>
                <option value={1.3158}>LUK : +6%</option>
                <option value={1.3158}>최대 HP : +6%</option>
                <option value={1.3158}>최대 MP : +6%</option>
                <option value={0.7895}>방어력 : +6%</option>
                <option value={0.5263}>올스탯 : +3%</option>
                <option value={0.7895}>피격 후 무적시간 : +1초</option>
              </select>
            </div>

            <div id={"option3"}>
              <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>상관 없음</option>
                <option value={7.5565999999999995}>STR : +??%</option>
                <option value={7.5565999999999995}>DEX : +??%</option>
                <option value={7.5565999999999995}>INT : +??%</option>
                <option value={7.5565999999999995}>LUK : +??%</option>
                <option value={5.0816}>최대 HP : +??%</option>
                <option value={5.0816}>최대 MP : +??%</option>
                <option value={5.0289}>방어력 : +??%</option>
                <option value={7.425}>STR : +12</option>
                <option value={7.425}>DEX : +12</option>
                <option value={7.425}>INT : +12</option>
                <option value={7.425}>LUK : +12</option>
                <option value={7.425}>최대 HP : +120</option>
                <option value={7.425}>최대 MP : +120</option>
                <option value={4.95}>방어력 : +120</option>
                <option value={7.425}>STR : +3%</option>
                <option value={7.425}>DEX : +3%</option>
                <option value={7.425}>INT : +3%</option>
                <option value={7.425}>LUK : +3%</option>
                <option value={4.95}>최대 HP : +3%</option>
                <option value={4.95}>최대 MP : +3%</option>
                <option value={4.95}>방어력 : +3%</option>
                <option value={4.95}>올스탯 : +5</option>
                <option value={0.1316}>STR : +6%</option>
                <option value={0.1316}>DEX : +6%</option>
                <option value={0.1316}>INT : +6%</option>
                <option value={0.1316}>LUK : +6%</option>
                <option value={0.1316}>최대 HP : +6%</option>
                <option value={0.1316}>최대 MP : +6%</option>
                <option value={0.0789}>방어력 : +6%</option>
                <option value={0.0526}>올스탯 : +3%</option>
                <option value={0.0789}>피격 후 무적시간 : +1초</option>
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

export default Up;