import React, { useState } from "react";
import Form from "./Components/UserData/Form/Form";

import UserList from "./Components/UserData/UserList/UserList";

function App() {
    const [userData, setUserData] = useState([]);
    const saveUserDataHandler = (eneteredUserData) => {
        setUserData((prevData) => {
            const updatedUserData = [...prevData];
            updatedUserData.unshift({
                name: eneteredUserData.name,
                age: +eneteredUserData.age,
                college: eneteredUserData.college,
                id: Math.random().toString(),
            });
            console.log(updatedUserData);
            return updatedUserData;
        });
    };

    return (
        <div>
            <Form saveUserData={saveUserDataHandler}></Form>
            <UserList userData={userData}></UserList>
        </div>
    );
}

export default App;
