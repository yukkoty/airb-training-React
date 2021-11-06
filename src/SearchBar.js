import SearchBarContent from "./SearchBarContent"
import './SearchBar.css'

const SearchBar=()=> {
    
    return(
        <div className="box-container-searchbarcontent">
            <SearchBarContent title="ロケーション"　description="行き先はどちらですか？"/>
            <SearchBarContent title="チェックイン"　description="日付を入力"/>
            <SearchBarContent title="チェックアウト"　description="日付を入力"/>
            <SearchBarContent title="人数"　description="ゲスト数を入力"/>
        </div>
    )
}
export default SearchBar