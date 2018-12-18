import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 

export default function Email() {
    return (
        <div className="email">
          <Router>
            <div>
              <Route exact path
            <Sidebar />
            <main>
                <EmailList folderId="inbox" />
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
            
            </div>
            </Router>
        </div>
    );
}
