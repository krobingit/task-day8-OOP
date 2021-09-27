class Movie {

    constructor(title, studio, rating) {                               //task-1
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (rating == "" || rating == undefined)
            this.rating = "PG";
    }
    getPG(movies) {
        return (movies.filter(mov => mov.Rating == "PG"))
    }

}


var movieJson = [
    {
        Movie: "Inception",
        Rating: "PG-13",
    },
    {
        Movie: "Home Alone",
        Rating: "PG",
    },
    {
        Movie: "The Dark Knight",
        Rating: "PG",

    },
    {
        Movie: "Casino Royale",
        Rating: "PG-13"

    },
    {
        Movie: "Alice in Wonderland",
        Rating: "PG"

    }


]
const movie1 = new Movie();
const result = movie1.getPG(movieJson);
console.log(result.map(obj => obj.Movie))                             //array of PG movies

const movie2 = new Movie("Casino Royale", "Eon Productions", "PG-13") //task-creation of instance
console.log(movie2);                                                 //printing the instance