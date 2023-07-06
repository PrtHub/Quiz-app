import { QuizCard } from "../../components";
import { useGetQuizQuery } from "../../redux/QuizApi";

import './style.css'

const Home = () => {
  const { data } = useGetQuizQuery();
  console.log(data);

  return (
    <>
    <section className="home">
       <h1>Popular Categories</h1>
       <main className="home__wrapper">
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
         <QuizCard/>
       </main>
    </section>
    </>
  );
};

export default Home;
