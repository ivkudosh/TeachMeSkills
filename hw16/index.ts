import { checker } from "./checker";

//Positive tests
checker(0, 0, "+", 0);
checker(100, 0, "-", 100);
checker(1, 0, "*", 0);
checker(100, 2, "/", 50);
checker(2, 3, "^", 8);
checker(99, 1, "+", 100);
checker(1, 0, "-", 1);

// Negative tests
checker(2, 3, "^", 10);
checker(-1, 3, "+", 2);
checker(0, 1, "-", -1);
checker(50, 3, "*", 150);
checker(-8, 4, "/", 2);
checker(1, 100, "-", -99);
checker(100, 0, "*", 0);
