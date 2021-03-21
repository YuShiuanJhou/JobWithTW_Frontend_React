import './App.css';
<<<<<<< HEAD

import Home from './Home'
import Navbar from './Components/Navbar'
=======
import Navbar from './Navbar'
import Home from './Home'
>>>>>>> 06f3b8754ca47da94bfa9473d2fd0e28c43e65b6

function App() {

  const title = "WelcomeToMyBlog";
  const likes = 50;
  const url = "https://google.com.tw";
  const person = { name: 'yoshi', age: 30 };
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD

      <div className="content">
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
=======
      <div className="content">
        <Home />
>>>>>>> 06f3b8754ca47da94bfa9473d2fd0e28c43e65b6
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
