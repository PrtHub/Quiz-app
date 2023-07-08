import { QuizCard } from "../../components";
import game from '../../assets/Game.jpg'
import lan from '../../assets/language.jpg'
import math from '../../assets/math.jpg'
import music from '../../assets/music.jpg'
import geo from '../../assets/geo.jpg'
import sports from '../../assets/sports.jpg'
import entertainment from '../../assets/entertainment.avif'
import food from '../../assets/food.jpg'
import science from '../../assets/science.avif'
import people from '../../assets/people.jpg'

import './style.css'

const Home = () => {
 
  return (
    <>
    <section className="home">
       <h1>Popular Categories</h1>
       <main className="home__wrapper">
         <QuizCard title="geography" category="geography" image={geo}/>
         <QuizCard title="music" category="music" image={music}/>
         <QuizCard title="mathematics" category="mathematics" image={math}/>
         <QuizCard title="sports leisure" category="sportsleisure" image={sports}/>
         <QuizCard title="people places" category="peopleplaces" image={people}/>
         <QuizCard title="entertainment"category="entertainment" image={entertainment}/>
         <QuizCard title="toys games"category="toysgames" image={game}/>
         <QuizCard title="food drink"category="fooddrink" image={food}/>
         <QuizCard title="science nature"category="sciencenature" image={science}/>
         <QuizCard title="language"category="language" image={lan}/>
       </main>
    </section>
    </>
  );
};

export default Home;
