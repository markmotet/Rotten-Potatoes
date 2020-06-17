function generateMovie(movieInfoArray) {

    moviesCount = 281;
    var fileNum = Math.floor(Math.random() * moviesCount) + 1;
    console.log(fileNum);
    var fileName = './movies/' + fileNum + '.txt';

    fetch(fileName)
        .then(response => response.text(movieInfoArray))
        .then(text => setAll(text));
}

function setAll (movieInfo) {
    /*
    movieInfoArray takes the form:

    +-------+--------------+
    | Index |    Value     |
    +-------+--------------+
    |     0 | Cast 1       |
    |     1 | Cast 2       |
    |     2 | Cast 3       |
    |     3 | Cast 4       |
    |     4 | Cast 5       |
    |     5 | Cast 6       |
    |     6 | Description  |
    |     7 | Director 1   |
    |     8 | Director 2   |
    |     9 | Director 3   |
    |    10 | Genre        |
    |    11 | Rating       |
    |    12 | Release Date |
    |    13 | Runtime      |
    |    14 | Studio       |
    |    15 | Title        |
    |    16 | Writer 1     |
    |    17 | Writer 2     |
    |    18 | Writer 3     |
    |    19 | Writer 4     |
    |    20 | Year         |
    +-------+--------------+
    */

    movieInfoArray = movieInfo.split("|");

    setTitle(movieInfoArray);
    setDescription(movieInfoArray);
    setRating(movieInfoArray);
    setGenre(movieInfoArray);
    setDirectors(movieInfoArray);
    setWriters(movieInfoArray);
    setInTheatres(movieInfoArray);
    setRuntime(movieInfoArray);
    setStudio(movieInfoArray);
    setCast(movieInfoArray);
}

function setTitle(movieInfoArray) {
    document.getElementById('title').innerHTML = (movieInfoArray[15]);
}

function setDescription(movieInfoArray) {
    document.getElementById('description').innerHTML = (movieInfoArray[6]);
}

function setRating(movieInfoArray) {
    document.getElementById('movie-info-table').rows[0].cells[1].innerHTML = (movieInfoArray[11]);
}

function setGenre(movieInfoArray) {
    document.getElementById('movie-info-table').rows[1].cells[1].innerHTML = (movieInfoArray[10]);
}

function setDirectors(movieInfoArray) {
    var directors = [];
    for (var i = 7; i <= 9; i++) {
        if (movieInfoArray[i] != 'Director Not Available') {
            directors.push(movieInfoArray[i])
        }
    }

    directorsCommas  = ""
    if (directors.length >= 1) {
        directorsCommas += directors[0];
        for (var i = 1; i < directors.length; i++) {
            directorsCommas += ", " + directors[i];
        }
    }
    if (directors.length == 0) {
        directorsCommas = 'Unkown';
    }
    document.getElementById('movie-info-table').rows[2].cells[1].innerHTML = (directorsCommas);
}

function setWriters(movieInfoArray) {

    var writers = [];
    for (var i = 16; i <= 19; i++) {
        if (movieInfoArray[i] != 'Writer Not Available') {
            writers.push(movieInfoArray[i])
        }
    }

    writersCommas  = ""
    if (writers.length >= 1) {
        writersCommas += writers[0];
        for (var i = 1; i < writers.length; i++) {
            writersCommas += ", " + writers[i];
        }
    }
    if (writers.length == 0) {
        writersCommas = 'Unkown';
    }
    document.getElementById('movie-info-table').rows[3].cells[1].innerHTML = (writersCommas);
}

function setInTheatres(movieInfoArray) {
    document.getElementById('movie-info-table').rows[4].cells[1].innerHTML = (movieInfoArray[12]);
}

function setRuntime(movieInfoArray) {
    document.getElementById('movie-info-table').rows[5].cells[1].innerHTML = (movieInfoArray[13]);
}

function setStudio(movieInfoArray) {
    document.getElementById('movie-info-table').rows[6].cells[1].innerHTML = (movieInfoArray[14]);
}

function setCast(movieInfoArray) {
    castMembers = document.getElementsByClassName('cast-name');
    for(var i = 0; i < castMembers.length || i < 6; i++) {
        castMembers[i].innerHTML = (movieInfoArray[i]);
    }
}