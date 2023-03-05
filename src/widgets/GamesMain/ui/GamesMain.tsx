import { Link } from "react-router-dom";
import { gameArray } from "../../../array";

export const GameMain = () => {
  return (
    <div className="b-catalog__tab-wrapper js-custom-scrollbar">
      {gameArray.map((item: any, index: any) => (
        <div className="shop-item" key={index} >
          <Link className="shop-item__image" to="">
            <img
              className="lazyload"
              src={item.image}
              alt={item.name}
            />
            <div
              className="shop-item__favorite js-modal-open "
              data-item-id={5655}
              data-modal="login"
            />
          </Link>
          <Link className="shop-item__name" to={`/games/${item.id}`}>
            {item.name}
          </Link>
          <div className="shop-item__price">
            <div className="shop-item__price-current">{item.price} ₽</div>
            <div className="shop-item__price-discount">{item.sale}%</div> </div>
          <Link
            className="btn btn--primary js-addToCart "
            to="/basket"
            data-item-id={5655}
          >
            &nbsp;Купить
          </Link>
        </div>
      ))}
    </div>
  )
}

