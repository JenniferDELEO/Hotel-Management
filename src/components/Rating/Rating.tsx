import { FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const fullStarElements = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} />
  ));

  let halfStarElement = null;

  if (decimalPart > 0) {
    halfStarElement = <FaStarHalf />;
  }

  return (
    <>
      {fullStarElements} {halfStarElement}
    </>
  );
};

export default Rating;
