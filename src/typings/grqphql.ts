
export interface EpisodesQueryData {
    episodes: {
      info: {
        count: number;
        pages: number;
      }
      results: [{
        id: number; 
        name: string;     
        air_date: string;        
        episode: string;
        characters: {
          id: number;
          name: string;
        }
        created: string;
      }]
    }
  }
  
export interface CharactersQueryData {
    characters: {
      info: {
        count: number;
        pages: number;
        next: number;
      }
      results: [{
        id: number;  
        name: string;     
        status: string;         
        species: string; 
        type: string; 
        gender: string; 
        image: string; 
      }]  
    }
}