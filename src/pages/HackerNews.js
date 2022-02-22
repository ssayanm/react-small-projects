import Buttons from "../components/Buttons";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import Stories from "../components/Stories";
import "../styles/hackernews.css";

const HackerNews = () => {
  return (
    <>
      <Navbar />
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
};

export default HackerNews;
