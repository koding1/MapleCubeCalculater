// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Updown({grade, setOption, optionPer}) {
  const classname = "updown";

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
            <option value={9.3023}>{"STR : +12%"}</option>
            <option value={9.3023}>{"DEX : +12%"}</option>
            <option value={9.3023}>{"INT : +12%"}</option>
            <option value={9.3023}>{"LUK : +12%"}</option>
            <option value={9.3023}>{"최대 HP : +12%"}</option>
            <option value={9.3023}>{"최대 MP : +12%"}</option>
            <option value={9.3023}>{"방어력 : +12%"}</option>
            <option value={6.9767}>{"올스탯 : +9%"}</option>
            <option value={6.9767}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.9767}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.9767}>{"피격 후 무적시간 : +3초"}</option>
            <option value={6.9767}>{"피격 시 4% 확률로 7초간 무적"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.9211}>{"STR : +??%"}</option>
            <option value={7.9211}>{"DEX : +??%"}</option>
            <option value={7.9211}>{"INT : +??%"}</option>
            <option value={7.9211}>{"LUK : +??%"}</option>
            <option value={9.1332}>{"최대 HP : +??%"}</option>
            <option value={9.1332}>{"최대 MP : +??%"}</option>
            <option value={6.709}>{"방어력 : +??%"}</option>
            <option value={6.243799999999999}>{"올스탯 : +??%"}</option>
            <option value={6.0606}>{"STR : +9%"}</option>
            <option value={6.0606}>{"DEX : +9%"}</option>
            <option value={6.0606}>{"INT : +9%"}</option>
            <option value={6.0606}>{"LUK : +9%"}</option>
            <option value={7.2727}>{"최대 HP : +9%"}</option>
            <option value={7.2727}>{"최대 MP : +9%"}</option>
            <option value={4.8485}>{"방어력 : +9%"}</option>
            <option value={4.8485}>{"올스탯 : +6%"}</option>
            <option value={4.8485}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={4.8485}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={4.8485}>{"피격 후 무적시간 : +2초"}</option>
            <option value={4.8485}>{"피격 시 2% 확률로 7초간 무적"}</option>
            <option value={4.8485}>
              {"30% 확률로 받은 피해의 50%를 반사"}
            </option>
            <option value={2.4242}>
              {"30% 확률로 받은 피해의 70%를 반사"}
            </option>
            <option value={4.8485}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={1.8605}>{"STR : +12%"}</option>
            <option value={1.8605}>{"DEX : +12%"}</option>
            <option value={1.8605}>{"INT : +12%"}</option>
            <option value={1.8605}>{"LUK : +12%"}</option>
            <option value={1.8605}>{"최대 HP : +12%"}</option>
            <option value={1.8605}>{"최대 MP : +12%"}</option>
            <option value={1.8605}>{"방어력 : +12%"}</option>
            <option value={1.3953}>{"올스탯 : +9%"}</option>
            <option value={1.3953}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.3953}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.3953}>{"피격 후 무적시간 : +3초"}</option>
            <option value={1.3953}>{"피격 시 4% 확률로 7초간 무적"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.6621}>{"STR : +??%"}</option>
            <option value={7.6621}>{"DEX : +??%"}</option>
            <option value={7.6621}>{"INT : +??%"}</option>
            <option value={7.6621}>{"LUK : +??%"}</option>
            <option value={9.1015}>{"최대 HP : +??%"}</option>
            <option value={9.1015}>{"최대 MP : +??%"}</option>
            <option value={6.2227}>{"방어력 : +??%"}</option>
            <option value={6.1064}>{"올스탯 : +??%"}</option>
            <option value={7.197}>{"STR : +9%"}</option>
            <option value={7.197}>{"DEX : +9%"}</option>
            <option value={7.197}>{"INT : +9%"}</option>
            <option value={7.197}>{"LUK : +9%"}</option>
            <option value={8.6364}>{"최대 HP : +9%"}</option>
            <option value={8.6364}>{"최대 MP : +9%"}</option>
            <option value={5.7576}>{"방어력 : +9%"}</option>
            <option value={5.7576}>{"올스탯 : +6%"}</option>
            <option value={5.7576}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={5.7576}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={5.7576}>{"피격 후 무적시간 : +2초"}</option>
            <option value={5.7576}>{"피격 시 2% 확률로 7초간 무적"}</option>
            <option value={5.7576}>
              {"30% 확률로 받은 피해의 50%를 반사"}
            </option>
            <option value={2.8788}>
              {"30% 확률로 받은 피해의 70%를 반사"}
            </option>
            <option value={5.7576}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={0.4651}>{"STR : +12%"}</option>
            <option value={0.4651}>{"DEX : +12%"}</option>
            <option value={0.4651}>{"INT : +12%"}</option>
            <option value={0.4651}>{"LUK : +12%"}</option>
            <option value={0.4651}>{"최대 HP : +12%"}</option>
            <option value={0.4651}>{"최대 MP : +12%"}</option>
            <option value={0.4651}>{"방어력 : +12%"}</option>
            <option value={0.3488}>{"올스탯 : +9%"}</option>
            <option value={0.3488}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3488}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.3488}>{"피격 후 무적시간 : +3초"}</option>
            <option value={0.3488}>{"피격 시 4% 확률로 7초간 무적"}</option>
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
            <option value={7.5758}>{"STR : +9%"}</option>
            <option value={7.5758}>{"DEX : +9%"}</option>
            <option value={7.5758}>{"INT : +9%"}</option>
            <option value={7.5758}>{"LUK : +9%"}</option>
            <option value={9.0909}>{"최대 HP : +9%"}</option>
            <option value={9.0909}>{"최대 MP : +9%"}</option>
            <option value={6.0606}>{"방어력 : +9%"}</option>
            <option value={6.0606}>{"올스탯 : +6%"}</option>
            <option value={6.0606}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.0606}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.0606}>{"피격 후 무적시간 : +2초"}</option>
            <option value={6.0606}>{"피격 시 2% 확률로 7초간 무적"}</option>
            <option value={6.0606}>
              {"30% 확률로 받은 피해의 50%를 반사"}
            </option>
            <option value={3.0303}>
              {"30% 확률로 받은 피해의 70%를 반사"}
            </option>
            <option value={6.0606}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.041500000000001}>{"STR : +??%"}</option>
            <option value={12.041500000000001}>{"DEX : +??%"}</option>
            <option value={12.041500000000001}>{"INT : +??%"}</option>
            <option value={12.041500000000001}>{"LUK : +??%"}</option>
            <option value={12.3445}>{"최대 HP : +??%"}</option>
            <option value={12.3445}>{"최대 MP : +??%"}</option>
            <option value={7.527900000000001}>{"방어력 : +??%"}</option>
            <option value={5.422599999999999}>{"올스탯 : +??%"}</option>
            <option value={10.5263}>{"STR : +6%"}</option>
            <option value={10.5263}>{"DEX : +6%"}</option>
            <option value={10.5263}>{"INT : +6%"}</option>
            <option value={10.5263}>{"LUK : +6%"}</option>
            <option value={10.5263}>{"최대 HP : +6%"}</option>
            <option value={10.5263}>{"최대 MP : +6%"}</option>
            <option value={6.3158}>{"방어력 : +6%"}</option>
            <option value={4.2105}>{"올스탯 : +3%"}</option>
            <option value={6.3158}>{"피격 후 무적시간 : +1초"}</option>
            <option value={1.5152}>{"STR : +9%"}</option>
            <option value={1.5152}>{"DEX : +9%"}</option>
            <option value={1.5152}>{"INT : +9%"}</option>
            <option value={1.5152}>{"LUK : +9%"}</option>
            <option value={1.8182}>{"최대 HP : +9%"}</option>
            <option value={1.8182}>{"최대 MP : +9%"}</option>
            <option value={1.2121}>{"방어력 : +9%"}</option>
            <option value={1.2121}>{"올스탯 : +6%"}</option>
            <option value={1.2121}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.2121}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.2121}>{"피격 후 무적시간 : +2초"}</option>
            <option value={1.2121}>{"피격 시 2% 확률로 7초간 무적"}</option>
            <option value={1.2121}>
              {"30% 확률로 받은 피해의 50%를 반사"}
            </option>
            <option value={0.6061}>
              {"30% 확률로 받은 피해의 70%를 반사"}
            </option>
            <option value={1.2121}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={12.8788}>{"STR : +??%"}</option>
            <option value={12.8788}>{"DEX : +??%"}</option>
            <option value={12.8788}>{"INT : +??%"}</option>
            <option value={12.8788}>{"LUK : +??%"}</option>
            <option value={12.9545}>{"최대 HP : +??%"}</option>
            <option value={12.9545}>{"최대 MP : +??%"}</option>
            <option value={7.803}>{"방어력 : +??%"}</option>
            <option value={5.303}>{"올스탯 : +??%"}</option>
            <option value={12.5}>{"STR : +6%"}</option>
            <option value={12.5}>{"DEX : +6%"}</option>
            <option value={12.5}>{"INT : +6%"}</option>
            <option value={12.5}>{"LUK : +6%"}</option>
            <option value={12.5}>{"최대 HP : +6%"}</option>
            <option value={12.5}>{"최대 MP : +6%"}</option>
            <option value={7.5}>{"방어력 : +6%"}</option>
            <option value={5.0}>{"올스탯 : +3%"}</option>
            <option value={7.5}>{"피격 후 무적시간 : +1초"}</option>
            <option value={0.3788}>{"STR : +9%"}</option>
            <option value={0.3788}>{"DEX : +9%"}</option>
            <option value={0.3788}>{"INT : +9%"}</option>
            <option value={0.3788}>{"LUK : +9%"}</option>
            <option value={0.4545}>{"최대 HP : +9%"}</option>
            <option value={0.4545}>{"최대 MP : +9%"}</option>
            <option value={0.303}>{"방어력 : +9%"}</option>
            <option value={0.303}>{"올스탯 : +6%"}</option>
            <option value={0.303}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.303}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.303}>{"피격 후 무적시간 : +2초"}</option>
            <option value={0.303}>{"피격 시 2% 확률로 7초간 무적"}</option>
            <option value={0.303}>{"30% 확률로 받은 피해의 50%를 반사"}</option>
            <option value={0.1515}>
              {"30% 확률로 받은 피해의 70%를 반사"}
            </option>
            <option value={0.303}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
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
            <option value={13.1579}>{"STR : +6%"}</option>
            <option value={13.1579}>{"DEX : +6%"}</option>
            <option value={13.1579}>{"INT : +6%"}</option>
            <option value={13.1579}>{"LUK : +6%"}</option>
            <option value={13.1579}>{"최대 HP : +6%"}</option>
            <option value={13.1579}>{"최대 MP : +6%"}</option>
            <option value={7.8947}>{"방어력 : +6%"}</option>
            <option value={5.2632}>{"올스탯 : +3%"}</option>
            <option value={7.8947}>{"피격 후 무적시간 : +1초"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.6316}>{"STR : +??%"}</option>
            <option value={8.6316}>{"DEX : +??%"}</option>
            <option value={8.6316}>{"INT : +??%"}</option>
            <option value={8.6316}>{"LUK : +??%"}</option>
            <option value={6.631600000000001}>{"최대 HP : +??%"}</option>
            <option value={6.631600000000001}>{"최대 MP : +??%"}</option>
            <option value={5.5789}>{"방어력 : +??%"}</option>
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
            <option value={2.6316}>{"STR : +6%"}</option>
            <option value={2.6316}>{"DEX : +6%"}</option>
            <option value={2.6316}>{"INT : +6%"}</option>
            <option value={2.6316}>{"LUK : +6%"}</option>
            <option value={2.6316}>{"최대 HP : +6%"}</option>
            <option value={2.6316}>{"최대 MP : +6%"}</option>
            <option value={1.5789}>{"방어력 : +6%"}</option>
            <option value={1.0526}>{"올스탯 : +3%"}</option>
            <option value={1.5789}>{"피격 후 무적시간 : +1초"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.7829}>{"STR : +??%"}</option>
            <option value={7.7829}>{"DEX : +??%"}</option>
            <option value={7.7829}>{"INT : +??%"}</option>
            <option value={7.7829}>{"LUK : +??%"}</option>
            <option value={5.4079}>{"최대 HP : +??%"}</option>
            <option value={5.4079}>{"최대 MP : +??%"}</option>
            <option value={5.1447}>{"방어력 : +??%"}</option>
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
            <option value={0.6579}>{"STR : +6%"}</option>
            <option value={0.6579}>{"DEX : +6%"}</option>
            <option value={0.6579}>{"INT : +6%"}</option>
            <option value={0.6579}>{"LUK : +6%"}</option>
            <option value={0.6579}>{"최대 HP : +6%"}</option>
            <option value={0.6579}>{"최대 MP : +6%"}</option>
            <option value={0.3947}>{"방어력 : +6%"}</option>
            <option value={0.2632}>{"올스탯 : +3%"}</option>
            <option value={0.3947}>{"피격 후 무적시간 : +1초"}</option>
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

export default Updown;
