import popupStyles from "./css/PopUp.module.css";

function PopUp1({ text, guide }) {
  function myFunction() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle(`${popupStyles.show}`);
  }
  return (
    <div className={popupStyles.popup} onClick={myFunction}>
      {text}
      <span className={popupStyles.popuptext} id="myPopup1">
        {guide}
      </span>
    </div>
  );
}



export default PopUp1;