import "./UserOutput.css";
import Wrapper from "../Wrapper/Wrapper";
const UserOutput = (props) => {
    return (
        <Wrapper>
            <div className="data-container">
                {props.name} - {props.age} - {props.college}
            </div>
        </Wrapper>
    );
};

export default UserOutput;
