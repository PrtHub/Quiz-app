import { QuizCard } from "../../components";

import './style.css'

const Home = () => {
 
  return (
    <>
    <section className="home">
       <h1>Popular Categories</h1>
       <main className="home__wrapper">
         <QuizCard title="geography" category="geography"/>
         <QuizCard title="music" category="music"/>
         <QuizCard title="mathematics" category="mathematics"/>
         <QuizCard title="sportsleisure" category="sportsleisure"/>
         <QuizCard title="peopleplaces" category="peopleplaces"/>
         <QuizCard title="entertainment"category="entertainment"/>
         <QuizCard title="toysgames"category="toysgames"/>
         <QuizCard title="fooddrink"category="fooddrink"/>
         <QuizCard title="sciencenature"category="sciencenature"/>
         <QuizCard title="language"category="language"/>
       </main>
    </section>
    </>
  );
};

export default Home;
