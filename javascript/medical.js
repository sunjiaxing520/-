// let ba = true;
// var box1 = document.getElementById('a1');
// var box33 = document.getElementById('a33');
// function cl1(){
//     ba=!ba;
//     if(ba){
//         box1.style.color='aliceblue';
//         box2.style.color='rgb(132,131,145)';
//         bb=false;
//         box3.style.color='rgb(132,131,145)';
//         bc=false;
//         // box33.style.color='rgb(132,131,145)';
//         // bc=false;
//         box4.style.color='rgb(132,131,145)';
//         bd=false;
//         box1.style.borderBottom='solid';
//         box2.style.borderBottom='none';
//         box3.style.borderBottom='none';
//         box4.style.borderBottom='none';

//     }
    // else{
    //     box1.style.color='rgb(132,131,145)'
    // }
// };
let bb = false;
var box2 = document.getElementById('a2');
function cl2(){
    bb=!bb;
    if(bb){
        box2.style.color='aliceblue';
        // box1.style.color='rgb(132,131,145)';
        // ba=false;
        box3.style.color='rgb(132,131,145)';
        // box33.style.color='rgb(132,131,145)';
        bc=false;
        box4.style.color='rgb(132,131,145)';
        bd=false;
        box2.style.borderBottom='solid';
        // box1.style.borderBottom='none';
        box3.style.borderBottom='none';
        box4.style.borderBottom='none';
        $('.left').css('display','block')
        $('.right').css('display','block')
        $('.page').css('display','block')
// *****************地方
        $('.left1').css('display','none')
        $('.right1').css('display','none')
        $('.page1').css('display','none')
        $('.select').css('display','none')
    // ***************媒体报道
        $('.left2').css('display','none')
        $('.right2').css('display','none')
        // $('.page2').css('display','none')
    }
    // else{
    //     box2.style.color='rgb(132,131,145)'
    // }
};
let bc = false;
var box3 = document.getElementById('a3');
function cl3(){
    bc=!bc;
    if(bc){
        box3.style.color='aliceblue';
        // box33.style.color='aliceblue';
        box2.style.color='rgb(132,131,145)';
        bb=false;
        // box1.style.color='rgb(132,131,145)';
        // ba=false;
        box4.style.color='rgb(132,131,145)';
        bd=false;
        box3.style.borderBottom='solid';
        box2.style.borderBottom='none';
        // box1.style.borderBottom='none';
        box4.style.borderBottom='none';
        $('.left').css('display','none')
        $('.right').css('display','none')
        $('.page').css('display','none')
        // *****************地方
        $('.left1').css('display','block')
        $('.right1').css('display','block')
        $('.page1').css('display','block')
        $('.select').css('display','block')
        // ***************媒体报道
        $('.left2').css('display','none')
        $('.right2').css('display','none')
        // $('.page2').css('display','none')
    }
    // else{
    //     box3.style.color='rgb(132,131,145)'
    // }
};
let bd=false;
var box4 = document.getElementById('a4');
function cl4(){
    bd=!bd;
    if(bd){
        box4.style.color='aliceblue';
        box2.style.color='rgb(132,131,145)';
        bb=false;
        // box1.style.color='rgb(132,131,145)';
        // ba=false;
        box3.style.color='rgb(132,131,145)';
        // box33.style.color='rgb(132,131,145)';
        bc=false;
        box4.style.borderBottom='solid';
        box2.style.borderBottom='none';
        box3.style.borderBottom='none';
        $('.left').css('display','none')
        $('.right').css('display','none')
        $('.page').css('display','none')
        // *****************地方
        $('.left1').css('display','none')
        $('.right1').css('display','none')
        $('.page1').css('display','none')
        $('.select').css('display','none')
        // ***************媒体报道
        $('.left2').css('display','block')
        $('.right2').css('display','block')
        // $('.page3').css('display','block')
        // box1.style.borderBottom='none';
    }
    // else{
    //     box4.style.color='rgb(132,131,145)'
    //     box4.style.borderBottom='none'
    // }
};