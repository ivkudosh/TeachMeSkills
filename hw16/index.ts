import { checker } from "./checker";

//Positive tests
checker(0, 0, "+", 0);
checker(100, 0, "-", 100);
checker(1, 0, "*", 0);
checker(100, 1, "/", 100);
checker(1, 100, "^", 1);
checker(99, 1, "+", 100);
checker(1, 1, "-", 0);

// Negative tests
checker(1, 100, "^", 10);
checker(-1, 0, "+", 100);
checker(0, 1, "-", 1);
checker(1, 1, "*", -100);
checker(-100, -100, "/", 0);
checker(1, 100, "-", 99);
checker(100, 0, "*", 100);
