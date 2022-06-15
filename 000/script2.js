
let cur_date = new Date();
let exp_date = new Date('Mar 05, 2022');

let yer = date.getFullYear();
let mon = date.getMonth();
let day = date.getDate();

function SetDivContent() {
    if (yer == 2022 && mon == 02 && day == 03) $(".et_pb_row_2").css("display", "none");
}
