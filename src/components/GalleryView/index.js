import { useParams, Link, Route, Switch } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';


const GalleryView = ({galleries}) => {

  const { galleryId } = useParams();

  const galleryFinder = (gallery) => {
    return gallery.id == galleryId
  }

  const tileCreator = (galleryObj) => {
    const url = `/galleries/${galleryObj.id}/art/${galleryObj.id}`;
    return (
      <Link to={url} key={galleryObj.id}>
        <ArtImageTile art={galleryObj} galleryId={galleryId}/>
      </Link>
    );
  }

  let gallery = galleries.find(galleryFinder);
  let tiles = gallery.objects.map(tileCreator);

  return (
    <>
      <h2>{gallery.name}</h2>
      <Switch>
        <Route exact path='/galleries/:galleryId'>
          {tiles}
        </Route>
        <Route path='/galleries/:galleryId/art/:artId'>
          <ArtDescription gallery={gallery}/>
        </Route>
      </Switch>


    </>

  );
}

export default GalleryView;
