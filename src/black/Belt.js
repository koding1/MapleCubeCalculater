// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Belt({grade, setOption, optionPer}) {
  const classname = "belt";

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
            <option value={10.8108}>{"STR : +12%"}</option>
            <option value={10.8108}>{"DEX : +12%"}</option>
            <option value={10.8108}>{"INT : +12%"}</option>
            <option value={10.8108}>{"LUK : +12%"}</option>
            <option value={10.8108}>{"최대 HP : +12%"}</option>
            <option value={10.8108}>{"최대 MP : +12%"}</option>
            <option value={10.8108}>{"방어력 : +12%"}</option>
            <option value={8.1081}>{"올스탯 : +9%"}</option>
            <option value={8.1081}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={8.1081}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.8545}>{"STR : +??%"}</option>
            <option value={9.8545}>{"DEX : +??%"}</option>
            <option value={9.8545}>{"INT : +??%"}</option>
            <option value={9.8545}>{"LUK : +??%"}</option>
            <option value={11.393}>{"최대 HP : +??%"}</option>
            <option value={11.393}>{"최대 MP : +??%"}</option>
            <option value={8.316}>{"방어력 : +??%"}</option>
            <option value={7.7754}>{"올스탯 : +??%"}</option>
            <option value={7.6923}>{"STR : +9%"}</option>
            <option value={7.6923}>{"DEX : +9%"}</option>
            <option value={7.6923}>{"INT : +9%"}</option>
            <option value={7.6923}>{"LUK : +9%"}</option>
            <option value={9.2308}>{"최대 HP : +9%"}</option>
            <option value={9.2308}>{"최대 MP : +9%"}</option>
            <option value={6.1538}>{"방어력 : +9%"}</option>
            <option value={6.1538}>{"올스탯 : +6%"}</option>
            <option value={6.1538}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.1538}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.1538}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={2.1622}>{"STR : +12%"}</option>
            <option value={2.1622}>{"DEX : +12%"}</option>
            <option value={2.1622}>{"INT : +12%"}</option>
            <option value={2.1622}>{"LUK : +12%"}</option>
            <option value={2.1622}>{"최대 HP : +12%"}</option>
            <option value={2.1622}>{"최대 MP : +12%"}</option>
            <option value={2.1622}>{"방어력 : +12%"}</option>
            <option value={1.6216}>{"올스탯 : +9%"}</option>
            <option value={1.6216}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.6216}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.6751}>{"STR : +??%"}</option>
            <option value={9.6751}>{"DEX : +??%"}</option>
            <option value={9.6751}>{"INT : +??%"}</option>
            <option value={9.6751}>{"LUK : +??%"}</option>
            <option value={11.501999999999999}>{"최대 HP : +??%"}</option>
            <option value={11.501999999999999}>{"최대 MP : +??%"}</option>
            <option value={7.848199999999999}>{"방어력 : +??%"}</option>
            <option value={7.7131}>{"올스탯 : +??%"}</option>
            <option value={9.1346}>{"STR : +9%"}</option>
            <option value={9.1346}>{"DEX : +9%"}</option>
            <option value={9.1346}>{"INT : +9%"}</option>
            <option value={9.1346}>{"LUK : +9%"}</option>
            <option value={10.9615}>{"최대 HP : +9%"}</option>
            <option value={10.9615}>{"최대 MP : +9%"}</option>
            <option value={7.3077}>{"방어력 : +9%"}</option>
            <option value={7.3077}>{"올스탯 : +6%"}</option>
            <option value={7.3077}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.3077}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={7.3077}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={0.5405}>{"STR : +12%"}</option>
            <option value={0.5405}>{"DEX : +12%"}</option>
            <option value={0.5405}>{"INT : +12%"}</option>
            <option value={0.5405}>{"LUK : +12%"}</option>
            <option value={0.5405}>{"최대 HP : +12%"}</option>
            <option value={0.5405}>{"최대 MP : +12%"}</option>
            <option value={0.5405}>{"방어력 : +12%"}</option>
            <option value={0.4054}>{"올스탯 : +9%"}</option>
            <option value={0.4054}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.4054}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
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
            <option value={9.6154}>{"STR : +9%"}</option>
            <option value={9.6154}>{"DEX : +9%"}</option>
            <option value={9.6154}>{"INT : +9%"}</option>
            <option value={9.6154}>{"LUK : +9%"}</option>
            <option value={11.5385}>{"최대 HP : +9%"}</option>
            <option value={11.5385}>{"최대 MP : +9%"}</option>
            <option value={7.6923}>{"방어력 : +9%"}</option>
            <option value={7.6923}>{"올스탯 : +6%"}</option>
            <option value={7.6923}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.6923}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={7.6923}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={13.3517}>{"STR : +??%"}</option>
            <option value={13.3517}>{"DEX : +??%"}</option>
            <option value={13.3517}>{"INT : +??%"}</option>
            <option value={13.3517}>{"LUK : +??%"}</option>
            <option value={13.7363}>{"최대 HP : +??%"}</option>
            <option value={13.7363}>{"최대 MP : +??%"}</option>
            <option value={8.3956}>{"방어력 : +??%"}</option>
            <option value={6.1099}>{"올스탯 : +??%"}</option>
            <option value={11.4286}>{"STR : +6%"}</option>
            <option value={11.4286}>{"DEX : +6%"}</option>
            <option value={11.4286}>{"INT : +6%"}</option>
            <option value={11.4286}>{"LUK : +6%"}</option>
            <option value={11.4286}>{"최대 HP : +6%"}</option>
            <option value={11.4286}>{"최대 MP : +6%"}</option>
            <option value={6.8571}>{"방어력 : +6%"}</option>
            <option value={4.5714}>{"올스탯 : +3%"}</option>
            <option value={1.9231}>{"STR : +9%"}</option>
            <option value={1.9231}>{"DEX : +9%"}</option>
            <option value={1.9231}>{"INT : +9%"}</option>
            <option value={1.9231}>{"LUK : +9%"}</option>
            <option value={2.3077}>{"최대 HP : +9%"}</option>
            <option value={2.3077}>{"최대 MP : +9%"}</option>
            <option value={1.5385}>{"방어력 : +9%"}</option>
            <option value={1.5385}>{"올스탯 : +6%"}</option>
            <option value={1.5385}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.5385}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.5385}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={14.052200000000001}>{"STR : +??%"}</option>
            <option value={14.052200000000001}>{"DEX : +??%"}</option>
            <option value={14.052200000000001}>{"INT : +??%"}</option>
            <option value={14.052200000000001}>{"LUK : +??%"}</option>
            <option value={14.1483}>{"최대 HP : +??%"}</option>
            <option value={14.1483}>{"최대 MP : +??%"}</option>
            <option value={8.5275}>{"방어력 : +??%"}</option>
            <option value={5.8132}>{"올스탯 : +??%"}</option>
            <option value={13.5714}>{"STR : +6%"}</option>
            <option value={13.5714}>{"DEX : +6%"}</option>
            <option value={13.5714}>{"INT : +6%"}</option>
            <option value={13.5714}>{"LUK : +6%"}</option>
            <option value={13.5714}>{"최대 HP : +6%"}</option>
            <option value={13.5714}>{"최대 MP : +6%"}</option>
            <option value={8.1429}>{"방어력 : +6%"}</option>
            <option value={5.4286}>{"올스탯 : +3%"}</option>
            <option value={0.4808}>{"STR : +9%"}</option>
            <option value={0.4808}>{"DEX : +9%"}</option>
            <option value={0.4808}>{"INT : +9%"}</option>
            <option value={0.4808}>{"LUK : +9%"}</option>
            <option value={0.5769}>{"최대 HP : +9%"}</option>
            <option value={0.5769}>{"최대 MP : +9%"}</option>
            <option value={0.3846}>{"방어력 : +9%"}</option>
            <option value={0.3846}>{"올스탯 : +6%"}</option>
            <option value={0.3846}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3846}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.3846}>
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
            <option value={14.2857}>{"STR : +6%"}</option>
            <option value={14.2857}>{"DEX : +6%"}</option>
            <option value={14.2857}>{"INT : +6%"}</option>
            <option value={14.2857}>{"LUK : +6%"}</option>
            <option value={14.2857}>{"최대 HP : +6%"}</option>
            <option value={14.2857}>{"최대 MP : +6%"}</option>
            <option value={8.5714}>{"방어력 : +6%"}</option>
            <option value={5.7143}>{"올스탯 : +3%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.857099999999999}>{"STR : +??%"}</option>
            <option value={8.857099999999999}>{"DEX : +??%"}</option>
            <option value={8.857099999999999}>{"INT : +??%"}</option>
            <option value={8.857099999999999}>{"LUK : +??%"}</option>
            <option value={6.8571}>{"최대 HP : +??%"}</option>
            <option value={6.8571}>{"최대 MP : +??%"}</option>
            <option value={5.7143}>{"방어력 : +??%"}</option>
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
            <option value={2.8571}>{"STR : +6%"}</option>
            <option value={2.8571}>{"DEX : +6%"}</option>
            <option value={2.8571}>{"INT : +6%"}</option>
            <option value={2.8571}>{"LUK : +6%"}</option>
            <option value={2.8571}>{"최대 HP : +6%"}</option>
            <option value={2.8571}>{"최대 MP : +6%"}</option>
            <option value={1.7143}>{"방어력 : +6%"}</option>
            <option value={1.1429}>{"올스탯 : +3%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.8393}>{"STR : +??%"}</option>
            <option value={7.8393}>{"DEX : +??%"}</option>
            <option value={7.8393}>{"INT : +??%"}</option>
            <option value={7.8393}>{"LUK : +??%"}</option>
            <option value={5.4643}>{"최대 HP : +??%"}</option>
            <option value={5.4643}>{"최대 MP : +??%"}</option>
            <option value={5.1786}>{"방어력 : +??%"}</option>
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
            <option value={0.7143}>{"STR : +6%"}</option>
            <option value={0.7143}>{"DEX : +6%"}</option>
            <option value={0.7143}>{"INT : +6%"}</option>
            <option value={0.7143}>{"LUK : +6%"}</option>
            <option value={0.7143}>{"최대 HP : +6%"}</option>
            <option value={0.7143}>{"최대 MP : +6%"}</option>
            <option value={0.4286}>{"방어력 : +6%"}</option>
            <option value={0.2857}>{"올스탯 : +3%"}</option>
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

export default Belt;
