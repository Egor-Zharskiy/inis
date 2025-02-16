let numberOfFilms;
do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "").trim();
    console.log(numberOfFilms);
    console.log(isNaN(numberOfFilms));
} while (!numberOfFilms || isNaN(numberOfFilms) || Number(numberOfFilms) <= 0);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let lastMovie = prompt("Название фильма, который вы посмотрели одним из последних?", "").trim();
    let rating = prompt("Оцените его от 1 до 10", "").trim();

    if (lastMovie && rating >= 1 && rating <= 10 && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = rating;
    } else {
        alert("Некорректный ввод. Попробуйте снова.");
        i--;
    }
}

console.log(personalMovieDB);

function displayMovies() {
    const container = document.getElementById("movieTableContainer");
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const titleHeader = document.createElement("th");
    titleHeader.textContent = "Фильм";
    const ratingHeader = document.createElement("th");
    ratingHeader.textContent = "Оценка";

    headerRow.appendChild(titleHeader);
    headerRow.appendChild(ratingHeader);
    table.appendChild(headerRow);

    for (let movie in personalMovieDB.movies) {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = movie;
        const ratingCell = document.createElement("td");
        ratingCell.textContent = personalMovieDB.movies[movie];

        row.appendChild(titleCell);
        row.appendChild(ratingCell);
        table.appendChild(row);
    }

    container.appendChild(table);
}

displayMovies();
