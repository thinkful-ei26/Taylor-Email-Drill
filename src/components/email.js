import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'; 


export default function Email() {
    return (
        <div className="email">
          <Router>
            <div>
            {/* <Route exact path="/:folderId" component={sidebar} /> */}
            <Sidebar />
            
            <main>
                <Redirect from="/" to="inbox" />
                <Route exact path="/:folderId" component={EmailList}/>
                <Route exact path="/:folderId/:emailId" component={SingleEmail} />
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
            </div>
            </Router>
        </div>
    );
}
