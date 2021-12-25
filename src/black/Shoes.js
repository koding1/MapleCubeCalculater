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
            <option value={10.0}>{"STR : +12%"}</option>
            <option value={10.0}>{"DEX : +12%"}</option>
            <option value={10.0}>{"INT : +12%"}</option>
            <option value={10.0}>{"LUK : +12%"}</option>
            <option value={10.0}>{"최대 HP : +12%"}</option>
            <option value={10.0}>{"최대 MP : +12%"}</option>
            <option value={10.0}>{"방어력 : +12%"}</option>
            <option value={7.5}>{"올스탯 : +9%"}</option>
            <option value={7.5}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.5}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={7.5}>{"<쓸만한 컴뱃 오더스> 스킬 사용 가능"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.142900000000001}>{"STR : +??%"}</option>
            <option value={9.142900000000001}>{"DEX : +??%"}</option>
            <option value={9.142900000000001}>{"INT : +??%"}</option>
            <option value={9.142900000000001}>{"LUK : +??%"}</option>
            <option value={10.5714}>{"최대 HP : +??%"}</option>
            <option value={10.5714}>{"최대 MP : +??%"}</option>
            <option value={7.7143}>{"방어력 : +??%"}</option>
            <option value={7.2143}>{"올스탯 : +??%"}</option>
            <option value={7.1429}>{"STR : +9%"}</option>
            <option value={7.1429}>{"DEX : +9%"}</option>
            <option value={7.1429}>{"INT : +9%"}</option>
            <option value={7.1429}>{"LUK : +9%"}</option>
            <option value={8.5714}>{"최대 HP : +9%"}</option>
            <option value={8.5714}>{"최대 MP : +9%"}</option>
            <option value={5.7143}>{"방어력 : +9%"}</option>
            <option value={5.7143}>{"올스탯 : +6%"}</option>
            <option value={5.7143}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={5.7143}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={5.7143}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={5.7143}>{"<쓸만한 헤이스트> 스킬 사용 가능"}</option>
            <option value={2.0}>{"STR : +12%"}</option>
            <option value={2.0}>{"DEX : +12%"}</option>
            <option value={2.0}>{"INT : +12%"}</option>
            <option value={2.0}>{"LUK : +12%"}</option>
            <option value={2.0}>{"최대 HP : +12%"}</option>
            <option value={2.0}>{"최대 MP : +12%"}</option>
            <option value={2.0}>{"방어력 : +12%"}</option>
            <option value={1.5}>{"올스탯 : +9%"}</option>
            <option value={1.5}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.5}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.5}>{"<쓸만한 컴뱃 오더스> 스킬 사용 가능"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.9821}>{"STR : +??%"}</option>
            <option value={8.9821}>{"DEX : +??%"}</option>
            <option value={8.9821}>{"INT : +??%"}</option>
            <option value={8.9821}>{"LUK : +??%"}</option>
            <option value={10.6786}>{"최대 HP : +??%"}</option>
            <option value={10.6786}>{"최대 MP : +??%"}</option>
            <option value={7.2857}>{"방어력 : +??%"}</option>
            <option value={7.1607}>{"올스탯 : +??%"}</option>
            <option value={8.4821}>{"STR : +9%"}</option>
            <option value={8.4821}>{"DEX : +9%"}</option>
            <option value={8.4821}>{"INT : +9%"}</option>
            <option value={8.4821}>{"LUK : +9%"}</option>
            <option value={10.1786}>{"최대 HP : +9%"}</option>
            <option value={10.1786}>{"최대 MP : +9%"}</option>
            <option value={6.7857}>{"방어력 : +9%"}</option>
            <option value={6.7857}>{"올스탯 : +6%"}</option>
            <option value={6.7857}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.7857}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.7857}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={6.7857}>{"<쓸만한 헤이스트> 스킬 사용 가능"}</option>
            <option value={0.5}>{"STR : +12%"}</option>
            <option value={0.5}>{"DEX : +12%"}</option>
            <option value={0.5}>{"INT : +12%"}</option>
            <option value={0.5}>{"LUK : +12%"}</option>
            <option value={0.5}>{"최대 HP : +12%"}</option>
            <option value={0.5}>{"최대 MP : +12%"}</option>
            <option value={0.5}>{"방어력 : +12%"}</option>
            <option value={0.375}>{"올스탯 : +9%"}</option>
            <option value={0.375}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.375}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.375}>
              {"<쓸만한 컴뱃 오더스> 스킬 사용 가능"}
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
            <option value={8.9286}>{"STR : +9%"}</option>
            <option value={8.9286}>{"DEX : +9%"}</option>
            <option value={8.9286}>{"INT : +9%"}</option>
            <option value={8.9286}>{"LUK : +9%"}</option>
            <option value={10.7143}>{"최대 HP : +9%"}</option>
            <option value={10.7143}>{"최대 MP : +9%"}</option>
            <option value={7.1429}>{"방어력 : +9%"}</option>
            <option value={7.1429}>{"올스탯 : +6%"}</option>
            <option value={7.1429}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.1429}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={7.1429}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={7.1429}>{"<쓸만한 헤이스트> 스킬 사용 가능"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={13.2143}>{"STR : +??%"}</option>
            <option value={13.2143}>{"DEX : +??%"}</option>
            <option value={13.2143}>{"INT : +??%"}</option>
            <option value={13.2143}>{"LUK : +??%"}</option>
            <option value={13.5715}>{"최대 HP : +??%"}</option>
            <option value={13.5715}>{"최대 MP : +??%"}</option>
            <option value={8.2857}>{"방어력 : +??%"}</option>
            <option value={6.0}>{"올스탯 : +??%"}</option>
            <option value={11.4286}>{"STR : +6%"}</option>
            <option value={11.4286}>{"DEX : +6%"}</option>
            <option value={11.4286}>{"INT : +6%"}</option>
            <option value={11.4286}>{"LUK : +6%"}</option>
            <option value={11.4286}>{"최대 HP : +6%"}</option>
            <option value={11.4286}>{"최대 MP : +6%"}</option>
            <option value={6.8571}>{"방어력 : +6%"}</option>
            <option value={4.5714}>{"올스탯 : +3%"}</option>
            <option value={1.7857}>{"STR : +9%"}</option>
            <option value={1.7857}>{"DEX : +9%"}</option>
            <option value={1.7857}>{"INT : +9%"}</option>
            <option value={1.7857}>{"LUK : +9%"}</option>
            <option value={2.1429}>{"최대 HP : +9%"}</option>
            <option value={2.1429}>{"최대 MP : +9%"}</option>
            <option value={1.4286}>{"방어력 : +9%"}</option>
            <option value={1.4286}>{"올스탯 : +6%"}</option>
            <option value={1.4286}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={1.4286}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={1.4286}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={1.4286}>{"<쓸만한 헤이스트> 스킬 사용 가능"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={14.017800000000001}>{"STR : +??%"}</option>
            <option value={14.017800000000001}>{"DEX : +??%"}</option>
            <option value={14.017800000000001}>{"INT : +??%"}</option>
            <option value={14.017800000000001}>{"LUK : +??%"}</option>
            <option value={14.1071}>{"최대 HP : +??%"}</option>
            <option value={14.1071}>{"최대 MP : +??%"}</option>
            <option value={8.5}>{"방어력 : +??%"}</option>
            <option value={5.7857}>{"올스탯 : +??%"}</option>
            <option value={13.5714}>{"STR : +6%"}</option>
            <option value={13.5714}>{"DEX : +6%"}</option>
            <option value={13.5714}>{"INT : +6%"}</option>
            <option value={13.5714}>{"LUK : +6%"}</option>
            <option value={13.5714}>{"최대 HP : +6%"}</option>
            <option value={13.5714}>{"최대 MP : +6%"}</option>
            <option value={8.1429}>{"방어력 : +6%"}</option>
            <option value={5.4286}>{"올스탯 : +3%"}</option>
            <option value={0.4464}>{"STR : +9%"}</option>
            <option value={0.4464}>{"DEX : +9%"}</option>
            <option value={0.4464}>{"INT : +9%"}</option>
            <option value={0.4464}>{"LUK : +9%"}</option>
            <option value={0.5357}>{"최대 HP : +9%"}</option>
            <option value={0.5357}>{"최대 MP : +9%"}</option>
            <option value={0.3571}>{"방어력 : +9%"}</option>
            <option value={0.3571}>{"올스탯 : +6%"}</option>
            <option value={0.3571}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.3571}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.3571}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={0.3571}>{"<쓸만한 헤이스트> 스킬 사용 가능"}</option>
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
            <option value={8.3116}>{"STR : +??%"}</option>
            <option value={8.3116}>{"DEX : +??%"}</option>
            <option value={8.3116}>{"INT : +??%"}</option>
            <option value={8.3116}>{"LUK : +??%"}</option>
            <option value={6.4935}>{"최대 HP : +??%"}</option>
            <option value={6.4935}>{"최대 MP : +??%"}</option>
            <option value={5.3507}>{"방어력 : +??%"}</option>
            <option value={5.4545}>{"STR : +12"}</option>
            <option value={5.4545}>{"DEX : +12"}</option>
            <option value={5.4545}>{"INT : +12"}</option>
            <option value={5.4545}>{"LUK : +12"}</option>
            <option value={5.4545}>{"최대 HP : +120"}</option>
            <option value={5.4545}>{"최대 MP : +120"}</option>
            <option value={3.6364}>{"이동속도 : +8"}</option>
            <option value={3.6364}>{"점프력 : +8"}</option>
            <option value={3.6364}>{"방어력 : +120"}</option>
            <option value={5.4545}>{"STR : +3%"}</option>
            <option value={5.4545}>{"DEX : +3%"}</option>
            <option value={5.4545}>{"INT : +3%"}</option>
            <option value={5.4545}>{"LUK : +3%"}</option>
            <option value={3.6364}>{"최대 HP : +3%"}</option>
            <option value={3.6364}>{"최대 MP : +3%"}</option>
            <option value={3.6364}>{"방어력 : +3%"}</option>
            <option value={3.6364}>{"올스탯 : +5"}</option>
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
            <option value={7.191599999999999}>{"STR : +??%"}</option>
            <option value={7.191599999999999}>{"DEX : +??%"}</option>
            <option value={7.191599999999999}>{"INT : +??%"}</option>
            <option value={7.191599999999999}>{"LUK : +??%"}</option>
            <option value={5.0325}>{"최대 HP : +??%"}</option>
            <option value={5.0325}>{"최대 MP : +??%"}</option>
            <option value={4.7468}>{"방어력 : +??%"}</option>
            <option value={6.4773}>{"STR : +12"}</option>
            <option value={6.4773}>{"DEX : +12"}</option>
            <option value={6.4773}>{"INT : +12"}</option>
            <option value={6.4773}>{"LUK : +12"}</option>
            <option value={6.4773}>{"최대 HP : +120"}</option>
            <option value={6.4773}>{"최대 MP : +120"}</option>
            <option value={4.3182}>{"이동속도 : +8"}</option>
            <option value={4.3182}>{"점프력 : +8"}</option>
            <option value={4.3182}>{"방어력 : +120"}</option>
            <option value={6.4773}>{"STR : +3%"}</option>
            <option value={6.4773}>{"DEX : +3%"}</option>
            <option value={6.4773}>{"INT : +3%"}</option>
            <option value={6.4773}>{"LUK : +3%"}</option>
            <option value={4.3182}>{"최대 HP : +3%"}</option>
            <option value={4.3182}>{"최대 MP : +3%"}</option>
            <option value={4.3182}>{"방어력 : +3%"}</option>
            <option value={4.3182}>{"올스탯 : +5"}</option>
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

export default Emblem;
