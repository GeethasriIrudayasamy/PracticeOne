import "./UserOutput.css";
const UserOutput = (props) => {
    return (
        <div className="data-container">
            <div>
                {props.name} - {props.age}
            </div>
        </div>
    );
};

export default UserOutput;
