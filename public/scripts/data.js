var data = {
    "f": [
        "Bánhegyi Dániel",
        "Bogár-Szabó Mihály",
        "Ecsédi Dániel",
        "Fejes Gergő",
        "Gera Ferenc",
        "Hajnal Balázs",
        "Kasza-Kovács Máté",
        "Kégel Tamás",
        "Laczkó Zsombor",
        "Mikó Krisztofer",
        "Molitorisz Károly",
        "Nyikos Botond",
        "Pap Marcell",
        "Pásztor Bálint",
        "Szabó Dávid",
        "Szekeres Máté",
        "Vágó Ábel",
        "Virág Péter"
    ],
    "l": [
        "Bognár Adél",
        "Csizmár Dóra",
        "Dajka Dóra",
        "Farkas Orsolya",
        "Kapás Anna",
        "Mihalik Sára",
        "Nagy Dorka",
        "Nyíri Kata",
        "Szalai Anna",
        "Szűcs Olívia",
        "Urbán Luca",
        "Vidman Emma",
        "Vincze Natasa"
    ]
}

var idData = []
var endData = []

var clonedData = JSON.parse(JSON.stringify(data));
function resetData(){
    clonedData = JSON.parse(JSON.stringify(data));
    endData = [
        [["",""], ["",""], ["",""]],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
    idData = [
        [0,1],
        [1,0],[1,1],[1,2],
        [2,0],[2,1],[2,2],
        [3,0],[3,1],[3,2],
        [4,0],[4,1],[4,2],
        [5,0],[5,1],[5,2]
    ]
}