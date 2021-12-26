import popupStyles from "./css/PopUp.module.css";

function PopUp2({ text, guide }) {
  function myFunction() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle(`${popupStyles.show}`);
  }
  return (
    <div className={popupStyles.popup} onClick={myFunction}>
      {text}
      <span className={popupStyles.popuptext} id="myPopup2">
        {guide}
      </span>
    </div>
  );
}



export default PopUp2;