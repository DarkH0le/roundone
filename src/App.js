// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
// Import React
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';
import CheckIn from './CheckIn';
import HomeScreen from "./Home/HomeScreen";
import HomeGallery from "./Home/HomeGallery";
import Form from "./Form";

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            displayName: null,
            userID: null
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(FBUser => {
            if (FBUser) {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });

                const meetingsRef = firebase
                    .database()
                    .ref('meetings/' + FBUser.uid);

                meetingsRef.on('value', snapshot => {
                    let meetings = snapshot.val();
                    let meetingsList = [];

                    for (let item in meetings) {
                        meetingsList.push({
                            meetingID: item,
                            meetingName: meetings[item].meetingName
                        });
                    }

                    this.setState({
                        meetings: meetingsList,
                        howManyMeetings: meetingsList.length
                    });
                });
            } else {
                this.setState({ user: null });
            }
        });
    }

    registerUser = userName => {
        firebase.auth().onAuthStateChanged(FBUser => {
            FBUser.updateProfile({
                displayName: userName
            }).then(() => {
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });
                navigate('/meetings');
            });
        });
    };

    logOutUser = e => {
        e.preventDefault();
        this.setState({
            displayName: null,
            userID: null,
            user: null
        });

        firebase
            .auth()
            .signOut()
            .then(() => {
                navigate('/login');
            });
    };

    addMeeting = meetingName => {
        const ref = firebase
            .database()
            .ref(`meetings/${this.state.user.uid}`);
        ref.push({ meetingName: meetingName });
    };

    render() {
        return (
            <div >
                <Navigation
                    user={this.state.user}
                    logOutUser={this.logOutUser} />
                {this.state.user && (
                    <Welcome
                        userName={this.state.displayName}
                        logOutUser={this.logOutUser}
                    />
                )}

                <Router className="m-4">
                    {/*<Home path="/" user={this.state.user} />*/}
                    <HomeScreen path="/"  />
                    <Login path="/login" />
                    <Meetings
                        path="/meetings"
                        meetings={this.state.meetings}
                        addMeeting={this.addMeeting}
                        userID={this.state.userID}
                    />
                    <CheckIn path="/checkin/:userID/:meetingID" />
                    <Register
                        path="/register"
                        registerUser={this.registerUser}
                    />
                    <HomeGallery path="/instalaciones"/>
                    <Form path="/contacto"/>
                </Router>
            </div>
        );
    }
}

export default App;
