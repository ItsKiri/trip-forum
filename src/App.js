import { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

/**
 * HomePage of the project.
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <br />
        <h1 align="center">Trip Forum</h1>
        <br />
        <h3 align="center">Welcome, Travelers!</h3>
        <br />
        <img
          src={require("./images/1.jpeg")}
          className="center"
          width="576"
          height="360"
        />
        <br />
        <hr />
        <Link to="/recommendationpage">
          <h3>Recommendations</h3>
        </Link>
        <Link to="/blogpage">
          <h3>Blogs</h3>
        </Link>
        <Link to="/helppage">
          <h3>Helps</h3>
        </Link>
        <Link to="/fellowpage">
          <h3>Fellows</h3>
        </Link>
        <Link to="/aboutpage">
          <h3>About</h3>
        </Link>
        <hr />
        <p align="center">
          Home-keeping youth have ever homely wits…
          <br />I rather would entreat thy company
          <br />
          To see the wonders of the world abroad，
          <br />
          Then，living dully sluggardized at home，
          <br />
          Wear out thy youth with shapless idleness．
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          ——Shakespeare
        </p>
      </div>
    );
  }
}

export default App;
