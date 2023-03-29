import './Inbox.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import InboxItem from './InboxItem';

function Inbox() {
    const BASE_URL = "http://localhost:8080";
    const [threads, setThreads] = useState([]);
    const list = [];

    const signOut = () => {
        window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000/";
    }

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const code = params.get('accessCode');

        if (code != null || code != undefined) {
            axios.get(BASE_URL + "/threads?accessCode=" + code)
                .then(res => {
                    setThreads(res.data);
                    threads.map(thread => list.push(thread));
                }); 
        }
    }, []);

    return (
        <div className="container">
            <div>
                <h3>Inbox</h3>
                <button onClick={signOut}>Sign out with Google</button>
            </div>
            <div>
                {threads.map((thread) => <InboxItem key={thread.id} message={thread.snippet} />)}
            </div>
        </div>
    );
}

export default Inbox;