import { useRef } from "react";
import "./index.css"

function SearchBar({onSearch}) {
  const inputRef = useRef();

  return ( 
  <div className="SearchBar">
    <input ref={inputRef} className="SearchBar__input"/>
    <button 
    className="SearchBar__button" 
    onClick={()=>{
      onSearch(inputRef.current.value);
    }}>
      검색
    </button>
  </div>)
}

export default SearchBar;
