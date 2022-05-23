import { gql } from "@apollo/client";

const episodesQuery = gql`
  query {
    episodes {
    info{
      count
      pages
    }  
    results {
      id  
      name     
      air_date        
      episode
      characters {
        id
        name
      }
      created
    }
    }
  }
`

export default episodesQuery;
