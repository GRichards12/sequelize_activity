const Movie = require("./table");
// const User = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log('Entry added!');
    } catch (error) {
        console.log(error);
    }
}

exports.listMovies = async () => {
    try {
        const response = await Movie.findAll();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovies = async (newTitle,oldTitle) => {
    try{
        const response = await Movie.update(newTitle,oldTitle);
        console.log("Entry updated!");
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async(toDelete) => {
    try{
        await Movie.destroy(toDelete);
        console.log("Entry deleted!");
    } catch(error){
        console.log(error);
    }
}

// exports.defineUser = async(user,title) => {
//     try{
//         await User.join
//     }
// }