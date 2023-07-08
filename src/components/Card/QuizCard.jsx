/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import place from "../../assets/place.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import "./style.css";

const QuizCard = ({ title, category, image }) => {
  return (
    <>
      <div className="card__wrapper">
        <section className="card__wrapper_img">
          <LazyLoadImage
            src={image}
            PlaceholderSrc={place}
            width={300}
            height={220}
            effect="blur"
          />
        </section>
        <section className="card__wrapper_content">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugit ducimus architecto est laudantium, ipsa
            voluptas fugiat a maiores temporibus!
          </p>
          <div className="card__wrapper_button">
            <p>free</p>
            <Link to={`/quiz/${category}`}>
              {" "}
              <button>Start</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuizCard;
