import React from 'react';
import SongDetailListContainer from '../songs/song_detail_list_container';

class Stream extends React.Component {
  constructor (props) {
    super(props);
    
  }

  render () {
    return (
     <h1>Hiiii!
     <SongDetailListContainer />
   </h1>
    );
  }
}
export default Stream;
