import './Login.css';

function Login() {
    const LOGIN_URL = "http://localhost:8080/auth";

    const signIn = () => {
      window.location = LOGIN_URL;
    }

    return (
      <div className="container">
          <strong><h3>AFFIDAVITS & RFI</h3></strong>
          <h1>Looks like you're not yet<br/>connected with your Google<br/>Account</h1>
          <p>Lets make your trip fun and simple</p>
          <button onClick={signIn}>Sign in with Google</button>
      </div>
    );
  }
  
  export default Login;