import React from "react";

import { Card, Button, Label } from "semantic-ui-react";
import QuizDB from "../utils/QuizDB";

function Deck({ color, deckName }) {
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
        <Button basic color="green">
          START
        </Button>
      </Card.Content>
    </Card>
  );
}

export default class Decks extends React.Component {
  static COLORS = ["red", "purple", "orange", "blue", "green", "yellow"];
  constructor() {
    super();
    this.state = {
      decks: QuizDB.getDecks()
    };
  }
  render() {
    return (
      <Card.Group>
        {this.state.decks.map((deck, i) => (
          <Deck key={i} color={Decks.COLORS[i]} deckName={deck} />
        ))}
      </Card.Group>
    );
  }
}
