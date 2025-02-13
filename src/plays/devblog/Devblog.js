import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import App from './App';

// WARNING: Do not change the entry componenet name
function Devblog(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body devBlog-body">
          {/* Your Code Starts Here */}
          <App />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Devblog;
