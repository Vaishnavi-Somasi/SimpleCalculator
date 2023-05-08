// let buttons = document.querySelectorAll('button');
// let display = document.getElementById('numbertext');
// let exp = '';
// const display = document.getElementById("numbertext");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//     item.onclick = () => {
//         if (item.id == "clear") {
//             display.innerText = "";
//         }
//         else if (item.id == "backspace") {
//             let exp = display.innerText.toString();
//             display.innerText = exp.substring(0,exp.length-1);
//         }
//         else if (display.innerText != "" && item.id == "equal") {
//             display.innerText = eval(display.innerHTML);
//         }
//         else if (display.innerText == "" && item.id == "equal") {
//             display.innerText = "Empty!";
//             setTimeout(() => (display.innerText = ""), 2000);
//         }
//         else {
//             display.innerText += item.id;
//         }
//     };
// });





let buttons = document.querySelectorAll('button');
let display = document.querySelector('#numbertext');
let exp = '';

buttons.forEach((item) => {

    item.onclick = () => {
        if(item.id == 'clear')
            display.innerHTML = '';

        else if(item.id == 'backspace')
        {
            exp = display.innerHTML;
            display.innerHTML = exp.substring(0,exp.length-1);
        }
        else if(item.id == 'equal' &&  display.innerHTML !='')
        {
            display.innerHTML = eval(display.innerHTML)
        }
        else if(display.innerHTML =='' && item.id =='equal')
        {
            display.innerHTML = 'EMPTY..!!';
            setTimeout(() => (display.innerText = ""), 2000);
        }
        else
        {
            display.innerHTML = display.innerHTML + item.id

        }
    }
})