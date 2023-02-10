import "./UserCard.css";
import { Card } from "react-bootstrap";

function CardUsuario(props) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{props.user.login} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Id: {props.user.id}
        </Card.Subtitle>
        <img
          src={props.user.avatar_url}
          alt="User Image"
          className="user_img"
        ></img>
      </Card.Body>
    </Card>
  );
}

export default CardUsuario;
