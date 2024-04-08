import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss"; // Import your SCSS file

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

// AlbumList.defaultProps = {
//   albumList: [],
// };
function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
