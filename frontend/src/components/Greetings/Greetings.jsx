import React from "react";
import { format } from "date-fns";
import "./Greetings.css";

const Greetings = ({ userName }) => {
    const date = Date.now();
    const formattedDate = format(date, "eeee do MMMM");

    return (
            <div className="greetings-container">
                <h1>Hello {userName}</h1>
                <p>Welcome back! Today is {formattedDate}</p>
            </div>
    )
}
export default Greetings;