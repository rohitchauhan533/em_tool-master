import React, { Fragment, useState } from "react";
import "../../../css/style.css";
import Logo from "../../assests/images/outline_email_black_24dp.png";
import data from "./fakeData.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
import Fileupload from "./fileUploader/fileupload";

function Subscribers() {
    const [subscribers, setSubscribers] = useState(data);

    const [addSubs, SetAddSubs] = useState({
        name: "",
        email: "",
        subscribed: "",
    });

    const [editFormData, setEditFormData] = useState({
        name: "",
        email: "",
        subscribed: "",
    });

    const [editSubscriberId, setEditSubscriberId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fielName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addSubs };
        newFormData[fielName] = fieldValue;
        SetAddSubs(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedSubscriber = {
            id: editSubscriberId,
            name: editFormData.name,
            email: editFormData.email,
            subscribed: editFormData.subscribed,
        };
        const newSubscribed = [...subscribers];
        const index = subscribers.findIndex(
            (subscriber) => subscriber.id === editSubscriberId
        );
        newSubscribed[index] = editedSubscriber;
        setSubscribers(newSubscribed);
        setEditSubscriberId(null);
        console.log(newSubscribed);
        //api with newSubscribed data call here
        //api call for edited data here
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fielName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fielName] = fieldValue;
        setEditFormData(newFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newSubscriber = {
            id: nanoid(),
            name: addSubs.name,
            email: addSubs.email,
            subscribed: addSubs.subscribed,
        };
        const newSubscribers = [...subscribers, newSubscriber];
        setSubscribers(newSubscribers);
        //todo api call here
        // console.log(newSubscriber);
        postData(newSubscriber);
    };

    const handleEditClick = (event, subscriber) => {
        event.preventDefault();
        setEditSubscriberId(subscriber.id);

        const formValues = {
            name: subscriber.name,
            email: subscriber.email,
            subscribed: subscriber.subscribed,
        };
        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditSubscriberId(null);
    };

    const handleDeleteClick = (subscriberId) => {
        const newSubscribers = [...subscribers];
        const index = subscribers.findIndex(
            (subscriber) => subscriber.id === subscriberId
        );
        newSubscribers.splice(index, 1);
        setSubscribers(newSubscribers);
    };

    //post api for new subscriber
    const postData = (request) => {
        var data = JSON.stringify({
            request,
        });

        var config = {
            method: "post",
            url: "https://webhook.site/4aae5f02-1305-4def-8c1e-cd84f39ff319",
            headers: {
                "Content-Type": "application/json",
                Cookie: "laravel_session=Vom4OXD8wWVzqBc2YoviG23bbrAbN6V4yCr6WqZj",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Fragment>
            <header className="subs-header">
                <div className="logo-name">
                    <div className="subs-logo">
                        <img src={Logo} alt="Just mail logo" />
                    </div>
                    <div className="subs-name">Just Mail</div>
                </div>
            </header>
            <main className="main-wrapper">
                <section className="left-section">
                    <div className="file-uploader">
                        <h3 className="text-center h3 text-muted">
                            Upload xls and xlsx file here
                        </h3>
                        <Fileupload />
                    </div>
                </section>
                <section className="right-section">
                    <div className="app-container">
                        <h2>Default List</h2>
                        <form action="" onSubmit={handleEditFormSubmit}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Subscribed</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribers.map((subscriber, i) => (
                                        <Fragment>
                                            {editSubscriberId ===
                                            subscriber.id ? (
                                                <EditableRow
                                                    editFormData={editFormData}
                                                    handleEditFormChange={
                                                        handleEditFormChange
                                                    }
                                                    handleCancelClick={
                                                        handleCancelClick
                                                    }
                                                    key={i}
                                                />
                                            ) : (
                                                <ReadOnlyRow
                                                    subscriber={subscriber}
                                                    handleEditClick={
                                                        handleEditClick
                                                    }
                                                    handleDeleteClick={
                                                        handleDeleteClick
                                                    }
                                                    key={i}
                                                />
                                            )}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                        <hr />
                        <br />
                        <section className="new-subs text-center">
                            <h2>Add New Subscriber</h2>
                            <form action="POST" onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    placeholder="name"
                                    required="required"
                                    className="form-control mb-3"
                                    name="name"
                                    onChange={handleAddFormChange}
                                />

                                <input
                                    type="email"
                                    placeholder="Enter Email..."
                                    required="required"
                                    className="form-control mb-3 col-3 "
                                    name="email"
                                    onChange={handleAddFormChange}
                                />

                                <input
                                    type="boolean"
                                    placeholder="Subscribed"
                                    required="required"
                                    className="form-control mb-3"
                                    name="subscribed"
                                    onChange={handleAddFormChange}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg col-3"
                                >
                                    Add Subscriber
                                </button>
                            </form>
                        </section>
                    </div>
                </section>
            </main>
            <footer className="subs-footer">
                <div className="footer-content ">
                    Just Mail &copy; 2021. All Rights Reserved
                </div>
            </footer>
        </Fragment>
    );
}

export default Subscribers;
