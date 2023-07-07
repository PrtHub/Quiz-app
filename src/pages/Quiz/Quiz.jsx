import "./style.css";

const Quiz = () => {
  return (
    <>
    <div className="quiz">
      <section className="quiz__wrapper">
        <h1>
          1. Lorem, ipsum dolor sit amet consectetur adipisicing elit Enim
          aliquam?
        </h1>
        <div className="quiz__wrapper_answer">
          <span>Answer: <input type="text" /> </span>
          <button>Submit</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Quiz;
