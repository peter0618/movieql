const peter = {
  name: "Peter",
  age: 28,
  gender: "male",
  major: "math"
};

const resolvers = {
    Query: {
        person:() => peter
    }
};

export default resolvers;
