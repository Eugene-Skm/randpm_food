var FinalRestList = [];
var areacode_s = [];
var areaname_s = [];
var areacode_m = [];
var areaname_m = [];
var areacode_l = [];
var areaname_l = [];
var pref_code = [];
var pref_name = [];

function jsonget(type, input) {

    var KeyID = "?keyid=622c2ae2a8f79127187182819fa4cc70"
    var areaURl = 'https://api.gnavi.co.jp/master/GAreaSmallSearchAPI/v3/'; //エリアマスタ
    var RestFindURL = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'
    var shoplist = [];

    var HitPerPage = 5;
    var whichrequest = 0;
    var FinalURL = ''
    switch (type) {
        case 1: //GPS取得の成功時
            var backURl = "";
            for (t = 0; t < input.length; t++) {
                backURl += input[t]
            }
            FinalURL = RestFindURL + KeyID + backURl;
            console.log(FinalURL)
            whichrequest = 1;
            break;
        case 2:
            FinalURL = areaURl + KeyID;
            whichrequest = 2;
            console.log("g");
            break;

    }

    if (whichrequest == 1) {
        var request = new XMLHttpRequest();
        request.open('GET', FinalURL + '&hit_per_page=' + HitPerPage, true); // URLを開く　　//リクエスト1回目
        var data;
        // レスポンスが返ってきた時の処理を記述 
        var hitnum;
        request.onload = function () {
            data = this.response;
            hitnum = JSON.parse(data).total_hit_count;
            if (hitnum == 0) {
                alert("このエリア・条件で店舗が見つかりませんでした。")
                document.getElementById('msg').innerHTML = "ヒット件数0件"
            } else {
                var randomi = Math.floor(Math.random() * hitnum) + 1;


                /*---------------------------------------------*/
                var datan;
                var requests = new XMLHttpRequest();
                requests.open('GET', FinalURL + '&hit_per_page=' + 1 + '&offset=' + randomi, true); //リクエスト2回目
                requests.send();
                requests.onload = function () {
                    datan = this.response;
                    control_json(datan, whichrequest);

                    write_result(FinalRestList, hitnum);
                    FinalRestList = [];
                    FinalURL = "";
                }
            }
            /*if (hitnum > 1) {
                HitPerPage = 100;
                data = ""
                for (i = 1; i < hitnum; i += 100) {
                    console.log("a")
                    var requests = new XMLHttpRequest();
                    requests.open('GET', FinalURL + '&hit_per_page=' + HitPerPage + '&offset=' + i, true);
                    requests.send();
                    requests.onload = function () {
                        data = this.response;
                        control_json(data);
                        console.log(FinalRestList.length)
                        if (FinalRestList.length == hitnum) {
                            choice_random(hitnum, FinalRestList)
                            
                            console.log(FinalRestList)
                            FinalRestList = [];
                        }
                    }
                }
            }if(hitnum==1){
                control_json(data)
                console.log(FinalRestList)
                choice_random(1, FinalRestList)
                FinalRestList = [];
            }*/
        }
        // リクエストをURLに送信
        request.send();
    } else if (whichrequest == 2) {
        var requestss = new XMLHttpRequest();
        requestss.open('GET', FinalURL, true); //リクエスト2回目
        requestss.send();
        requestss.onload = function () {
            datan = this.response;
            console.log(datan)
            control_json(datan, whichrequest);

            FinalRestList = [];
            FinalURL = "";
        }
    }
}

function control_json(datas, ca) {
    var obj_data = JSON.parse(datas)
    switch (ca) {
        case 1:
            var restlist = obj_data.rest;
            FinalRestList = restlist[0];
            break;
        case 2:

            var alllist = obj_data.garea_small;
            var check = 0,
                j=0;
                
            for (h = 0; h < alllist.length; h++) {
                if (h != 0) {
                    areacode_s.push(alllist[h - 1].areacode_s);
                    areaname_s.push(alllist[h - 1].areaname_s);

                    for (j = 0; j < areacode_m.length; j++) {
                        if (alllist[h].garea_middle.areacode_m == areacode_m[j]) {
                            check = 1;
                        }

                    }
                    if (check == 0 && j == areacode_m.length) {
                        areacode_m.push(alllist[h].garea_middle.areacode_m);
                        areaname_m.push(alllist[h].garea_middle.areaname_m);
                    }
                    check = 0;
                    for (j = 0; j < areacode_l.length; j++) {
                        if (alllist[h].garea_large.areacode_l == areacode_l[j]) {
                            check = 1;
                        }

                    }
                    if (check == 0 && j == areacode_l.length) {
                        areacode_l.push(alllist[h].garea_large.areacode_l);
                        areaname_l.push(alllist[h].garea_large.areaname_l);
                    }
                    check = 0;
                    for (j = 0; j < pref_code.length; j++) {
                        if (alllist[h].pref.pref_code == pref_code[j]) {
                            check = 1;
                        }

                    }
                    if (check == 0 && j == pref_code.length) {
                        pref_code.push(alllist[h].pref.pref_code);
                        pref_name.push(alllist[h].pref.pref_name);
                    }
                    check = 0;
                    j=0;
                } else if (h == 0) {
                    areacode_s.push(alllist[h].areacode_s);
                    areaname_s.push(alllist[h].areaname_s);
                    areacode_m.push(alllist[h].garea_middle.areacode_m);
                    areaname_m.push(alllist[h].garea_middle.areaname_m);
                    areacode_l.push(alllist[h].garea_large.areacode_l);
                    areaname_l.push(alllist[h].garea_large.areaname_l);
                    pref_code.push(alllist[h].pref.pref_code);
                    pref_name.push(alllist[h].pref.pref_name);
                }
            }
            
            createSelectBox(pref_code,pref_name,areacode_l,areaname_l,areacode_m,areaname_m,areacode_s,areaname_s)
            break;
    }

}
