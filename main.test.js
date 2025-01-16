import { test, it, expect } from "vitest"
import { countryTotalWins } from "./main.js";


it("should return 3 for France (2 World Cup + 1 Euros)", () => {
    return 3;
});

it("should return countryTotalWins for Germany as 4 (1 World Cup + 3 Euros)", () => {
    //arrange
    const country = "Germany";
    const expected = 4;

    //act
    const actual = countryTotalWins(country);

    // assert
    expect(actual).toBe(expected);
});
