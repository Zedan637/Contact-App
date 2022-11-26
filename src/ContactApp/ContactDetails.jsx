import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {

        return (
            <div className="row">
                {/* <pre>{JSON.stringify(this.props.userSelectedContact)}</pre>*/}
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h6>Contact Details</h6>
                            <img src={this.props.userSelectedContact.picture.large} alt="#" />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{this.props.userSelectedContact.name.first}</li>
                                <li className="list-group-item">{this.props.userSelectedContact.email}</li>
                                <li className="list-group-item">{this.props.userSelectedContact.gender}</li>
                                <li className="list-group-item">{this.props.userSelectedContact.dob.age}</li>
                                <li className="list-group-item">{this.props.userSelectedContact.location.city}</li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default ContactDetails