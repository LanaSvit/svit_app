import { gql } from "@apollo/client";

const charactersQuery = gql`
query Characters($page: Int) {
  characters(page: $page) {
    info {
      count
      pages
      next
    }
    results {
      id  
      name     
      status        
      species
      type
      gender
      image
    }
    
  }
}
`

export default charactersQuery;
