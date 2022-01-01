var textfield = document.getElementById("textarea");
var genButton = document.getElementById("generatebutton");
var visualarea = document.getElementById("finishedstuff");
var tfield = document.getElementById("tfield");
var printbutton = document.getElementById("printbutton");
var viewcode = document.getElementById("viewcode");
var visTable;
var toparea = document.getElementById('toparea')

references = []

genTable();

function gen() {
    clonedData.f = shufflyFuncty(clonedData.f);
    clonedData.l = shufflyFuncty(clonedData.l);
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
    localStorage.setItem('enddata', JSON.stringify(endData))
}
resetData();
genButton.addEventListener('click', function(){genButtonF()});
printbutton.addEventListener('click', function(){printbuttonF()});
viewcode.addEventListener('click',
async function(){
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    window.open("https://github.com/bszmihaly/ulesrend")
});

function printbuttonF(){
    //window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    window.open("../pages/print.html");
    genTable();
    //genPrintTable();

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

function shufflyFuncty(array){
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
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