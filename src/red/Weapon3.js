// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Weapon3({grade, setOption, optionPer}) {
    const classname = "weapon3"

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
<option value = {8.5106}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {12.7659}>{"보스 몬스터 공격 시 데미지 : +??%"}</option>
<option value = {8.5106}>{"STR : +12%"}</option>
<option value = {8.5106}>{"DEX : +12%"}</option>
<option value = {8.5106}>{"INT : +12%"}</option>
<option value = {8.5106}>{"LUK : +12%"}</option>
<option value = {4.2553}>{"공격력 : +12%"}</option>
<option value = {4.2553}>{"마력 : +12%"}</option>
<option value = {4.2553}>{"크리티컬 확률 : +12%"}</option>
<option value = {4.2553}>{"데미지 : +12%"}</option>
<option value = {6.3830}>{"올스탯 : +9%"}</option>
<option value = {4.2553}>{"캐릭터 기준 10레벨 당 공격력 : +1"}</option>
<option value = {4.2553}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
<option value = {4.2553}>{"몬스터 방어율 무시 : +35%"}</option>
<option value = {4.2553}>{"몬스터 방어율 무시 : +40%"}</option>
<option value = {6.3830}>{"피격 시 10% 확률로 데미지의 20% 무시"}</option>
<option value = {6.3830}>{"피격 시 10% 확률로 데미지의 40% 무시"}</option>
<option value = {4.2553}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
<option value = {4.2553}>{"보스 몬스터 공격 시 데미지 : +35%"}</option>
<option value = {4.2553}>{"보스 몬스터 공격 시 데미지 : +40%"}</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {9.6746}>{"STR : +??%"}</option>
<option value = {9.6746}>{"DEX : +??%"}</option>
<option value = {9.6746}>{"INT : +??%"}</option>
<option value = {9.6746}>{"LUK : +??%"}</option>
<option value = {5.7196}>{"공격력 : +??%"}</option>
<option value = {5.7196}>{"마력 : +??%"}</option>
<option value = {7.484299999999999}>{"크리티컬 확률 : +??%"}</option>
<option value = {5.7196}>{"데미지 : +??%"}</option>
<option value = {7.6971}>{"올스탯 : +??%"}</option>
<option value = {6.145099999999999}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {6.570599999999999}>{"보스 몬스터 공격 시 데미지 : +??%"}</option>
<option value = {8.8235}>{"STR : +9%"}</option>
<option value = {8.8235}>{"DEX : +9%"}</option>
<option value = {8.8235}>{"INT : +9%"}</option>
<option value = {8.8235}>{"LUK : +9%"}</option>
<option value = {5.2941}>{"공격력 : +9%"}</option>
<option value = {5.2941}>{"마력 : +9%"}</option>
<option value = {7.0588}>{"크리티컬 확률 : +9%"}</option>
<option value = {5.2941}>{"데미지 : +9%"}</option>
<option value = {7.0588}>{"올스탯 : +6%"}</option>
<option value = {5.2941}>{"몬스터 방어율 무시 : +30%"}</option>
<option value = {7.0588}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {7.0588}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {5.2941}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
<option value = {0.8511}>{"STR : +12%"}</option>
<option value = {0.8511}>{"DEX : +12%"}</option>
<option value = {0.8511}>{"INT : +12%"}</option>
<option value = {0.8511}>{"LUK : +12%"}</option>
<option value = {0.4255}>{"공격력 : +12%"}</option>
<option value = {0.4255}>{"마력 : +12%"}</option>
<option value = {0.4255}>{"크리티컬 확률 : +12%"}</option>
<option value = {0.4255}>{"데미지 : +12%"}</option>
<option value = {0.6383}>{"올스탯 : +9%"}</option>
<option value = {0.4255}>{"캐릭터 기준 10레벨 당 공격력 : +1"}</option>
<option value = {0.4255}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
<option value = {0.4255}>{"몬스터 방어율 무시 : +35%"}</option>
<option value = {0.4255}>{"몬스터 방어율 무시 : +40%"}</option>
<option value = {0.6383}>{"피격 시 10% 확률로 데미지의 20% 무시"}</option>
<option value = {0.6383}>{"피격 시 10% 확률로 데미지의 40% 무시"}</option>
<option value = {0.4255}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
<option value = {0.4255}>{"보스 몬스터 공격 시 데미지 : +35%"}</option>
<option value = {0.4255}>{"보스 몬스터 공격 시 데미지 : +40%"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {9.791}>{"STR : +??%"}</option>
<option value = {9.791}>{"DEX : +??%"}</option>
<option value = {9.791}>{"INT : +??%"}</option>
<option value = {9.791}>{"LUK : +??%"}</option>
<option value = {5.8661}>{"공격력 : +??%"}</option>
<option value = {5.8661}>{"마력 : +??%"}</option>
<option value = {7.807300000000001}>{"크리티컬 확률 : +??%"}</option>
<option value = {5.8661}>{"데미지 : +??%"}</option>
<option value = {7.8285}>{"올스탯 : +??%"}</option>
<option value = {5.9087000000000005}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {5.951300000000001}>{"보스 몬스터 공격 시 데미지 : +??%"}</option>
<option value = {9.7059}>{"STR : +9%"}</option>
<option value = {9.7059}>{"DEX : +9%"}</option>
<option value = {9.7059}>{"INT : +9%"}</option>
<option value = {9.7059}>{"LUK : +9%"}</option>
<option value = {5.8235}>{"공격력 : +9%"}</option>
<option value = {5.8235}>{"마력 : +9%"}</option>
<option value = {7.7647}>{"크리티컬 확률 : +9%"}</option>
<option value = {5.8235}>{"데미지 : +9%"}</option>
<option value = {7.7647}>{"올스탯 : +6%"}</option>
<option value = {5.8235}>{"몬스터 방어율 무시 : +30%"}</option>
<option value = {7.7647}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {7.7647}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {5.8235}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
<option value = {0.0851}>{"STR : +12%"}</option>
<option value = {0.0851}>{"DEX : +12%"}</option>
<option value = {0.0851}>{"INT : +12%"}</option>
<option value = {0.0851}>{"LUK : +12%"}</option>
<option value = {0.0426}>{"공격력 : +12%"}</option>
<option value = {0.0426}>{"마력 : +12%"}</option>
<option value = {0.0426}>{"크리티컬 확률 : +12%"}</option>
<option value = {0.0426}>{"데미지 : +12%"}</option>
<option value = {0.0638}>{"올스탯 : +9%"}</option>
<option value = {0.0426}>{"캐릭터 기준 10레벨 당 공격력 : +1"}</option>
<option value = {0.0426}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
<option value = {0.0426}>{"몬스터 방어율 무시 : +35%"}</option>
<option value = {0.0426}>{"몬스터 방어율 무시 : +40%"}</option>
<option value = {0.0638}>{"피격 시 10% 확률로 데미지의 20% 무시"}</option>
<option value = {0.0638}>{"피격 시 10% 확률로 데미지의 40% 무시"}</option>
<option value = {0.0426}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
<option value = {0.0426}>{"보스 몬스터 공격 시 데미지 : +35%"}</option>
<option value = {0.0426}>{"보스 몬스터 공격 시 데미지 : +40%"}</option>
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
<option value = {9.8039}>{"STR : +9%"}</option>
<option value = {9.8039}>{"DEX : +9%"}</option>
<option value = {9.8039}>{"INT : +9%"}</option>
<option value = {9.8039}>{"LUK : +9%"}</option>
<option value = {5.8824}>{"공격력 : +9%"}</option>
<option value = {5.8824}>{"마력 : +9%"}</option>
<option value = {7.8431}>{"크리티컬 확률 : +9%"}</option>
<option value = {5.8824}>{"데미지 : +9%"}</option>
<option value = {7.8431}>{"올스탯 : +6%"}</option>
<option value = {5.8824}>{"몬스터 방어율 무시 : +30%"}</option>
<option value = {7.8431}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {7.8431}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {5.8824}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
                    </select>
                </div>
                
                <div id = {"option2"}>
                    <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {11.956}>{"STR : +??%"}</option>
<option value = {11.956}>{"DEX : +??%"}</option>
<option value = {11.956}>{"INT : +??%"}</option>
<option value = {11.956}>{"LUK : +??%"}</option>
<option value = {4.9784}>{"공격력 : +??%"}</option>
<option value = {4.9784}>{"마력 : +??%"}</option>
<option value = {5.1745}>{"크리티컬 확률 : +??%"}</option>
<option value = {4.9784}>{"데미지 : +??%"}</option>
<option value = {5.1745}>{"올스탯 : +??%"}</option>
<option value = {4.9784}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {10.9756}>{"STR : +6%"}</option>
<option value = {10.9756}>{"DEX : +6%"}</option>
<option value = {10.9756}>{"INT : +6%"}</option>
<option value = {10.9756}>{"LUK : +6%"}</option>
<option value = {10.9756}>{"최대 HP : +6%"}</option>
<option value = {4.3902}>{"공격력 : +6%"}</option>
<option value = {4.3902}>{"마력 : +6%"}</option>
<option value = {4.3902}>{"크리티컬 확률 : +8%"}</option>
<option value = {4.3902}>{"데미지 : +6%"}</option>
<option value = {4.3902}>{"올스탯 : +3%"}</option>
<option value = {4.3902}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
<option value = {4.3902}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
<option value = {4.3902}>{"몬스터 방어율 무시 : +15%"}</option>
<option value = {0.9804}>{"STR : +9%"}</option>
<option value = {0.9804}>{"DEX : +9%"}</option>
<option value = {0.9804}>{"INT : +9%"}</option>
<option value = {0.9804}>{"LUK : +9%"}</option>
<option value = {0.5882}>{"공격력 : +9%"}</option>
<option value = {0.5882}>{"마력 : +9%"}</option>
<option value = {0.7843}>{"크리티컬 확률 : +9%"}</option>
<option value = {0.5882}>{"데미지 : +9%"}</option>
<option value = {0.7843}>{"올스탯 : +6%"}</option>
<option value = {0.5882}>{"몬스터 방어율 무시 : +30%"}</option>
<option value = {0.7843}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {0.7843}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {0.5882}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
                    </select>
                </div>

                <div id = {"option3"}>
                    <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
                    <select className = {cubeStyles.optionSelect} onChange={onChange}>
                    <option value = {100}>{"상관 없음"}</option>
<option value = {12.1712}>{"STR : +??%"}</option>
<option value = {12.1712}>{"DEX : +??%"}</option>
<option value = {12.1712}>{"INT : +??%"}</option>
<option value = {12.1712}>{"LUK : +??%"}</option>
<option value = {4.8881}>{"공격력 : +??%"}</option>
<option value = {4.8881}>{"마력 : +??%"}</option>
<option value = {4.9077}>{"크리티컬 확률 : +??%"}</option>
<option value = {4.8881}>{"데미지 : +??%"}</option>
<option value = {4.9077}>{"올스탯 : +??%"}</option>
<option value = {4.8881}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {12.0732}>{"STR : +6%"}</option>
<option value = {12.0732}>{"DEX : +6%"}</option>
<option value = {12.0732}>{"INT : +6%"}</option>
<option value = {12.0732}>{"LUK : +6%"}</option>
<option value = {12.0732}>{"최대 HP : +6%"}</option>
<option value = {4.8293}>{"공격력 : +6%"}</option>
<option value = {4.8293}>{"마력 : +6%"}</option>
<option value = {4.8293}>{"크리티컬 확률 : +8%"}</option>
<option value = {4.8293}>{"데미지 : +6%"}</option>
<option value = {4.8293}>{"올스탯 : +3%"}</option>
<option value = {4.8293}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
<option value = {4.8293}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
<option value = {4.8293}>{"몬스터 방어율 무시 : +15%"}</option>
<option value = {0.0980}>{"STR : +9%"}</option>
<option value = {0.0980}>{"DEX : +9%"}</option>
<option value = {0.0980}>{"INT : +9%"}</option>
<option value = {0.0980}>{"LUK : +9%"}</option>
<option value = {0.0588}>{"공격력 : +9%"}</option>
<option value = {0.0588}>{"마력 : +9%"}</option>
<option value = {0.0784}>{"크리티컬 확률 : +9%"}</option>
<option value = {0.0588}>{"데미지 : +9%"}</option>
<option value = {0.0784}>{"올스탯 : +6%"}</option>
<option value = {0.0588}>{"몬스터 방어율 무시 : +30%"}</option>
<option value = {0.0784}>{"피격 시 5% 확률로 데미지의 20% 무시"}</option>
<option value = {0.0784}>{"피격 시 5% 확률로 데미지의 40% 무시"}</option>
<option value = {0.0588}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
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
                <option value={4.878}>{"공격력 : +6%"}</option>
                <option value={4.878}>{"마력 : +6%"}</option>
                <option value={4.878}>{"크리티컬 확률 : +8%"}</option>
                <option value={4.878}>{"데미지 : +6%"}</option>
                <option value={4.878}>{"올스탯 : +3%"}</option>
                <option value={4.878}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={4.878}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={4.878}>{"몬스터 방어율 무시 : +15%"}</option>
              </select>
            </div>

            <div id={"option2"}>
              <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={7.0891}>{"STR : +??%"}</option>
                <option value={7.0891}>{"DEX : +??%"}</option>
                <option value={7.0891}>{"INT : +??%"}</option>
                <option value={7.0891}>{"LUK : +??%"}</option>
                <option value={2.4443}>{"공격력 : +??%"}</option>
                <option value={2.4443}>{"마력 : +??%"}</option>
                <option value={2.4443}>{"크리티컬 확률 : +??%"}</option>
                <option value={2.4443}>{"데미지 : +??%"}</option>
                <option value={2.4443}>{"몬스터 방어율 무시 : +??%"}</option>
                <option value={5.8696}>{"STR : +12"}</option>
                <option value={5.8696}>{"DEX : +12"}</option>
                <option value={5.8696}>{"INT : +12"}</option>
                <option value={5.8696}>{"LUK : +12"}</option>
                <option value={5.8696}>{"최대 HP : +100"}</option>
                <option value={3.913}>{"공격력 : +12"}</option>
                <option value={3.913}>{"마력 : +12"}</option>
                <option value={5.8696}>{"STR : +3%"}</option>
                <option value={5.8696}>{"DEX : +3%"}</option>
                <option value={5.8696}>{"INT : +3%"}</option>
                <option value={5.8696}>{"LUK : +3%"}</option>
                <option value={1.9565}>{"공격력 : +3%"}</option>
                <option value={1.9565}>{"마력 : +3%"}</option>
                <option value={1.9565}>{"크리티컬 확률 : +4%"}</option>
                <option value={1.9565}>{"데미지 : +3%"}</option>
                <option value={3.913}>{"올스탯 : +5"}</option>
                <option value={1.9565}>
                  {"공격 시 20% 확률로 200의 HP 회복"}
                </option>
                <option value={1.9565}>
                  {"공격 시 20% 확률로 110의 MP 회복"}
                </option>
                <option value={1.9565}>
                  {"공격 시 20% 확률로 5레벨 중독효과 적용"}
                </option>
                <option value={1.9565}>
                  {"공격 시 10% 확률로 2레벨 기절효과 적용"}
                </option>
                <option value={1.9565}>
                  {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
                </option>
                <option value={1.9565}>
                  {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
                </option>
                <option value={1.9565}>
                  {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
                </option>
                <option value={1.9565}>
                  {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
                </option>
                <option value={1.9565}>{"몬스터 방어율 무시 : +15%"}</option>
                <option value={1.2195}>{"STR : +6%"}</option>
                <option value={1.2195}>{"DEX : +6%"}</option>
                <option value={1.2195}>{"INT : +6%"}</option>
                <option value={1.2195}>{"LUK : +6%"}</option>
                <option value={1.2195}>{"최대 HP : +6%"}</option>
                <option value={0.4878}>{"공격력 : +6%"}</option>
                <option value={0.4878}>{"마력 : +6%"}</option>
                <option value={0.4878}>{"크리티컬 확률 : +8%"}</option>
                <option value={0.4878}>{"데미지 : +6%"}</option>
                <option value={0.4878}>{"올스탯 : +3%"}</option>
                <option value={0.4878}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={0.4878}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={0.4878}>{"몬스터 방어율 무시 : +15%"}</option>
              </select>
            </div>

            <div id={"option3"}>
              <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={6.5785}>{"STR : +??%"}</option>
                <option value={6.5785}>{"DEX : +??%"}</option>
                <option value={6.5785}>{"INT : +??%"}</option>
                <option value={6.5785}>{"LUK : +??%"}</option>
                <option value={2.201}>{"공격력 : +??%"}</option>
                <option value={2.201}>{"마력 : +??%"}</option>
                <option value={2.201}>{"크리티컬 확률 : +??%"}</option>
                <option value={2.201}>{"데미지 : +??%"}</option>
                <option value={2.201}>{"몬스터 방어율 무시 : +??%"}</option>
                <option value={6.4565}>{"STR : +12"}</option>
                <option value={6.4565}>{"DEX : +12"}</option>
                <option value={6.4565}>{"INT : +12"}</option>
                <option value={6.4565}>{"LUK : +12"}</option>
                <option value={6.4565}>{"최대 HP : +100"}</option>
                <option value={4.3043}>{"공격력 : +12"}</option>
                <option value={4.3043}>{"마력 : +12"}</option>
                <option value={6.4565}>{"STR : +3%"}</option>
                <option value={6.4565}>{"DEX : +3%"}</option>
                <option value={6.4565}>{"INT : +3%"}</option>
                <option value={6.4565}>{"LUK : +3%"}</option>
                <option value={2.1522}>{"공격력 : +3%"}</option>
                <option value={2.1522}>{"마력 : +3%"}</option>
                <option value={2.1522}>{"크리티컬 확률 : +4%"}</option>
                <option value={2.1522}>{"데미지 : +3%"}</option>
                <option value={4.3043}>{"올스탯 : +5"}</option>
                <option value={2.1522}>
                  {"공격 시 20% 확률로 200의 HP 회복"}
                </option>
                <option value={2.1522}>
                  {"공격 시 20% 확률로 110의 MP 회복"}
                </option>
                <option value={2.1522}>
                  {"공격 시 20% 확률로 5레벨 중독효과 적용"}
                </option>
                <option value={2.1522}>
                  {"공격 시 10% 확률로 2레벨 기절효과 적용"}
                </option>
                <option value={2.1522}>
                  {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
                </option>
                <option value={2.1522}>
                  {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
                </option>
                <option value={2.1522}>
                  {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
                </option>
                <option value={2.1522}>
                  {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
                </option>
                <option value={2.1522}>{"몬스터 방어율 무시 : +15%"}</option>
                <option value={0.122}>{"STR : +6%"}</option>
                <option value={0.122}>{"DEX : +6%"}</option>
                <option value={0.122}>{"INT : +6%"}</option>
                <option value={0.122}>{"LUK : +6%"}</option>
                <option value={0.122}>{"최대 HP : +6%"}</option>
                <option value={0.0488}>{"공격력 : +6%"}</option>
                <option value={0.0488}>{"마력 : +6%"}</option>
                <option value={0.0488}>{"크리티컬 확률 : +8%"}</option>
                <option value={0.0488}>{"데미지 : +6%"}</option>
                <option value={0.0488}>{"올스탯 : +3%"}</option>
                <option value={0.0488}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={0.0488}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={0.0488}>{"몬스터 방어율 무시 : +15%"}</option>
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

export default Weapon3;