import './SearchBarContent.css'
const SearchBarContent=(props)=> {
    
    return(
    <div className="search-bar-content-wrapper">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
    )
}
export default SearchBarContent