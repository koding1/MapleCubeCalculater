// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"
function Emblem({grade, setOption, optionPer}) {
  const classname = "emblem";

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
      <div className={classname}>
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={11.4286}>몬스터 방어율 무시 : +??%</option>
            <option value={11.4286}>STR : +12%</option>
            <option value={11.4286}>DEX : +12%</option>
            <option value={11.4286}>INT : +12%</option>
            <option value={11.4286}>LUK : +12%</option>
            <option value={5.7143}>공격력 : +12%</option>
            <option value={5.7143}>마력 : +12%</option>
            <option value={5.7143}>크리티컬 확률 : +12%</option>
            <option value={5.7143}>데미지 : +12%</option>
            <option value={8.5714}>올스탯 : +9%</option>
            <option value={5.7143}>캐릭터 기준 10레벨 당 공격력 : +1</option>
            <option value={5.7143}>캐릭터 기준 10레벨 당 마력 : +1</option>
            <option value={5.7143}>몬스터 방어율 무시 : +35%</option>
            <option value={5.7143}>몬스터 방어율 무시 : +40%</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
          <option value = {100}>상관 없음</option>
<option value = {12.392900000000001}>STR : +??%</option>
<option value = {12.392900000000001}>DEX : +??%</option>
<option value = {12.392900000000001}>INT : +??%</option>
<option value = {12.392900000000001}>LUK : +??%</option>
<option value = {7.3214}>공격력 : +??%</option>
<option value = {7.3214}>마력 : +??%</option>
<option value = {9.5714}>크리티컬 확률 : +??%</option>
<option value = {7.3214}>데미지 : +??%</option>
<option value = {9.857099999999999}>올스탯 : +??%</option>
<option value = {7.892799999999999}>몬스터 방어율 무시 : +??%</option>
<option value = {11.2500}>STR : +9%</option>
<option value = {11.2500}>DEX : +9%</option>
<option value = {11.2500}>INT : +9%</option>
<option value = {11.2500}>LUK : +9%</option>
<option value = {6.7500}>공격력 : +9%</option>
<option value = {6.7500}>마력 : +9%</option>
<option value = {9.0000}>크리티컬 확률 : +9%</option>
<option value = {6.7500}>데미지 : +9%</option>
<option value = {9.0000}>올스탯 : +6%</option>
<option value = {6.7500}>몬스터 방어율 무시 : +30%</option>
<option value = {1.1429}>STR : +12%</option>
<option value = {1.1429}>DEX : +12%</option>
<option value = {1.1429}>INT : +12%</option>
<option value = {1.1429}>LUK : +12%</option>
<option value = {0.5714}>공격력 : +12%</option>
<option value = {0.5714}>마력 : +12%</option>
<option value = {0.5714}>크리티컬 확률 : +12%</option>
<option value = {0.5714}>데미지 : +12%</option>
<option value = {0.8571}>올스탯 : +9%</option>
<option value = {0.5714}>캐릭터 기준 10레벨 당 공격력 : +1</option>
<option value = {0.5714}>캐릭터 기준 10레벨 당 마력 : +1</option>
<option value = {0.5714}>몬스터 방어율 무시 : +35%</option>
<option value = {0.5714}>몬스터 방어율 무시 : +40%</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
          <option value = {100}>상관 없음</option>
<option value = {12.4893}>STR : +??%</option>
<option value = {12.4893}>DEX : +??%</option>
<option value = {12.4893}>INT : +??%</option>
<option value = {12.4893}>LUK : +??%</option>
<option value = {7.4821}>공격력 : +??%</option>
<option value = {7.4821}>마력 : +??%</option>
<option value = {9.9571}>크리티컬 확률 : +??%</option>
<option value = {7.4821}>데미지 : +??%</option>
<option value = {9.9857}>올스탯 : +??%</option>
<option value = {7.5392}>몬스터 방어율 무시 : +??%</option>
<option value = {12.3750}>STR : +9%</option>
<option value = {12.3750}>DEX : +9%</option>
<option value = {12.3750}>INT : +9%</option>
<option value = {12.3750}>LUK : +9%</option>
<option value = {7.4250}>공격력 : +9%</option>
<option value = {7.4250}>마력 : +9%</option>
<option value = {9.9000}>크리티컬 확률 : +9%</option>
<option value = {7.4250}>데미지 : +9%</option>
<option value = {9.9000}>올스탯 : +6%</option>
<option value = {7.4250}>몬스터 방어율 무시 : +30%</option>
<option value = {0.1143}>STR : +12%</option>
<option value = {0.1143}>DEX : +12%</option>
<option value = {0.1143}>INT : +12%</option>
<option value = {0.1143}>LUK : +12%</option>
<option value = {0.0571}>공격력 : +12%</option>
<option value = {0.0571}>마력 : +12%</option>
<option value = {0.0571}>크리티컬 확률 : +12%</option>
<option value = {0.0571}>데미지 : +12%</option>
<option value = {0.0857}>올스탯 : +9%</option>
<option value = {0.0571}>캐릭터 기준 10레벨 당 공격력 : +1</option>
<option value = {0.0571}>캐릭터 기준 10레벨 당 마력 : +1</option>
<option value = {0.0571}>몬스터 방어율 무시 : +35%</option>
<option value = {0.0571}>몬스터 방어율 무시 : +40%</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "U") {
    return (
      <div className={classname}>
        <div id={"option1"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={12.5}>STR : +9%</option>
            <option value={12.5}>DEX : +9%</option>
            <option value={12.5}>INT : +9%</option>
            <option value={12.5}>LUK : +9%</option>
            <option value={7.5}>공격력 : +9%</option>
            <option value={7.5}>마력 : +9%</option>
            <option value={10.0}>크리티컬 확률 : +9%</option>
            <option value={7.5}>데미지 : +9%</option>
            <option value={10.0}>올스탯 : +6%</option>
            <option value={7.5}>몬스터 방어율 무시 : +30%</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={11.0326}>STR : +??%</option>
            <option value={11.0326}>DEX : +??%</option>
            <option value={11.0326}>INT : +??%</option>
            <option value={11.0326}>LUK : +??%</option>
            <option value={4.663}>공격력 : +??%</option>
            <option value={4.663}>마력 : +??%</option>
            <option value={4.913}>크리티컬 확률 : +??%</option>
            <option value={4.663}>데미지 : +??%</option>
            <option value={4.913}>올스탯 : +??%</option>
            <option value={4.663}>몬스터 방어율 무시 : +??%</option>
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
            <option value={1.25}>STR : +9%</option>
            <option value={1.25}>DEX : +9%</option>
            <option value={1.25}>INT : +9%</option>
            <option value={1.25}>LUK : +9%</option>
            <option value={0.75}>공격력 : +9%</option>
            <option value={0.75}>마력 : +9%</option>
            <option value={1.0}>크리티컬 확률 : +9%</option>
            <option value={0.75}>데미지 : +9%</option>
            <option value={1.0}>올스탯 : +6%</option>
            <option value={0.75}>몬스터 방어율 무시 : +30%</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={10.8859}>STR : +??%</option>
            <option value={10.8859}>DEX : +??%</option>
            <option value={10.8859}>INT : +??%</option>
            <option value={10.8859}>LUK : +??%</option>
            <option value={4.3793}>공격력 : +??%</option>
            <option value={4.3793}>마력 : +??%</option>
            <option value={4.404299999999999}>크리티컬 확률 : +??%</option>
            <option value={4.3793}>데미지 : +??%</option>
            <option value={4.404299999999999}>올스탯 : +??%</option>
            <option value={4.3793}>몬스터 방어율 무시 : +??%</option>
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
            <option value={0.125}>STR : +9%</option>
            <option value={0.125}>DEX : +9%</option>
            <option value={0.125}>INT : +9%</option>
            <option value={0.125}>LUK : +9%</option>
            <option value={0.075}>공격력 : +9%</option>
            <option value={0.075}>마력 : +9%</option>
            <option value={0.1}>크리티컬 확률 : +9%</option>
            <option value={0.075}>데미지 : +9%</option>
            <option value={0.1}>올스탯 : +6%</option>
            <option value={0.075}>몬스터 방어율 무시 : +30%</option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "E") {
    return (
      <div className={classname}>
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
      <div className={classname}>
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

export default Emblem;
