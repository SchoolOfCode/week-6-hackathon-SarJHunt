

// If the input year is neither an Olympic or Winter Olympic Year, the function should throw an error with the message:
// "Error: Not either Olympic year"
// If a year was cancelled (due to WWI or WWII), then it should throw the error. Similarly, if it was postponed (like Tokyo 2020),
// then it should throw the error for the year that was cancelled, and should return "Olympic year" for the year that it was moved to
// While you could set up a database for me if you really wanted to, these anomalies can be hard-coded in your function for now
// Have fun! HAPPY HACKATHON


//Write a function that takes a country for input and returns the total number of World Cup 
//and Euros' wins since 1970 - see the lists below. 
//You will need the list of winners since 1970 below.
//The tests will assume that the country inputted is one that is listed.
//The function must account for a win in only one event or both events. 

// Euros
// year: 1972, winner: 'West Germany'
// year: 1976, winner: 'Czechoslovakia'
// year: 1980, winner: 'West Germany'
// year: 1984, winner: 'France'
// year: 1988, winner: 'Netherlands'
// year: 1992, winner: 'Denmark'
// year: 1996, winner: 'Germany'
// year: 2000, winner: 'France'
// year: 2004, winner: 'Greece'
// year: 2008, winner: 'Spain'
// year: 2012, winner: 'Spain'
// year: 2016, winner: 'Portugal'
// year: 2020, winner: 'Italy'
// year: 2024, winner: 'Spain'

// World Cup
// year: 1970, winner: 'Brazil'
// year: 1974, winner: 'West Germany'
// year: 1978, winner: 'Argentina'
// year: 1982, winner: 'Italy'
// year: 1986, winner: 'Argentina'
// year: 1990, winner: 'West Germany'
// year: 1994, winner: 'Brazil'
// year: 1998, winner: 'France'
// year: 2002, winner: 'Brazil'
// year: 2006, winner: 'Italy'
// year: 2010, winner: 'Spain'
// year: 2014, winner: 'Germany'
// year: 2018, winner: 'France'
// year: 2022, winner: 'Argentina' 

export function countryTotalWins(worldCups, euros, country) {
    const eurosWins = [
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
    
        const worldCupWins = [
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
    let totalWins = 0;
  
    // Count World Cup wins
    totalWins += worldCups.filter(match => match.winner === country).length;
  
    // Count Euro wins
    totalWins += eurosWins.filter(match => match.winner === country).length;
  
    return totalWins;
};

