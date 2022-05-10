import './App.css';
import Gallery from './component/Gallery';
import { useState } from "react";
import UserForm from "./component/perData";
import UserList from "./component/data";
import AxiosFetch from "./component/Call";


function App() {
  // const [contacts, updateContacts] = useState([]);

  // const addContact = (contact) => {
  //   updateContacts([...contacts, contact]);
  // };
  return (
    <>
    {/* <div className="container">
    <div className="App">
      <UserForm  addContact={addContact}></UserForm>
      <UserList contacts={contacts} ></UserList>
      
</div>
</div> */}
<AxiosFetch/>
      
{/* <h1 style={{textAlign:'center'}}>Image Gallery</h1>
    <Gallery/> */}
    
    
    </>
  );
}

export default App;
