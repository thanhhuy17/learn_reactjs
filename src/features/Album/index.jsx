import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: "Acaustic Thư Giãn",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
    },
    {
      id: 2,
      name: "Remake Việt Nhẹ Nhàng",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/2/4/88247ce8f0f1aadb7062a7c9fda9292f.jpg",
    },
    {
      id: 3,
      name: "Tình đầu có phải tình đau?",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/5/8/b/158b077ed338b257af081ac74896669f.jpg",
    },
  ];
  return (
    <div>
      <h2>Bộ Bạn Thèm Nghe Nhạc Lắm Hã???</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
