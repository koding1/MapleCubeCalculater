import { useEffect } from "react";

function Adfit({ad_classname, KEY, ad_width, ad_height}) {
    useEffect(() => {
        let ins = document.createElement("ins");
        let scr = document.createElement("script");
    
        ins.className = "kakao_ad_area";
        ins.style = "display:none; width:100%;";
        scr.async = "true";
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute("data-ad-width", ad_width);
        ins.setAttribute("data-ad-height", ad_height);
        ins.setAttribute("data-ad-unit", KEY);
    
        document.querySelector(`.${ad_classname}`).appendChild(ins);
        document.querySelector(`.${ad_classname}`).appendChild(scr);
    }, [ad_classname, KEY, ad_width, ad_height]);

    return (
        <div className={ad_classname} style={{width:`${ad_width}px`, height:`${ad_height}px`, margin:"0 auto"}}></div>
    );
}

export default Adfit;