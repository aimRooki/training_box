import "./App.css";
import { useEffect, useState } from "react";
import db from "./firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // データベースから取得する
    const postData = collection(db, "posts")
    getDocs(postData).then((snapShot) => {
      console.log(snapShot.docs.map(doc => ({ ...doc.data() })));
      setPosts(snapShot.docs.map(doc => ({ ...doc.data() })));
    })

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({...doc.data()})))
    })
  },[])
  return (
    <div className="App">
      <div>
      {posts.map((post) => (
        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
