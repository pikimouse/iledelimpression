import React, { Component } from "react";

import UserService from "../services/user.service";
import Img1 from './image1.jpg';
import Img2 from './image2.jpg';
import Img3 from './image3.jpg';

export default class Home extends Component {
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
          <h3>Bienvenue chez île de l'impression</h3>
          <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser 
            un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
            sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, 
            et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
          <div class="conteneur">
            <img src={Img1} id="img" alt="image3" height ="400px" width="338px"/>
            <img src={Img2} id="img" alt="image1" height ="400px" width="338px"/>
            <img src={Img3} id="img" alt="image2" height ="400px" width="338px"/>
            <img src={Img1} id="img" alt="image3" height ="400px" width="338px"/>
            <img src={Img2} id="img" alt="image1" height ="400px" width="338px"/>
            <img src={Img3} id="img" alt="image2" height ="400px" width="338px"/>
            <img src={Img1} id="img" alt="image3" height ="400px" width="338px"/>
            <img src={Img2} id="img" alt="image1" height ="400px" width="338px"/>
            <img src={Img3} id="img" alt="image2" height ="400px" width="338px"/>
          </div>
        </header>
      </div>
    );
  }
}