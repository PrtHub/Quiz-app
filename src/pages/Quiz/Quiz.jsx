import { useParams } from "react-router-dom";
import { useGetQuizQuery } from "../../redux/QuizApi";
import "./style.css";
import { useEffect, useState } from "react";

const Quiz = () => {
  const { category } = useParams();
  const { data, isFetching } = useGetQuizQuery(category);
  console.log(data);

  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    setUserAnswer(""); 
  }, [category]);

  if (isFetching) return "Loading.....";

  const sliceData = data?.slice(0, 1);


  const handleAnswerSubmit = () => {
    const originalAnswer = sliceData[0]?.answer;
    if (userAnswer.toLowerCase() === originalAnswer.toLowerCase()) {
      alert("Correct answer!");
    } else {
      alert("Incorrect answer!");
    }
  };

  return (
    <>
      <div className="quiz">
        {sliceData?.map((quiz) => (
          <section className="quiz__wrapper" key={quiz?.answer}>
            <h1>{quiz?.question}</h1>
            <div className="quiz__wrapper_answer">
              <span>
                Answer:{" "}
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />{" "}
              </span>
              <button onClick={handleAnswerSubmit}>Submit</button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Quiz;


