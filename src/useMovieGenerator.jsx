//You can ignore the contents of this file
import { shuffle } from "./randomUtils";
import { useState } from "react";
/**
 * @typedef {{
 * id:number, title: string, star:string, genre: string, quote: string}} Movie
 */

/**
 * @type {Movie[]}
 */
const moviesData = [
    {
        id:1,
        title: "The Shawshank Redemption",
        star: "Tim Robbins",
        genre: "Drama",
        quote: "Get busy living or get busy dying.",
    },
    {
        id:2,
        title: "The Godfather",
        star: "Marlon Brando",
        genre: "Crime",
        quote: "I'm gonna make him an offer he can't refuse.",
    },
    {
        id:3,
        title: "The Dark Knight",
        star: "Christian Bale",
        genre: "Action",
        quote: "Why so serious?",
    },
    {
        id:4,
        title: "The Lord of the Rings: The Return of the King",
        star: "Elijah Wood",
        genre: "Fantasy",
        quote: "My precious.",
    },
    {
        id:5,
        title: "Pulp Fiction",
        star: "John Travolta",
        genre: "Crime",
        quote: "Do you know what they call a Quarter Pounder with Cheese in France?",
    },
    {
        id:6,
        title: "Inception",
        star: "Leonardo DiCaprio",
        genre: "Sci-Fi",
        quote: "Your mind is the scene of the crime.",
    },
    {
        id:7,
        title: "The Matrix",
        star: "Keanu Reeves",
        genre: "Sci-Fi",
        quote: "There is no spoon.",
    },
    {
        id:8,
        title: "Fight Club",
        star: "Brad Pitt",
        genre: "Drama",
        quote: "The first rule of Fight Club is: You do not talk about Fight Club.",
    },
    {
        id:9,
        title: "Forrest Gump",
        star: "Tom Hanks",
        genre: "Drama",
        quote: "Life is like a box of chocolates; you never know what you're gonna get.",
    },
    {
        id:10,
        title: "The Avengers",
        star: "Robert Downey Jr.",
        genre: "Action",
        quote: "I am Iron Man.",
    },
    {
        id:11,
        title: "The Lion King",
        star: "Matthew Broderick",
        genre: "Animation",
        quote: "Hakuna Matata!",
    },
    {
        id:12,
        title: "The Social Network",
        star: "Jesse Eisenberg",
        genre: "Drama",
        quote: "You don't get to 500 million friends without making a few enemies.",
    },
    {
        id:13,
        title: "Interstellar",
        star: "Matthew McConaughey",
        genre: "Sci-Fi",
        quote: "We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.",
    },
];

/**
 * 
 * @returns {[Movie[], () => void]} Returns an array of 4 movie objects and a function to generate a new array of 4 movie objects
 
 */
export function useMovieGenerator() {
    const [chosen, setChosen] = useState(shuffle(moviesData).slice(0, 4));

    return [chosen, () => setChosen(shuffle(moviesData).slice(0, 4))];
}
