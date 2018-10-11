import React from "react";
import ReactDOM from "react-dom";
import { Menu, Icon, Container } from "semantic-ui-react";
import Decks from "./pages/Decks";
import CreateDeck from "./pages/CreateDeck";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: "decks",
      decksKey: 1
    };
    this.setMenu = this.setMenu.bind(this);
  }
  setMenu(menu) {
    this.setState({ menu, decksKey: new Date().getTime() });
  }
  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Item name="HOME" onClick={() => this.setMenu("decks")}>
            <Icon name="coffee" /> QUIZLATTE
          </Menu.Item>
          <Menu.Item onClick={() => this.setMenu("decks")}>Quiz List</Menu.Item>
          {/*
          <Menu.Item onClick={() => this.setMenu("create")}>
            CREATE
            <Icon name="plus square outline" />
          </Menu.Item>
          */}
        </Menu>

        <Container>
          {(() => {
            switch (this.state.menu) {
              case "decks":
                return <Decks key={this.state.decksKey} />;
              case "create":
                return <CreateDeck />;
            }
          })()}
        </Container>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
