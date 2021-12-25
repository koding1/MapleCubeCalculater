// import { useState } from "react";
import cubeStyles from "../css/Cube.module.css"

function Accessory({grade, setOption, optionPer}) {
  const classname = "accessory";

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
            <option value={6.9767}>{"모든 스킬의 MP 소모 : -15%"}</option>
            <option value={6.9767}>{"모든 스킬의 MP 소모 : -30%"}</option>
            <option value={6.9767}>{"메소 획득량 : +20%"}</option>
            <option value={6.9767}>{"아이템 드롭률 : +20%"}</option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={9.0909+1.8605}>{"STR : +??%"}</option>
            <option value={9.0909+1.8605}>{"INT : +??%"}</option>
            <option value={9.0909+1.8605}>{"LUK : +??%"}</option>
            <option value={9.0909+1.8605}>{"DEX : +??%"}</option>
            <option value={10.9091+1.8605}>{"최대 HP : +??%"}</option>
            <option value={10.9091+1.8605}>{"최대 MP : +??%"}</option>
            <option value={7.2727+1.8605}>{"방어력 : +??%"}</option>
            <option value={7.2727+1.3953}>{"올스탯 : +??%"}</option>

            <option value={9.0909}>{"STR : +9%"}</option>
            <option value={9.0909}>{"DEX : +9%"}</option>
            <option value={9.0909}>{"INT : +9%"}</option>
            <option value={9.0909}>{"LUK : +9%"}</option>
            <option value={10.9091}>{"최대 HP : +9%"}</option>
            <option value={10.9091}>{"최대 MP : +9%"}</option>
            <option value={7.2727}>{"방어력 : +9%"}</option>
            <option value={7.2727}>{"올스탯 : +6%"}</option>
            <option value={7.2727}>
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
            <option value={1.3953}>{"모든 스킬의 MP 소모 : -15%"}</option>
            <option value={1.3953}>{"모든 스킬의 MP 소모 : -30%"}</option>
            <option value={1.3953}>{"메소 획득량 : +20%"}</option>
            <option value={1.3953}>{"아이템 드롭률 : +20%"}</option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={10.7955+0.4651}>{"STR : +??%"}</option>
            <option value={10.7955+0.4651}>{"DEX : +??%"}</option>
            <option value={10.7955+0.4651}>{"INT : +??%"}</option>
            <option value={10.7955+0.4651}>{"LUK : +??%"}</option>
            <option value={12.9545+0.4651}>{"최대 HP : +??%"}</option>
            <option value={12.9545+0.4651}>{"최대 MP : +??%"}</option>
            <option value={8.6364+0.4651}>{"방어력 : +??%"}</option>
            <option value={8.6364+0.3488}>{"올스탯 : +??%"}</option>

            <option value={10.7955}>{"STR : +9%"}</option>
            <option value={10.7955}>{"DEX : +9%"}</option>
            <option value={10.7955}>{"INT : +9%"}</option>
            <option value={10.7955}>{"LUK : +9%"}</option>
            <option value={12.9545}>{"최대 HP : +9%"}</option>
            <option value={12.9545}>{"최대 MP : +9%"}</option>
            <option value={8.6364}>{"방어력 : +9%"}</option>
            <option value={8.6364}>{"올스탯 : +6%"}</option>
            <option value={8.6364}>
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
            <option value={0.3488}>{"모든 스킬의 MP 소모 : -15%"}</option>
            <option value={0.3488}>{"모든 스킬의 MP 소모 : -30%"}</option>
            <option value={0.3488}>{"메소 획득량 : +20%"}</option>
            <option value={0.3488}>{"아이템 드롭률 : +20%"}</option>
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
            <option value={11.3636}>{"STR : +9%"}</option>
            <option value={11.3636}>{"DEX : +9%"}</option>
            <option value={11.3636}>{"INT : +9%"}</option>
            <option value={11.3636}>{"LUK : +9%"}</option>
            <option value={13.6364}>{"최대 HP : +9%"}</option>
            <option value={13.6364}>{"최대 MP : +9%"}</option>
            <option value={9.0909}>{"방어력 : +9%"}</option>
            <option value={9.0909}>{"올스탯 : +6%"}</option>
            <option value={9.0909}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option5"}>
          <p className = {cubeStyles.optionText}>옵션 2 : {optionPer[1]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={13.7013}>{"STR : +??%"}</option>
            <option value={13.7013}>{"DEX : +??%"}</option>
            <option value={13.7013}>{"INT : +??%"}</option>
            <option value={13.7013}>{"LUK : +??%"}</option>
            <option value={14.155899999999999}>{"최대 HP : +??%"}</option>
            <option value={14.155899999999999}>{"최대 MP : +??%"}</option>
            <option value={8.6753}>{"방어력 : +??%"}</option>
            <option value={6.3896}>{"올스탯 : +??%"}</option>
            <option value={11.4286}>{"STR : +6%"}</option>
            <option value={11.4286}>{"DEX : +6%"}</option>
            <option value={11.4286}>{"INT : +6%"}</option>
            <option value={11.4286}>{"LUK : +6%"}</option>
            <option value={11.4286}>{"최대 HP : +6%"}</option>
            <option value={11.4286}>{"최대 MP : +6%"}</option>
            <option value={6.8571}>{"방어력 : +6%"}</option>
            <option value={4.5714}>{"올스탯 : +3%"}</option>
            <option value={2.2727}>{"STR : +9%"}</option>
            <option value={2.2727}>{"DEX : +9%"}</option>
            <option value={2.2727}>{"INT : +9%"}</option>
            <option value={2.2727}>{"LUK : +9%"}</option>
            <option value={2.7273}>{"최대 HP : +9%"}</option>
            <option value={2.7273}>{"최대 MP : +9%"}</option>
            <option value={1.8182}>{"방어력 : +9%"}</option>
            <option value={1.8182}>{"올스탯 : +6%"}</option>
            <option value={1.8182}>
              {"HP 회복 아이템 및 회복 스킬 효율 : +30%"}
            </option>
          </select>
        </div>

        <div id={"option6"}>
          <p className = {cubeStyles.optionText}>옵션 3 : {optionPer[2]}%</p>
          <select className = {cubeStyles.optionSelect} onChange={onChange}>
            <option value={100}>{"상관 없음"}</option>
            <option value={14.139600000000002}>{"STR : +??%"}</option>
            <option value={14.139600000000002}>{"DEX : +??%"}</option>
            <option value={14.139600000000002}>{"INT : +??%"}</option>
            <option value={14.139600000000002}>{"LUK : +??%"}</option>
            <option value={14.2532}>{"최대 HP : +??%"}</option>
            <option value={14.2532}>{"최대 MP : +??%"}</option>
            <option value={8.597399999999999}>{"방어력 : +??%"}</option>
            <option value={5.883100000000001}>{"올스탯 : +??%"}</option>
            <option value={13.5714}>{"STR : +6%"}</option>
            <option value={13.5714}>{"DEX : +6%"}</option>
            <option value={13.5714}>{"INT : +6%"}</option>
            <option value={13.5714}>{"LUK : +6%"}</option>
            <option value={13.5714}>{"최대 HP : +6%"}</option>
            <option value={13.5714}>{"최대 MP : +6%"}</option>
            <option value={8.1429}>{"방어력 : +6%"}</option>
            <option value={5.4286}>{"올스탯 : +3%"}</option>
            <option value={0.5682}>{"STR : +9%"}</option>
            <option value={0.5682}>{"DEX : +9%"}</option>
            <option value={0.5682}>{"INT : +9%"}</option>
            <option value={0.5682}>{"LUK : +9%"}</option>
            <option value={0.6818}>{"최대 HP : +9%"}</option>
            <option value={0.6818}>{"최대 MP : +9%"}</option>
            <option value={0.4545}>{"방어력 : +9%"}</option>
            <option value={0.4545}>{"올스탯 : +6%"}</option>
            <option value={0.4545}>
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

export default Accessory;
