import { useQuery } from "@apollo/client";
import { useCallback } from "react";
import charactersQuery from "../../graphql/charactersQuery.gql";
import { CharactersQueryData } from "../../typings/grqphql";

export const useFetchCharaters = () => {

    const initialVariables = {
        page: 1
    }
    const {data, error, loading, fetchMore} = useQuery<CharactersQueryData>(charactersQuery, {
        variables: initialVariables
    });
  
    return {dataCharacters: data, error, loadingCharacters: loading, fetchMoreCharacters: fetchMore}
}
