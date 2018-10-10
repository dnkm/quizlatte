import React from "react";

import { Card, Button, Label } from "semantic-ui-react";
import QuizDB from "../utils/QuizDB";
import DeckViewer from "./DeckViewer";

function Deck({ color, deckName, onSelect }) {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{deckName}</Card.Header>
        <Card.Description>
          {QuizDB.getDeck(deckName)
            .slice(0, 3)
            .map((card, i) => <Label key={i}>{card.front}</Label>)}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color="green" onClick={onSelect}>
          START
        </Button>
      </Card.Content>
    </Card>
  );
}

export default class Decks extends React.Component {
  static COLORS = ["red", "purple", "blue", "orange", "green", "yellow"];
  constructor() {
    super();
    this.state = {
      decks: QuizDB.getDecks(),
      deckName: undefined
    };
    this.setDeckName = this.setDeckName.bind(this);
  }
  setDeckName(deckName) {
    this.setState({ deckName });
  }
  render() {
    if (this.state.deckName) {
      return (
        <DeckViewer
          deckName={this.state.deckName}
          onBacktoList={() => this.setDeckName()}
        />
      );
    }

    return (
      <Card.Group>
        {this.state.decks.map((deckName, i) => (
          <Deck
            key={i}
            color={Decks.COLORS[i]}
            deckName={deckName}
            onSelect={() => this.setDeckName(deckName)}
          />
        ))}
      </Card.Group>
    );
  }
}
