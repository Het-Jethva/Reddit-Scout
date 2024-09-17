import { RecoilRoot } from "recoil";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";

const App = () => {
  return (
    <RecoilRoot>
      <div className="container mx-auto p-8 max-w-screen-md">
        <h1 className="text-5xl font-bold mb-4 p-4 text-center">
          Reddit Scout
        </h1>
        <SearchBar />
        <PostList />
      </div>
    </RecoilRoot>
  );
};

export default App;
