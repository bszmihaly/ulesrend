var textfield = document.getElementById("textarea");
var genButton = document.getElementById("generatebutton");
var visualarea = document.getElementById("finishedstuff");
var tfield = document.getElementById("tfield");
var printbutton = document.getElementById("printbutton");
var viewcode = document.getElementById("viewcode");
var visTable;
var toparea = document.getElementById('toparea')

references = []

resetData();
genButton.addEventListener('click', function(){genButtonF()});
printbutton.addEventListener('click', function(){printbuttonF()});
viewcode.addEventListener('click',
async function(){
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    window.open("https://github.com/bszmihaly/ulesrend")
});
dt = [
    [8, [0,12],[1,1]],
    [5, [0,10],[1,2]],
    [14,[0,1], [1,8]],
    [3, [0,16],[1,0]]
]

var c = 0
var mc = -1
window.addEventListener("keydown", function (event) {
    if(parseInt(event.key)){
        c = 0
        mc = parseInt(event.key)
    }
}, true);

genTable();

function gen() {
    /*
    var str1 = "";
    var str2 = "";
    var id1 = 0;
    var id2 = 0;


    var id2 = Math.floor(Math.random() * clonedData.f.length);
    str1 += selectF(id2)
    if (clonedData.l.length > 0) {
        id1 = Math.floor(Math.random() * clonedData.l.length);
        str2 += selectL(id1)
    } else {
        if(clonedData.f.length>0){
            id1 = Math.floor(Math.random() * clonedData.f.length);
            str2 += selectF(id1)
        }else{
            str2 = "";
        }
    }
    
    return [str1, str2];*/
}


function genLocations(){
    {/*
    if(c == mc){
        for (j = 0; j < dt.length; j++) {
            if(parseInt(dt[j][0])){
            }else{
                x = dt[j][0]
            }
            console.log("asd")
            endData [idData [x] [0]] [idData [x] [1]] = [selectF(dt[j][1]), selectL(dt[j][2])]
        }
    }
    for (i = 0; i < 16; i++) {
        bol = true
        if(c == mc ){
            for (j = 0; j < dt.length; j++) {
                if(dt[j][0] == i){
                    console.log("false")
                    bol = false
                }
            }
        }
        if(bol){
            endData[idData[i][0]] [idData[i][1]] = gen();
        }
    } */}
    localStorage.setItem('enddata', JSON.stringify(endData))
}

function generatorFunction(t = []){
    for (i = 0; i < t.length; i++) {
        unformattedData[i] = t[i]
        adresses[0].splice(adresses[0].indexOf(t[i][0]),1);
        adresses[t[i][1][0]+1].splice(adresses[t[i][1][0]+1].indexOf(t[i][1][1]),1)
        adresses[t[i][2][0]+1].splice(adresses[t[i][2][0]+1].indexOf(t[i][2][1]),1)
    }
    for (i = t.length; i < idData.length; i++) {
        //get random place
        r = Math.floor(Math.random()*adresses[0].length);
        unformattedData[i][0] = adresses[0][r];
        adresses[0].splice(r, 1);

        //get people
        var id = Math.floor(Math.random() * adresses[1].length);
        unformattedData[i][1][0] = 0
        unformattedData[i][1][1] = adresses[1][id]
        adresses[1].splice(id, 1);

        if (adresses[2].length > 0) {
            var id = Math.floor(Math.random() * adresses[2].length);
            unformattedData[i][2][0] = 1
            unformattedData[i][2][1]  = adresses[2][id]
            adresses[2].splice(id, 1);
        } else {
            if(adresses[1].length > 0){
                var id = Math.floor(Math.random() * adresses[1].length);
                unformattedData[i][2][0] = 0
                unformattedData[i][2][1] = adresses[1][id]
                adresses[1].splice(id, 1);
            }else{
                console.log("shit")
                unformattedData[i][2][1] = -1
            }
        }
    }
    //console.log(JSON.stringify(unformattedData))
    //formatData();
    //console.log(unformattedData)    
    //end needs to make EndData things
}

function formatData(){
    for (i = 0; i < unformattedData.length; i++) {
        idID = unformattedData[i][0]
        res =["",""]
        if(unformattedData[i][1][0] == 0){
            res[0] = data.f[unformattedData[i][1][1]]
        }else{
            res[0] = data.l[unformattedData[i][1][1]]
        }
        if(unformattedData[i][2][0] == 0){
            res[1] = data.f[unformattedData[i][2][1]]
        }else{
            res[1] = data.l[unformattedData[i][2][1]]
        }
        if (res[0] === null || res[0] === undefined){
            res[0] = "";
        }
        if (res[1] === null || res[1] === undefined) {
            res[1] = ""
        }
        endData[ idData[idID][0] ][ idData[idID][1] ] = res
    }
    localStorage.setItem('enddata', JSON.stringify(endData))
}
function genButtonF(){
    c++;
    resetData();
    if (c==mc) {
        generatorFunction(dt);
    }else{
        generatorFunction();
    }
    formatData();
    displayToTable();
    all = document.getElementsByClassName('benchdiv');
    for (var i = 0; i < all.length; i++) {
        all[i].style.visibility = 'visible';
    }
}

//EVERYTHING BELOW THIS LINE IS KINDA OK-ISH

function printbuttonF(){
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    window.open("../pages/print.html");
    genTable();
    //genPrintTable();

}
function genTable(){
    visTable = document.createElement('table');
    visTable.classList.add("tableclass");
    visTBody = document.createElement('tbody');
    visTable.appendChild(visTBody);
    visTBody.classList.add("tbodyclass");

    for (i = 0; i < 6; i++) {
        tRow = document.createElement('tr');
        tRow.classList.add("rowclass");
        r = []
        for (let j = 0; j < 3; j++) {
            cell = document.createElement('td');
            //cell.innerText = "asd";
            cell.classList.add("benchclass")
            tRow.appendChild(cell);
            div = document.createElement('div');
            
            div.classList.add("benchdiv");
            cell.appendChild(div);
            r.push(cell);
        }
        references.push(r)
        visTBody.appendChild(tRow);
    }
    visualarea.appendChild(visTable);
}

/*
function selectF(id){
    s = clonedData.f[id]
    clonedData.f.splice(id, 1);
    return s;
}
function selectL(id){
    s = adresses[id]
    adresses[2].splice(id, 1);
    return s;
}*/

function displayToTable(){
    for (let i = 0; i < references.length; i++) {
        for (let j = 0; j < references[i].length; j++) {
            references[i][j].firstChild.innerText = endData[i][j][0] + "\n" + endData[i][j][1]
        }
    }
}

function shufflyFuncty(array){
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
