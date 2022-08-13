const seats = document.querySelectorAll(".row  .seat:not(.occupied)");
const movieSelect = document.getElementById("movie");
const container = document.querySelector(".container");




ucitajInterfejs();


function ucitajInterfejs() {


    const selektovanaSedista = JSON.parse(localStorage.getItem("sedista"));//sedista ce nam biti naziv selektovanih sedista u ls

    if (selektovanaSedista !== null && selektovanaSedista.length > 0) {

        seats.forEach((elem, index) => {
            if (selektovanaSedista.indexOf(index) > -1) {
                elem.classList.add('selected');
            }

        })
    }

    const selektovaniFilm = JSON.parse(localStorage.getItem("selektFilm"));//naziv u ls za selekt film index

    if (selektovaniFilm !== null) {

        movieSelect.selectedIndex = selektovaniFilm;

    }
}


container.addEventListener("click", function (e) {

    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {

        e.target.classList.toggle("selected");
    }

    azurirajSelektovane();

})

function azurirajSelektovane() {

    const slektovanaSedista = document.querySelectorAll(".row .seat.selected");
    console.log([...slektovanaSedista]);
    const seatsIndex = [...slektovanaSedista].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    localStorage.setItem('sedista', JSON.stringify(seatsIndex));

    const selektovaBroj = slektovanaSedista.length;

    const cenaKarte = +movieSelect.value;

    localStorage.setItem("selektFilm", JSON.parse(movieSelect.selectedIndex))

    document.getElementById("count").innerText = selektovaBroj;
    document.getElementById("total").innerText = selektovaBroj * cenaKarte;






}


azurirajSelektovane()


// function prva(a,b,c){

//     console.log(a,b,c);

// }

// niz=[2,3,4];

// // prva(niz);

// prva(...niz);


// var a=[3,4,5];

// var b=[45,...a];

// function proba2(...[a,b,c]){

//     return a+b+c;
// }


// console.log(proba2(4,5,6));


// function prva(a,b,c){

//     console.log([...arguments]);
// }


// prva(4,5,6)