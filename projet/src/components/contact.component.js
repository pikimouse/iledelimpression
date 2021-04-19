import React, { Component } from "react";

import UserService from "../services/user.service";
import Img4 from './image4.PNG';
import FontAwesome from 'react-fontawesome';

export default class Contact extends Component {
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
          <h3>Contact</h3>
          <p>Si vous souhaitez avoir des informations sur mes interventions dans le milieu scolaire, pour des cours de dessin, à propos de mes linogravures, 
          ainsi que pour tout autre demande n’hésitez pas à me contacter ! Je me tiens à votre disposition pour vous éclairer sur mes propositions, celles des « portraits de Méduse ».</p>
          <div class="contact-form">
            <img src={Img4} class ="image4" id="test" alt="image4" height ="400px" width="338px"/>
            <form class="form" id="test">
              <h2>Contactez-nous</h2>
              <p type="Votre nom (Obligatoire)"><input ></input></p>
              <p type="Votre email (Obligatoire)"><input ></input></p>
              <p type="Sujet"><input ></input></p>
              <p type="Votre message"><textarea /></p>
              <button>Envoyer un message</button>
              <div class="contact">
                <span class="fa fa-phone"></span>02 98 42 20 41
                <span class="fa fa-envelope-o"></span> iledelimpression@orange.fr
              </div>
            </form>
          </div>
        </header>
        <footer>
        <div><a href="https://www.facebook.com/iledelimpression"><i class="fa fa-facebook-official"/></a></div>
        <p>Tous droits réservés - 2021 - île de l'impression. Reproductions des images et textes interdites.</p>
        <p>Design by <strong><italic> <a href="https://www.facebook.com/salmane.chahidi/">SC</a></italic></strong></p>
        </footer>
      </div>
    );
  }
}