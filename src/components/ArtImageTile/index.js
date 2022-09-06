import "./ArtImageTile.css";
import { Link } from 'react-router-dom';

const ArtImageTile = ({ art, galleryId }) => {

  let imageUrl = art.primaryimageurl;
  let linkUrl = `/galleries/${galleryId}/art/${art.id}`;

  return (
    <Link to={linkUrl}>
      <img src={imageUrl}></img>
    </Link>
  );
}


export default ArtImageTile;
