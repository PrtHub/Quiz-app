import { useGetQuizQuery } from "../redux/QuizApi";

const Home = () => {
  const { data } = useGetQuizQuery();
  console.log(data);

  return (
    <div>Home</div>
  );
};

export default Home;
