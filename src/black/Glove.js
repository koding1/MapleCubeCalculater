// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Glove({grade, setOption, optionPer}) {
  const classname = "glove";

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
            <option value={9.0909}>{"STR : +12%"}</option>
            <option value={9.0909}>{"DEX : +12%"}</option>
            <option value={9.0909}>{"INT : +12%"}</option>
            <option value={9.0909}>{"LUK : +12%"}</option>
            <option value={9.0909}>{"최대 HP : +12%"}</option>
            <option value={9.0909}>{"최대 MP : +12%"}</option>
            <option value={9.0909}>{"방어력 : +12%"}</option>
            <option value={9.0909}>{"크리티컬 데미지 : +8%"}</option>
            <option value={6.8182}>{"올스탯 : +9%"}</option>
            <option value={6.8182}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.8182}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.8182}>
              {"<쓸만한 윈드 부스터> 스킬 사용 가능"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.4849}>{"STR : +??%"}</option>
            <option value={8.4849}>{"DEX : +??%"}</option>
            <option value={8.4849}>{"INT : +??%"}</option>
            <option value={8.4849}>{"LUK : +??%"}</option>
            <option value={9.818200000000001}>{"최대 HP : +??%"}</option>
            <option value={9.818200000000001}>{"최대 MP : +??%"}</option>
            <option value={7.1515}>{"방어력 : +??%"}</option>
            <option value={6.6969}>{"올스탯 : +??%"}</option>
            <option value={6.6667}>{"STR : +9%"}</option>
            <option value={6.6667}>{"DEX : +9%"}</option>
            <option value={6.6667}>{"INT : +9%"}</option>
            <option value={6.6667}>{"LUK : +9%"}</option>
            <option value={8.0}>{"최대 HP : +9%"}</option>
            <option value={8.0}>{"최대 MP : +9%"}</option>
            <option value={5.3333}>{"방어력 : +9%"}</option>
            <option value={5.3333}>{"올스탯 : +6%"}</option>
            <option value={1.3333}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
            <option value={1.3333}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
            <option value={1.3333}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
            <option value={1.3333}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
            <option value={5.3333}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={5.3333}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={5.3333}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={5.3333}>
              {"<쓸만한 샤프 아이즈> 스킬 사용 가능"}
            </option>
            <option value={1.8182}>{"STR : +12%"}</option>
            <option value={1.8182}>{"DEX : +12%"}</option>
            <option value={1.8182}>{"INT : +12%"}</option>
            <option value={1.8182}>{"LUK : +12%"}</option>
            <option value={1.8182}>{"최대 HP : +12%"}</option>
            <option value={1.8182}>{"최대 MP : +12%"}</option>
            <option value={1.8182}>{"방어력 : +12%"}</option>
            <option value={1.8182}>{"크리티컬 데미지 : +8%"}</option>
            <option value={1.3636}>{"올스탯 : +9%"}</option>
            <option value={1.3636}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.3636}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.3636}>
              {"<쓸만한 윈드 부스터> 스킬 사용 가능"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.3712}>{"STR : +??%"}</option>
            <option value={8.3712}>{"DEX : +??%"}</option>
            <option value={8.3712}>{"INT : +??%"}</option>
            <option value={8.3712}>{"LUK : +??%"}</option>
            <option value={9.9545}>{"최대 HP : +??%"}</option>
            <option value={9.9545}>{"최대 MP : +??%"}</option>
            <option value={6.787800000000001}>{"방어력 : +??%"}</option>
            <option value={6.674200000000001}>{"올스탯 : +??%"}</option>
            <option value={7.9167}>{"STR : +9%"}</option>
            <option value={7.9167}>{"DEX : +9%"}</option>
            <option value={7.9167}>{"INT : +9%"}</option>
            <option value={7.9167}>{"LUK : +9%"}</option>
            <option value={9.5}>{"최대 HP : +9%"}</option>
            <option value={9.5}>{"최대 MP : +9%"}</option>
            <option value={6.3333}>{"방어력 : +9%"}</option>
            <option value={6.3333}>{"올스탯 : +6%"}</option>
            <option value={1.5833}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
            <option value={1.5833}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
            <option value={1.5833}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
            <option value={1.5833}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
            <option value={6.3333}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.3333}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.3333}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={6.3333}>
              {"<쓸만한 샤프 아이즈> 스킬 사용 가능"}
            </option>
            <option value={0.4545}>{"STR : +12%"}</option>
            <option value={0.4545}>{"DEX : +12%"}</option>
            <option value={0.4545}>{"INT : +12%"}</option>
            <option value={0.4545}>{"LUK : +12%"}</option>
            <option value={0.4545}>{"최대 HP : +12%"}</option>
            <option value={0.4545}>{"최대 MP : +12%"}</option>
            <option value={0.4545}>{"방어력 : +12%"}</option>
            <option value={0.4545}>{"크리티컬 데미지 : +8%"}</option>
            <option value={0.3409}>{"올스탯 : +9%"}</option>
            <option value={0.3409}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3409}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.3409}>
              {"<쓸만한 윈드 부스터> 스킬 사용 가능"}
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
            <option value={8.3333}>{"STR : +9%"}</option>
            <option value={8.3333}>{"DEX : +9%"}</option>
            <option value={8.3333}>{"INT : +9%"}</option>
            <option value={8.3333}>{"LUK : +9%"}</option>
            <option value={10.0}>{"최대 HP : +9%"}</option>
            <option value={10.0}>{"최대 MP : +9%"}</option>
            <option value={6.6667}>{"방어력 : +9%"}</option>
            <option value={6.6667}>{"올스탯 : +6%"}</option>
            <option value={1.6667}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
            <option value={1.6667}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
            <option value={1.6667}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
            <option value={1.6667}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
            <option value={6.6667}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.6667}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.6667}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={6.6667}>
              {"<쓸만한 샤프 아이즈> 스킬 사용 가능"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={11.4228}>{"STR : +??%"}</option>
            <option value={11.4228}>{"DEX : +??%"}</option>
            <option value={11.4228}>{"INT : +??%"}</option>
            <option value={11.4228}>{"LUK : +??%"}</option>
            <option value={11.7561}>{"최대 HP : +??%"}</option>
            <option value={11.7561}>{"최대 MP : +??%"}</option>
            <option value={7.186999999999999}>{"방어력 : +??%"}</option>
            <option value={5.2357}>{"올스탯 : +??%"}</option>
            <option value={9.7561}>{"STR : +6%"}</option>
            <option value={9.7561}>{"DEX : +6%"}</option>
            <option value={9.7561}>{"INT : +6%"}</option>
            <option value={9.7561}>{"LUK : +6%"}</option>
            <option value={9.7561}>{"최대 HP : +6%"}</option>
            <option value={9.7561}>{"최대 MP : +6%"}</option>
            <option value={5.8537}>{"방어력 : +6%"}</option>
            <option value={3.9024}>{"올스탯 : +3%"}</option>
            <option value={5.8537}>
              {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
            </option>
            <option value={5.8537}>
              {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
            </option>
            <option value={1.6667}>{"STR : +9%"}</option>
            <option value={1.6667}>{"DEX : +9%"}</option>
            <option value={1.6667}>{"INT : +9%"}</option>
            <option value={1.6667}>{"LUK : +9%"}</option>
            <option value={2.0}>{"최대 HP : +9%"}</option>
            <option value={2.0}>{"최대 MP : +9%"}</option>
            <option value={1.3333}>{"방어력 : +9%"}</option>
            <option value={1.3333}>{"올스탯 : +6%"}</option>
            <option value={0.3333}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
            <option value={0.3333}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
            <option value={0.3333}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
            <option value={0.3333}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
            <option value={1.3333}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.3333}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.3333}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={1.3333}>
              {"<쓸만한 샤프 아이즈> 스킬 사용 가능"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.0021}>{"STR : +??%"}</option>
            <option value={12.0021}>{"DEX : +??%"}</option>
            <option value={12.0021}>{"INT : +??%"}</option>
            <option value={12.0021}>{"LUK : +??%"}</option>
            <option value={12.0854}>{"최대 HP : +??%"}</option>
            <option value={12.0854}>{"최대 MP : +??%"}</option>
            <option value={7.2845}>{"방어력 : +??%"}</option>
            <option value={4.9674000000000005}>{"올스탯 : +??%"}</option>
            <option value={11.5854}>{"STR : +6%"}</option>
            <option value={11.5854}>{"DEX : +6%"}</option>
            <option value={11.5854}>{"INT : +6%"}</option>
            <option value={11.5854}>{"LUK : +6%"}</option>
            <option value={11.5854}>{"최대 HP : +6%"}</option>
            <option value={11.5854}>{"최대 MP : +6%"}</option>
            <option value={6.9512}>{"방어력 : +6%"}</option>
            <option value={4.6341}>{"올스탯 : +3%"}</option>
            <option value={6.9512}>
              {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
            </option>
            <option value={6.9512}>
              {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
            </option>
            <option value={0.4167}>{"STR : +9%"}</option>
            <option value={0.4167}>{"DEX : +9%"}</option>
            <option value={0.4167}>{"INT : +9%"}</option>
            <option value={0.4167}>{"LUK : +9%"}</option>
            <option value={0.5}>{"최대 HP : +9%"}</option>
            <option value={0.5}>{"최대 MP : +9%"}</option>
            <option value={0.3333}>{"방어력 : +9%"}</option>
            <option value={0.3333}>{"올스탯 : +6%"}</option>
            <option value={0.0833}>{"캐릭터 기준 10레벨 당 STR : +1"}</option>
            <option value={0.0833}>{"캐릭터 기준 10레벨 당 DEX : +1"}</option>
            <option value={0.0833}>{"캐릭터 기준 10레벨 당 INT : +1"}</option>
            <option value={0.0833}>{"캐릭터 기준 10레벨 당 LUK : +1"}</option>
            <option value={0.3333}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3333}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.3333}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={0.3333}>
              {"<쓸만한 샤프 아이즈> 스킬 사용 가능"}
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

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.439}>{"STR : +??%"}</option>
            <option value={8.439}>{"DEX : +??%"}</option>
            <option value={8.439}>{"INT : +??%"}</option>
            <option value={8.439}>{"LUK : +??%"}</option>
            <option value={6.439}>{"최대 HP : +??%"}</option>
            <option value={6.439}>{"최대 MP : +??%"}</option>
            <option value={5.4634}>{"방어력 : +??%"}</option>
            <option value={6.0}>{"STR : +12"}</option>
            <option value={6.0}>{"DEX : +12"}</option>
            <option value={6.0}>{"INT : +12"}</option>
            <option value={6.0}>{"LUK : +12"}</option>
            <option value={6.0}>{"최대 HP : +120"}</option>
            <option value={6.0}>{"최대 MP : +120"}</option>
            <option value={4.0}>{"방어력 : +120"}</option>
            <option value={6.0}>{"STR : +3%"}</option>
            <option value={6.0}>{"DEX : +3%"}</option>
            <option value={6.0}>{"INT : +3%"}</option>
            <option value={6.0}>{"LUK : +3%"}</option>
            <option value={4.0}>{"최대 HP : +3%"}</option>
            <option value={4.0}>{"최대 MP : +3%"}</option>
            <option value={4.0}>{"방어력 : +3%"}</option>
            <option value={4.0}>{"올스탯 : +5"}</option>
            <option value={2.439}>{"STR : +6%"}</option>
            <option value={2.439}>{"DEX : +6%"}</option>
            <option value={2.439}>{"INT : +6%"}</option>
            <option value={2.439}>{"LUK : +6%"}</option>
            <option value={2.439}>{"최대 HP : +6%"}</option>
            <option value={2.439}>{"최대 MP : +6%"}</option>
            <option value={1.4634}>{"방어력 : +6%"}</option>
            <option value={0.9756}>{"올스탯 : +3%"}</option>
            <option value={1.4634}>
              {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
            </option>
            <option value={1.4634}>
              {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.7348}>{"STR : +??%"}</option>
            <option value={7.7348}>{"DEX : +??%"}</option>
            <option value={7.7348}>{"INT : +??%"}</option>
            <option value={7.7348}>{"LUK : +??%"}</option>
            <option value={5.3598}>{"최대 HP : +??%"}</option>
            <option value={5.3598}>{"최대 MP : +??%"}</option>
            <option value={5.1159}>{"방어력 : +??%"}</option>
            <option value={7.125}>{"STR : +12"}</option>
            <option value={7.125}>{"DEX : +12"}</option>
            <option value={7.125}>{"INT : +12"}</option>
            <option value={7.125}>{"LUK : +12"}</option>
            <option value={7.125}>{"최대 HP : +120"}</option>
            <option value={7.125}>{"최대 MP : +120"}</option>
            <option value={4.75}>{"방어력 : +120"}</option>
            <option value={7.125}>{"STR : +3%"}</option>
            <option value={7.125}>{"DEX : +3%"}</option>
            <option value={7.125}>{"INT : +3%"}</option>
            <option value={7.125}>{"LUK : +3%"}</option>
            <option value={4.75}>{"최대 HP : +3%"}</option>
            <option value={4.75}>{"최대 MP : +3%"}</option>
            <option value={4.75}>{"방어력 : +3%"}</option>
            <option value={4.75}>{"올스탯 : +5"}</option>
            <option value={0.6098}>{"STR : +6%"}</option>
            <option value={0.6098}>{"DEX : +6%"}</option>
            <option value={0.6098}>{"INT : +6%"}</option>
            <option value={0.6098}>{"LUK : +6%"}</option>
            <option value={0.6098}>{"최대 HP : +6%"}</option>
            <option value={0.6098}>{"최대 MP : +6%"}</option>
            <option value={0.3659}>{"방어력 : +6%"}</option>
            <option value={0.2439}>{"올스탯 : +3%"}</option>
            <option value={0.3659}>
              {"몬스터 처치 시 15% 확률로 95의 HP 회복"}
            </option>
            <option value={0.3659}>
              {"몬스터 처치 시 15% 확률로 95의 MP 회복"}
            </option>
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

export default Glove;
