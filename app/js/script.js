// circular text homepage

function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("text")[classIndex];

  var deg = 360 / txt.length,
    origin = 0;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}
// text animation

const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 14.5 + "deg)";
}

// mouse action

// const textholder = document.querySelector('.text-box');

// document.addEventListener('mousemove', function (e) {
//   textholder.style.left = e.pageX + 'px';
//   textholder.style.top = e.pageY + 'px';
// });
