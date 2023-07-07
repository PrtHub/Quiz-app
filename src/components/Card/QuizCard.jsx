/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import coach from "../../assets/coach.avif";
import "./style.css";

const QuizCard = ({title, category}) => {
  return (
    <>
      <div className="card__wrapper">
        <section className="card__wrapper_img">
          <img src={coach} alt="" />
        </section>

        <section className="card__wrapper_content">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugit ducimus architecto est laudantium, ipsa
            voluptas fugiat a maiores temporibus!
          </p>
          <div className="card__wrapper_button">
            <p>progessbar</p>
            <Link to={`/quiz/${category}`}> <button>Start</button></Link>
          </div>
        </section>
      </div> 
    </>
  );
};

export default QuizCard;
