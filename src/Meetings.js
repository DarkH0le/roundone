import React, { Component } from 'react';
import MeetingsList from './MeetingsList';
import dev from './images/dev.png'
class Meetings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meetingName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({ [itemName]: itemValue });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addMeeting(this.state.meetingName);
        this.setState({ meetingName: '' });
    }

    render() {
        return (
            <div className="text-center text-info">                En desarollo, se espera poder encontrar la forma de ligar el sistema local de registro con el perfil en linea
            <img src={dev}/>
            </div>
        );
    }
}

export default Meetings;
