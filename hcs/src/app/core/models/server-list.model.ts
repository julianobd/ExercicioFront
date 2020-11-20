export interface ServerList {

}

export interface ServerListRsponse {
   availableItems: [
     {
       id: string;
       name: string;
       imageId: string;
       health: number;
       vest: number;
       experience: number;
       hungry: number;
       money: number;
       statusPoint: number;
       isInitial: boolean;
       quantityInitial: number;
     }
   ]
}
