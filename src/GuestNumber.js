import "./GuestNumber.css";

const GuestNumber = (props) => {
    const onClickAdultNumberUp=props.onClickAdultNumberUp
    const onClickAdultNumberDown=props.onClickAdultNumberDown
    const onClickChildNumberUp=props.onClickChildNumberUp
    const onClickChildNumberDown=props.onClickChildNumberDown
    const onClickBabyNumberUp=props.onClickBabyNumberUp
    const onClickBabyNumberDown=props.onClickBabyNumberDown

  return (
    <div className="guest-number-bar">
      GuestNumber
      <div className="guest-number-row">
        <div className="guest-number-title">大人</div>
        <div className="guest-number-message">13歳以上</div>
       <button　onClick= {onClickAdultNumberDown}>-</button>
       {props.adultNumber}
       <button onClick= {onClickAdultNumberUp}>+</button>
      </div>
      <div>
        <div className="guest-number-title">子供</div>
        <div className="guest-number-message">年齢2~12</div>
        <button　onClick= {onClickChildNumberDown}>-</button>
       {props.childNumber}
       <button onClick= {onClickChildNumberUp}>+</button>
      </div>
      <div>
        <div className="guest-number-title">乳幼児</div>
        <div className="guest-number-message">2歳未満</div>
        <button　onClick= {onClickBabyNumberDown}>-</button>
       {props.babyNumber}
       <button onClick= {onClickBabyNumberUp}>+</button>
      </div>
      <div className="guest-number-title">ペット</div>
      <div className="guest-number-message">介助動物を同伴しますか？</div>
    </div>
  );
};
export default GuestNumber;
