window.TIMINGS = {
 "intro": {
  "dur": 22.44,
  "marks": {
   "title": 1.2
  },
  "cues": [
   [
    0.275,
    "Chapter one."
   ],
   [
    1.325,
    "The Ladder."
   ],
   [
    1.925,
    "Computation is not one thing."
   ],
   [
    3.875,
    "It is a ladder, and every rung adds one resource."
   ],
   [
    7.213,
    "Memory."
   ],
   [
    7.975,
    "The more memory a machine has, the more languages it can recognize."
   ],
   [
    12.075,
    "And at the top, something strange happens: the ladder stops."
   ],
   [
    15.925,
    "The question is not what a computer is."
   ],
   [
    18.4,
    "The question is what this one can do, with the memory it has."
   ]
  ]
 },
 "b_language": {
  "dur": 42.048,
  "marks": {
   "strings": 1.538
  },
  "cues": [
   [
    0.25,
    "Here is a language."
   ],
   [
    1.938,
    "ab."
   ],
   [
    1.938,
    "aabb."
   ],
   [
    2.337,
    "aaabbb."
   ],
   [
    2.788,
    "Some number of a's, followed by the same number of b's."
   ],
   [
    5.6,
    "A finite machine can accept the first few."
   ],
   [
    7.875,
    "It cannot accept them all."
   ],
   [
    9.4,
    "It has no auxiliary memory to count with."
   ],
   [
    11.875,
    "Its only memory is its current state, and there are finitely many states."
   ],
   [
    15.675,
    "Read a symbol, change state."
   ],
   [
    17.325,
    "No counter."
   ],
   [
    18.075,
    "No scratch paper."
   ],
   [
    19.175,
    "That is the whole machine."
   ],
   [
    20.925,
    "'a star b star' is regular: any number of a's, then any number of b's."
   ],
   [
    25.1,
    "The star is a loop."
   ],
   [
    27.125,
    "A fixed loop can count to a fixed bound; it cannot remember an unbounded count."
   ],
   [
    32.35,
    "The language is the set of all such strings, infinitely many of them."
   ],
   [
    37.175,
    "The machine that recognizes it has no auxiliary memory at all."
   ]
  ]
 },
 "b_pumping": {
  "dur": 31.056,
  "marks": {
   "loop": 3.175,
   "pump": 5.4
  },
  "cues": [
   [
    0.25,
    "Feed it enough a's, and it must revisit a state."
   ],
   [
    3.275,
    "The path between the two visits is a loop."
   ],
   [
    5.675,
    "Pump that loop, and the machine accepts strings that should be rejected."
   ],
   [
    9.2,
    "That is the pumping lemma."
   ],
   [
    10.675,
    "It is not a trick about this machine."
   ],
   [
    12.6,
    "It is a proof about every machine with finitely many states."
   ],
   [
    16.038,
    "A regular language is what such a machine can recognize."
   ],
   [
    19.15,
    "It is the bottom of the ladder, and this language is above it."
   ],
   [
    22.462,
    "A machine with finitely many states can only remember which state it is in."
   ],
   [
    27.55,
    "It cannot remember an unbounded count."
   ]
  ]
 },
 "b_dial": {
  "dur": 26.712,
  "marks": {
   "dial": 1.688
  },
  "cues": [
   [
    0.275,
    "So here is the dial."
   ],
   [
    1.938,
    "No auxiliary memory is a finite automaton."
   ],
   [
    4.675,
    "One stack is a pushdown automaton."
   ],
   [
    6.888,
    "Two stacks is a Turing machine."
   ],
   [
    9.025,
    "Each stop is a different model, and each one recognizes more languages."
   ],
   [
    13.213,
    "Turn the dial, and the same input changes from impossible to easy."
   ],
   [
    17.4,
    "That is what a model of computation is."
   ],
   [
    19.85,
    "The dial is a picture; each step is a theorem."
   ],
   [
    23.025,
    "The bottom rung is not stupid; it is exact."
   ]
  ]
 },
 "b_stack": {
  "dur": 28.536,
  "marks": {
   "push": 1.425,
   "accept": 5.0
  },
  "cues": [
   [
    0.25,
    "Add one stack."
   ],
   [
    1.538,
    "In the a-phase, push a marker for every a."
   ],
   [
    3.413,
    "At the first b, switch."
   ],
   [
    5.112,
    "In the b-phase, pop one marker for every b, and reject any later a."
   ],
   [
    8.688,
    "If the input and the stack end empty, accept."
   ],
   [
    11.363,
    "Walk through aabb: push, push, pop, pop."
   ],
   [
    13.7,
    "Empty."
   ],
   [
    14.137,
    "Accept."
   ],
   [
    14.925,
    "Now the machine can count as high as the input is long."
   ],
   [
    17.9,
    "The language is context-free."
   ],
   [
    19.825,
    "The stack remembers every unmatched a, newest on top."
   ],
   [
    23.125,
    "With nondeterminism, one stack is exactly the memory a context-free grammar needs."
   ]
  ]
 },
 "q1": {
  "dur": 3.264,
  "marks": {},
  "cues": [
   [
    0.225,
    "Quick check."
   ],
   [
    0.975,
    "Which language needs a stack?"
   ]
  ]
 },
 "b_two": {
  "dur": 27.408,
  "marks": {
   "three": 3.237,
   "two": 8.637
  },
  "cues": [
   [
    0.25,
    "Add a second stack, and you can count three things."
   ],
   [
    3.425,
    "a to the n, b to the n, c to the n."
   ],
   [
    5.225,
    "One stack can match a with b, but then it has nothing left to match c."
   ],
   [
    8.85,
    "Two stacks can hold the first count and the second, and check the third as it arrives."
   ],
   [
    13.175,
    "Push the a's on one."
   ],
   [
    14.55,
    "For each b, pop an a from the first stack and push a marker on the second."
   ],
   [
    18.425,
    "Pop the second for the c's."
   ],
   [
    20.25,
    "The language is not context-free."
   ],
   [
    22.275,
    "But a two-stack machine decides it."
   ],
   [
    24.575,
    "The second stack is the extra counter."
   ]
  ]
 },
 "b_tape": {
  "dur": 26.112,
  "marks": {
   "split": 1.45,
   "move": 7.45
  },
  "cues": [
   [
    0.25,
    "Two stacks are a tape."
   ],
   [
    1.637,
    "Cut the tape at the head."
   ],
   [
    2.85,
    "The left half is a stack."
   ],
   [
    4.5,
    "The right half is a stack, with the head cell on top."
   ],
   [
    7.7,
    "Move the head: pop from one stack, push to the other."
   ],
   [
    10.375,
    "A move is one pop, one push, a write, and a state change."
   ],
   [
    13.9,
    "That is all a Turing machine does."
   ],
   [
    16.038,
    "So two stacks and a tape are the same machine, with different pictures."
   ],
   [
    19.925,
    "The tape is unbounded in both directions; two stacks are unbounded in one direction each."
   ]
  ]
 },
 "b_church": {
  "dur": 34.344,
  "marks": {
   "plateau": 1.8
  },
  "cues": [
   [
    0.25,
    "And the top is a plateau."
   ],
   [
    2.013,
    "A tape."
   ],
   [
    2.675,
    "The untyped lambda calculus."
   ],
   [
    4.662,
    "General recursive functions."
   ],
   [
    6.5,
    "A register machine."
   ],
   [
    7.8,
    "A Turing-complete cellular automaton, such as Rule 110."
   ],
   [
    12.0,
    "The same power."
   ],
   [
    13.2,
    "The Church-Turing thesis says every reasonable model lands here."
   ],
   [
    17.1,
    "The ladder has one top, not many."
   ],
   [
    19.325,
    "That is why we can talk about computability at all."
   ],
   [
    22.363,
    "No one has found a reasonable model that is more powerful."
   ],
   [
    26.525,
    "That is the Church-Turing thesis, and it is a thesis because it is about the models we accept as reasonable."
   ]
  ]
 },
 "b_cost": {
  "dur": 34.944,
  "marks": {
   "cost": 1.775
  },
  "cues": [
   [
    0.225,
    "But power is not cost."
   ],
   [
    1.962,
    "A Turing machine can do everything a finite automaton does, with more overhead."
   ],
   [
    6.125,
    "It is the wrong tool."
   ],
   [
    7.575,
    "A finite automaton runs in linear time with constant memory."
   ],
   [
    11.213,
    "A Turing machine can simulate it, but the simulation is the wrong tool."
   ],
   [
    15.475,
    "The dial tells you what a model can recognize, not what it can recognize quickly."
   ],
   [
    19.9,
    "On this dial, memory buys languages."
   ],
   [
    22.4,
    "It does not buy speed."
   ],
   [
    23.975,
    "That is the next axis, and the last third of the book."
   ],
   [
    27.6,
    "A finite automaton is not a worse Turing machine."
   ],
   [
    31.575,
    "It is the right machine for a regular language."
   ]
  ]
 },
 "b_bend": {
  "dur": 26.328,
  "marks": {
   "bend": 3.112
  },
  "cues": [
   [
    0.275,
    "Bend is a choice about where to stand on this ladder."
   ],
   [
    3.312,
    "Its safe fragment steps off the top on purpose."
   ],
   [
    5.975,
    "It gives up programs that do not terminate, not memory."
   ],
   [
    9.0,
    "It gives up the languages that need unbounded search, and buys proofs, and a schedule that runs on every core."
   ],
   [
    15.175,
    "The ladder is not a value judgement."
   ],
   [
    17.188,
    "Higher is not better."
   ],
   [
    18.55,
    "It is a budget."
   ],
   [
    19.725,
    "The rest of the book is why, and what it costs."
   ],
   [
    22.475,
    "That is the thesis of the book: the ceiling is not the goal."
   ]
  ]
 },
 "wrap": {
  "dur": 12.456,
  "marks": {
   "one": 1.663,
   "two": 3.163,
   "three": 5.325
  },
  "cues": [
   [
    0.275,
    "Three things to keep."
   ],
   [
    2.05,
    "Power is a resource."
   ],
   [
    3.438,
    "Add memory, gain languages."
   ],
   [
    5.463,
    "The top is a plateau, and the plateau is not the goal."
   ],
   [
    8.6,
    "That is the whole ladder."
   ],
   [
    10.075,
    "That is the book in one picture."
   ]
  ]
 },
 "finish": {
  "dur": 7.392,
  "marks": {},
  "cues": [
   [
    0.25,
    "That is the ladder."
   ],
   [
    1.45,
    "The rest of the book climbs it, and then steps off."
   ],
   [
    4.463,
    "Replay it, or choose another chapter."
   ]
  ]
 }
};
