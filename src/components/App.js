import "./App.css";
import api from "../services/api";
import { InputGroup, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardUsuario from "./UserCard";
import CardRepo from "./CardRepo";

function App() {
  const [repos, setRepos] = useState([]);
  const [userSearch, setUserSearch] = useState("");
  const [user, setUser] = useState("");

  function search() {
    api.get(`/users/${userSearch}/repos`).then((response) => {
      setRepos(response.data);
    });
  }

  useEffect(() => {
    api.get(`/users/${userSearch}`).then((response) => {
      setUser(response.data);
    });
  }, [repos]);

  return (
    <>
      <div className="container mt-2">
        <h1>Explore repositórios do Github</h1>
        <div className="form mb-3">
          <InputGroup>
            <Form.Control
              placeholder="Digite o nome do usuario"
              value={userSearch}
              onChange={(event) => {
                setUserSearch(event.target.value);
              }}
            />
          </InputGroup>
          <Button className="button" varianty="primary" onClick={search}>
            Pesquisar
          </Button>
        </div>
        {user && <CardUsuario user={user} />}

        <Row>
          {repos.map((repo) => {
            return (
              <Col md="auto">
                <CardRepo repo={repo} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default App;
