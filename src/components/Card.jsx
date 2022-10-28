import React from "react";
import Swal from "sweetalert2";

function Card({ icon, name, description, image, view, cardStyle, id }) {
  const handleAlert = async () => {
    await Swal.fire({
      title: "In construction",
      text: "Soon you will see a little more!",
      icon: "warning",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <div className={cardStyle % 2 === 0 ? "card" : "card-reverse"} id="puff">
        <picture className="card__img" id={id}>
          <img src={image} alt={name} />
        </picture>
        <div className="card__text">
          <div className="card__text__box">
            <figure className="card__text__img">
              <img src={icon} alt={name} />
            </figure>
            <h2>{name}</h2>
            <hr />
            <p>{description}</p>
            <h6>
              <a href="#" onClick={handleAlert}>
                {view}
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
