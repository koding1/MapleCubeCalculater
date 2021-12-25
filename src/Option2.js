// import { useState } from "react";
import Nochoice from './black/Nochoice';
import Weapon from './black/Weapon';
import Emblem from './black/Emblem';
import Weapon2 from './black/Weapon2';
import Weapon3 from './black/Weapon3';
import Hat from './black/Hat';
import Up from './black/Up';
import Updown from './black/Updown';
import Down from './black/Down';
import Shoes from './black/Shoes';
import Glove from './black/Glove';
import Cloak from './black/Cloak';
import Belt from './black/Belt';
import Shoulder from './black/Shoulder';
import Accessory from './black/Accessory';
import Heart from './black/Heart';
function Option2({item_type, grade, setOption, optionPer}) {
    if (item_type === "X") {
        return(
            <Nochoice grade={grade} setOption = {setOption} optionPer = {optionPer} />
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

export default Option2;