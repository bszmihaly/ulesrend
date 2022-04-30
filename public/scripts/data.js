var data = {
    "f": [
        "Bánhegyi Dániel",
        "Bogár-Szabó Mihály",
        "Bujdosó Koppány",
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
    ],
    "pairs": [
        ["a","b"],
        ["c","d"],
        ["e","f"],
        ["g","h"],
        ["i","j"],
        ["k","l"],
        ["m","n"],
        ["o","p"],
        ["q","r"],
        ["s","t"],
        ["u","v"],
        ["w","x"],
        ["y","z"],
        ["1","2"],
        ["3","4"],
        ["5","6"]
    ]
}

var idData = [
    [0,1],
    [1,0],[1,1],[1,2],
    [2,0],[2,1],[2,2],
    [3,0],[3,1],[3,2],
    [4,0],[4,1],[4,2],
    [5,0],[5,1],[5,2]
]
var endData = []
var unformattedData = []
var adresses = []

function resetData(){
    unformattedData = [
        //locID, arrayid & ID1, arrayid & ID2
    ]
    for (i = 0; i < 16; i++) {
        unformattedData.push([0,[0,0],[1,0]])
    }

    adresses = [
        Array.from(Array(16).keys()),
        Array.from(Array(data.f.length).keys()),
        Array.from(Array(data.l.length).keys()),
    ]

    endData = [
        [["",""], ["",""], ["",""]],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
}