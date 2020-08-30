const people = [
    {
        id: 1,
        name: "Grace",
        age: 26,
        gender: "female",
        major: "english"
    },
    {
        id: 2,
        name: "John",
        age: 28,
        gender: "male",
        major: "history"
    },
    {
        id: 3,
        name: "Susan",
        age: 27,
        gender: "female",
        major: "korean"
    },
    {
        id: 4,
        name: "Jenny",
        age: 20,
        gender: "female",
        major: "computer science"
    },
    {
        id: 5,
        name: "Paul",
        age: 21,
        gender: "male",
        major: "computer science"
    },
    {
        id: 6,
        name: "David",
        age: 22,
        gender: "male",
        major: "politics"
    },
    {
        id: 7,
        name: "Bella",
        age: 25,
        gender: "female",
        major: "Animal Sciences"
    },
    {
        id: 8,
        name: "Ketty",
        age: 27,
        gender: "female",
        major: "Elementary Education"
    },
    {
        id: 9,
        name: "Kevin",
        age: 25,
        gender: "male",
        major: "Philosophy"
    },
    {
        id: 10,
        name: "Peter",
        age: 28,
        gender: "male",
        major: "math"
    },
];

export const getPeople = () => {
    return people;
};

export const getPersonById = id => {
    const data = people.filter(person => person.id === id);
    return data[0];
};
