var express = require("express");

var app = express();

app.listen(3120, () => {
 console.log("Server running on port 3001");
});

app.get("/api/mlb/standings", (req, res, next) => {
  res.json({
      league: 'AL East',
      teams: [
        {
          name: 'Boston Red Sox',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'New York Yankees',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Tampa Bay Rays',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Toronto Blue Jays',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        },
        {
          name: 'Baltimore Orioles',
          wins: 0,
          losses: 0,
          winningPercentage: 0
        }
      ]
    }
  );
 });