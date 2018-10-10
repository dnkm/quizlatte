const DECKS = {
  vocabulary1: [
    {
      front: "Viaduct",
      back: "A Bridge that carries a road or railroad over a valley",
      last: [true, false]
    },
    {
      front: "Impervious",
      back: "Unable to be affected",
      last: [false, false, false]
    },
    {
      front: "Deviate",
      back: "to depart, especially from a path or plan",
      last: [true]
    },
    {
      front: "Obviate",
      back: "To make unnecessary; to avoid",
      last: [true, false]
    },
    {
      front: "Defer",
      back: "To put aside until later",
      last: [true]
    }
  ],
  vocabulary2: [
    {
      front: "Deference",
      back: "act or practice of yielding to another's authority",
      last: [false, true]
    },
    {
      front: "Confer",
      back: "to discuss something with someone else; consult",
      last: [false, false, false]
    },
    {
      front: "Deviate",
      back: "to depart, especially from a path or plan",
      last: [true]
    },
    {
      front: "Obviate",
      back: "To make unnecessary; to avoid",
      last: [true, false]
    },
    {
      front: "Defer",
      back: "To put aside until later",
      last: [true]
    }
  ],
  sports: [
    {
      front: "2 sports teams in LA",
      back: "Lakers, Clippers",
      last: [true, false]
    },
    {
      front: "What team does Lebron James play for?",
      back: "LA Lakers",
      last: [false, false, false]
    },
    {
      front: "How many times have the Lakers won?",
      back: "13",
      last: [true]
    }
  ]
};

export default class QuizDB {
  static getDecks() {
    return Object.keys(DECKS);
  }
  static getDeck(deckname) {
    return DECKS[deckname];
  }
}
