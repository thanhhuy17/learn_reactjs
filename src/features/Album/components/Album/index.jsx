import React from "react";
import PropTypes from "prop-types";

Album.propTypes = {
  album: PropTypes.array.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
