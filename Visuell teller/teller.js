var showDiv = document.getElementById('show')
var numToShow = 0;
var multiply = showDiv*showDiv

function setNum0(){
    numtoShow=0;
    showDiv.innerHTML = numtoShow
}

function setNum100(){
    numtoShow=100;
    showDiv.innerHTML = numtoShow
}

function opp() {
    numtoShow++;
    showDiv.innerHTML = numtoShow
}

function ned() {
    numtoShow--;
    showDiv.innerHTML = numtoShow
}
