
//#ONLY USE IF STUCK!#

//Here's just one way of writing that function to pass the tests:

export function countryTotalWins(worldCups, euros, country) {

        let totalWins = 0;
        
        // Normalize the country name to lowercase
        const normalisedCountry = country.toLowerCase();
      
        // Count World Cup wins (case-insensitive)
        totalWins += worldCups.filter(match => match.winner.toLowerCase() === normalisedCountry).length;
        
        // Count Euro wins (case-insensitive)
        totalWins += euros.filter(match => match.winner.toLowerCase() === normalisedCountry).length;
      
        return totalWins;
      };