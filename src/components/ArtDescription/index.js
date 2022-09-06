import {Link, useParams} from 'react-router-dom';

const ArtDescription = ({ gallery }) => {

  const { artId }  = useParams();
  let galleryUrl = `/galleries/${gallery.id}`
  let artPiece = gallery.objects.find(piece => piece.id == artId);
  let artUrl = artPiece.url;
  let artTitle = artPiece.title;
  let artDesc = artPiece.description || 'N/A';
  let artCredit = artPiece.creditline || 'N/A';
  let artTechnique = artPiece.technique || 'N/A';

  console.log(artPiece);

  return (
    <>
      <Link to={galleryUrl}>
        Back to {gallery.name}
      </Link>
      <a href={artUrl}>
        {artTitle}
      </a>
      <h3>Description: {artDesc}</h3>
      <h3>Credit: {artCredit}</h3>
      <h3>Technique: {artTechnique}</h3>
      {artPiece.images.map(
        image => {
          return (
            <img src={image.baseimageurl} key={image.baseimageurl}></img>
          );
        }
      )}


    </>
  );

}

export default ArtDescription;
