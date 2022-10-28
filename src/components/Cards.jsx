import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderCards } from "../redux/actions";
import Card from "./Card";

function Cards() {
  const dispatch = useDispatch();
  const allPufi = useSelector((state) => state.allPufi);

  useEffect(() => {
    dispatch(renderCards());
  }, [dispatch]);

  return (
    <div>
      {allPufi?.map((e, index) => {
        return (
          <div key={index}>
            <Card
              cardStyle={index}
              icon={e.icon}
              name={e.name}
              description={e.description}
              image={e.image}
              view={e.view}
              id={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
