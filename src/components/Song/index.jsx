import './index.css';

function Song({title, singer, no}) {
  return (
    <div className="Song">
      <div>
        <div className="Song__title">{title}</div>
        <div className="Song__singer">{singer}</div>
      </div>
      <div className="Song__no">{no}</div>
    </div>
  )
}

export default Song;
    // <div>
    //   <p>가수: {song.singer.trim()}</p>
    //   <p>번호: {song.no}</p>
    //   <p>작곡: {song.composer.trim()}</p>
    //   <p>작사: {song.lyricist.trim()}</p>
    //   <p>출시일: {song.release}</p>
    //   <p>브랜드: {song.brand}</p>
    // </div>