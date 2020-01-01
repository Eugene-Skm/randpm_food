function choice_random(count,data){
    var random = Math.floor( Math.random() * count );
    write_result(data[random]);
}

function write_result(dataa){
    document.getElementById('shopname').innerHTML=dataa.name;
    document.getElementById('categori').innerHTML=dataa.category;
    document.getElementById('tel').innerHTML=dataa.tel;
    document.getElementById('mapframe').innerHTML='<iframe src="https://maps.google.co.jp/maps?output=embed&q='+dataa.name+'&q='+dataa.address+'&t=m" id="map" ></iframe>';
}