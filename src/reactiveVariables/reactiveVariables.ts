import { makeVar } from "@apollo/client";

export const likedMoviesVar = makeVar<string[]>([]);
