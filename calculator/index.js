const btn = document.querySelectorAll('button');
const display = document.querySelector('.display');

btn.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'c') {
      display.innerText = '';
    } else if (item.id == '<') {
      let str = display.innerText.toString();
      display.innerText = str.substr(0, str.length - 1);
    } else if (display.innerText !== '' && item.id == 'equal') {
      display.innerText = eval(display.innerText);
    } else if (display.innerText === '' && item.id == 'equal') {
      display.innerText = 'EMPTY!!';
      setTimeout(() => (display.innerText = ''), 2000);
    } else {
      display.innerText += item.id;
      console.log(display.innerText);
    }
  };
});
let cont = document.querySelector('.container');
let dar = document.querySelector('.dark');
let icon = document.querySelector('.dark-icon')
     icon.onclick = () => {
      cont.classList.toggle('active');
     dar.classList.toggle('active');
     };