import UserOutput from "../UserOutput/UserOutput";
const UserList = (props) => {
    return (
        <div>
            {props.userData.map((user) => (
                <UserOutput
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    id={user.id}
                ></UserOutput>
            ))}
        </div>
    );
};

export default UserList;
