import {useEffect, useState} from "react"

const initial_todo_items = [
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
];

function Home() {

  //useState = used to update and track data changes

  const [tmplist, setTmpList] = useState(initial_todo_items);
  const [todolist, setTodoList] = useState(null);

  useEffect(() => {

    console.log("Home page load")

    setTodoList(tmplist)// calling this everytime the page loads
    console.log("--- tmplist\n", tmplist);
    console.log("--- todolist\n", todolist);


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
  