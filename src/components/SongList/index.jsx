import "./index.css"
import Song from "../Song";
import { useQuery } from "@tanstack/react-query";

function SongList({searchText}) {
  const {data, isLoading} = useQuery({ 
    queryKey: ["getSong", searchText], 
    queryFn: ()=> {
    return fetch(
      searchText
      ? `https://api.manana.kr/karaoke/song/${searchText}.json`
      :"https://api.manana.kr/karaoke.json").then((res)=>{
      return res.json();
  });
  },
 });

 if (isLoading){
  return "Loading...";
 }

if(!data){
  return "No data";
}

  return (
    <div>
      {data.map((song) => (
        <Song 
          key={song.brand + song.no}
          title={song.title}
          singer={song.singer}
          no={song.no}
        />
      ))}
    </div>
  );
}

export default SongList;