function createSelectBox(pre_c,pre_n,arel_c,arel_n,arem_c,arem_n,ares_c,ares_n){

  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  for(var i=0;i<pre_c.length;i++){
      
    let op = document.createElement("option");
    op.value = pre_c[i];  //value値
    op.text = pre_n[i];   //テキスト値
      console.log(op)
    document.getElementById("pref_sel").appendChild(op);
  }
};