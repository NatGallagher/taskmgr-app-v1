import {Link} from "react-router-dom"

function Home() {
    return (
      <>
        <h2>Task Manager App v1.4</h2>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>Add</button> {" "} <a>Clear</a>
            <p></p>
        </div>
        <Link to="/contact">Contact US</Link>
      </>
    );
  }
  
  export default Home;
  