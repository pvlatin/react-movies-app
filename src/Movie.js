import React from 'react'
import PropTypes from 'prop-types'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const Movie = ({ movie }) => 
  <div>
    <h3>{movie.title}</h3>
    <h4>DEVELOP</h4>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
  </div>
  
export default Movie

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired,
  desc: PropTypes.string
}


// static defaultProps = {
//   // desc: 'not available'
// };