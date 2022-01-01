printreferences = []

function genPrintTable(){
    visTBody = document.getElementById('pTbody')
    for (i = 0; i < 6; i++) {
        tRow = document.createElement('tr');
        tRow.classList.add("printRowClass");
        r = []
        for (let j = 0; j < 3; j++) {
            cell = document.createElement('td');
            //cell.innerText = "asd";
            cell.classList.add("benchclass")
            tRow.appendChild(cell);
            div = document.createElement('div');
            div.classList.add("printBench")
            cell.appendChild(div);
            r.push(cell);
        }
        printreferences.push(r)
        visTBody.appendChild(tRow);
    }
    
}
function printToTable(){
    endData = JSON.parse(localStorage.getItem('enddata'))
    for (let i = 0; i < printreferences.length; i++) {
        for (let j = 0; j < printreferences[i].length; j++) {
            printreferences[i][j].firstChild.innerText = endData[i][j][0] + "\n" + endData[i][j][1]
        }
    }
}

genPrintTable();
printToTable()