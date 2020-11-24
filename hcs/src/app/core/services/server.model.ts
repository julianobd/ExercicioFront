export interface ServerListing{

  id:string;
  name:string;
  token:string;
  shared:boolean;
  hasDisease:boolean;
  expTable:[];
  initialMoney:number;
  initialStatsPoints:number;
}
