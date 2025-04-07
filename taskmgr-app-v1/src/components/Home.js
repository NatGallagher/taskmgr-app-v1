import {useEffect, useState} from "react"

const initial_todo_items = [
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
];

function Home() {

  /*
  useState = uesed to update and track data changes
            state variable
            update state function 
  */

  const [tmplist, setTmpList] = useState(initial_todo_items);
  const [todolist, setTodoList] = useState(null);
  const [txtitem, setItem] = useState("")
  const [msgText,setMsg] = useState("")
  
  const handleAddNewItem = (e) =>{
    e.preventDefault();
      
      if(txtitem === null ||  txtitem.trim().length === 0)
      {
          setMsg(`* please enter a valid item name`);
          return true;
      }

      const _newitem = {id:new Date().getTime(),name:txtitem,completed:false};

      setTmpList((prevval)=>{
          
          //modern javascript array add
          //-- spread operator ... = add item to array ... include exing items 
          //or array.push()

          const _lst = [...prevval,_newitem]
          setTodoList((prevval)=>[..._lst]);    
          return _lst;
      });

      setMsg("# item added");
      setItem("");                     

   }

   function handleDelete(e, id){

    e.preventDefault() //previent ie: onclick from continuing / bubling 
    //allow on 1 click on current event
    //onclick would refresh page 
    //used in form buttons events

    if(!window.confirm("delete item?")){
      return false;
    }

    setTmpList((prevval)=>{
      const _lst = [...prevval]
      
      const _index = _lst.findIndex((item)=>{
        if (item.id == id)
        {
          return true;
        }
      })

      if(_index !=-1)
      {
        _lst.splice(_index,1)
      }

      setTodoList((prevval)=>[..._lst]);    
      return _lst;
    });

    setMsg(`# item deleted ${id}`)

   }

   

   const handleAll = (e) => {

    e.preventDefault();

    const filteredlist = tmplist;
      
    setTodoList(filteredlist);
  }

   const handleComplete = (e) => {

    e.preventDefault();

    const filteredlist = tmplist.filter((item)=>{
        return item.completed
    })

    setTodoList(filteredlist);
  }

   const handleIncomplete = (e) => {

      e.preventDefault();
  
      const filteredlist = tmplist.filter((item)=>{
          return !item.completed
      })

      setTodoList(filteredlist);
  }

  const handleItemToggle = (e, id) => {


          let _lst1 = tmplist.map((item)=>{
              return   (item.id == id)?                  
                    {...item,completed:!item.completed}
                :
                    {...item};                
            });

            let _lst2 = todolist.map((item)=>{
              return   (item.id == id)?                  
                    {...item,completed:!item.completed}
                :
                    {...item};                
            });

          setTmpList(_lst1);
          setTodoList(_lst2);

          setItem("");

  }

  /* useEffect(function) - ananymous function, callback, arraw fuction */
  //useEffect(function(){})
  //useEffect(()=>{

  useEffect(()=>{

    console.log("#App::Home page load")
    
    //setTodoList(tmplist)
    //or -- spread operator -- append/include latest data 
    setTodoList([...tmplist])
    console.log("---tmplist\n",tmplist)
    console.log("---todolist\n",todolist)

    //page load [] -- 1 time
    //-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh
    
  },[]) //[] - run only 1 time 


  return (
      <>
      <div className="app-center-page">  
          <h3>Demo Task Manager App v1.0.6</h3>
          <p></p>
          <div>
              <input value={txtitem} type="text" 
                       onChange={(e)=>setItem(e.target.value)}
                       maxLength={25} placeholder="* add item"/>
              {" "} 
              <button onClick={handleAddNewItem}>Add</button> {" "} <a href="#" onClick={()=> {setItem(""); setMsg("")}}>clear</a>
              <p></p>
          </div>
          <p>{msgText}</p>
          <br/>
          <div>
            <a href="#" onClick={handleAll}>all</a> {" | "}
            <a href="#" onClick={handleComplete}>complete</a> {" | "}
            <a href="#" onClick={handleIncomplete}>in-complete</a> 
          </div>
          <br/>
          <div>
              {todolist && todolist.map((item)=>
              <p key={item.id}>{
                <>
                   <input onChange={(e)=>handleItemToggle(e,item.id)} type="checkbox" checked={item.completed}/>{" "}
                    {" "}
                    <span key={item.id} style={{'text-decoration':(item.completed)?"line-through":""}}>{item.name}</span>                    
                    {" "}
                   <button onClick={(e)=>handleDelete(e,item.id)}>x</button>
                </>}
              </p>)}
          </div>
          <p></p>
          <p>footer @ 2025</p>       
        </div>
      </>

    );
  }
  
  export default Home;
  