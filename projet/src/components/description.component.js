import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <p>De la création de maquette et la fabrication à la pose d'enseignes, nous pouvons vous proposer une large gamme de produits et de supports.
- Notre point fort est de tout réaliser dans notre atelier. Pour tout renseignement et étude précise, n'hésitez pas à nous contacter :
par téléphone au 02 98 42 20 41
ou par mail : iledelimpression@orange.fr
- Véritable carte d’identité de votre commerce, l’enseigne est primordiale pour être vu, connu et reconnu.
- De la conception de la maquette à la pose, nous réalisons tous types d’enseignes dans des délais rapides.</p>
        </header>
      </div>
    );
  }
}