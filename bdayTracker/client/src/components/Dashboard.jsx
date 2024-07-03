import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Dashboard = (props) => {
    const [allBdays, setAllBdays] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/bdays")
            .than(res => setAllBdays(res.data))
            .catch(err => console.log(err))
    }, []);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bdayMonth, setBdayMonth] = useState("");
    const [bdayDay, setBdayDay] = useState("");
    const isGifted = false;
    const giftIdeas = "";

    const newBdayHandler = e => {
        e.preventDefault();
        const newBday = {
            firstName: firstName,
            lastName: lastName,
            bdayMonth: bdayMonth,
            bdayDay: bdayDay,
            isGifted: isGifted,
            giftIdeas: giftIdeas
        }
        axios.post("http://localhost:8000/api/bdays", newBday)
            .then(res => {setAllBdays([...allBdays, res.data])})
            .catch(err => console.log(err))
    };

    return(
        <div>
            <h2>Birthday Tracker</h2>
            <form onSubmit={newBdayHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Birth Month</label>
                    <input type="text" value={bdayMonth} onChange={e => setBdayMonth(e.target.value)}/>
                </div>
                <div>
                    <label>Birth Day</label>
                    <input type="text" value={bdayDay} onChange={e => setBdayDay(e.target.value)}/>
                </div>
                <buttom style={{margin:"10px"}}>+Add a new Birthday</buttom>
            </form>
            <h3>Birthday List</h3>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthday</th>
                    <th>Gifted?</th>
                    <th>Gift Ideas</th>
                    <th>Action</th>
                </tr>
                {
                    allBdays.map( bday => {
                        return(
                            <tr key={bday._id}>
                                <td>{bday.firstName}</td>
                                <td>{bday.lastName}</td>
                                <td>{bday.bdayMonth}/{bday.bdayDay}</td>
                                <td>{bday.isGifted ? "Yes" : "No"}</td>
                                <td>{bday.giftIdeas}</td>
                                <td><Link to={`/bdays/update/${bday._id}`}><button>Edit</button></Link></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Dashboard;