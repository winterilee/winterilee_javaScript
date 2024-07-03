import React, {useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const UpdateOne = (props) => {
    const {id} = useParams();
    const [selectedBday, setSelectedBday] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/bdays/${id}`)
            .then((res) => {setSelectedBday(res.data)})
            .catch((err) => {console.log(err)})
    }, []);

    const targetHandler = e => {
        e.preventDefault();
        setSelectedBday({...selectedBday, [e.target.name]: e.target.value})
    };

    const targetCheckboxHandler = e => {
        e.preventDefault();
        setSelectedBday({...selectedBday, [e.target.name]: !e.target.value})
    };

    const updateBdayHandler = e => {
        e.preventDefault();
        const editBday = {
            firstName: selectedBday.firstName,
            lastName: selectedBday.lastName,
            bdayMonth: selectedBday.bdayMonth,
            bdayDay: selectedBday.bdayDay,
            isGifted: selectedBday.isGifted,
            giftIdeas: selectedBday.giftIdeas
        }
        axios.patch(`http://localhost:8000/api/bdays/${id}`, editBday)
            .then((res) => {console.log(res); navigate("/bdays")})
            .catch((err) => console.log(err))
    };

    return(
        <div>
            <form onSubmit={updateBdayHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={selectedBday.firstName} name="firstName" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={selectedBday.lastName} name="lastName" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Birth Month</label>
                    <input type="text" value={selectedBday.bdayMonth} name="bdayMonth" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Birth Day</label>
                    <input type="text" value={selectedBday.bdayDay} name="bdayDay" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Gifted?</label>
                    <input type="checkbox" checked={selectedBday.isGifted} name="isGifted" onChange={targetCheckboxHandler}/>
                </div>
                <div>
                    <label>Gift Ideas</label>
                    <input type="text" value={selectedBday.giftIdeas} name="giftIdeas" onChange={targetHandler}/>
                </div>
                <button>Confirm Edit</button>
            </form>
            <Link to={"/bdays"}><button>Back to Dashboard</button></Link>
        </div>
    );
}

export default UpdateOne;