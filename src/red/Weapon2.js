// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Weapon2({grade, setOption, optionPer}) {
    const classname = "weapon2"

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
<option value = {10.763}>{"STR : +??%"}</option>
<option value = {10.763}>{"DEX : +??%"}</option>
<option value = {10.763}>{"INT : +??%"}</option>
<option value = {10.763}>{"LUK : +??%"}</option>
<option value = {4.5012}>{"공격력 : +??%"}</option>
<option value = {4.5012}>{"마력 : +??%"}</option>
<option value = {4.6973}>{"크리티컬 확률 : +??%"}</option>
<option value = {4.5012}>{"데미지 : +??%"}</option>
<option value = {4.6973}>{"올스탯 : +??%"}</option>
<option value = {4.5012}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {9.7826}>{"STR : +6%"}</option>
<option value = {9.7826}>{"DEX : +6%"}</option>
<option value = {9.7826}>{"INT : +6%"}</option>
<option value = {9.7826}>{"LUK : +6%"}</option>
<option value = {9.7826}>{"최대 HP : +6%"}</option>
<option value = {9.7826}>{"최대 MP : +6%"}</option>
<option value = {3.9130}>{"공격력 : +6%"}</option>
<option value = {3.9130}>{"마력 : +6%"}</option>
<option value = {3.9130}>{"크리티컬 확률 : +8%"}</option>
<option value = {3.9130}>{"데미지 : +6%"}</option>
<option value = {3.9130}>{"올스탯 : +3%"}</option>
<option value = {3.9130}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
<option value = {3.9130}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
<option value = {3.9130}>{"몬스터 방어율 무시 : +15%"}</option>
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
<option value = {10.8589}>{"STR : +??%"}</option>
<option value = {10.8589}>{"DEX : +??%"}</option>
<option value = {10.8589}>{"INT : +??%"}</option>
<option value = {10.8589}>{"LUK : +??%"}</option>
<option value = {4.363099999999999}>{"공격력 : +??%"}</option>
<option value = {4.363099999999999}>{"마력 : +??%"}</option>
<option value = {4.3827}>{"크리티컬 확률 : +??%"}</option>
<option value = {4.363099999999999}>{"데미지 : +??%"}</option>
<option value = {4.3827}>{"올스탯 : +??%"}</option>
<option value = {4.363099999999999}>{"몬스터 방어율 무시 : +??%"}</option>
<option value = {10.7609}>{"STR : +6%"}</option>
<option value = {10.7609}>{"DEX : +6%"}</option>
<option value = {10.7609}>{"INT : +6%"}</option>
<option value = {10.7609}>{"LUK : +6%"}</option>
<option value = {10.7609}>{"최대 HP : +6%"}</option>
<option value = {10.7609}>{"최대 MP : +6%"}</option>
<option value = {4.3043}>{"공격력 : +6%"}</option>
<option value = {4.3043}>{"마력 : +6%"}</option>
<option value = {4.3043}>{"크리티컬 확률 : +8%"}</option>
<option value = {4.3043}>{"데미지 : +6%"}</option>
<option value = {4.3043}>{"올스탯 : +3%"}</option>
<option value = {4.3043}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
<option value = {4.3043}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
<option value = {4.3043}>{"몬스터 방어율 무시 : +15%"}</option>
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
                <option value={10.8696}>{"STR : +6%"}</option>
                <option value={10.8696}>{"DEX : +6%"}</option>
                <option value={10.8696}>{"INT : +6%"}</option>
                <option value={10.8696}>{"LUK : +6%"}</option>
                <option value={10.8696}>{"최대 HP : +6%"}</option>
                <option value={10.8696}>{"최대 MP : +6%"}</option>
                <option value={4.3478}>{"공격력 : +6%"}</option>
                <option value={4.3478}>{"마력 : +6%"}</option>
                <option value={4.3478}>{"크리티컬 확률 : +8%"}</option>
                <option value={4.3478}>{"데미지 : +6%"}</option>
                <option value={4.3478}>{"올스탯 : +3%"}</option>
                <option value={4.3478}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={4.3478}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={4.3478}>{"몬스터 방어율 무시 : +15%"}</option>
              </select>
            </div>

            <div id={"option2"}>
              <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={6.5972}>{"STR : +??%"}</option>
                <option value={6.5972}>{"DEX : +??%"}</option>
                <option value={6.5972}>{"INT : +??%"}</option>
                <option value={6.5972}>{"LUK : +??%"}</option>
                <option value={2.2715}>{"공격력 : +??%"}</option>
                <option value={2.2715}>{"마력 : +??%"}</option>
                <option value={2.2715}>{"크리티컬 확률 : +??%"}</option>
                <option value={2.2715}>{"데미지 : +??%"}</option>
                <option value={2.2715}>{"몬스터 방어율 무시 : +??%"}</option>
                <option value={5.5102}>{"STR : +12"}</option>
                <option value={5.5102}>{"DEX : +12"}</option>
                <option value={5.5102}>{"INT : +12"}</option>
                <option value={5.5102}>{"LUK : +12"}</option>
                <option value={5.5102}>{"최대 HP : +100"}</option>
                <option value={5.5102}>{"최대 MP : +100"}</option>
                <option value={3.6735}>{"공격력 : +12"}</option>
                <option value={3.6735}>{"마력 : +12"}</option>
                <option value={5.5102}>{"STR : +3%"}</option>
                <option value={5.5102}>{"DEX : +3%"}</option>
                <option value={5.5102}>{"INT : +3%"}</option>
                <option value={5.5102}>{"LUK : +3%"}</option>
                <option value={1.8367}>{"공격력 : +3%"}</option>
                <option value={1.8367}>{"마력 : +3%"}</option>
                <option value={1.8367}>{"크리티컬 확률 : +4%"}</option>
                <option value={1.8367}>{"데미지 : +3%"}</option>
                <option value={3.6735}>{"올스탯 : +5"}</option>
                <option value={1.8367}>
                  {"공격 시 20% 확률로 200의 HP 회복"}
                </option>
                <option value={1.8367}>
                  {"공격 시 20% 확률로 110의 MP 회복"}
                </option>
                <option value={1.8367}>
                  {"공격 시 20% 확률로 5레벨 중독효과 적용"}
                </option>
                <option value={1.8367}>
                  {"공격 시 10% 확률로 2레벨 기절효과 적용"}
                </option>
                <option value={1.8367}>
                  {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
                </option>
                <option value={1.8367}>
                  {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
                </option>
                <option value={1.8367}>
                  {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
                </option>
                <option value={1.8367}>
                  {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
                </option>
                <option value={1.8367}>{"몬스터 방어율 무시 : +15%"}</option>
                <option value={1.087}>{"STR : +6%"}</option>
                <option value={1.087}>{"DEX : +6%"}</option>
                <option value={1.087}>{"INT : +6%"}</option>
                <option value={1.087}>{"LUK : +6%"}</option>
                <option value={1.087}>{"최대 HP : +6%"}</option>
                <option value={1.087}>{"최대 MP : +6%"}</option>
                <option value={0.4348}>{"공격력 : +6%"}</option>
                <option value={0.4348}>{"마력 : +6%"}</option>
                <option value={0.4348}>{"크리티컬 확률 : +8%"}</option>
                <option value={0.4348}>{"데미지 : +6%"}</option>
                <option value={0.4348}>{"올스탯 : +3%"}</option>
                <option value={0.4348}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={0.4348}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={0.4348}>{"몬스터 방어율 무시 : +15%"}</option>
              </select>
            </div>

            <div id={"option3"}>
              <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
              <select className = {cubeStyles.optionSelect} onChange={onChange}>
                <option value={100}>{"상관 없음"}</option>
                <option value={6.1699}>{"STR : +??%"}</option>
                <option value={6.1699}>{"DEX : +??%"}</option>
                <option value={6.1699}>{"INT : +??%"}</option>
                <option value={6.1699}>{"LUK : +??%"}</option>
                <option value={2.0639}>{"공격력 : +??%"}</option>
                <option value={2.0639}>{"마력 : +??%"}</option>
                <option value={2.0639}>{"크리티컬 확률 : +??%"}</option>
                <option value={2.0639}>{"데미지 : +??%"}</option>
                <option value={2.0639}>{"몬스터 방어율 무시 : +??%"}</option>
                <option value={6.0612}>{"STR : +12"}</option>
                <option value={6.0612}>{"DEX : +12"}</option>
                <option value={6.0612}>{"INT : +12"}</option>
                <option value={6.0612}>{"LUK : +12"}</option>
                <option value={6.0612}>{"최대 HP : +100"}</option>
                <option value={6.0612}>{"최대 MP : +100"}</option>
                <option value={4.0408}>{"공격력 : +12"}</option>
                <option value={4.0408}>{"마력 : +12"}</option>
                <option value={6.0612}>{"STR : +3%"}</option>
                <option value={6.0612}>{"DEX : +3%"}</option>
                <option value={6.0612}>{"INT : +3%"}</option>
                <option value={6.0612}>{"LUK : +3%"}</option>
                <option value={2.0204}>{"공격력 : +3%"}</option>
                <option value={2.0204}>{"마력 : +3%"}</option>
                <option value={2.0204}>{"크리티컬 확률 : +4%"}</option>
                <option value={2.0204}>{"데미지 : +3%"}</option>
                <option value={4.0408}>{"올스탯 : +5"}</option>
                <option value={2.0204}>
                  {"공격 시 20% 확률로 200의 HP 회복"}
                </option>
                <option value={2.0204}>
                  {"공격 시 20% 확률로 110의 MP 회복"}
                </option>
                <option value={2.0204}>
                  {"공격 시 20% 확률로 5레벨 중독효과 적용"}
                </option>
                <option value={2.0204}>
                  {"공격 시 10% 확률로 2레벨 기절효과 적용"}
                </option>
                <option value={2.0204}>
                  {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
                </option>
                <option value={2.0204}>
                  {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
                </option>
                <option value={2.0204}>
                  {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
                </option>
                <option value={2.0204}>
                  {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
                </option>
                <option value={2.0204}>{"몬스터 방어율 무시 : +15%"}</option>
                <option value={0.1087}>{"STR : +6%"}</option>
                <option value={0.1087}>{"DEX : +6%"}</option>
                <option value={0.1087}>{"INT : +6%"}</option>
                <option value={0.1087}>{"LUK : +6%"}</option>
                <option value={0.1087}>{"최대 HP : +6%"}</option>
                <option value={0.1087}>{"최대 MP : +6%"}</option>
                <option value={0.0435}>{"공격력 : +6%"}</option>
                <option value={0.0435}>{"마력 : +6%"}</option>
                <option value={0.0435}>{"크리티컬 확률 : +8%"}</option>
                <option value={0.0435}>{"데미지 : +6%"}</option>
                <option value={0.0435}>{"올스탯 : +3%"}</option>
                <option value={0.0435}>
                  {"공격 시 20% 확률로 300의 HP 회복"}
                </option>
                <option value={0.0435}>
                  {"공격 시 20% 확률로 165의 MP 회복"}
                </option>
                <option value={0.0435}>{"몬스터 방어율 무시 : +15%"}</option>
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

export default Weapon2;