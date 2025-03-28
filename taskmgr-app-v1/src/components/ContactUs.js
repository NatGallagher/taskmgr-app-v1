import {useEffect, useRef} from "react"

function ContactUs() {

  const outputDiv = useRef("");
  const txtfirstname = useRef("");
  const txtlastname = useRef("");
  const txtemail = useRef("");
  const txtphone = useRef("");
  const txtcomment = useRef("");

  const btnHandleFormValidation = (event)=>
    {
        let _msg = "";

        event.preventDefault();

        outputDiv.current.innerText = _msg
        console.log(_msg)

        if(txtfirstname.current.value == null | txtfirstname.current.value.trim().length == 0) {
          _msg = "## please enter a valid first name"
          outputDiv.current.innerText = _msg;
          return false;  
        }

        if(txtemail.current.value == null | txtemail.current.value.trim().length == 0) {
          _msg = "## please enter a valid email"
          outputDiv.current.innerText = _msg;
          return false;  
        }

        if(txtcomment.current.value == null | txtcomment.current.value.trim().length == 0) {
          _msg = "## please enter a valid comment"
          outputDiv.current.innerText = _msg;
          return false; 
        }

        outputDiv.current.innerText = "form submitted"

        _msg = `## form submit: ${txtfirstname.current.value} ${txtlastname.current.value} - ${txtemail.current.value}
        - ${txtcomment.current.value}`
       
        console.log(_msg)

        //clear fields
        txtfirstname.current.value = "";
        txtlastname.current.value = "";
        txtemail.current.value = "";
        txtcomment.current.value = "";

        //field focus
        txtfirstname.current.focus()

    }


    /* useEffect(function) - ananymous function, callback, arraw fuction */
    //useEffect(function(){})
    //useEffect(()=>{
  
    useEffect(()=>{
  
      console.log("#App::ContactUs page load")
  
      //page load [] -- 1 time
      //-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh
      
    },[]) //[] - run only 1 time 
  
    return (
      <>
        <div className="app-center-page">  
          <h2>Contact Us</h2>
          <div ref={outputDiv}></div>
          <br/>
          <form>
              <div> 
                  <span>* first name: </span> <input ref={txtfirstname} type="text" maxLength={25} placeholder="* first name"/>
                  <br/>
                  <span>last name: </span> <input ref={txtlastname} type="text" maxLength={25} placeholder="last name"/>
                  <br/>
                  <span>* email: </span> <input ref={txtemail} type="text" maxLength={100} placeholder="* email"/>
                  <br/>
                  <span>* comment: </span> 
                  <br/><textarea ref={txtcomment} rows={5} cols={30} maxLength={100} placeholder="* comment"></textarea>
                  <p></p>
                  <button onClick={btnHandleFormValidation}>submit</button> {" "} <a>clear</a>
              </div>
          </form>
      </div>
      </>
    );
  }
  
  export default ContactUs;
  