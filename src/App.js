import { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import Inbox from './Inbox';

function App() {
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('accessCode');
    setAccessCode(code);
    console.log("accessCode: " + accessCode);
  }, []);
  
  if(accessCode != null || accessCode != undefined){
    return (
      <div className="App">
          <Inbox/>
      </div>
    );
  }else{
    return (
      <div className="App">
          <Login/>
      </div>
    );
  }
  
}

export default App;
