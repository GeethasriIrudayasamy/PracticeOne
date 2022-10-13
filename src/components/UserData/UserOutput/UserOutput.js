import "./UserOutput.css";
import Wrapper from "../Wrapper/Wrapper";
const UserOutput = (props) => {
    return (
        <Wrapper>
            <div className="data-container">
                <div>
                    {props.name} - {props.age}
                </div>
            </div>
        </Wrapper>
    );
};

export default UserOutput;
