import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notification'
import Projectlist from '../projects/Projectlist'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
      console.log('this.props', this.props.notifications)

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projectlist projects={this.props.projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={this.props.notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    connect((state) =>{
      return ({
        projects: state.firestore.ordered.projects,
        notifications: state.firestore.ordered.notifications
      })
    }),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)
