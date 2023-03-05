import { useParams } from "react-router-dom";
import { gameArray } from "../../../array";
export const GameDetails = () => {
  const { id } = useParams();
  const game = gameArray.find((item) => item.id === parseInt(id));

  return (
    <>
      <h1>TEST {game.name} </h1>
      <p>
        {game.intro}
      </p>
    </>
  )
}