import {addMovie, deleteMovieById, getMovieById, getPeople, getPersonById} from "./db";
import {getMovies} from "./db.yts";

const resolvers = {
    Query: {
        // people: () => getPeople(),
        // person: (_, args) => {
        //     console.log(args); // graphql 로 요청된 모든 변수가 args 로 넘어옵니다.
        // }
        // person: (_, {id}) => getPersonById(id),
        movies: (_, {limit, minimum_rating}) => getMovies(limit, minimum_rating),
        // movie: (_, {id}) => getMovieById(id),
    },
    // Mutation: {
    //     deleteMovie: (_, { id }) => deleteMovieById(id),
    //     addMovie: (_, { name, score }) => addMovie( name, score )
    // }
};

export default resolvers;
