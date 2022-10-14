import React, { useState, useRef } from "react";
import ErrorCard from "../ErrorCard/ErrorCard";
import "./Form.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Form = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();
    // const [enteredName, setEnteredName] = useState("");
    const [isNotValid, setIsNotValid] = useState();

    // const UserNameHandler = (event) => {
    //     setEnteredName(event.target.value);
    // };
    // const [enteredAge, setEnteredAge] = useState("");

    // const AgeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const SubmitHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const eneteredCollegeName = collegeInputRef.current.value;

        const UserData = {
            name: enteredUserName,
            age: enteredUserAge,
            college: eneteredCollegeName,
        };

        if (
            enteredUserName.trim().length === 0 ||
            enteredUserAge.trim().length === 0 ||
            eneteredCollegeName.trim().length === 0
        ) {
            setIsNotValid({
                message: "Please Enter all Details",
            });
            return;
        }
        if (+enteredUserAge < 0) {
            setIsNotValid({
                message: "Please enter valid Age (i.e., Age > 0)",
            });
            return;
        }

        props.saveUserData(UserData);
        // setEnteredName("");
        // setEnteredAge("");
        event.target.reset();
    };

    const errorHandler = () => {
        setIsNotValid(false);
    };

    return (
        <Wrapper>
            {isNotValid && (
                <ErrorCard
                    message={isNotValid.message}
                    onOkay={errorHandler}
                ></ErrorCard>
            )}
            <div className="container">
                <Card>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <label>User Name</label>
                            <input
                                className="form-input"
                                type="text"
                                // value={enteredName}
                                // onChange={UserNameHandler}
                                ref={nameInputRef}
                            />
                        </div>
                        <div>
                            <label>Age</label>
                            <input
                                className="form-input"
                                type="number"
                                // value={enteredAge}
                                // onChange={AgeHandler}
                                ref={ageInputRef}
                            />
                        </div>
                        <div>
                            <label>College</label>
                            <input
                                className="form-input"
                                type="text"
                                // value={enteredAge}
                                // onChange={AgeHandler}
                                ref={collegeInputRef}
                            />
                        </div>
                        <div>
                            <Button type="submit">Add User</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </Wrapper>
    );
};
export default Form;
