import UserOutput from "../UserOutput/UserOutput";
import Wrapper from "../Wrapper/Wrapper";
const UserList = (props) => {
    return (
        <Wrapper>
            {props.userData.map((user) => (
                <UserOutput
                    key={user.id}
                    name={user.name}
                    age={user.age}
                    id={user.id}
                ></UserOutput>
            ))}
        </Wrapper>
    );
};

export default UserList;
