import React from "react";
import Button from "../UI/Button/Button";
import "./ErrorCard.css";

const ErrorCard = (props) => {
    return (
        <div className="card-container">
            <div className="card-body">
                <header>
                    <h2>Invalid input</h2>
                </header>
                <body>
                    <div>{props.message}</div>
                </body>
                <footer>
                    <Button onClick={props.onOkay} type="click">
                        Okay
                    </Button>
                </footer>
            </div>
        </div>
    );
};

export default ErrorCard;
