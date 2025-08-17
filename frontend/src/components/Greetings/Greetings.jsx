import React from "react";
import { format } from "date-fns";
import "./Greetings.css"; 

const Greetings = () => {
    const date = Date.now();
    const formattedDate = format(date, "eeee do MMMM"); 

    return(
        <div className="greetings-container">
            <h1>Hello UserName</h1>
            <p>Welcome back! Today's date is {formattedDate}</p>
        </div>
    )
}
export default Greetings;