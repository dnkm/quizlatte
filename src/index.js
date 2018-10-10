import React from "react";
import ReactDOM from "react-dom";
import { Menu, Icon, Container } from "semantic-ui-react";
import Decks from "./pages/Decks";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: "home"
    };
    this.setMenu = this.setMenu.bind(this);
  }
  setMenu(menu) {
    this.setState({ menu });
  }
  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Item name="HOME">
            <Icon name="coffee" /> QUIZLATTE
          </Menu.Item>
          <Menu.Item>Quiz List</Menu.Item>
          <Menu.Item>
            CREATE
            <Icon name="plus square outline" />
          </Menu.Item>
        </Menu>

        <Container>
          {(() => {
            switch (this.state.menu) {
              case "home":
                return <Decks />;
            }
          })()}
        </Container>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
