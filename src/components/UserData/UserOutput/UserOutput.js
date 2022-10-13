import "./UserOutput.css";
import Wrapper from "../Wrapper/Wrapper";
const UserOutput = (props) => {
    return (
        <Wrapper className="data-container">
            <div>
                {props.name} - {props.age}
            </div>
        </Wrapper>
    );
};

export default UserOutput;
