import PropTypes from 'prop-types'



const Header = ({title}) => {
    return (
        <header className='header'>
          <h1>{title}</h1>
          <ul>
              <li>
                  <a href='/livres'>Livres</a>
                  
              </li>
              <li>
                <a href='/medias'>medias</a>
              </li>
          </ul>
        </header>
    )
}

Header.defaultProps = {
    title: 'Documents',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header