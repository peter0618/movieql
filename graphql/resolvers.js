import {getMovieById, getMovies, getPeople, getPersonById} from "./db";

const resolvers = {
    Query: {
        people: () => getPeople(),
        // person: (_, args) => {
        //     console.log(args); // graphql 로 요청된 모든 변수가 args 로 넘어옵니다.
        // }
        person: (_, {id}) => getPersonById(id),
        movies: () => getMovies(),
        movie: (_, {id}) => getMovieById(id),
    }
};

export default resolvers;
