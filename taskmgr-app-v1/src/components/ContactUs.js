function ContactUs() {
    return (
      <>
        <h2>Contact Us</h2>
        <form>
            <div>
                <span>First Name: </span><input type="text" maxlength={25} placeholder="* First Name"/>
                <br/>
                <span>Last Name: </span><input type="text" maxlength={25} placeholder="Last Name"/>
                <br/>
                <span>Email: </span><input type="text" maxlength={100} placeholder="* Email"/>                
                <p></p>
                <button>Submit</button> {" "} <a href="#">clear</a>
            </div>
        </form>
      </>
    );
  }
  
  export default ContactUs;
  