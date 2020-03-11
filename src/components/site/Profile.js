import React from 'react';
// import { Card, CardBody } from 'reactstrap';

const Profile = (props) => {
    // const [result, setResult] = useState()

    const addBook = () => {
        fetch(`http://localhost:4000/auth/create/log`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetch)
    }

    const updateBook = () => {

    }

    const deleteBook = () => {

    }


    return (
        <div className="header">
            <h2 className="profileHeading">The Book Review</h2>
            {/* <h3 className="profileSecondHead">Welcome back, {profile}</h3> */}
            <h3 className="profileSecondBelow">Read any good books lately?</h3>
            <div className="profileDiv">
                <button onClick={addBook}>ADD BOOK</button>
                <button onClick={updateBook}>UPDATE BOOK</button>
                <button onClick={deleteBook}>DELETE BOOK</button>
            </div>
        </div>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src="holder.js/100px180" />
        //     <Card.Body>
        //         <Card.Title>Card Title</Card.Title>
        //         <Card.Text>

        //         </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>
    );
}

export default Profile;