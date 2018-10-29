var express = require("express");

var app = express();

app.listen(3120, () => {
  console.log("Server running on port 3001");
});

app.get("/api/mlb/standings", (req, res, next) => {
  res.json([{
    name: 'AL East',
    teams: [
      {
        team: {
          id: 1,
          name: 'Boston Red Sox'
        },
        wins: 0,
        losses: 0,
        winningPercentage: 0,
        gamesBack: 0,
        lastTen: '',
        streak: '',
        runsScored: 0,
        runsAllowed: 0
      },
      {
        team: {
          id: 1,
          name: 'New York Yankees',
        },
        wins: 0,
        losses: 0,
        winningPercentage: 0,
        gamesBack: 0,
        lastTen: '',
        streak: '',
        runsScored: 0,
        runsAllowed: 0
      },
      {
        team: {
          id: 1,
          name: 'Tampa Bay Rays',
        },
        wins: 0,
        losses: 0,
        winningPercentage: 0,
        gamesBack: 0,
        lastTen: '',
        streak: '',
        runsScored: 0,
        runsAllowed: 0
      },
      {
        team: {
          id: 1,
          name: 'Toronto Blue Jays',
        },
        wins: 0,
        losses: 0,
        winningPercentage: 0,
        gamesBack: 0,
        lastTen: '',
        streak: '',
        runsScored: 0,
        runsAllowed: 0
      },
      {
        team: {
          id: 1,
          name: 'Baltimore Orioles',
        },
        wins: 0,
        losses: 0,
        winningPercentage: 0,
        gamesBack: 0,
        lastTen: '',
        streak: '',
        runsScored: 0,
        runsAllowed: 0
      },
    ]
  }, {
    name: 'AL Central',
    teams: [{
      team: {
        id: 1,
        name: 'Cleveland Indians',
      },
      wins: 0,
      losses: 0,
      winningPercentage: 0,
      gamesBack: 0,
      lastTen: '',
      streak: '',
      runsScored: 0,
      runsAllowed: 0
    },
    {
      team: {
        id: 1,
        name: 'Kansas City Royals',
      },
      wins: 0,
      losses: 0,
      winningPercentage: 0,
      gamesBack: 0,
      lastTen: '',
      streak: '',
      runsScored: 0,
      runsAllowed: 0
    },
    {
      team: {
        id: 1,
        name: 'Minnesota Twins',
      },
      wins: 0,
      losses: 0,
      winningPercentage: 0,
      gamesBack: 0,
      lastTen: '',
      streak: '',
      runsScored: 0,
      runsAllowed: 0
    }]
  }]);
});