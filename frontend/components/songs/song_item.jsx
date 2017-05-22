import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const SongItem = ({match, song, currentUser}) => {
  let button;

  if (match.path !== "/songs/:song_id") {
    button = (
      <button>
        <Link to={`/songs/${song.id}`}>
          Comments!
        </Link>
      </button>
    );
  } else {
    button = null;
  }

  return (
    <div className="song-detail-comp">
      <img src={song.image_url} />
      <div className="second-col">
        <section>
          <div className="play-button"></div>
          <ul className="details">
            <li key={`title-${song.id}`}>{song.title}</li>
            <li key={`artist-${song.id}`}>{song.artist}</li>
          </ul>
        </section>
        {button}
      </div>
      <p>{song.genre}</p>
    </div>
  );
};

export default withRouter(SongItem);
