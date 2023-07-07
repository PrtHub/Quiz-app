import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetQuizQuery } from "../../redux/QuizApi";

import "./style.css";
import { Loader } from "../../components";
import { toast } from "react-toastify";

const Quiz = () => {
  const { category } = useParams();
  const { data, isFetching } = useGetQuizQuery(category);
  console.log(data);

  const [userAnswer, setUserAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setUserAnswer("");
  }, [category]);

  if (questionIndex == data?.length) {
    return <p className="quiz_completed">Quiz completed!</p>;
  }

  if (isFetching) return <Loader/>

  const sliceData = data?.slice(questionIndex, questionIndex + 1);

  const handleAnswerSubmit = () => {
    const originalAnswer = data[questionIndex]?.answer;
    if (userAnswer.toLowerCase() === originalAnswer.toLowerCase()) {
      toast.success("Correct answer!");
      setQuestionIndex(questionIndex + 1);
      setUserAnswer("");
      setScore(score + 1);
    } else if (userAnswer === "") {
      toast.warning("Give an answer!");
    } else {
      toast.error("Incorrect answer!");
    }
  };

  return (
    <>
      <div className="quiz">
        <section className="quiz__score">Questions: {score}/{data?.length}</section>
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
