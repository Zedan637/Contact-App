import React, { Component } from 'react'

export class ContactList extends Component {
    selContactHandler = (contact) => {
        this.props.methodOne(contact);
        console.log(contact.name.first)
    }
    render() {
        //let { contacts } = this.props.contacts
        return <div className="container">

            <div className="row">
                <div className="col">
                    {/* <h1>ContactList</h1> */}
                    {/*  <pre>{JSON.stringify(this.props.contacts)}</pre> */}
                    <table className="table table-hover">
                        <thead className="bg-success text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.contacts.map((contact) => {
                                    return <tr onMouseOver={this.selContactHandler.bind(this, contact)} key={contact.login.uuid}>
                                        <td>{contact.login.uuid.substring(32, 36)}</td>
                                        <td>{contact.name.first}</td>
                                        <td>{contact.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    }
}

export default ContactList