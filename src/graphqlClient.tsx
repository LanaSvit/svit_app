import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              characters: {
                keyArgs: false,
                merge(existing, incoming) {
                  const data = existing ? existing : { results: [] };
                  return {
                    ...existing,
                    results: [...data.results, ...incoming.results]
                  };
                }
                
              }
            }
          }
        }
      })
});
