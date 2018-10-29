import { Team } from './team';

export class TeamStanding {
  public team: Team;
  public wins: Number;
  public losses: Number;
  public winningPercentage: Number;
  public gamesBack: Number;
  public lastTen: String;
  public streak: String;
  public runsScored: Number;
  public runsAllowed: Number;
  public difference: Number;
  public homeRecord: String;
  public awayRecord: String;
}