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

let movies = [
    {
        id: 1,
        name: "Avengers 1",
        score: 99
    },
    {
        id: 2,
        name: "Logan",
        score: 80
    },
    {
        id: 3,
        name: "Avengers 3",
        score: 95
    },
    {
        id: 4,
        name: "Hulk",
        score: 60
    },
    {
        id: 5,
        name: "Star Wars - The new one",
        score: 40
    }
];

export const getPeople = () => {
    return people;
};

export const getPersonById = id => {
    const data = people.filter(person => person.id === id);
    return data[0];
};

export const getMovies = () => {
    return movies;
};

export const getMovieById = id => {
    const data = movies.filter(movie => movie.id === id);
    return data[0];
};

export const deleteMovieById = id => {
    const deletedMovie = getMovieById(id);
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(cleanedMovies.length < movies.length){
        movies = cleanedMovies;
        return deletedMovie;
    } else {
        return null;
    }
};
