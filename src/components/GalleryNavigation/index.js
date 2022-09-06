import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

const linkCreator = (gallery) => {
  const url = `/galleries/${gallery.id}`;
  return (
    <NavLink to={url} key={gallery.id}>
      {gallery.name}
    </NavLink>
  );
}

const GalleryNavigation = ({galleries}) => {

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink exact to='/'>Home</NavLink>
      {galleries.map(linkCreator)}
    </nav>

  );
}

export default GalleryNavigation;
