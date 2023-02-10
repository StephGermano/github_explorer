import "./CardRepo.css";
import { Card } from "react-bootstrap";

function CardRepo(props) {
  return (
    <Card className="mt-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.repo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.repo.owner.login}
        </Card.Subtitle>
        <Card.Text>{props.repo.description}</Card.Text>
        <Card.Link href={props.repo.html_url}>Link do Repositório</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardRepo;
