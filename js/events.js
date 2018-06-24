window.onload = function(){
    
    var table = document.getElementById("calendario");
    var lastRowIndex = table.rows.length-1;
    var lastCellIndex = table.rows[lastRowIndex].cells.length-1;
    
    for(var i=1;i<table.rows.length;i++){
        table.rows[i].cells[lastCellIndex-1].style.backgroundColor = "#A4C4FF";
        table.rows[i].cells[lastCellIndex].style.backgroundColor = "#A4C4FF";
        table.rows[i].cells[lastCellIndex-2].style.backgroundColor = "#86FFAA";
    }
    
    table.rows[2].cells[3].style.backgroundColor = "#FF8888"    
}