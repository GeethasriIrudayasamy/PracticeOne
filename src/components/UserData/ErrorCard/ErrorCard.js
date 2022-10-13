import React from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import "./ErrorCard.css";

const ErrorCard = (props) => {
    const ModalOverlay = (props) => {
        return (
            <div className="card-container" onClick={props.onOkay}>
                <Card>
                    <header>
                        <h2>Invalid input</h2>
                    </header>
                    <div className="card-body">{props.message}</div>
                    <footer>
                        <Button onClick={props.onOkay} type="click">
                            Okay
                        </Button>
                    </footer>
                </Card>
            </div>
        );
    };
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay onOkay={props.onOkay} message={props.message} />,
                document.getElementById("modal-overlay")
            )}
        </React.Fragment>
    );
};

export default ErrorCard;
