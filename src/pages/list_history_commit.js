import React, {useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import getGitCommitHistory from '../services/index'

const ListHistoryCommit = () => {

    const [commits, setCommits] = useState([])

    useEffect(() => {
        getAllCommits();
    }, []); 

    const getAllCommits = async () => {
        const allCommits = await getGitCommitHistory()
        setCommits(allCommits);
    }

    return (
        <Card style={{textAlign: 'initial'}}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    )

}


export default ListHistoryCommit;