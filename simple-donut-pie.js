function donut(data, size, width) {
    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.setAttribute("width", size);
    chart.setAttribute("height", size);
    if(!width){width = size / 4;}
    var sum = 0;
    for(var i=0; i<data.length;i++){
        if(!isNaN(data[i].val)){
            sum += data[i].val;
        }
    }
    var unit = (Math.PI * 2) / sum;
    var angle = 0 ;
    for(var i=0; i<data.length;i++){
        if(!isNaN(data[i].val)){
            var angle1 = angle * unit;
            var angle2 = (angle + data[i].val) * unit;
            chart.appendChild(arc(angle1, angle2, size, width, data[i].color, data[i].class));
            angle += data[i].val;
        }
    }
    return chart;
}
function pie(data, size){
    return donut(data, size, size/2);
}

function arc(angle1, angle2, size, width, color, classe) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var x1 = (size / 2) + (size / 2 - width / 2) * Math.sin(angle1);
    var y1 = (size / 2) - (size / 2 - width / 2) * Math.cos(angle1);
    var x2 = (size / 2) + (size / 2 - width / 2) * Math.sin(angle2);
    var y2 = (size / 2) - (size / 2 - width / 2) * Math.cos(angle2);
    var big = 0;
    if (angle2 - angle1 > Math.PI) {
        big = 1;
    }
    var d =
        "M " + x1 + "," + y1 +
        " A " + (size / 2 - width / 2) + "," + (size / 2 - width / 2) +
        " 0 " + big + " 1 " + x2 + "," + y2;
    path.setAttribute("d", d);
    path.setAttribute("stroke-width", width);
    path.setAttribute("fill", "none");
    if(color){path.setAttribute("stroke", color);}
    if(classe){path.setAttribute("class", classe);}
    return path;
}
