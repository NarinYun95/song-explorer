import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import SongList from "../../components/SongList";

function SearchPage() {
  const [searchText, setSearchText] = useState();
  return(
  <div>
    <SearchBar 
      onSearch={(value)=>{
        setSearchText(value);
    }}/>
    <SongList searchText={searchText}/>
  </div>
  )
}

export default SearchPage
