import SearchBarContent from "./SearchBarContent"
import './SearchBar.css'
import { useState } from 'react';
import SearchLocation from "./SearchLocation";
import SearchCheckin from "./SearchCheckin";
import SearchCheckout from "./SearchCheckout";
import GuestNumber from "./GuestNumber";

const SearchBar=()=> {
    const [selected, setSelected] =  useState('')
    const onClickHandler = (selected) => {

        setSelected(selected)
    }
    return(
        <>
        <div className="box-container-searchbarcontent">
            <SearchBarContent title="ロケーション"　description="行き先はどちらですか？" onClick={() =>onClickHandler("Location")}/>
            <SearchBarContent title="チェックイン"　description="日付を入力" onClick={() =>onClickHandler("Checkin")}/>
            <SearchBarContent title="チェックアウト"　description="日付を入力" onClick={() =>onClickHandler("Checkout")}/>
            <SearchBarContent title="人数"　description="ゲスト数を入力" onClick={() =>onClickHandler("GuestNumber")}/>
        </div>
        {selected == 'Location' &&  <SearchLocation/>}
        {selected == 'Checkin' &&  <SearchCheckin/>}
        {selected == 'Checkout' &&  <SearchCheckout/>}
        {selected == 'GuestNumber' &&  <GuestNumber/>}
        </>
    )
}
export default SearchBar