// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Glove({grade, setOption, optionPer}) {
    const classname = "glove"

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
<option value = {9.0909}>STR : +12%</option>
<option value = {9.0909}>DEX : +12%</option>
<option value = {9.0909}>INT : +12%</option>
<option value = {9.0909}>LUK : +12%</option>
<option value = {9.0909}>최대 HP : +12%</option>
<option value = {9.0909}>최대 MP : +12%</option>
<option value = {9.0909}>방어력 : +12%</option>
<option value = {9.0909}>크리티컬 데미지 : +8%</option>
<option value = {6.8182}>올스탯 : +9%</option>
<option value = {6.8182}>피격 시 10% 확률로 데미지의 20% 무시</option>
<option value = {6.8182}>피격 시 10% 확률로 데미지의 40% 무시</option>
<option value = {6.8182}>쓸만한 윈드 부스터 스킬 사용 가능</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>상관 없음</option>
<option value = {8.4091}>STR : +??%</option>
<option value = {8.4091}>DEX : +??%</option>
<option value = {8.4091}>INT : +??%</option>
<option value = {8.4091}>LUK : +??%</option>
<option value = {9.9091}>최대 HP : +??%</option>
<option value = {9.9091}>최대 MP : +??%</option>
<option value = {6.9091000000000005}>방어력 : +??%</option>
<option value = {6.6818}>올스탯 : +??%</option>
<option value = {7.5000}>STR : +9%</option>
<option value = {7.5000}>DEX : +9%</option>
<option value = {7.5000}>INT : +9%</option>
<option value = {7.5000}>LUK : +9%</option>
<option value = {9.0000}>최대 HP : +9%</option>
<option value = {9.0000}>최대 MP : +9%</option>
<option value = {6.0000}>방어력 : +9%</option>
<option value = {6.0000}>올스탯 : +6%</option>
<option value = {1.5000}>캐릭터 기준 10레벨 당 STR : +1</option>
<option value = {1.5000}>캐릭터 기준 10레벨 당 DEX : +1</option>
<option value = {1.5000}>캐릭터 기준 10레벨 당 INT : +1</option>
<option value = {1.5000}>캐릭터 기준 10레벨 당 LUK : +1</option>
<option value = {6.0000}>피격 시 5% 확률로 데미지의 20% 무시</option>
<option value = {6.0000}>피격 시 5% 확률로 데미지의 40% 무시</option>
<option value = {6.0000}>HP 회복 아이템 및 회복 스킬 효율 : +30%</option>
<option value = {6.0000}>{"<쓸만한 샤프 아이즈> 스킬 사용 가능"}</option>
<option value = {0.9091}>STR : +12%</option>
<option value = {0.9091}>DEX : +12%</option>
<option value = {0.9091}>INT : +12%</option>
<option value = {0.9091}>LUK : +12%</option>
<option value = {0.9091}>최대 HP : +12%</option>
<option value = {0.9091}>최대 MP : +12%</option>
<option value = {0.9091}>방어력 : +12%</option>
<option value = {0.9091}>크리티컬 데미지 : +8%</option>
<option value = {0.6818}>올스탯 : +9%</option>
<option value = {0.6818}>피격 시 10% 확률로 데미지의 20% 무시</option>
<option value = {0.6818}>피격 시 10% 확률로 데미지의 40% 무시</option>
<option value = {0.6818}>{"<쓸만한 윈드 부스터> 스킬 사용 가능"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {8.3409}>{"STR : +??%"}</option>
<option value = {8.3409}>{"DEX : +??%"}</option>
<option value = {8.3409}>{"INT : +??%"}</option>
<option value = {8.3409}>{"LUK : +??%"}</option>
<option value = {9.9909}>{"최대 HP : +??%"}</option>
<option value = {9.9909}>{"최대 MP : +??%"}</option>
<option value = {6.6909}>{"방어력 : +??%"}</option>
<option value = {6.6682}>{"올스탯 : +??%"}</option>
<option value = {8.2500}>{"STR : +9%"}</option>
<option value = {8.2500}>{"DEX : +9%"}</option>
<option value = {8.2500}>{"INT : +9%"}</option>
<option value = {8.2500}>{"LUK : +9%"}</option>
<option value = {9.9000}>{"최대 HP : +9%"}</option>
<option value = {9.9000}>{"최대 MP : +9%"}</option>
<option value = {6.6000}>{"방어력 : +9%"}</option>
<option value = {6.6000}>{"올스탯 : +6%"}</option>
<option value = {1.6500}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
<option value = {1.6500}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
<option value = {1.6500}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
<option value = {1.6500}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
<option value = {6.6000}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {6.6000}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {6.6000}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {6.6000}>{"<쓸만한 샤프 아이즈> 스킬 사용 가능"}</option>
<option value = {0.0909}>{"STR : +12%"}</option>
<option value = {0.0909}>{"DEX : +12%"}</option>
<option value = {0.0909}>{"INT : +12%"}</option>
<option value = {0.0909}>{"LUK : +12%"}</option>
<option value = {0.0909}>{"최대 HP : +12%"}</option>
<option value = {0.0909}>{"최대 MP : +12%"}</option>
<option value = {0.0909}>{"방어력 : +12%"}</option>
<option value = {0.0909}>{"크리티컬 데미지 : +8%"}</option>
<option value = {0.0682}>{"올스탯 : +9%"}</option>
<option value = {0.0682}>{"피격 시 10% 확률로 데미지의 20% 무시"}</option>
<option value = {0.0682}>{"피격 시 10% 확률로 데미지의 40% 무시"}</option>
<option value = {0.0682}>{"<쓸만한 윈드 부스터> 스킬 사용 가능"}</option>
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
<option value = {8.3333}>{"STR : +9%"}</option>
<option value = {8.3333}>{"DEX : +9%"}</option>
<option value = {8.3333}>{"INT : +9%"}</option>
<option value = {8.3333}>{"LUK : +9%"}</option>
<option value = {10.0000}>{"최대 HP : +9%"}</option>
<option value = {10.0000}>{"최대 MP : +9%"}</option>
<option value = {6.6667}>{"방어력 : +9%"}</option>
<option value = {6.6667}>{"올스탯 : +6%"}</option>
<option value = {1.6667}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
<option value = {1.6667}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
<option value = {1.6667}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
<option value = {1.6667}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
<option value = {6.6667}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {6.6667}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {6.6667}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {6.6667}>{"<쓸만한 샤프 아이즈> 스킬 사용 가능"}</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {11.8089}>{"STR : +??%"}</option>
<option value = {11.8089}>{"DEX : +??%"}</option>
<option value = {11.8089}>{"INT : +??%"}</option>
<option value = {11.8089}>{"LUK : +??%"}</option>
<option value = {11.9756}>{"최대 HP : +??%"}</option>
<option value = {11.9756}>{"최대 MP : +??%"}</option>
<option value = {7.2520999999999995}>{"방어력 : +??%"}</option>
<option value = {5.0569}>{"올스탯 : +??%"}</option>
<option value = {10.9756}>{"STR : +6%"}</option>
<option value = {10.9756}>{"DEX : +6%"}</option>
<option value = {10.9756}>{"INT : +6%"}</option>
<option value = {10.9756}>{"LUK : +6%"}</option>
<option value = {10.9756}>{"최대 HP : +6%"}</option>
<option value = {10.9756}>{"최대 MP : +6%"}</option>
<option value = {6.5854}>{"방어력 : +6%"}</option>
<option value = {4.3902}>{"올스탯 : +3%"}</option>
<option value = {6.5854}>{"몬스터 처치 시 15% 확률로 95의 HP 회복"}</option>
<option value = {6.5854}>{"몬스터 처치 시 15% 확률로 95의 MP 회복"}</option>
<option value = {0.8333}>{"STR : +9%"}</option>
<option value = {0.8333}>{"DEX : +9%"}</option>
<option value = {0.8333}>{"INT : +9%"}</option>
<option value = {0.8333}>{"LUK : +9%"}</option>
<option value = {1.0000}>{"최대 HP : +9%"}</option>
<option value = {1.0000}>{"최대 MP : +9%"}</option>
<option value = {0.6667}>{"방어력 : +9%"}</option>
<option value = {0.6667}>{"올스탯 : +6%"}</option>
<option value = {0.1667}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
<option value = {0.1667}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
<option value = {0.1667}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
<option value = {0.1667}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
<option value = {0.6667}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {0.6667}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {0.6667}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {0.6667}>{"<쓸만한 샤프 아이즈> 스킬 사용 가능"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {12.1565}>{"STR : +??%"}</option>
<option value = {12.1565}>{"DEX : +??%"}</option>
<option value = {12.1565}>{"INT : +??%"}</option>
<option value = {12.1565}>{"LUK : +??%"}</option>
<option value = {12.1732}>{"최대 HP : +??%"}</option>
<option value = {12.1732}>{"최대 MP : +??%"}</option>
<option value = {7.3106}>{"방어력 : +??%"}</option>
<option value = {4.896}>{"올스탯 : +??%"}</option>
<option value = {12.0732}>{"STR : +6%"}</option>
<option value = {12.0732}>{"DEX : +6%"}</option>
<option value = {12.0732}>{"INT : +6%"}</option>
<option value = {12.0732}>{"LUK : +6%"}</option>
<option value = {12.0732}>{"최대 HP : +6%"}</option>
<option value = {12.0732}>{"최대 MP : +6%"}</option>
<option value = {7.2439}>{"방어력 : +6%"}</option>
<option value = {4.8293}>{"올스탯 : +3%"}</option>
<option value = {7.2439}>{"몬스터 처치 시 15% 확률로 95의 HP 회복"}</option>
<option value = {7.2439}>{"몬스터 처치 시 15% 확률로 95의 MP 회복"}</option>
<option value = {0.0833}>{"STR : +9%"}</option>
<option value = {0.0833}>{"DEX : +9%"}</option>
<option value = {0.0833}>{"INT : +9%"}</option>
<option value = {0.0833}>{"LUK : +9%"}</option>
<option value = {0.1000}>{"최대 HP : +9%"}</option>
<option value = {0.1000}>{"최대 MP : +9%"}</option>
<option value = {0.0667}>{"방어력 : +9%"}</option>
<option value = {0.0667}>{"올스탯 : +6%"}</option>
<option value = {0.0167}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
<option value = {0.0167}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
<option value = {0.0167}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
<option value = {0.0167}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
<option value = {0.0667}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {0.0667}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {0.0667}>{"HP 회복 아이템 및 회복 스킬 효율 : +30%"}</option>
<option value = {0.0667}>{"<쓸만한 샤프 아이즈> 스킬 사용 가능"}</option>
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
                <option value={12.1951}>{"STR : +6%"}</option>
                <option value={12.1951}>{"DEX : +6%"}</option>
                <option value={12.1951}>{"INT : +6%"}</option>
                <option value={12.1951}>{"LUK : +6%"}</option>
                <option value={12.1951}>{"최대 HP : +6%"}</option>
                <option value={12.1951}>{"최대 MP : +6%"}</option>
                <option value={7.3171}>{"방어력 : +6%"}</option>
                <option value={4.878}>{"올스탯 : +3%"}</option>
                <option value={7.3171}>
                  {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
                </option>
                <option value={7.3171}>
                  {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
                </option>
              </select>
            </div>

            <div id={"option2"}>
              <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={7.9695}>{"STR : +??%"}</option>
                <option value={7.9695}>{"DEX : +??%"}</option>
                <option value={7.9695}>{"INT : +??%"}</option>
                <option value={7.9695}>{"LUK : +??%"}</option>
                <option value={5.7195}>{"최대 HP : +??%"}</option>
                <option value={5.7195}>{"최대 MP : +??%"}</option>
                <option value={5.2317}>{"방어력 : +??%"}</option>
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
                <option value={1.2195}>{"STR : +6%"}</option>
                <option value={1.2195}>{"DEX : +6%"}</option>
                <option value={1.2195}>{"INT : +6%"}</option>
                <option value={1.2195}>{"LUK : +6%"}</option>
                <option value={1.2195}>{"최대 HP : +6%"}</option>
                <option value={1.2195}>{"최대 MP : +6%"}</option>
                <option value={0.7317}>{"방어력 : +6%"}</option>
                <option value={0.4878}>{"올스탯 : +3%"}</option>
                <option value={0.7317}>
                  {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
                </option>
                <option value={0.7317}>
                  {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
                </option>
              </select>
            </div>

            <div id={"option3"}>
              <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={7.547}>{"STR : +??%"}</option>
                <option value={7.547}>{"DEX : +??%"}</option>
                <option value={7.547}>{"INT : +??%"}</option>
                <option value={7.547}>{"LUK : +??%"}</option>
                <option value={5.072}>{"최대 HP : +??%"}</option>
                <option value={5.072}>{"최대 MP : +??%"}</option>
                <option value={5.0232}>{"방어력 : +??%"}</option>
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
                <option value={0.122}>{"STR : +6%"}</option>
                <option value={0.122}>{"DEX : +6%"}</option>
                <option value={0.122}>{"INT : +6%"}</option>
                <option value={0.122}>{"LUK : +6%"}</option>
                <option value={0.122}>{"최대 HP : +6%"}</option>
                <option value={0.122}>{"최대 MP : +6%"}</option>
                <option value={0.0732}>{"방어력 : +6%"}</option>
                <option value={0.0488}>{"올스탯 : +3%"}</option>
                <option value={0.0732}>
                  {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
                </option>
                <option value={0.0732}>
                  {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
                </option>
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

export default Glove;