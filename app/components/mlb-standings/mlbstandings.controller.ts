class MlbStandingsController {
  public standings;
  constructor($scope: ng.IScope) {
    this.standings = {
      league: 'AL East',
      teams: [
        {
          name: 'Boston Red Sox',
          wins: 100,
          losses: 45,
          winningPercentage: 63
        }
      ]
    };

  }
}
