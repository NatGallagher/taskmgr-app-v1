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
        <p></p>
        <a href="#/0">all</a> {" | "}
        <a href="#/1">complete</a> {" | "}
        <a href="#/2">incomplete</a>
        <p></p>
        <div>
          <span>[] itema -x-</span><br/>
          <span>[x] itemb -x-</span><br/>
          <span>[] itemc -x-</span><br/>
          <span>[x] itemd -x-</span>
        </div>
      </>
    );
  }
  
  export default Home;
  