import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import getGitCommitHistory from '../services/index'
import moment from 'moment';

const ListHistoryCommit = () => {

    const parseDate = (date) => {
        const newDate = new Date(date)
        return moment(newDate).format('DD/MM/YYYY,  hh:mm:ss a');
    }

    const [commits, setCommits] = useState([])

    useEffect(() => {
        getAllCommits();
    }, []);

    const getAllCommits = async () => {
        const allCommits = await getGitCommitHistory()
        if (allCommits) {
            setCommits(allCommits);
        }
    }

    return (
        <>
            <h4 style={{color:'#1f1f1f8f', marginTop:'2em'}}>Repository:</h4>
            <h3 style={{color:'#1f1f1fb0'}}>Git_commit_history_displayer</h3>
            <br></br>
            <div className='container_cards'>
                {commits.map(commit =>
                    <Card key={commit.sha} style={{ textAlign: 'initial', marginTop: '2em' }}>
                        <Card.Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>
                                Commiter: {commit.commit.author.name}
                            </span>
                            <Card.Img
                                style={{ width: '40px', marginLeft: '1em' }}
                                src={commit.author.avatar_url}
                                alt="Card image" />
                        </Card.Header>
                        <Card.Body>

                            <Card.Text>
                                {commit.commit.message}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {parseDate(commit.commit.author.date)}
                        </Card.Footer>
                    </Card>
                )}
            </div>
        </>
    )
}


export default ListHistoryCommit;