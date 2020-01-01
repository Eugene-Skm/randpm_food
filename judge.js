function judge(){
    const gps = document.getElementById('way_radio_gps');
    const mnu = document.getElementById('way_radio_mnu');
     if (gps.checked) {
          getcurposi();
        } else {
          alert("今後実装予定です");
        }
}