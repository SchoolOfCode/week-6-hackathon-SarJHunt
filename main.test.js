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
  { year: 2024, winner: 'Spain'}
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
  { year: 2018, winner: 'France' },
  { year: 2022, winner: 'Argentina'}
];

describe('countryTotalWins', () => {
  it('should count the total wins for a country across World Cup and Euros', () => {
    const result = countryTotalWins(worldCups, euros, 'France');
    expect(result).toBe(4);  // France has 2 World Cup wins (1998, 2018) and 2 Euro wins (1984, 2000)
  });

  it('should return 4 wins for Italy (2 World Cups + 2 Euros)', () => {
    const result = countryTotalWins(worldCups, euros, 'Italy');
    expect(result).toBe(3);  // Italy has 2 World Cup wins (1982, 2006) and 1 Euros win (2020)
  });

  it('should handle a country with multiple wins in one tournament', () => {
    const result = countryTotalWins(worldCups, euros, 'Brazil');
    expect(result).toBe(3);  // Brazil has 3 World Cup wins (1970, 1994, 2002) and 0 Euro wins
  });

  it('should return 0 for a country with no wins in either tournament', () => {
    const result = countryTotalWins(worldCups, euros, 'England');
    expect(result).toBe(0);  // England has no wins in either World Cup or Euros in this data.
  });

  it('should return 0 for an invalid country name', () => {
    const result = countryTotalWins(worldCups, euros, 'Testland');
    expect(result).toBe(0);  // Testland doesn’t appear in either World Cup or Euros.
  });

  it('should return 0 if both tournament lists are empty', () => {
    const result = countryTotalWins([], [], 'France');
    expect(result).toBe(0);  // No wins available.
  });

  it('should handle case-insenstive country names', () => {
    const resultUpperCase = countryTotalWins(worldCups, euros, 'ARGENTINA');
    expect(resultUpperCase).toBe(3);  // Argentina has 3 World Cup wins and 0 Euro wins, checking upper case.
  
    const resultLowerCase = countryTotalWins(worldCups, euros, 'argentina');
    expect(resultLowerCase).toBe(3);  // Argentina has 3 World Cup wins and 0 Euro wins, checking lower case.
  
    const resultMixedCase = countryTotalWins(worldCups, euros, 'ArGeNTina');
    expect(resultMixedCase).toBe(3);  // Argentina has 3 World Cup wins and 0 Euro wins, checking mixed case.
  });
});
  