// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Weapon({grade, setOption, optionPer}) {
  function onChange(event) {
    const id = event.target.parentElement.id;
    if (id === "option1") {
      setOption[0](event.target.value);
    } else if (id === "option2") {
      setOption[1](event.target.value);
    } else if (id === "option3") {
      setOption[2](event.target.value);
    } else {
      console.log("error !");
    }
  }

  if (grade === "L") {
    return (
      <div className="weapon">
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={9.7561}>STR : +12%</option>
            <option value={9.7561}>DEX : +12%</option>
            <option value={9.7561}>INT : +12% </option>
            <option value={9.7561}>LUK : +12% </option>
            <option value={4.878}>공격력 : +12% </option>
            <option value={4.878}>마력 : +12% </option>
            <option value={4.878}>크리티컬 확률 : +12% </option>
            <option value={4.878}>데미지 : +12% </option>
            <option value={7.3171}>올스탯 : +9% </option>
            <option value={4.878}>캐릭터 기준 10레벨 당 공격력 : +1 </option>
            <option value={4.878}>캐릭터 기준 10레벨 당 마력 : +1 </option>
            <option value={4.878 * 2}>몬스터 방어율 무시 : +??% </option>
            <option value={4.878}>몬스터 방어율 무시 : +35% </option>
            <option value={4.878}>몬스터 방어율 무시 : +40% </option>
            <option value={4.878 * 3}>보스 몬스터 공격 시 데미지 : +??%</option>
            <option value={4.878}>보스 몬스터 공격 시 데미지 : +30% </option>
            <option value={4.878}>보스 몬스터 공격 시 데미지 : +35% </option>
            <option value={4.878}>보스 몬스터 공격 시 데미지 : +40% </option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={11.4407}>STR : +??%</option>
            <option value={11.4407}>DEX : +??%</option>
            <option value={11.4407}>INT : +??%</option>
            <option value={11.4407}>LUK : +??%</option>
            <option value={6.7669}>공격력 : +??%</option>
            <option value={6.7669}>마력 : +??%</option>
            <option value={8.8599}>크리티컬 확률 : +??%</option>
            <option value={6.7669}>데미지 : +??%</option>
            <option value={9.1038}>올스탯 : +??%</option>
            <option value={7.2547}>몬스터 방어율 무시 : +??%</option>
            <option value={7.7425}>보스 몬스터 공격 시 데미지 : +??%</option>
            <option value={10.4651}>STR : +9%</option>
            <option value={10.4651}>DEX : +9%</option>
            <option value={10.4651}>INT : +9%</option>
            <option value={10.4651}>LUK : +9%</option>
            <option value={6.2791}>공격력 : +9%</option>
            <option value={6.2791}>마력 : +9%</option>
            <option value={8.3721}>크리티컬 확률 : +9%</option>
            <option value={6.2791}>데미지 : +9%</option>
            <option value={8.3721}>올스탯 : +6%</option>
            <option value={6.2791}>몬스터 방어율 무시 : +30%</option>
            <option value={6.2791}>보스 몬스터 공격 시 데미지 : +30%</option>
            <option value={0.9756}>STR : +12%</option>
            <option value={0.9756}>DEX : +12%</option>
            <option value={0.9756}>INT : +12%</option>
            <option value={0.9756}>LUK : +12%</option>
            <option value={0.4878}>공격력 : +12%</option>
            <option value={0.4878}>마력 : +12%</option>
            <option value={0.4878}>크리티컬 확률 : +12%</option>
            <option value={0.4878}>데미지 : +12%</option>
            <option value={0.7317}>올스탯 : +9%</option>
            <option value={0.4878}>캐릭터 기준 10레벨 당 공격력 : +1</option>
            <option value={0.4878}>캐릭터 기준 10레벨 당 마력 : +1</option>
            <option value={0.4878}>몬스터 방어율 무시 : +35%</option>
            <option value={0.4878}>몬스터 방어율 무시 : +40%</option>
            <option value={0.4878}>보스 몬스터 공격 시 데미지 : +30%</option>
            <option value={0.4878}>보스 몬스터 공격 시 데미지 : +35%</option>
            <option value={0.4878}>보스 몬스터 공격 시 데미지 : +40%</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={11.6092}>STR : +??%</option>
            <option value={11.6092}>DEX : +??%</option>
            <option value={11.6092}>INT : +??%</option>
            <option value={11.6092}>LUK : +??%</option>
            <option value={6.9558}>공격력 : +??%</option>
            <option value={6.9558}>마력 : +??%</option>
            <option value={9.2581}>크리티컬 확률 : +??%</option>
            <option value={6.9558}>데미지 : +??%</option>
            <option value={9.2825}>올스탯 : +??%</option>
            <option value={7.0046}>몬스터 방어율 무시 : +??%</option>
            <option value={7.0534}>보스 몬스터 공격 시 데미지 : +??%</option>
            <option value={11.5116}>STR : +9%</option>
            <option value={11.5116}>DEX : +9%</option>
            <option value={11.5116}>INT : +9%</option>
            <option value={11.5116}>LUK : +9%</option>
            <option value={6.907}>공격력 : +9%</option>
            <option value={6.907}>마력 : +9%</option>
            <option value={9.2093}>크리티컬 확률 : +9%</option>
            <option value={6.907}>데미지 : +9%</option>
            <option value={9.2093}>올스탯 : +6%</option>
            <option value={6.907}>몬스터 방어율 무시 : +30%</option>
            <option value={6.907}>보스 몬스터 공격 시 데미지 : +30%</option>
            <option value={0.0976}>STR : +12%</option>
            <option value={0.0976}>DEX : +12%</option>
            <option value={0.0976}>INT : +12%</option>
            <option value={0.0976}>LUK : +12%</option>
            <option value={0.0488}>공격력 : +12%</option>
            <option value={0.0488}>마력 : +12%</option>
            <option value={0.0488}>크리티컬 확률 : +12%</option>
            <option value={0.0488}>데미지 : +12%</option>
            <option value={0.0732}>올스탯 : +9%</option>
            <option value={0.0488}>캐릭터 기준 10레벨 당 공격력 : +1</option>
            <option value={0.0488}>캐릭터 기준 10레벨 당 마력 : +1</option>
            <option value={0.0488}>몬스터 방어율 무시 : +35%</option>
            <option value={0.0488}>몬스터 방어율 무시 : +40%</option>
            <option value={0.0488}>보스 몬스터 공격 시 데미지 : +30%</option>
            <option value={0.0488}>보스 몬스터 공격 시 데미지 : +35%</option>
            <option value={0.0488}>보스 몬스터 공격 시 데미지 : +40%</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "U") {
    return (
      <div className="weapon">
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={11.6279}>STR : +9%</option>
            <option value={11.6279}>DEX : +9%</option>
            <option value={11.6279}>INT : +9%</option>
            <option value={11.6279}>LUK : +9%</option>
            <option value={6.9767}>공격력 : +9%</option>
            <option value={6.9767}>마력 : +9%</option>
            <option value={9.3023}>크리티컬 확률 : +9%</option>
            <option value={6.9767}>데미지 : +9%</option>
            <option value={9.3023}>올스탯 : +6%</option>
            <option value={6.9767}>몬스터 방어율 무시 : +30%</option>
            <option value={6.9767}>보스 몬스터 공격 시 데미지 : +30%</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={10.945400000000001}>STR : +??%</option>
            <option value={10.945400000000001}>DEX : +??%</option>
            <option value={10.945400000000001}>INT : +??%</option>
            <option value={10.945400000000001}>LUK : +??%</option>
            <option value={4.6107}>공격력 : +??%</option>
            <option value={4.6107}>마력 : +??%</option>
            <option value={4.8431999999999995}>크리티컬 확률 : +??%</option>
            <option value={4.6107}>데미지 : +??%</option>
            <option value={4.8431999999999995}>올스탯 : +??%</option>
            <option value={4.6107}>몬스터 방어율 무시 : +??%</option>
            <option value={9.7826}>STR : +6%</option>
            <option value={9.7826}>DEX : +6%</option>
            <option value={9.7826}>INT : +6%</option>
            <option value={9.7826}>LUK : +6%</option>
            <option value={9.7826}>최대 HP : +6%</option>
            <option value={9.7826}>최대 MP : +6%</option>
            <option value={3.913}>공격력 : +6%</option>
            <option value={3.913}>마력 : +6%</option>
            <option value={3.913}>크리티컬 확률 : +8%</option>
            <option value={3.913}>데미지 : +6%</option>
            <option value={3.913}>올스탯 : +3%</option>
            <option value={3.913}>공격 시 20% 확률로 360의 HP 회복</option>
            <option value={3.913}>공격 시 20% 확률로 180의 MP 회복</option>
            <option value={3.913}>몬스터 방어율 무시 : +15%</option>
            <option value={1.1628}>STR : +9%</option>
            <option value={1.1628}>DEX : +9%</option>
            <option value={1.1628}>INT : +9%</option>
            <option value={1.1628}>LUK : +9%</option>
            <option value={0.6977}>공격력 : +9%</option>
            <option value={0.6977}>마력 : +9%</option>
            <option value={0.9302}>크리티컬 확률 : +9%</option>
            <option value={0.6977}>데미지 : +9%</option>
            <option value={0.9302}>올스탯 : +6%</option>
            <option value={0.6977}>몬스터 방어율 무시 : +30%</option>
            <option value={0.6977}>보스 몬스터 공격 시 데미지 : +30%</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={10.8772}>STR : +??%</option>
            <option value={10.8772}>DEX : +??%</option>
            <option value={10.8772}>INT : +??%</option>
            <option value={10.8772}>LUK : +??%</option>
            <option value={4.374099999999999}>공격력 : +??%</option>
            <option value={4.374099999999999}>마력 : +??%</option>
            <option value={4.3972999999999995}>크리티컬 확률 : +??%</option>
            <option value={4.374099999999999}>데미지 : +??%</option>
            <option value={4.3972999999999995}>올스탯 : +??%</option>
            <option value={4.374099999999999}>몬스터 방어율 무시 : +??%</option>
            <option value={10.7609}>STR : +6%</option>
            <option value={10.7609}>DEX : +6%</option>
            <option value={10.7609}>INT : +6%</option>
            <option value={10.7609}>LUK : +6%</option>
            <option value={10.7609}>최대 HP : +6%</option>
            <option value={10.7609}>최대 MP : +6%</option>
            <option value={4.3043}>공격력 : +6%</option>
            <option value={4.3043}>마력 : +6%</option>
            <option value={4.3043}>크리티컬 확률 : +8%</option>
            <option value={4.3043}>데미지 : +6%</option>
            <option value={4.3043}>올스탯 : +3%</option>
            <option value={4.3043}>공격 시 20% 확률로 360의 HP 회복</option>
            <option value={4.3043}>공격 시 20% 확률로 180의 MP 회복</option>
            <option value={4.3043}>몬스터 방어율 무시 : +15%</option>
            <option value={0.1163}>STR : +9%</option>
            <option value={0.1163}>DEX : +9%</option>
            <option value={0.1163}>INT : +9%</option>
            <option value={0.1163}>LUK : +9%</option>
            <option value={0.0698}>공격력 : +9%</option>
            <option value={0.0698}>마력 : +9%</option>
            <option value={0.093}>크리티컬 확률 : +9%</option>
            <option value={0.0698}>데미지 : +9%</option>
            <option value={0.093}>올스탯 : +6%</option>
            <option value={0.0698}>몬스터 방어율 무시 : +30%</option>
            <option value={0.0698}>보스 몬스터 공격 시 데미지 : +30%</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "E") {
    return (
      <div className="weapon">
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={10.8696}>STR : +6%</option>
            <option value={10.8696}>DEX : +6%</option>
            <option value={10.8696}>INT : +6%</option>
            <option value={10.8696}>LUK : +6%</option>
            <option value={10.8696}>최대 HP : +6%</option>
            <option value={10.8696}>최대 MP : +6%</option>
            <option value={4.3478}>공격력 : +6%</option>
            <option value={4.3478}>마력 : +6%</option>
            <option value={4.3478}>크리티컬 확률 : +8%</option>
            <option value={4.3478}>데미지 : +6%</option>
            <option value={4.3478}>올스탯 : +3%</option>
            <option value={4.3478}>공격 시 20% 확률로 360의 HP 회복</option>
            <option value={4.3478}>공격 시 20% 확률로 180의 MP 회복</option>
            <option value={4.3478}>몬스터 방어율 무시 : +15%</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={6.5972}>STR : +??%</option>
            <option value={6.5972}>DEX : +??%</option>
            <option value={6.5972}>INT : +??%</option>
            <option value={6.5972}>LUK : +??%</option>
            <option value={2.2715}>공격력 : +??%</option>
            <option value={2.2715}>마력 : +??%</option>
            <option value={2.2715}>크리티컬 확률 : +??%</option>
            <option value={2.2715}>데미지 : +??%</option>
            <option value={2.2715}>몬스터 방어율 무시 : +??%</option>
            <option value={5.5102}>STR : +12</option>
            <option value={5.5102}>DEX : +12</option>
            <option value={5.5102}>INT : +12</option>
            <option value={5.5102}>LUK : +12</option>
            <option value={5.5102}>최대 HP : +120</option>
            <option value={5.5102}>최대 MP : +120</option>
            <option value={3.6735}>공격력 : +12</option>
            <option value={3.6735}>마력 : +12</option>
            <option value={5.5102}>STR : +3%</option>
            <option value={5.5102}>DEX : +3%</option>
            <option value={5.5102}>INT : +3%</option>
            <option value={5.5102}>LUK : +3%</option>
            <option value={1.8367}>공격력 : +3%</option>
            <option value={1.8367}>마력 : +3%</option>
            <option value={1.8367}>크리티컬 확률 : +4%</option>
            <option value={1.8367}>데미지 : +3%</option>
            <option value={3.6735}>올스탯 : +5</option>
            <option value={1.8367}>공격 시 20% 확률로 240의 HP 회복</option>
            <option value={1.8367}>공격 시 20% 확률로 120의 MP 회복</option>
            <option value={1.8367}>
              공격 시 20% 확률로 6레벨 중독효과 적용
            </option>
            <option value={1.8367}>
              공격 시 10% 확률로 2레벨 기절효과 적용
            </option>
            <option value={1.8367}>
              공격 시 20% 확률로 2레벨 슬로우효과 적용
            </option>
            <option value={1.8367}>
              공격 시 20% 확률로 3레벨 암흑효과 적용
            </option>
            <option value={1.8367}>
              공격 시 10% 확률로 2레벨 빙결효과 적용
            </option>
            <option value={1.8367}>
              공격 시 10% 확률로 2레벨 봉인효과 적용
            </option>
            <option value={1.8367}>몬스터 방어율 무시 : +15%</option>
            <option value={1.087}>STR : +6%</option>
            <option value={1.087}>DEX : +6%</option>
            <option value={1.087}>INT : +6%</option>
            <option value={1.087}>LUK : +6%</option>
            <option value={1.087}>최대 HP : +6%</option>
            <option value={1.087}>최대 MP : +6%</option>
            <option value={0.4348}>공격력 : +6%</option>
            <option value={0.4348}>마력 : +6%</option>
            <option value={0.4348}>크리티컬 확률 : +8%</option>
            <option value={0.4348}>데미지 : +6%</option>
            <option value={0.4348}>올스탯 : +3%</option>
            <option value={0.4348}>공격 시 20% 확률로 360의 HP 회복</option>
            <option value={0.4348}>공격 시 20% 확률로 180의 MP 회복</option>
            <option value={0.4348}>몬스터 방어율 무시 : +15%</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={6.1699}>STR : +??%</option>
            <option value={6.1699}>DEX : +??%</option>
            <option value={6.1699}>INT : +??%</option>
            <option value={6.1699}>LUK : +??%</option>
            <option value={2.0639}>공격력 : +??%</option>
            <option value={2.0639}>마력 : +??%</option>
            <option value={2.0639}>크리티컬 확률 : +??%</option>
            <option value={2.0639}>데미지 : +??%</option>
            <option value={2.0639}>몬스터 방어율 무시 : +??%</option>
            <option value={6.0612}>STR : +12</option>
            <option value={6.0612}>DEX : +12</option>
            <option value={6.0612}>INT : +12</option>
            <option value={6.0612}>LUK : +12</option>
            <option value={6.0612}>최대 HP : +120</option>
            <option value={6.0612}>최대 MP : +120</option>
            <option value={4.0408}>공격력 : +12</option>
            <option value={4.0408}>마력 : +12</option>
            <option value={6.0612}>STR : +3%</option>
            <option value={6.0612}>DEX : +3%</option>
            <option value={6.0612}>INT : +3%</option>
            <option value={6.0612}>LUK : +3%</option>
            <option value={2.0204}>공격력 : +3%</option>
            <option value={2.0204}>마력 : +3%</option>
            <option value={2.0204}>크리티컬 확률 : +4%</option>
            <option value={2.0204}>데미지 : +3%</option>
            <option value={4.0408}>올스탯 : +5</option>
            <option value={2.0204}>공격 시 20% 확률로 240의 HP 회복</option>
            <option value={2.0204}>공격 시 20% 확률로 120의 MP 회복</option>
            <option value={2.0204}>
              공격 시 20% 확률로 6레벨 중독효과 적용
            </option>
            <option value={2.0204}>
              공격 시 10% 확률로 2레벨 기절효과 적용
            </option>
            <option value={2.0204}>
              공격 시 20% 확률로 2레벨 슬로우효과 적용
            </option>
            <option value={2.0204}>
              공격 시 20% 확률로 3레벨 암흑효과 적용
            </option>
            <option value={2.0204}>
              공격 시 10% 확률로 2레벨 빙결효과 적용
            </option>
            <option value={2.0204}>
              공격 시 10% 확률로 2레벨 봉인효과 적용
            </option>
            <option value={2.0204}>몬스터 방어율 무시 : +15%</option>
            <option value={0.1087}>STR : +6%</option>
            <option value={0.1087}>DEX : +6%</option>
            <option value={0.1087}>INT : +6%</option>
            <option value={0.1087}>LUK : +6%</option>
            <option value={0.1087}>최대 HP : +6%</option>
            <option value={0.1087}>최대 MP : +6%</option>
            <option value={0.0435}>공격력 : +6%</option>
            <option value={0.0435}>마력 : +6%</option>
            <option value={0.0435}>크리티컬 확률 : +8%</option>
            <option value={0.0435}>데미지 : +6%</option>
            <option value={0.0435}>올스탯 : +3%</option>
            <option value={0.0435}>공격 시 20% 확률로 360의 HP 회복</option>
            <option value={0.0435}>공격 시 20% 확률로 180의 MP 회복</option>
            <option value={0.0435}>몬스터 방어율 무시 : +15%</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weapon">
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Weapon;
