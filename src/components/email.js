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
            <Sidebar exact to="/:folderId" />
            
            <main>
                <Route exact path="/:folderId" component={EmailList}/>
                
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
            </div>
            </Router>
        </div>
    );
}
