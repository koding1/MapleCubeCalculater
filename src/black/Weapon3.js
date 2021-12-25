// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Weapon3({grade, setOption, optionPer}) {
  const classname = "weapon3";

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
            <option value={8.5106}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={12.7659}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={8.5106}>{"STR : +12%"}</option>
            <option value={8.5106}>{"DEX : +12%"}</option>
            <option value={8.5106}>{"INT : +12%"}</option>
            <option value={8.5106}>{"LUK : +12%"}</option>
            <option value={4.2553}>{"공격력 : +12%"}</option>
            <option value={4.2553}>{"마력 : +12%"}</option>
            <option value={4.2553}>{"크리티컬 확률 : +12%"}</option>
            <option value={4.2553}>{"데미지 : +12%"}</option>
            <option value={6.383}>{"올스탯 : +9%"}</option>
            <option value={4.2553}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={4.2553}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={4.2553}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={4.2553}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={6.383}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.383}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={4.2553}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={4.2553}>
              {"보스 몬스터 공격 시 데미지 : +35%"}
            </option>
            <option value={4.2553}>
              {"보스 몬스터 공격 시 데미지 : +40%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.5452}>{"STR : +??%"}</option>
            <option value={9.5452}>{"DEX : +??%"}</option>
            <option value={9.5452}>{"INT : +??%"}</option>
            <option value={9.5452}>{"LUK : +??%"}</option>
            <option value={5.5569999999999995}>{"공격력 : +??%"}</option>
            <option value={5.5569999999999995}>{"마력 : +??%"}</option>
            <option value={7.1255999999999995}>{"크리티컬 확률 : +??%"}</option>
            <option value={5.5569999999999995}>{"데미지 : +??%"}</option>
            <option value={7.5511}>{"올스탯 : +??%"}</option>
            <option value={6.408099999999999}>
              {"몬스터 방어율 무시 : +??%"}
            </option>
            <option value={7.259199999999999}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={7.8431}>{"STR : +9%"}</option>
            <option value={7.8431}>{"DEX : +9%"}</option>
            <option value={7.8431}>{"INT : +9%"}</option>
            <option value={7.8431}>{"LUK : +9%"}</option>
            <option value={4.7059}>{"공격력 : +9%"}</option>
            <option value={4.7059}>{"마력 : +9%"}</option>
            <option value={6.2745}>{"크리티컬 확률 : +9%"}</option>
            <option value={4.7059}>{"데미지 : +9%"}</option>
            <option value={6.2745}>{"올스탯 : +6%"}</option>
            <option value={4.7059}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={6.2745}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.2745}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={4.7059}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={1.7021}>{"STR : +12%"}</option>
            <option value={1.7021}>{"DEX : +12%"}</option>
            <option value={1.7021}>{"INT : +12%"}</option>
            <option value={1.7021}>{"LUK : +12%"}</option>
            <option value={0.8511}>{"공격력 : +12%"}</option>
            <option value={0.8511}>{"마력 : +12%"}</option>
            <option value={0.8511}>{"크리티컬 확률 : +12%"}</option>
            <option value={0.8511}>{"데미지 : +12%"}</option>
            <option value={1.2766}>{"올스탯 : +9%"}</option>
            <option value={0.8511}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={0.8511}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={0.8511}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={0.8511}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={1.2766}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.2766}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.8511}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.8511}>
              {"보스 몬스터 공격 시 데미지 : +35%"}
            </option>
            <option value={0.8511}>
              {"보스 몬스터 공격 시 데미지 : +40%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.7392}>{"STR : +??%"}</option>
            <option value={9.7392}>{"DEX : +??%"}</option>
            <option value={9.7392}>{"INT : +??%"}</option>
            <option value={9.7392}>{"LUK : +??%"}</option>
            <option value={5.800999999999999}>{"공격력 : +??%"}</option>
            <option value={5.800999999999999}>{"마력 : +??%"}</option>
            <option value={7.663799999999999}>{"크리티컬 확률 : +??%"}</option>
            <option value={5.800999999999999}>{"데미지 : +??%"}</option>
            <option value={7.770099999999999}>{"올스탯 : +??%"}</option>
            <option value={6.013799999999999}>
              {"몬스터 방어율 무시 : +??%"}
            </option>
            <option value={6.226599999999999}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={9.3137}>{"STR : +9%"}</option>
            <option value={9.3137}>{"DEX : +9%"}</option>
            <option value={9.3137}>{"INT : +9%"}</option>
            <option value={9.3137}>{"LUK : +9%"}</option>
            <option value={5.5882}>{"공격력 : +9%"}</option>
            <option value={5.5882}>{"마력 : +9%"}</option>
            <option value={7.451}>{"크리티컬 확률 : +9%"}</option>
            <option value={5.5882}>{"데미지 : +9%"}</option>
            <option value={7.451}>{"올스탯 : +6%"}</option>
            <option value={5.5882}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={7.451}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.451}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={5.5882}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.4255}>{"STR : +12%"}</option>
            <option value={0.4255}>{"DEX : +12%"}</option>
            <option value={0.4255}>{"INT : +12%"}</option>
            <option value={0.4255}>{"LUK : +12%"}</option>
            <option value={0.2128}>{"공격력 : +12%"}</option>
            <option value={0.2128}>{"마력 : +12%"}</option>
            <option value={0.2128}>{"크리티컬 확률 : +12%"}</option>
            <option value={0.2128}>{"데미지 : +12%"}</option>
            <option value={0.3191}>{"올스탯 : +9%"}</option>
            <option value={0.2128}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={0.2128}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={0.2128}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={0.2128}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={0.3191}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3191}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.2128}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.2128}>
              {"보스 몬스터 공격 시 데미지 : +35%"}
            </option>
            <option value={0.2128}>
              {"보스 몬스터 공격 시 데미지 : +40%"}
            </option>
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
            <option value={9.8039}>{"STR : +9%"}</option>
            <option value={9.8039}>{"DEX : +9%"}</option>
            <option value={9.8039}>{"INT : +9%"}</option>
            <option value={9.8039}>{"LUK : +9%"}</option>
            <option value={5.8824}>{"공격력 : +9%"}</option>
            <option value={5.8824}>{"마력 : +9%"}</option>
            <option value={7.8431}>{"크리티컬 확률 : +9%"}</option>
            <option value={5.8824}>{"데미지 : +9%"}</option>
            <option value={7.8431}>{"올스탯 : +6%"}</option>
            <option value={5.8824}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={7.8431}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.8431}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={5.8824}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.7169}>{"STR : +??%"}</option>
            <option value={11.7169}>{"DEX : +??%"}</option>
            <option value={11.7169}>{"INT : +??%"}</option>
            <option value={11.7169}>{"LUK : +??%"}</option>
            <option value={5.0789}>{"공격력 : +??%"}</option>
            <option value={5.0789}>{"마력 : +??%"}</option>
            <option value={5.471}>{"크리티컬 확률 : +??%"}</option>
            <option value={5.0789}>{"데미지 : +??%"}</option>
            <option value={5.471}>{"올스탯 : +??%"}</option>
            <option value={5.0789}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={9.7561}>{"STR : +6%"}</option>
            <option value={9.7561}>{"DEX : +6%"}</option>
            <option value={9.7561}>{"INT : +6%"}</option>
            <option value={9.7561}>{"LUK : +6%"}</option>
            <option value={9.7561}>{"최대 HP : +6%"}</option>
            <option value={3.9024}>{"공격력 : +6%"}</option>
            <option value={3.9024}>{"마력 : +6%"}</option>
            <option value={3.9024}>{"크리티컬 확률 : +8%"}</option>
            <option value={3.9024}>{"데미지 : +6%"}</option>
            <option value={3.9024}>{"올스탯 : +3%"}</option>
            <option value={3.9024}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
            <option value={3.9024}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
            <option value={3.9024}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={1.9608}>{"STR : +9%"}</option>
            <option value={1.9608}>{"DEX : +9%"}</option>
            <option value={1.9608}>{"INT : +9%"}</option>
            <option value={1.9608}>{"LUK : +9%"}</option>
            <option value={1.1765}>{"공격력 : +9%"}</option>
            <option value={1.1765}>{"마력 : +9%"}</option>
            <option value={1.5686}>{"크리티컬 확률 : +9%"}</option>
            <option value={1.1765}>{"데미지 : +9%"}</option>
            <option value={1.5686}>{"올스탯 : +6%"}</option>
            <option value={1.1765}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={1.5686}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.5686}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.1765}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.0756}>{"STR : +??%"}</option>
            <option value={12.0756}>{"DEX : +??%"}</option>
            <option value={12.0756}>{"INT : +??%"}</option>
            <option value={12.0756}>{"LUK : +??%"}</option>
            <option value={4.9282}>{"공격력 : +??%"}</option>
            <option value={4.9282}>{"마력 : +??%"}</option>
            <option value={5.0263}>{"크리티컬 확률 : +??%"}</option>
            <option value={4.9282}>{"데미지 : +??%"}</option>
            <option value={5.0263}>{"올스탯 : +??%"}</option>
            <option value={4.9282}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={11.5854}>{"STR : +6%"}</option>
            <option value={11.5854}>{"DEX : +6%"}</option>
            <option value={11.5854}>{"INT : +6%"}</option>
            <option value={11.5854}>{"LUK : +6%"}</option>
            <option value={11.5854}>{"최대 HP : +6%"}</option>
            <option value={4.6341}>{"공격력 : +6%"}</option>
            <option value={4.6341}>{"마력 : +6%"}</option>
            <option value={4.6341}>{"크리티컬 확률 : +8%"}</option>
            <option value={4.6341}>{"데미지 : +6%"}</option>
            <option value={4.6341}>{"올스탯 : +3%"}</option>
            <option value={4.6341}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
            <option value={4.6341}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
            <option value={4.6341}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={0.4902}>{"STR : +9%"}</option>
            <option value={0.4902}>{"DEX : +9%"}</option>
            <option value={0.4902}>{"INT : +9%"}</option>
            <option value={0.4902}>{"LUK : +9%"}</option>
            <option value={0.2941}>{"공격력 : +9%"}</option>
            <option value={0.2941}>{"마력 : +9%"}</option>
            <option value={0.3922}>{"크리티컬 확률 : +9%"}</option>
            <option value={0.2941}>{"데미지 : +9%"}</option>
            <option value={0.3922}>{"올스탯 : +6%"}</option>
            <option value={0.2941}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={0.3922}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3922}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.2941}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
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
            <option value={4.878}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
            <option value={4.878}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
            <option value={4.878}>{"몬스터 방어율 무시 : +15%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.6564}>{"STR : +??%"}</option>
            <option value={7.6564}>{"DEX : +??%"}</option>
            <option value={7.6564}>{"INT : +??%"}</option>
            <option value={7.6564}>{"LUK : +??%"}</option>
            <option value={2.7147}>{"공격력 : +??%"}</option>
            <option value={2.7147}>{"마력 : +??%"}</option>
            <option value={2.7147}>{"크리티컬 확률 : +??%"}</option>
            <option value={2.7147}>{"데미지 : +??%"}</option>
            <option value={2.7147}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={5.2174}>{"STR : +12"}</option>
            <option value={5.2174}>{"DEX : +12"}</option>
            <option value={5.2174}>{"INT : +12"}</option>
            <option value={5.2174}>{"LUK : +12"}</option>
            <option value={5.2174}>{"최대 HP : +100"}</option>
            <option value={3.4783}>{"공격력 : +12"}</option>
            <option value={3.4783}>{"마력 : +12"}</option>
            <option value={5.2174}>{"STR : +3%"}</option>
            <option value={5.2174}>{"DEX : +3%"}</option>
            <option value={5.2174}>{"INT : +3%"}</option>
            <option value={5.2174}>{"LUK : +3%"}</option>
            <option value={1.7391}>{"공격력 : +3%"}</option>
            <option value={1.7391}>{"마력 : +3%"}</option>
            <option value={1.7391}>{"크리티컬 확률 : +4%"}</option>
            <option value={1.7391}>{"데미지 : +3%"}</option>
            <option value={3.4783}>{"올스탯 : +5"}</option>
            <option value={1.7391}>{"공격 시 20% 확률로 200의 HP 회복"}</option>
            <option value={1.7391}>{"공격 시 20% 확률로 110의 MP 회복"}</option>
            <option value={1.7391}>
              {"공격 시 20% 확률로 5레벨 중독효과 적용"}
            </option>
            <option value={1.7391}>
              {"공격 시 10% 확률로 2레벨 기절효과 적용"}
            </option>
            <option value={1.7391}>
              {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
            </option>
            <option value={1.7391}>
              {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
            </option>
            <option value={1.7391}>
              {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
            </option>
            <option value={1.7391}>
              {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
            </option>
            <option value={1.7391}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={2.439}>{"STR : +6%"}</option>
            <option value={2.439}>{"DEX : +6%"}</option>
            <option value={2.439}>{"INT : +6%"}</option>
            <option value={2.439}>{"LUK : +6%"}</option>
            <option value={2.439}>{"최대 HP : +6%"}</option>
            <option value={0.9756}>{"공격력 : +6%"}</option>
            <option value={0.9756}>{"마력 : +6%"}</option>
            <option value={0.9756}>{"크리티컬 확률 : +8%"}</option>
            <option value={0.9756}>{"데미지 : +6%"}</option>
            <option value={0.9756}>{"올스탯 : +3%"}</option>
            <option value={0.9756}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
            <option value={0.9756}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
            <option value={0.9756}>{"몬스터 방어율 무시 : +15%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={6.8055}>{"STR : +??%"}</option>
            <option value={6.8055}>{"DEX : +??%"}</option>
            <option value={6.8055}>{"INT : +??%"}</option>
            <option value={6.8055}>{"LUK : +??%"}</option>
            <option value={2.3091}>{"공격력 : +??%"}</option>
            <option value={2.3091}>{"마력 : +??%"}</option>
            <option value={2.3091}>{"크리티컬 확률 : +??%"}</option>
            <option value={2.3091}>{"데미지 : +??%"}</option>
            <option value={2.3091}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={6.1957}>{"STR : +12"}</option>
            <option value={6.1957}>{"DEX : +12"}</option>
            <option value={6.1957}>{"INT : +12"}</option>
            <option value={6.1957}>{"LUK : +12"}</option>
            <option value={6.1957}>{"최대 HP : +100"}</option>
            <option value={4.1304}>{"공격력 : +12"}</option>
            <option value={4.1304}>{"마력 : +12"}</option>
            <option value={6.1957}>{"STR : +3%"}</option>
            <option value={6.1957}>{"DEX : +3%"}</option>
            <option value={6.1957}>{"INT : +3%"}</option>
            <option value={6.1957}>{"LUK : +3%"}</option>
            <option value={2.0652}>{"공격력 : +3%"}</option>
            <option value={2.0652}>{"마력 : +3%"}</option>
            <option value={2.0652}>{"크리티컬 확률 : +4%"}</option>
            <option value={2.0652}>{"데미지 : +3%"}</option>
            <option value={4.1304}>{"올스탯 : +5"}</option>
            <option value={2.0652}>{"공격 시 20% 확률로 200의 HP 회복"}</option>
            <option value={2.0652}>{"공격 시 20% 확률로 110의 MP 회복"}</option>
            <option value={2.0652}>
              {"공격 시 20% 확률로 5레벨 중독효과 적용"}
            </option>
            <option value={2.0652}>
              {"공격 시 10% 확률로 2레벨 기절효과 적용"}
            </option>
            <option value={2.0652}>
              {"공격 시 20% 확률로 2레벨 슬로우효과 적용"}
            </option>
            <option value={2.0652}>
              {"공격 시 20% 확률로 2레벨 암흑효과 적용"}
            </option>
            <option value={2.0652}>
              {"공격 시 10% 확률로 2레벨 빙결효과 적용"}
            </option>
            <option value={2.0652}>
              {"공격 시 10% 확률로 2레벨 봉인효과 적용"}
            </option>
            <option value={2.0652}>{"몬스터 방어율 무시 : +15%"}</option>
            <option value={0.6098}>{"STR : +6%"}</option>
            <option value={0.6098}>{"DEX : +6%"}</option>
            <option value={0.6098}>{"INT : +6%"}</option>
            <option value={0.6098}>{"LUK : +6%"}</option>
            <option value={0.6098}>{"최대 HP : +6%"}</option>
            <option value={0.2439}>{"공격력 : +6%"}</option>
            <option value={0.2439}>{"마력 : +6%"}</option>
            <option value={0.2439}>{"크리티컬 확률 : +8%"}</option>
            <option value={0.2439}>{"데미지 : +6%"}</option>
            <option value={0.2439}>{"올스탯 : +3%"}</option>
            <option value={0.2439}>{"공격 시 20% 확률로 300의 HP 회복"}</option>
            <option value={0.2439}>{"공격 시 20% 확률로 165의 MP 회복"}</option>
            <option value={0.2439}>{"몬스터 방어율 무시 : +15%"}</option>
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

export default Weapon3;