import React, { useEffect, useState } from 'react';
import { Success } from '../Notifications/Success';
import './../../CSS/Series_Game.css'
import { Fail } from '../Notifications/Fail';

export const Series_Game = () => {
    const [seq, setSeq] = useState(generateRandomSeq());
    const [userSeq, setUserSeq] = useState('');
    const [status, setStatus] = useState('');
    // const [gameEnded, setGameEnded] = useState(false);

    function generateRandomSeq() {
        let randomSeq = '';
        for (let i = 0; i < 5; i++) {
            randomSeq += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return randomSeq;
    }

    useEffect(() => {
        for (let index = 0; index < userSeq.length; index++) {
            if (userSeq[index] !== seq[index]) {
                setStatus('fail');
                // setGameEnded(true);
                return;
            }
            if (userSeq.length === seq.length) {
                // setGameEnded(true);
                setStatus('pass');
                setSeq(generateRandomSeq());
                setUserSeq('');
            }
        }

    }, [userSeq, seq]);

    function handleKeyDown(event) {
        const charCode = event.key.charCodeAt(0);
        if (event.key === 'Backspace') {
            setStatus('fail');
            // setGameEnded(true);
        } else {
            setUserSeq(userSeq + event.key);
        }
    }

    function handleModalClose() {
        setStatus('');
        setUserSeq('');
        setSeq(generateRandomSeq());
    }


    return (
        <>
            {status === 'pass' ?
                <Success onClose={handleModalClose} /> :
                status === 'fail' ?
                    <Fail onClose={handleModalClose} /> :
                    null
            }
            <div className='container-fluid main'>
                <div className='container-fluid main-container'>
                    <div className='mb-5'>
                        <h1>Series Completion Game</h1>
                        <p>Crack the code! Enter the below sequence:</p>
                    </div>
                    <div className='function-conatiner'>
                        <h3>{seq.split('').join(',')}</h3>
                        <input className='container-fluid'
                            value={userSeq}
                            placeholder='Type the series'
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
