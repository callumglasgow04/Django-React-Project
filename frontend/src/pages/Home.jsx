import React from 'react'
import { useNavigate } from "react-router-dom";
import Greetings from '../components/Greetings/Greetings';

function Home() {
    const navigate = useNavigate()

    return (
        <Greetings />
    )
}
export default Home