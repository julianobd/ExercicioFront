export interface Avatar {
    name: string;
    health: number;
    hungry:	number;
    armor:	number;
    money: number;
    experience: number;
    title:	string;
}

export interface ResponseAvatar {
  name: string;
  health: number;
  hungry:	number;
  armor:	number;
  money: number;
  experience: number;
  title:	string;
}

//Update

export interface RequestAvatar {
  health: number;
  armor: number;
  hungry: number;
  title: string;
  jobId: string;
  leader: boolean;
  experience: number;
  money: number;
  statusPoint: number;
  strength: number;
  endurance: number;
  agility: number;
  accuracy: number;
}

export interface ResponseAvatarUpdate {
  health: number;
  armor: number;
  hungry: number;
  title: string;
  jobId: string;
  leader: boolean;
  experience: number;
  money: number;
  statusPoint: number;
  strength: number;
  endurance: number;
  agility: number;
  accuracy: number;
}
