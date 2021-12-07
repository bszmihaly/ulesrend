var textfield = document.getElementById("textarea");
var genButton = document.getElementById("generatebutton");
var visualarea = document.getElementById("finishedstuff");
var tfield = document.getElementById("tfield");
var savebutton = document.getElementById("savebutton");
var viewcode = document.getElementById("viewcode");
var visTable;

textfield.innerText = "";
references = []

var idData = []
var endData = []

var clonedData = JSON.parse(JSON.stringify(data));
function resetData(){
    clonedData = JSON.parse(JSON.stringify(data));
    endData = [
        [["",""], ["",""], ["ajtó",""]],
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

genTable();

function gen() {
    var str1 = "";
    var str2 = "";
    var id1 = 0;
    var id2 = 0;

    var id2 = Math.floor(Math.random() * clonedData.f.length);
    str1 += clonedData.f[id2];
    clonedData.f.splice(id2, 1);
    if (clonedData.l.length > 0) {
        id1 = Math.floor(Math.random() * clonedData.l.length);
        str2 += clonedData.l[id1];
        clonedData.l.splice(id1, 1);
    } else {
        if(clonedData.f.length>0){
            id1 = Math.floor(Math.random() * clonedData.f.length);
            str2 += clonedData.f[id1];
            clonedData.f.splice(id1, 1);
        }else{
            str2 = "";
        }
    }
    return [str1, str2];
}
function genLocations(){
    for (i = 0; i < 16; i++) {
        x = Math.floor(Math.random()*idData.length);
        endData[idData[x][0]][idData[x][1]] = gen();
        idData.splice(x, 1);
    }
}
resetData();
genButton.addEventListener('click', function(){genButtonF()});
savebutton.addEventListener('click', function(){savebuttonF()});
viewcode.addEventListener('click',
async function(){
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    window.open("https://github.com/bszmihaly/ulesrend")
});

function savebuttonF(){
    //save
    //open new page
    
}
function genButtonF(){
    //hundredTests();
    resetData();
    genLocations();
    displayToTable();
    all = document.getElementsByClassName('benchdiv');
    for (var i = 0; i < all.length; i++) {
        all[i].style.visibility = 'visible';
    }
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

function displayToTable(){
    for (let i = 0; i < references.length; i++) {
        for (let j = 0; j < references[i].length; j++) {
            references[i][j].firstChild.innerText = endData[i][j][0] + "\n" + endData[i][j][1]
        }
    }
}

/*function writeToTfield(k){
    arr = data.f.concat(data.l);
    arr = arr.sort();
    if(tfield.innerText == ""){
        t = " ;"
        for (let i = 0; i < arr.length; i++) {
            t += arr[i] + ";" 
        }
        tfield.innerText += t + "\n";
        console.log(t)
    }
    text = ""
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < endData.length; j++) {
            for (let k = 0; k < endData[k].length; k++) {
                if(endData[j][k][0] == arr[i]){
                    text += endData[j][k][1] + ";";
                }else if(endData[j][k][1] == arr[i]){
                    text += endData[j][k][0] + ";"
                }
            }
        }
    }
    tfield.innerText += text + "\n"
    console.log(k + ";" +text);
}
function hundredTests(){
    for (let i = 0; i < 10000; i++) {
        resetData();
        genLocations();
        displayToTable();
        writeToTfield(i);
    }
}*/   