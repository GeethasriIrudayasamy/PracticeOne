import React, { useState } from "react";
import Button from "../UI/Button/Button";
import ErrorCard from "../ErrorCard/ErrorCard";
import "./Form.css";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [isNotValid, setIsNotValid] = useState();

    const UserNameHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const [enteredAge, setEnteredAge] = useState("");

    const AgeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const SubmitHandler = (event) => {
        event.preventDefault();
        const UserData = {
            name: enteredName,
            age: enteredAge,
        };

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setIsNotValid({
                message: "Please Enter all Details",
            });
            return;
        }
        if (+enteredAge < 0) {
            setIsNotValid({
                message: "Please enter valid Age (i.e., Age > 0)",
            });
            return;
        }

        props.saveUserData(UserData);
        setEnteredName("");
        setEnteredAge("");
    };
    const errorHandler = () => {
        setIsNotValid(false);
    };

    return (
        <div>
            {isNotValid && (
                <ErrorCard
                    message={isNotValid.message}
                    onOkay={errorHandler}
                ></ErrorCard>
            )}
            <div className="container">
                <form onSubmit={SubmitHandler}>
                    <div>
                        <label>User Name</label>
                        <input
                            className="form-input"
                            type="text"
                            value={enteredName}
                            onChange={UserNameHandler}
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <input
                            className="form-input"
                            type="number"
                            value={enteredAge}
                            onChange={AgeHandler}
                        />
                    </div>
                    <div>
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Form;
