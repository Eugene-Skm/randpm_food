function judge(){
    const gps = document.getElementById('way_radio_gps');
    const mnu = document.getElementById('way_radio_mnu');
     if (gps.checked) {
          getinfo(1);
        } else {
          alert("今後実装予定です");
        }
}