import "./Card.css";

const Card = (props) => {
    return (
        <div type={props.type} className="card">
            <div className={props.className}>{props.children}</div>
        </div>
    );
};
export default Card;
