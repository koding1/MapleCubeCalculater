// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css";
function Belt({ grade, setOption, optionPer }) {
  const classname = "belt";

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
          <p className={cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
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

        <div id={"option2"}>
          <p className={cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.7349}>{"STR : +??%"}</option>
            <option value={9.7349}>{"DEX : +??%"}</option>
            <option value={9.7349}>{"INT : +??%"}</option>
            <option value={9.7349}>{"LUK : +??%"}</option>
            <option value={11.4657}>{"최대 HP : +??%"}</option>
            <option value={11.4657}>{"최대 MP : +??%"}</option>
            <option value={8.004199999999999}>{"방어력 : +??%"}</option>
            <option value={7.7339}>{"올스탯 : +??%"}</option>
            <option value={8.6538}>{"STR : +9%"}</option>
            <option value={8.6538}>{"DEX : +9%"}</option>
            <option value={8.6538}>{"INT : +9%"}</option>
            <option value={8.6538}>{"LUK : +9%"}</option>
            <option value={10.3846}>{"최대 HP : +9%"}</option>
            <option value={10.3846}>{"최대 MP : +9%"}</option>
            <option value={6.9231}>{"방어력 : +9%"}</option>
            <option value={6.9231}>{"올스탯 : +6%"}</option>
            <option value={6.9231}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={6.9231}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={6.9231}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={1.0811}>{"STR : +12%"}</option>
            <option value={1.0811}>{"DEX : +12%"}</option>
            <option value={1.0811}>{"INT : +12%"}</option>
            <option value={1.0811}>{"LUK : +12%"}</option>
            <option value={1.0811}>{"최대 HP : +12%"}</option>
            <option value={1.0811}>{"최대 MP : +12%"}</option>
            <option value={1.0811}>{"방어력 : +12%"}</option>
            <option value={0.8108}>{"올스탯 : +9%"}</option>
            <option value={0.8108}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.8108}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
          </select>
        </div>

        <div id={"option3"}>
          <p className={cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.6273}>{"STR : +??%"}</option>
            <option value={9.6273}>{"DEX : +??%"}</option>
            <option value={9.6273}>{"INT : +??%"}</option>
            <option value={9.6273}>{"LUK : +??%"}</option>
            <option value={11.5312}>{"최대 HP : +??%"}</option>
            <option value={11.5312}>{"최대 MP : +??%"}</option>
            <option value={7.7235000000000005}>{"방어력 : +??%"}</option>
            <option value={7.6965}>{"올스탯 : +??%"}</option>
            <option value={9.5192}>{"STR : +9%"}</option>
            <option value={9.5192}>{"DEX : +9%"}</option>
            <option value={9.5192}>{"INT : +9%"}</option>
            <option value={9.5192}>{"LUK : +9%"}</option>
            <option value={11.4231}>{"최대 HP : +9%"}</option>
            <option value={11.4231}>{"최대 MP : +9%"}</option>
            <option value={7.6154}>{"방어력 : +9%"}</option>
            <option value={7.6154}>{"올스탯 : +6%"}</option>
            <option value={7.6154}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={7.6154}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={7.6154}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
            <option value={0.1081}>{"STR : +12%"}</option>
            <option value={0.1081}>{"DEX : +12%"}</option>
            <option value={0.1081}>{"INT : +12%"}</option>
            <option value={0.1081}>{"LUK : +12%"}</option>
            <option value={0.1081}>{"최대 HP : +12%"}</option>
            <option value={0.1081}>{"최대 MP : +12%"}</option>
            <option value={0.1081}>{"방어력 : +12%"}</option>
            <option value={0.0811}>{"올스탯 : +9%"}</option>
            <option value={0.0811}>
              {"피격 시 10% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.0811}>
              {"피격 시 10% 확률로 데미지의 40% 무시"}
            </option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "U") {
    return (
      <div className={classname}>
        <div id={"option1"}>
          <p className={cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
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

        <div id={"option2"}>
          <p className={cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={13.8186}>{"STR : +??%"}</option>
            <option value={13.8186}>{"DEX : +??%"}</option>
            <option value={13.8186}>{"INT : +??%"}</option>
            <option value={13.8186}>{"LUK : +??%"}</option>
            <option value={14.010900000000001}>{"최대 HP : +??%"}</option>
            <option value={14.010900000000001}>{"최대 MP : +??%"}</option>
            <option value={8.4835}>{"방어력 : +??%"}</option>
            <option value={5.9121}>{"올스탯 : +??%"}</option>
            <option value={12.8571}>{"STR : +6%"}</option>
            <option value={12.8571}>{"DEX : +6%"}</option>
            <option value={12.8571}>{"INT : +6%"}</option>
            <option value={12.8571}>{"LUK : +6%"}</option>
            <option value={12.8571}>{"최대 HP : +6%"}</option>
            <option value={12.8571}>{"최대 MP : +6%"}</option>
            <option value={7.7143}>{"방어력 : +6%"}</option>
            <option value={5.1429}>{"올스탯 : +3%"}</option>
            <option value={0.9615}>{"STR : +9%"}</option>
            <option value={0.9615}>{"DEX : +9%"}</option>
            <option value={0.9615}>{"INT : +9%"}</option>
            <option value={0.9615}>{"LUK : +9%"}</option>
            <option value={1.1538}>{"최대 HP : +9%"}</option>
            <option value={1.1538}>{"최대 MP : +9%"}</option>
            <option value={0.7692}>{"방어력 : +9%"}</option>
            <option value={0.7692}>{"올스탯 : +6%"}</option>
            <option value={0.7692}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.7692}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.7692}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option3"}>
          <p className={cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={14.239099999999999}>{"STR : +??%"}</option>
            <option value={14.239099999999999}>{"DEX : +??%"}</option>
            <option value={14.239099999999999}>{"INT : +??%"}</option>
            <option value={14.239099999999999}>{"LUK : +??%"}</option>
            <option value={14.258299999999998}>{"최대 HP : +??%"}</option>
            <option value={14.258299999999998}>{"최대 MP : +??%"}</option>
            <option value={8.5626}>{"방어력 : +??%"}</option>
            <option value={5.734}>{"올스탯 : +??%"}</option>
            <option value={14.1429}>{"STR : +6%"}</option>
            <option value={14.1429}>{"DEX : +6%"}</option>
            <option value={14.1429}>{"INT : +6%"}</option>
            <option value={14.1429}>{"LUK : +6%"}</option>
            <option value={14.1429}>{"최대 HP : +6%"}</option>
            <option value={14.1429}>{"최대 MP : +6%"}</option>
            <option value={8.4857}>{"방어력 : +6%"}</option>
            <option value={5.6571}>{"올스탯 : +3%"}</option>
            <option value={0.0962}>{"STR : +9%"}</option>
            <option value={0.0962}>{"DEX : +9%"}</option>
            <option value={0.0962}>{"INT : +9%"}</option>
            <option value={0.0962}>{"LUK : +9%"}</option>
            <option value={0.1154}>{"최대 HP : +9%"}</option>
            <option value={0.1154}>{"최대 MP : +9%"}</option>
            <option value={0.0769}>{"방어력 : +9%"}</option>
            <option value={0.0769}>{"올스탯 : +6%"}</option>
            <option value={0.0769}>
              {"피격 시 5% 확률로 데미지의 20% 무시"}
            </option>
            <option value={0.0769}>
              {"피격 시 5% 확률로 데미지의 40% 무시"}
            </option>
            <option value={0.0769}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>
      </div>
    );
  } else if (grade === "E") {
    return (
      <div className={classname}>
        <div id={"option1"}>
          <p className={cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
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

        <div id={"option2"}>
          <p className={cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={8.1786}>{"STR : +??%"}</option>
            <option value={8.1786}>{"DEX : +??%"}</option>
            <option value={8.1786}>{"INT : +??%"}</option>
            <option value={8.1786}>{"LUK : +??%"}</option>
            <option value={5.9286}>{"최대 HP : +??%"}</option>
            <option value={5.9286}>{"최대 MP : +??%"}</option>
            <option value={5.3571}>{"방어력 : +??%"}</option>
            <option value={6.75}>{"STR : +12"}</option>
            <option value={6.75}>{"DEX : +12"}</option>
            <option value={6.75}>{"INT : +12"}</option>
            <option value={6.75}>{"LUK : +12"}</option>
            <option value={6.75}>{"최대 HP : +120"}</option>
            <option value={6.75}>{"최대 MP : +120"}</option>
            <option value={4.5}>{"방어력 : +120"}</option>
            <option value={6.75}>{"STR : +3%"}</option>
            <option value={6.75}>{"DEX : +3%"}</option>
            <option value={6.75}>{"INT : +3%"}</option>
            <option value={6.75}>{"LUK : +3%"}</option>
            <option value={4.5}>{"최대 HP : +3%"}</option>
            <option value={4.5}>{"최대 MP : +3%"}</option>
            <option value={4.5}>{"방어력 : +3%"}</option>
            <option value={4.5}>{"올스탯 : +5"}</option>
            <option value={1.4286}>{"STR : +6%"}</option>
            <option value={1.4286}>{"DEX : +6%"}</option>
            <option value={1.4286}>{"INT : +6%"}</option>
            <option value={1.4286}>{"LUK : +6%"}</option>
            <option value={1.4286}>{"최대 HP : +6%"}</option>
            <option value={1.4286}>{"최대 MP : +6%"}</option>
            <option value={0.8571}>{"방어력 : +6%"}</option>
            <option value={0.5714}>{"올스탯 : +3%"}</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className={cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className={cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={7.5679}>{"STR : +??%"}</option>
            <option value={7.5679}>{"DEX : +??%"}</option>
            <option value={7.5679}>{"INT : +??%"}</option>
            <option value={7.5679}>{"LUK : +??%"}</option>
            <option value={5.0929}>{"최대 HP : +??%"}</option>
            <option value={5.0929}>{"최대 MP : +??%"}</option>
            <option value={5.0357}>{"방어력 : +??%"}</option>
            <option value={7.425}>{"STR : +12"}</option>
            <option value={7.425}>{"DEX : +12"}</option>
            <option value={7.425}>{"INT : +12"}</option>
            <option value={7.425}>{"LUK : +12"}</option>
            <option value={7.425}>{"최대 HP : +120"}</option>
            <option value={7.425}>{"최대 MP : +120"}</option>
            <option value={4.95}>{"방어력 : +120"}</option>
            <option value={7.425}>{"STR : +3%"}</option>
            <option value={7.425}>{"DEX : +3%"}</option>
            <option value={7.425}>{"INT : +3%"}</option>
            <option value={7.425}>{"LUK : +3%"}</option>
            <option value={4.95}>{"최대 HP : +3%"}</option>
            <option value={4.95}>{"최대 MP : +3%"}</option>
            <option value={4.95}>{"방어력 : +3%"}</option>
            <option value={4.95}>{"올스탯 : +5"}</option>
            <option value={0.1429}>{"STR : +6%"}</option>
            <option value={0.1429}>{"DEX : +6%"}</option>
            <option value={0.1429}>{"INT : +6%"}</option>
            <option value={0.1429}>{"LUK : +6%"}</option>
            <option value={0.1429}>{"최대 HP : +6%"}</option>
            <option value={0.1429}>{"최대 MP : +6%"}</option>
            <option value={0.0857}>{"방어력 : +6%"}</option>
            <option value={0.0571}>{"올스탯 : +3%"}</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classname}>
        <div id={"option1"}>
          <p className={cubeStyles.optionText}>옵션 1 : {optionPer[0]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option2"}>
          <p className={cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>

        <div id={"option3"}>
          <p className={cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select>
            <option>선택이 완료되지 않았습니다.</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Belt;
