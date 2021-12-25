// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Weapon({ grade, setOption, optionPer }) {
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
      <div className="weapon">
        <div id={"option4"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>상관 없음</option>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.756}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={14.634}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={9.7561}>{"STR : +12%"}</option>
            <option value={9.7561}>{"DEX : +12%"}</option>
            <option value={9.7561}>{"INT : +12%"}</option>
            <option value={9.7561}>{"LUK : +12%"}</option>
            <option value={4.878}>{"공격력 : +12%"}</option>
            <option value={4.878}>{"마력 : +12%"}</option>
            <option value={4.878}>{"크리티컬 확률 : +12%"}</option>
            <option value={4.878}>{"데미지 : +12%"}</option>
            <option value={7.3171}>{"올스탯 : +9%"}</option>
            <option value={4.878}>{"캐릭터 기준 10레벨 당 공격력 : +1"}</option>
            <option value={4.878}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={4.878}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={4.878}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={4.878}>{"보스 몬스터 공격 시 데미지 : +30%"}</option>
            <option value={4.878}>{"보스 몬스터 공격 시 데미지 : +35%"}</option>
            <option value={4.878}>{"보스 몬스터 공격 시 데미지 : +40%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.2535}>{"STR : +??%"}</option>
            <option value={11.2535}>{"DEX : +??%"}</option>
            <option value={11.2535}>{"INT : +??%"}</option>
            <option value={11.2535}>{"LUK : +??%"}</option>
            <option value={6.557}>{"공격력 : +??%"}</option>
            <option value={6.557}>{"마력 : +??%"}</option>
            <option value={8.4175}>{"크리티컬 확률 : +??%"}</option>
            <option value={6.557}>{"데미지 : +??%"}</option>
            <option value={8.9053}>{"올스탯 : +??%"}</option>
            <option value={7.5326}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={8.5082}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={9.3023}>{"STR : +9%"}</option>
            <option value={9.3023}>{"DEX : +9%"}</option>
            <option value={9.3023}>{"INT : +9%"}</option>
            <option value={9.3023}>{"LUK : +9%"}</option>
            <option value={5.5814}>{"공격력 : +9%"}</option>
            <option value={5.5814}>{"마력 : +9%"}</option>
            <option value={7.4419}>{"크리티컬 확률 : +9%"}</option>
            <option value={5.5814}>{"데미지 : +9%"}</option>
            <option value={7.4419}>{"올스탯 : +6%"}</option>
            <option value={5.5814}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={5.5814}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={1.9512}>{"STR : +12%"}</option>
            <option value={1.9512}>{"DEX : +12%"}</option>
            <option value={1.9512}>{"INT : +12%"}</option>
            <option value={1.9512}>{"LUK : +12%"}</option>
            <option value={0.9756}>{"공격력 : +12%"}</option>
            <option value={0.9756}>{"마력 : +12%"}</option>
            <option value={0.9756}>{"크리티컬 확률 : +12%"}</option>
            <option value={0.9756}>{"데미지 : +12%"}</option>
            <option value={1.4634}>{"올스탯 : +9%"}</option>
            <option value={0.9756}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={0.9756}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={0.9756}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={0.9756}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={0.9756}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.9756}>
              {"보스 몬스터 공격 시 데미지 : +35%"}
            </option>
            <option value={0.9756}>
              {"보스 몬스터 공격 시 데미지 : +40%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.5343}>{"STR : +??%"}</option>
            <option value={11.5343}>{"DEX : +??%"}</option>
            <option value={11.5343}>{"INT : +??%"}</option>
            <option value={11.5343}>{"LUK : +??%"}</option>
            <option value={6.8718}>{"공격력 : +??%"}</option>
            <option value={6.8718}>{"마력 : +??%"}</option>
            <option value={9.0811}>{"크리티컬 확률 : +??%"}</option>
            <option value={6.8718}>{"데미지 : +??%"}</option>
            <option value={9.2031}>{"올스탯 : +??%"}</option>
            <option value={7.1157}>{"몬스터 방어율 무시 : +??%"}</option>
            <option value={7.3596}>
              {"보스 몬스터 공격 시 데미지 : +??%"}
            </option>
            <option value={11.0465}>{"STR : +9%"}</option>
            <option value={11.0465}>{"DEX : +9%"}</option>
            <option value={11.0465}>{"INT : +9%"}</option>
            <option value={11.0465}>{"LUK : +9%"}</option>
            <option value={6.6279}>{"공격력 : +9%"}</option>
            <option value={6.6279}>{"마력 : +9%"}</option>
            <option value={8.8372}>{"크리티컬 확률 : +9%"}</option>
            <option value={6.6279}>{"데미지 : +9%"}</option>
            <option value={8.8372}>{"올스탯 : +6%"}</option>
            <option value={6.6279}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={6.6279}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.4878}>{"STR : +12%"}</option>
            <option value={0.4878}>{"DEX : +12%"}</option>
            <option value={0.4878}>{"INT : +12%"}</option>
            <option value={0.4878}>{"LUK : +12%"}</option>
            <option value={0.2439}>{"공격력 : +12%"}</option>
            <option value={0.2439}>{"마력 : +12%"}</option>
            <option value={0.2439}>{"크리티컬 확률 : +12%"}</option>
            <option value={0.2439}>{"데미지 : +12%"}</option>
            <option value={0.3659}>{"올스탯 : +9%"}</option>
            <option value={0.2439}>
              {"캐릭터 기준 10레벨 당 공격력 : +1"}
            </option>
            <option value={0.2439}>{"캐릭터 기준 10레벨 당 마력 : +1"}</option>
            <option value={0.2439}>{"몬스터 방어율 무시 : +35%"}</option>
            <option value={0.2439}>{"몬스터 방어율 무시 : +40%"}</option>
            <option value={0.2439}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
            <option value={0.2439}>
              {"보스 몬스터 공격 시 데미지 : +35%"}
            </option>
            <option value={0.2439}>
              {"보스 몬스터 공격 시 데미지 : +40%"}
            </option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "U") {
    return (
      <div className="weapon">
        <div id={"option4"}>
          <p className = {cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.6279}>{"STR : +9%"}</option>
            <option value={11.6279}>{"DEX : +9%"}</option>
            <option value={11.6279}>{"INT : +9%"}</option>
            <option value={11.6279}>{"LUK : +9%"}</option>
            <option value={6.9767}>{"공격력 : +9%"}</option>
            <option value={6.9767}>{"마력 : +9%"}</option>
            <option value={9.3023}>{"크리티컬 확률 : +9%"}</option>
            <option value={6.9767}>{"데미지 : +9%"}</option>
            <option value={9.3023}>{"올스탯 : +6%"}</option>
            <option value={6.9767}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={6.9767}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.0213}>{"STR : +??%"}</option>
            <option value={11.0213}>{"DEX : +??%"}</option>
            <option value={11.0213}>{"INT : +??%"}</option>
            <option value={11.0213}>{"LUK : +??%"}</option>
            <option value={4.8736}>{"공격력 : +??%"}</option>
            <option value={4.8736}>{"마력 : +??%"}</option>
            <option value={5.3388}>{"크리티컬 확률 : +??%"}</option>
            <option value={4.8736}>{"데미지 : +??%"}</option>
            <option value={5.3388}>{"올스탯 : +??%"}</option>
            <option value={4.8736}>{"몬스터 방어율 무시 : +??%"}</option>
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
            <option value={2.3256}>{"STR : +9%"}</option>
            <option value={2.3256}>{"DEX : +9%"}</option>
            <option value={2.3256}>{"INT : +9%"}</option>
            <option value={2.3256}>{"LUK : +9%"}</option>
            <option value={1.3953}>{"공격력 : +9%"}</option>
            <option value={1.3953}>{"마력 : +9%"}</option>
            <option value={1.8605}>{"크리티컬 확률 : +9%"}</option>
            <option value={1.3953}>{"데미지 : +9%"}</option>
            <option value={1.8605}>{"올스탯 : +6%"}</option>
            <option value={1.3953}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={1.3953}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={10.9075}>{"STR : +??%"}</option>
            <option value={10.9075}>{"DEX : +??%"}</option>
            <option value={10.9075}>{"INT : +??%"}</option>
            <option value={10.9075}>{"LUK : +??%"}</option>
            <option value={4.4792}>{"공격력 : +??%"}</option>
            <option value={4.4792}>{"마력 : +??%"}</option>
            <option value={4.5954999999999995}>{"크리티컬 확률 : +??%"}</option>
            <option value={4.4792}>{"데미지 : +??%"}</option>
            <option value={4.5954999999999995}>{"올스탯 : +??%"}</option>
            <option value={4.4792}>{"몬스터 방어율 무시 : +??%"}</option>
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
            <option value={0.5814}>{"STR : +9%"}</option>
            <option value={0.5814}>{"DEX : +9%"}</option>
            <option value={0.5814}>{"INT : +9%"}</option>
            <option value={0.5814}>{"LUK : +9%"}</option>
            <option value={0.3488}>{"공격력 : +9%"}</option>
            <option value={0.3488}>{"마력 : +9%"}</option>
            <option value={0.4651}>{"크리티컬 확률 : +9%"}</option>
            <option value={0.3488}>{"데미지 : +9%"}</option>
            <option value={0.4651}>{"올스탯 : +6%"}</option>
            <option value={0.3488}>{"몬스터 방어율 무시 : +30%"}</option>
            <option value={0.3488}>
              {"보스 몬스터 공격 시 데미지 : +30%"}
            </option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "E") {
    return (
      <div className="weapon">
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
      <div className="weapon">
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

export default Weapon;
