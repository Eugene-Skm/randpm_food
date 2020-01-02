function choice_random(count,data){
    var random = Math.floor( Math.random() * count );
    write_result(data[random]);
    console.log(data[random])
}

function write_result(dataa,hitnums){
    document.getElementById('msg').innerHTML="ヒット件数"+hitnums+"件より";
    document.getElementById('shopname').innerHTML=dataa.name;
    document.getElementById('categori').innerHTML="ジャンル : "+dataa.category;
    document.getElementById('tel').innerHTML='TEL : '+dataa.tel;
    document.getElementById('mapframe').innerHTML='<iframe src="https://maps.google.co.jp/maps?output=embed&q='+dataa.name+'&q='+dataa.address+'&t=m&z=17" id="map" ></iframe>';
    document.getElementById('gnavi_scut').href=dataa.url
}