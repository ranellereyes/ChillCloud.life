import React from 'react';
import { Link } from 'react-router-dom';

export const SongItem = ({song, key}) => {
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
            <button>
              <Link to={`/songs/${song.id}`}>
                Comments!
              </Link>
            </button>
        </div>
        <p>{song.genre}</p>
      </div>
  );
};

export default SongItem;
