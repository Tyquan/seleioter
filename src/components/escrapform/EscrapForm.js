import { useState } from "react";

import {postData} from '../../helpers/crud';

const EscrapForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [addressCity, setAddressCity] = useState("");
    const [addressState, setAddressState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [availableTime, setAvailableTime] = useState("");
    const [category, setCategory] = useState("");
    const [count, setCount] = useState("");
    const [message, setMessage] = useState("");
    const [availableDate, setAvailableDate] = useState("");
    const [error, setError] = useState("");
    

    function addEscrap (e) {
        e.preventDefault();
        // send to database
        postData("https://www.weemaple.com/api/v1/escraps", {
            name, email, address, addressCity, addressState, zipCode, contactNumber, availableDate, availableTime, category, count, message
        });

        // reset state
        setName("");
        setEmail("");
        setAddress("");
        setAddressCity("");
        setAddressState("");
        setZipCode("");
        setContactNumber("");
        setAvailableTime("");
        setCategory("");
        setCount("");
        setMessage("");
        setAvailableDate("");
        setError("The message has been sent successfully!. We will call you at our earliest convience.");
    }

    return (
        <div id='centerize2'>
            <form onSubmit={addEscrap} className="form">
                <h1 className="text-center">Have Some Old Electronics Laying Around?</h1>
                <h2 className="text-center">We'll Come Pick It Up!</h2>
                <hr />
                <p id="sentMessage">{error}</p>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email @" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    </div>
                    
                </div>
                <br />
                <div className="row g-3">
                    <div className="col-sm-7">
                        <input type="text" className="form-control" value={addressCity} onChange={(e) => setAddressCity(e.target.value)} placeholder="City" />
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control" value={addressState} onChange={(e) => setAddressState(e.target.value)} placeholder="State" />
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Zip Code" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <label>Best Way to Contact You:</label>
                        <input type="text" className="form-control" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
                    </div>
                    <div className="col-md-2">
                        <label>Best Available Date:</label>
                        <input type="date" className="form-control" value={availableDate} onChange={(e) => setAvailableDate(e.target.value)} placeholder="Available Date" />
                    </div>
                    <div className="col-md-4">
                        <label>Best Available Time:</label>
                        <input type="text" className="form-control" value={availableTime} onChange={(e) => setAvailableTime(e.target.value)} placeholder="Available Time" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <select class="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Choose A Category</option>
                            <option value="server">Server</option>
                            <option value="desktop">Desktop Computer</option>
                            <option value="laptop">Laptop Computer</option>
                            <option value="question">I Have A Question</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" value={count} onChange={(e) => setCount(e.target.value)} placeholder="How Many Do You Have" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Did we miss anything? Have a general question? Send a message here..."></textarea>
                    </div>
                </div>
                <br />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}


export default EscrapForm;