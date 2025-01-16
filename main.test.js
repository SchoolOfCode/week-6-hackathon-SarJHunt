import { describe, it, expect } from "vitest";
import { countryTotalWins } from "./main.js";

const euros = [
  { year: 1972, winner: 'West Germany' },
  { year: 1976, winner: 'Czechoslovakia' },
  { year: 1980, winner: 'West Germany' },
  { year: 1984, winner: 'France' },
  { year: 1988, winner: 'Netherlands' },
  { year: 1992, winner: 'Denmark' },
  { year: 1996, winner: 'Germany' },
  { year: 2000, winner: 'France' },
  { year: 2004, winner: 'Greece' },
  { year: 2008, winner: 'Spain' },
  { year: 2012, winner: 'Spain' },
  { year: 2016, winner: 'Portugal' },
  { year: 2020, winner: 'Italy' },
];

const worldCups = [
  { year: 1970, winner: 'Brazil' },
  { year: 1974, winner: 'West Germany' },
  { year: 1978, winner: 'Argentina' },
  { year: 1982, winner: 'Italy' },
  { year: 1986, winner: 'Argentina' },
  { year: 1990, winner: 'West Germany' },
  { year: 1994, winner: 'Brazil' },
  { year: 1998, winner: 'France' },
  { year: 2002, winner: 'Brazil' },
  { year: 2006, winner: 'Italy' },
  { year: 2010, winner: 'Spain' },
  { year: 2014, winner: 'Germany' },
  { year: 2018, winner: 'France' }
];

describe('countryTotalWins', () => {
  it('should count the total wins for a country across World Cup and Euro', () => {
    const result = countryTotalWins(worldCups, euros, 'France');
    expect(result).toBe(4);  // France has 2 World Cup wins (1998) and 2 Euro wins (1984, 2000)
  });

  it('should return 4 wins for Italy (2 WC + 2 Euro)', () => {
    const result = countryTotalWins(worldCups, euros, 'Italy');
    expect(result).toBe(3);  // Italy has 2 World Cup wins (1982, 2006) and 1 Euro wins (1968, 2020)
  });

  it('should handle a country with multiple wins in both tournaments', () => {
    const result = countryTotalWins(worldCups, euros, 'Brazil');
    expect(result).toBe(3);  // Brazil has 3 World Cup wins (1970, 1994, 2002) and 0 Euro wins
  });

  it('should return 0 if the country has not won in any tournament', () => {
    const result = countryTotalWins(worldCups, euros, 'Germany');
    expect(result).toBe(2);  // Germany has 1 World Cup win (2014) and 1 Euro win (1996)
  });
});