import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const SongItem = ({match, song, currentUser, play, queue}) => {
  let button;

  const playSong = () => (play(song));
  const queueSong = () => (queue(song));

  if (match.path !== "/songs/:song_id") {
    button = (
      <button className="comments">
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
          <button
            className="play-button"
            onClick={queueSong}
            />
          <ul className="details">
            <li key={`title-${song.id}`}>{song.title}</li>
            <li key={`artist-${song.id}`}>{song.artist}</li>
          </ul>
        </section>
      </div>
      {button}
      <p className="genre">{song.genre ? `#${song.genre}` : null}</p>
    </div>
  );
};

export default withRouter(SongItem);
