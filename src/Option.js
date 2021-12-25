// import { useState } from "react";
import Nochoice from './red/Nochoice';
import Weapon from './red/Weapon';
import Emblem from './red/Emblem';
import Weapon2 from './red/Weapon2';
import Weapon3 from './red/Weapon3';
import Hat from './red/Hat';
import Up from './red/Up';
import Updown from './red/Updown';
import Down from './red/Down';
import Shoes from './red/Shoes';
import Glove from './red/Glove';
import Cloak from './red/Cloak';
import Belt from './red/Belt';
import Shoulder from './red/Shoulder';
import Accessory from './red/Accessory';
import Heart from './red/Heart';
function Option({item_type, grade, setOption, optionPer}) {
    if (item_type === "X") {
        return(
            <Nochoice grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "weapon") {
        return(
            <Weapon grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        )
    }
    else if (item_type === "emblem") {
        return(
            <Emblem grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "weapon2") {
        return(
            <Weapon2 grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "weapon3") {
        return(
            <Weapon3 grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "hat") {
        return(
            <Hat grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "up") {
        return(
            <Up grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "updown") {
        return(
            <Updown grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "down") {
        return(
            <Down grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "shoes") {
        return(
            <Shoes grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "glove") {
        return(
            <Glove grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "cloak") {
        return(
            <Cloak grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "belt") {
        return(
            <Belt grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "shoulder") {
        return(
            <Shoulder grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "accessory") {
        return(
            <Accessory grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
    else if (item_type === "heart") {
        return(
            <Heart grade={grade} setOption = {setOption} optionPer = {optionPer}/>
        );
    }
}

export default Option;