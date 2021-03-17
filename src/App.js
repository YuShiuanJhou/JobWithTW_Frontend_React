import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {

  const title = "WelcomeToMyBlog";
  const likes = 50;
  const url = "https://google.com.tw";
  const person = { name: 'yoshi', age: 30 };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>{title}</h1>
        <p>Like {likes} * {100} times</p>
        <p>{"hello, it's good"}</p>
        <p>{[1, 2, 3, 4, 5, 66, 7.5, "25"]}</p>
        <p>{Math.random() * 10}</p>
        <a href={url}>link</a> */}
      </div>
    </div>
  );
}

export default App;
