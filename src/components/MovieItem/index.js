// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(thumbnailUrl)
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              aria-label="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
