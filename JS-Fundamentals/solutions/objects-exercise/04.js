function movies(array) {
  let moviesList = [];

  for (let command of array) {
    if (command.includes("addMovie")) {
      let [_, ...movieName] = command.split(' ');
      let movieNameAsString = movieName.join(' ');
      let movieObject = {
        name: movieNameAsString,
      };

      moviesList.push(movieObject);
    } else if (command.includes("directedBy")) {
      let tokens = command.split(' ');
      let movieNameTokens = [];
      let directorNameTokens = [];

      let directedByIndex = tokens.findIndex(x => x === "directedBy");

      for (let i = 0; i < directedByIndex; i++) {
        movieNameTokens.push(tokens[i]);
      }

      for (let i = directedByIndex + 1; i < tokens.length; i++) {
        directorNameTokens.push(tokens[i]);
      }

      let name = movieNameTokens.join(' ');
      let director = directorNameTokens.join(' ');

      let movie = moviesList.find(x => x.name === name);
      if (movie) {
        movie.director = director;
      }
    } else {
      let tokens = command.split(' ');
      let date = tokens.pop();
      tokens.pop();

      let name = tokens.join(' ');

      let movie = moviesList.find(x => x.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  for (let movie of moviesList) {
    if (movie.director && movie.date && movie.name) {
      console.log(JSON.stringify(movie));
    }
  }
}