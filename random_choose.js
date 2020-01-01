function choice_random(count,data){
    var random = Math.floor( Math.random() * count );
    console.log(data[random]);
    write_result(data[random]);
}

function write_result(dataa){
    document.getElementById('shopname').innerHTML=dataa.name;
    document.getElementById('categori').innerHTML=dataa.category;
    document.getElementById('tel').innerHTML=dataa.tel;
}