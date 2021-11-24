import './SearchBarContent.css'
const SearchBarContent=(props)=> {
    const onClick=props.onClick
    
    return(
    <div className="search-bar-content-wrapper"　onClick= {onClick}>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
    </div>
    )
}
export default SearchBarContent