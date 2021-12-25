// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Emblem({grade, setOption, optionPer}) {
  const classname = "emblem";

  function onChange(event) {
    const id = event.target.parentElement.id;
    if (id === "option4") {
      setOption[0](event.target.value);
    } else if (id === "option5") {
      setOption[1](event.target.value);
    } else if (id === "option6") {
      setOption[2](event.target.value);
    } else {
      console.log("error !");
    }
  }

  if (grade === "L") {
    return (
      <div className={classname}>
        <div id={"option4"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.4286}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={11.4286}>{"STR : +12%"}</option>
            <option value={11.4286}>{"DEX : +12%"}</option>
            <option value={11.4286}>{"INT : +12%"}</option>
            <option value={11.4286}>{"LUK : +12%"}</option>
            <option value={5.7143}>{"공격력 : +12%"}</option>
            <option value={5.7143}>{"마력 : +12%"}</option>
            <option value={5.7143}>{"크리티컬 확률 : +12%"}</option>
            <option value={5.7143}>{"데미지 : +12%"}</option>
            <option value={8.5714}>{"올스탯 : +9%"}</option>
            <option value={5.7143}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={5.7143}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={5.7143}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={5.7143}>{"몬스터 방어율 무시 : +40%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.2857}>{"STR : +??%"}</option>
            <option value={12.2857}>{"DEX : +??%"}</option>
            <option value={12.2857}>{"INT : +??%"}</option>
            <option value={12.2857}>{"LUK : +??%"}</option>
            <option value={7.1429}>{"공격력 : +??%"}</option>
            <option value={7.1429}>{"마력 : +??%"}</option>
            <option value={9.142900000000001}>{"크리티컬 확률 : +??%"}</option>
            <option value={7.1429}>{"데미지 : +??%"}</option>
            <option value={9.7143}>{"올스탯 : +??%"}</option>
            <option value={8.2858}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={10.0}>{"STR : +9%"}</option>
            <option value={10.0}>{"DEX : +9%"}</option>
            <option value={10.0}>{"INT : +9%"}</option>
            <option value={10.0}>{"LUK : +9%"}</option>
            <option value={6.0}>{"공격력 : +9%"}</option>
            <option value={6.0}>{"마력 : +9%"}</option>
            <option value={8.0}>{"크리티컬 확률 : +9%"}</option>
            <option value={6.0}>{"데미지 : +9%"}</option>
            <option value={8.0}>{"올스탯 : +6%"}</option>
            <option value={6.0}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={2.2857}>{"STR : +12%"}</option>
            <option value={2.2857}>{"DEX : +12%"}</option>
            <option value={2.2857}>{"INT : +12%"}</option>
            <option value={2.2857}>{"LUK : +12%"}</option>
            <option value={1.1429}>{"공격력 : +12%"}</option>
            <option value={1.1429}>{"마력 : +12%"}</option>
            <option value={1.1429}>{"크리티컬 확률 : +12%"}</option>
            <option value={1.1429}>{"데미지 : +12%"}</option>
            <option value={1.7143}>{"올스탯 : +9%"}</option>
            <option value={1.1429}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={1.1429}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={1.1429}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={1.1429}>{"몬스터 방어율 무시 : +40%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.4464}>{"STR : +??%"}</option>
            <option value={12.4464}>{"DEX : +??%"}</option>
            <option value={12.4464}>{"INT : +??%"}</option>
            <option value={12.4464}>{"LUK : +??%"}</option>
            <option value={7.4107}>{"공격력 : +??%"}</option>
            <option value={7.4107}>{"마력 : +??%"}</option>
            <option value={9.7857}>{"크리티컬 확률 : +??%"}</option>
            <option value={7.4107}>{"데미지 : +??%"}</option>
            <option value={9.9286}>{"올스탯 : +??%"}</option>
            <option value={7.696400000000001}>
              {"몬스터 방어율 무시 : +??%"}
            </option>
            <option value={11.875}>{"STR : +9%"}</option>
            <option value={11.875}>{"DEX : +9%"}</option>
            <option value={11.875}>{"INT : +9%"}</option>
            <option value={11.875}>{"LUK : +9%"}</option>
            <option value={7.125}>{"공격력 : +9%"}</option>
            <option value={7.125}>{"마력 : +9%"}</option>
            <option value={9.5}>{"크리티컬 확률 : +9%"}</option>
            <option value={7.125}>{"데미지 : +9%"}</option>
            <option value={9.5}>{"올스탯 : +6%"}</option>
            <option value={7.125}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={0.5714}>{"STR : +12%"}</option>
            <option value={0.5714}>{"DEX : +12%"}</option>
            <option value={0.5714}>{"INT : +12%"}</option>
            <option value={0.5714}>{"LUK : +12%"}</option>
            <option value={0.2857}>{"공격력 : +12%"}</option>
            <option value={0.2857}>{"마력 : +12%"}</option>
            <option value={0.2857}>{"크리티컬 확률 : +12%"}</option>
            <option value={0.2857}>{"데미지 : +12%"}</option>
            <option value={0.4286}>{"올스탯 : +9%"}</option>
            <option value={0.2857}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={0.2857}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={0.2857}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={0.2857}>{"몬스터 방어율 무시 : +40%"}</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "U") {
    return (
      <div className={classname}>
        <div id={"option4"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.5}>{"STR : +9%"}</option>
            <option value={12.5}>{"DEX : +9%"}</option>
            <option value={12.5}>{"INT : +9%"}</option>
            <option value={12.5}>{"LUK : +9%"}</option>
            <option value={7.5}>{"공격력 : +9%"}</option>
            <option value={7.5}>{"마력 : +9%"}</option>
            <option value={10.0}>{"크리티컬 확률 : +9%"}</option>
            <option value={7.5}>{"데미지 : +9%"}</option>
            <option value={10.0}>{"올스탯 : +6%"}</option>
            <option value={7.5}>{"몬스터 방어율 무시 : +30%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.1957}>{"STR : +??%"}</option>
            <option value={11.1957}>{"DEX : +??%"}</option>
            <option value={11.1957}>{"INT : +??%"}</option>
            <option value={11.1957}>{"LUK : +??%"}</option>
            <option value={4.9783}>{"공격력 : +??%"}</option>
            <option value={4.9783}>{"마력 : +??%"}</option>
            <option value={5.4783}>{"크리티컬 확률 : +??%"}</option>
            <option value={4.9783}>{"데미지 : +??%"}</option>
            <option value={5.4783}>{"올스탯 : +??%"}</option>
            <option value={4.9783}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={8.6957}>{"STR : +6%"}</option>
            <option value={8.6957}>{"DEX : +6%"}</option>
            <option value={8.6957}>{"INT : +6%"}</option>
            <option value={8.6957}>{"LUK : +6%"}</option>
            <option value={8.6957}>{"최대 HP : +6%"}</option>
            <option value={8.6957}>{"최대 MP : +6%"}</option>
            <option value={3.4783}>{"공격력 : +6%"}</option>
            <option value={3.4783}>{"마력 : +6%"}</option>
            <option value={3.4783}>{"크리티컬 확률 : +8%"}</option>
            <option value={3.4783}>{"데미지 : +6%"}</option>
            <option value={3.4783}>{"올스탯 : +3%"}</option>
            <option value={3.4783}>{"공격 시 20% 확률로 360의 HP 회복"}</option>
            <option value={3.4783}>{"공격 시 20% 확률로 180의 MP 회복"}</option>
            <option value={3.4783}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={2.5}>{"STR : +9%"}</option>
            <option value={2.5}>{"DEX : +9%"}</option>
            <option value={2.5}>{"INT : +9%"}</option>
            <option value={2.5}>{"LUK : +9%"}</option>
            <option value={1.5}>{"공격력 : +9%"}</option>
            <option value={1.5}>{"마력 : +9%"}</option>
            <option value={2.0}>{"크리티컬 확률 : +9%"}</option>
            <option value={1.5}>{"데미지 : +9%"}</option>
            <option value={2.0}>{"올스탯 : +6%"}</option>
            <option value={1.5}>{"몬스터 방어율 무시 : +30%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={10.9511}>{"STR : +??%"}</option>
            <option value={10.9511}>{"DEX : +??%"}</option>
            <option value={10.9511}>{"INT : +??%"}</option>
            <option value={10.9511}>{"LUK : +??%"}</option>
            <option value={4.5054}>{"공격력 : +??%"}</option>
            <option value={4.5054}>{"마력 : +??%"}</option>
            <option value={4.6304}>{"크리티컬 확률 : +??%"}</option>
            <option value={4.5054}>{"데미지 : +??%"}</option>
            <option value={4.6304}>{"올스탯 : +??%"}</option>
            <option value={4.5054}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={10.3261}>{"STR : +6%"}</option>
            <option value={10.3261}>{"DEX : +6%"}</option>
            <option value={10.3261}>{"INT : +6%"}</option>
            <option value={10.3261}>{"LUK : +6%"}</option>
            <option value={10.3261}>{"최대 HP : +6%"}</option>
            <option value={10.3261}>{"최대 MP : +6%"}</option>
            <option value={4.1304}>{"공격력 : +6%"}</option>
            <option value={4.1304}>{"마력 : +6%"}</option>
            <option value={4.1304}>{"크리티컬 확률 : +8%"}</option>
            <option value={4.1304}>{"데미지 : +6%"}</option>
            <option value={4.1304}>{"올스탯 : +3%"}</option>
            <option value={4.1304}>{"공격 시 20% 확률로 360의 HP 회복"}</option>
            <option value={4.1304}>{"공격 시 20% 확률로 180의 MP 회복"}</option>
            <option value={4.1304}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={0.625}>{"STR : +9%"}</option>
            <option value={0.625}>{"DEX : +9%"}</option>
            <option value={0.625}>{"INT : +9%"}</option>
            <option value={0.625}>{"LUK : +9%"}</option>
            <option value={0.375}>{"공격력 : +9%"}</option>
            <option value={0.375}>{"마력 : +9%"}</option>
            <option value={0.5}>{"크리티컬 확률 : +9%"}</option>
            <option value={0.375}>{"데미지 : +9%"}</option>
            <option value={0.5}>{"올스탯 : +6%"}</option>
            <option value={0.375}>{"몬스터 방어율 무시 : +30%"}</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "E") {
    return (
      <div className={classname}>
        <div id={"option4"}>
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
            <option value={4.3478}>{"공격 시 20% 확률로 360의 HP 회복"}</option>
            <option value={4.3478}>{"공격 시 20% 확률로 180의 MP 회복"}</option>
            <option value={4.3478}>{"몬스터 방어율 무시 : +15%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.071899999999999}>{"STR : +??%"}</option>
            <option value={7.071899999999999}>{"DEX : +??%"}</option>
            <option value={7.071899999999999}>{"INT : +??%"}</option>
            <option value={7.071899999999999}>{"LUK : +??%"}</option>
            <option value={2.5023}>{"공격력 : +??%"}</option>
            <option value={2.5023}>{"마력 : +??%"}</option>
            <option value={2.5023}>{"크리티컬 확률 : +??%"}</option>
            <option value={2.5023}>{"데미지 : +??%"}</option>
            <option value={2.5023}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={4.898}>{"STR : +12"}</option>
            <option value={4.898}>{"DEX : +12"}</option>
            <option value={4.898}>{"INT : +12"}</option>
            <option value={4.898}>{"LUK : +12"}</option>
            <option value={4.898}>{"최대 HP : +120"}</option>
            <option value={4.898}>{"최대 MP : +120"}</option>
            <option value={3.2653}>{"공격력 : +12"}</option>
            <option value={3.2653}>{"마력 : +12"}</option>
            <option value={4.898}>{"STR : +3%"}</option>
            <option value={4.898}>{"DEX : +3%"}</option>
            <option value={4.898}>{"INT : +3%"}</option>
            <option value={4.898}>{"LUK : +3%"}</option>
            <option value={1.6327}>{"공격력 : +3%"}</option>
            <option value={1.6327}>{"마력 : +3%"}</option>
            <option value={1.6327}>{"크리티컬 확률 : +4%"}</option>
            <option value={1.6327}>{"데미지 : +3%"}</option>
            <option value={3.2653}>{"올스탯 : +5"}</option>
            <option value={1.6327}>{"공격 시 20% 확률로 240의 HP 회복"}</option>
            <option value={1.6327}>{"공격 시 20% 확률로 120의 MP 회복"}</option>
            <option value={1.6327}>
              {"공격 시 20% 확률로 6레벨 중독효과 적용"}
            </option>
            <option value={1.6327}>
              {"공격 시 10% 확률로 2레벨 기절효과 적용"}
            </option>
            <option value={1.6327}>
              {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
            </option>
            <option value={1.6327}>
              {"공격 시 20% 확률로 3레벨 암흑효과 적용"}
            </option>
            <option value={1.6327}>
              {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
            </option>
            <option value={1.6327}>
              {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
            </option>
            <option value={1.6327}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={2.1739}>{"STR : +6%"}</option>
            <option value={2.1739}>{"DEX : +6%"}</option>
            <option value={2.1739}>{"INT : +6%"}</option>
            <option value={2.1739}>{"LUK : +6%"}</option>
            <option value={2.1739}>{"최대 HP : +6%"}</option>
            <option value={2.1739}>{"최대 MP : +6%"}</option>
            <option value={0.8696}>{"공격력 : +6%"}</option>
            <option value={0.8696}>{"마력 : +6%"}</option>
            <option value={0.8696}>{"크리티컬 확률 : +8%"}</option>
            <option value={0.8696}>{"데미지 : +6%"}</option>
            <option value={0.8696}>{"올스탯 : +3%"}</option>
            <option value={0.8696}>{"공격 시 20% 확률로 360의 HP 회복"}</option>
            <option value={0.8696}>{"공격 시 20% 확률로 180의 MP 회복"}</option>
            <option value={0.8696}>{"몬스터 방어율 무시 : +15%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={6.3598}>{"STR : +??%"}</option>
            <option value={6.3598}>{"DEX : +??%"}</option>
            <option value={6.3598}>{"INT : +??%"}</option>
            <option value={6.3598}>{"LUK : +??%"}</option>
            <option value={2.1562}>{"공격력 : +??%"}</option>
            <option value={2.1562}>{"마력 : +??%"}</option>
            <option value={2.1562}>{"크리티컬 확률 : +??%"}</option>
            <option value={2.1562}>{"데미지 : +??%"}</option>
            <option value={2.1562}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={5.8163}>{"STR : +12"}</option>
            <option value={5.8163}>{"DEX : +12"}</option>
            <option value={5.8163}>{"INT : +12"}</option>
            <option value={5.8163}>{"LUK : +12"}</option>
            <option value={5.8163}>{"최대 HP : +120"}</option>
            <option value={5.8163}>{"최대 MP : +120"}</option>
            <option value={3.8776}>{"공격력 : +12"}</option>
            <option value={3.8776}>{"마력 : +12"}</option>
            <option value={5.8163}>{"STR : +3%"}</option>
            <option value={5.8163}>{"DEX : +3%"}</option>
            <option value={5.8163}>{"INT : +3%"}</option>
            <option value={5.8163}>{"LUK : +3%"}</option>
            <option value={1.9388}>{"공격력 : +3%"}</option>
            <option value={1.9388}>{"마력 : +3%"}</option>
            <option value={1.9388}>{"크리티컬 확률 : +4%"}</option>
            <option value={1.9388}>{"데미지 : +3%"}</option>
            <option value={3.8776}>{"올스탯 : +5"}</option>
            <option value={1.9388}>{"공격 시 20% 확률로 240의 HP 회복"}</option>
            <option value={1.9388}>{"공격 시 20% 확률로 120의 MP 회복"}</option>
            <option value={1.9388}>
              {"공격 시 20% 확률로 6레벨 중독효과 적용"}
            </option>
            <option value={1.9388}>
              {"공격 시 10% 확률로 2레벨 기절효과 적용"}
            </option>
            <option value={1.9388}>
              {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
            </option>
            <option value={1.9388}>
              {"공격 시 20% 확률로 3레벨 암흑효과 적용"}
            </option>
            <option value={1.9388}>
              {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
            </option>
            <option value={1.9388}>
              {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
            </option>
            <option value={1.9388}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={0.5435}>{"STR : +6%"}</option>
            <option value={0.5435}>{"DEX : +6%"}</option>
            <option value={0.5435}>{"INT : +6%"}</option>
            <option value={0.5435}>{"LUK : +6%"}</option>
            <option value={0.5435}>{"최대 HP : +6%"}</option>
            <option value={0.5435}>{"최대 MP : +6%"}</option>
            <option value={0.2174}>{"공격력 : +6%"}</option>
            <option value={0.2174}>{"마력 : +6%"}</option>
            <option value={0.2174}>{"크리티컬 확률 : +8%"}</option>
            <option value={0.2174}>{"데미지 : +6%"}</option>
            <option value={0.2174}>{"올스탯 : +3%"}</option>
            <option value={0.2174}>{"공격 시 20% 확률로 360의 HP 회복"}</option>
            <option value={0.2174}>{"공격 시 20% 확률로 180의 MP 회복"}</option>
            <option value={0.2174}>{"몬스터 방어율 무시 : +15%"}</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classname}>
        <div id={"option4"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Emblem;
