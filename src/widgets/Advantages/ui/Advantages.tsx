import { advantagesArray } from "../../../array"

export const Advantages = () => {
  return (
    <div className="b-advantages js-custom-scrollbar">
      {advantagesArray.map((item: any, index: any) => (
        <div className="b-advantages__item" key={index}>
          <div className="b-advantages__item-image">
            <img
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className="b-advantages__item-text">
            {" "}
            {item.title}{" "}
          </div>
        </div>
      ))}
    </div>
  )
}