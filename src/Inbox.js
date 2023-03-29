import './Inbox.css';

function Inbox() {
    const signOut = () => {
        window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000/";
    }

    return (
        <div className="container">
            <h3>Inbox</h3>
            <button onClick={signOut}>Sign out with Google</button>
        </div>
    );
}

export default Inbox;