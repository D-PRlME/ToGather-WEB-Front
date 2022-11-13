import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import SearchConponent from "../components/search";

function SearchPage() {
  return (
    <HomeContainer>
      <HomeCategory />
      <SearchConponent />
    </HomeContainer>
  );
}

export default SearchPage;
