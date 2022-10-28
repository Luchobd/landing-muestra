import React, { useEffect } from "react";
import { renderAlbum } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Album() {
  const handleAlert = async () => {
    await Swal.fire({
      title: "Follow Us",
      text: "Follow us on our social networks!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const dispatch = useDispatch();
  const albumPufi = useSelector((state) => state.albumPufi);

  useEffect(() => {
    dispatch(renderAlbum());
  }, [dispatch]);

  return (
    <>
      {/* Instagram Galery  */}

      <h3 className="hashtag__subtitle">Follow our journey</h3>
      <div className="album">
        <div className="album__content">
          {albumPufi?.map((e, index) => {
            return (
              <picture className="album__content_img" key={index}>
                <img src={e.image} alt={e.name} />
              </picture>
            );
          })}
        </div>
      </div>
      <div className="follow">
        <button onClick={() => handleAlert()}>Follow Us</button>
      </div>
    </>
  );
}

export default Album;
