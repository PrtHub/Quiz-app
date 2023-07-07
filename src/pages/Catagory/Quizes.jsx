import { QuizCard } from '../../components'
import './style.css'

const Quizes = () => {
  return (
    <>
      <section className="quizes">
       <h1>All Quiz Categories</h1>
       <main className="quizes__wrapper">
         <QuizCard title="artliterature" category="artliterature"/>
         <QuizCard title="geography" category="geography"/>
         <QuizCard title="music" category="music"/>
         <QuizCard title="historyholidays" category="historyholidays"/>
         <QuizCard title="mathematics" category="mathematics"/>
         <QuizCard title="sportsleisure" category="sportsleisure"/>
         <QuizCard title="peopleplaces" category="peopleplaces"/>
         <QuizCard title="entertainment"category="entertainment"/>
         <QuizCard title="toysgames"category="toysgames"/>
         <QuizCard title="general"category="general"/>
         <QuizCard title="fooddrink"category="fooddrink"/>
         <QuizCard title="sciencenature"category="sciencenature"/>
         <QuizCard title="language"category="language"/>
         <QuizCard title="religionmythology"category="religionmythology"/>
       </main>
    </section>
    </>
  )
}

export default Quizes