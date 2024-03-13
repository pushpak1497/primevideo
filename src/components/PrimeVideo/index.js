// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="bg-container">
        <h1>Action Movies</h1>
        <MoviesSlider details={actionMoviesList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider details={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
