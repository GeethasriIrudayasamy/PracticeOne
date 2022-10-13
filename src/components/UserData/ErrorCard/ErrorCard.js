import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Wrapper from "../Wrapper/Wrapper";
import "./ErrorCard.css";

const ErrorCard = (props) => {
    return (
        <Wrapper>
            <div className="card-container">
                <Card>
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
                </Card>
            </div>
        </Wrapper>
    );
};

export default ErrorCard;
