import React from "react";
import { Segment, Button } from "semantic-ui-react";
import QuizDB from "../utils/QuizDB";

export default class DeckViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: QuizDB.getDeck(this.props.deckName),
      page: 1,
      isFront: true
    };
  }
  render() {
    return (
      <div className="DeckViewer">
        <div>
          <Button
            primary
            onClick={() => {
              this.setState(state => ({
                page: Math.max(state.page - 1, 1)
              }));
            }}>
            Prev
          </Button>
          <Button
            primary
            onClick={() => {
              this.setState(state => ({
                page: Math.min(state.page + 1, this.state.cards.length)
              }));
            }}>
            Next
          </Button>
          <Button
            secondary
            onClick={() => {
              this.setState(state => ({ isFront: !state.isFront }));
            }}>
            Flip
          </Button>
        </div>
        <Segment attached="top">
          {this.state.page} of {this.state.cards.length}
        </Segment>
        <Segment attached stacked inverted={!this.state.isFront}>
          <div className="cardContent">
            {this.state.isFront ? (
              <h1>{this.state.cards[this.state.page - 1].front}</h1>
            ) : (
              <h3>{this.state.cards[this.state.page - 1].back}</h3>
            )}
          </div>
        </Segment>
        <div style={{ marginTop: "30px" }}>
          <Button primary onClick={this.props.onBacktoList}>
            Back to List
          </Button>
        </div>
      </div>
    );
  }
}
