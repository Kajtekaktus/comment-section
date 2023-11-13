import "./App.css";
import PostWall from "./components/PostWall";
import data from "./data.json";


export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}

export interface CurrentUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Data {
  currentUser: CurrentUser;
  comments: Comment[];
}

function App() {
  const defaultData: Data = data;


  return (
    <div className="w-[70vw]">
      <PostWall data={defaultData} />
    </div>
  );
}

export default App;
