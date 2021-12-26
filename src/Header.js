import headerStyles from "./css/Header.module.css";
import appstyles from "./css/App.module.css"

function Header() {
  return (
    <header className={`${appstyles.block} ${headerStyles.my_header}`}>
      <div>
        <ul>
          <li className={headerStyles.header_content}>
            <a href="https://www.jobmaple.com/"><span className="icon fontawesome-align-left scnd-font-color"></span>직업 랭킹</a>
          </li>
          <li className={headerStyles.header_content}>
            <a href="https://www.jobmaple.com/mbti"><span className="icon fontawesome-check scnd-font-color"></span>메BTI</a>
          </li>
          <li className={headerStyles.header_content}>
            <a href="https://www.jobmaple.com/stat"><span className="icon entypo-chart-line scnd-font-color"></span>통계</a>
          </li>
          <li className={headerStyles.header_content}>
            <a href="https://www.redvsblack.site/"><span className="icon openwebicons-remote-storage scnd-font-color"></span>큐브 계산기</a>
          </li>
          <li className={`${headerStyles.header_content}`} style={{float: "right"}}>
            <a href="https://www.redvsblack.site/" className={`${headerStyles.header_logo}`}><span style={{fontSize:"20px", padding:"0", color:"red"}}>Red</span> vs <span style={{fontSize:"20px", padding:"0", color:"black"}}>Black</span></a>
          </li>
        </ul>

      </div>
    </header>
  );
}

export default Header;
