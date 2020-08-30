import {getPeople, getPersonById} from "./db";

const resolvers = {
    Query: {
        people: () => getPeople(),
        // person: (_, args) => {
        //     console.log(args);
        // }
        person: (_, {id}) => getPersonById(id)
    }
};

export default resolvers;
