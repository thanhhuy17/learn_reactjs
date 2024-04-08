import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
  album: PropTypes.array.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
