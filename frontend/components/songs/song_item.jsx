import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const SongItem = ({match, song, currentUser, play, queue, history}) => {
  let button;

  const playSong = (e) => {
    e.stopPropagation();
    e.preventDefault();
    play(song);
  };
  const queueSong = () => (queue(song));


  const reroute = (e) => {
    e.stopPropagation();
    history.push(`/songs/${song.id}`);
  };

  return (
        <div className="song-detail-comp"
          onClick={reroute}>
          <img src={song.image_url} />
          <div className="second-col">
            <section>
              <div className="buttons">
                <button
                  className="play-button"
                  onClick={playSong}
                  />
                <button
                  className="queue-button"
                  onClick={queueSong}>+</button>
              </div>
              <ul className="details">
                <li key={`title-${song.id}`}>{song.title}</li>
                <li key={`artist-${song.id}`}>{song.artist}</li>
              </ul>
            </section>
          </div>
          <p className="genre">{song.genre ? `#${song.genre}` : null}</p>
        </div>
  );
};

export default withRouter(SongItem);
