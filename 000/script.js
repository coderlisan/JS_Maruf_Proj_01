window.addEventListener('load', () => {
    // let time01 = new Date('Mar 05, 2022') - Date.now();
    // let item01 = () => document.querySelector('.et_pb_row_2').style.display = 'none';
    // clearTimeout(setTimeout(item01, time01))
    
});


function SetDivContent() {
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
    if (year == 2022 && month == 02 && day == 03) $(".et_pb_row_2").css("display", "none");
}
