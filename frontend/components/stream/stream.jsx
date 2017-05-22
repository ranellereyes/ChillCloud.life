import React from 'react';
import SongDetailListContainer from '../songs/song_detail_list_container';
import SideBarContainer from '../side_bar/side_bar_container';

class Stream extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
     <h1 className="main-body">
       <SongDetailListContainer className="main"/>
       <SideBarContainer className="side-bar"/>
     </h1>
    );
  }
}
export default Stream;
