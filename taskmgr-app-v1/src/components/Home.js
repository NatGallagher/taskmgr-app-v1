import {useEffect} from "react"

function Home() {

  useEffect(() => {

    console.log("Home page load")
  },[])//[] - run only 1 time
    return (
      <>
        <h2>Task Manager App v1.5</h2>
        <p></p>
        <div>
            <input type="text" maxLength={25} placeholder="* add item"/>
            {" "} <button>Add</button> {" "} <a>Clear</a>
            <p></p>
        </div>
        <p></p>
        <a>all</a> {" | "}
        <a>complete</a> {" | "}
        <a>incomplete</a>
        <p></p>
        <div>
          <span>[] itema -x-</span><br/>
          <span>[x] itemb -x-</span><br/>
          <span>[] itemc -x-</span><br/>
          <span>[x] itemd -x-</span>
        </div>
        <div>
          <p>Version involves:</p>
          [Items/
          all,complete,incomplete/
          text box in contact us]
        </div>
      </>
    );
  }
  
  export default Home;
  