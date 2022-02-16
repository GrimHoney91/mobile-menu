const nav = document.querySelector('#nav');
const iconDivs = document.querySelectorAll('.iconDivs');
const body = document.querySelector('body');

nav.addEventListener('click', (e) => {
    mainBackground(e);
    iconDivs.forEach((div) => {
       if (e.target == div || e.target.parentNode == div) {
           div.style.borderBottom = '2px solid white';
       }
       else if (e.target != div || e.target.parentNode != div) {
           div.style.borderBottom = 'none';
       }
    });
});

function mainBackground(event) {
    if (event.target.className == 'navImages') {
        if (event.target.id == 'messages') {
            body.style.backgroundColor = 'white';
        }
        if (event.target.id == 'phone') {
            body.style.backgroundColor = 'red';
        }
        if (event.target.id == 'friends') {
            body.style.backgroundColor = 'skyblue';
        }
        if (event.target.id == 'menu') {
            body.style.backgroundColor = 'yellow';
        }
        if (event.target.id == 'profile') {
            body.style.backgroundColor = 'green';
        }
    }
    else if (event.target.className == 'iconDivs') {
        if (event.target.firstChild.id == 'messages') {
            body.style.backgroundColor = 'white';
        }
        if (event.target.firstChild.id == 'phone') {
            body.style.backgroundColor = 'red';
        }
        if (event.target.firstChild.id == 'friends') {
            body.style.backgroundColor = 'skyblue';
        }
        if (event.target.firstChild.id == 'menu') {
            body.style.backgroundColor = 'yellow';
        }
        if (event.target.firstChild.id == 'profile') {
            body.style.backgroundColor = 'green';
        }
    }
}

const plusBtn = document.querySelector('#plus');
const faide = document.querySelector('#faide');
const subBtnContainers = document.querySelectorAll('.subBtnContainers');
const labels = document.querySelectorAll('.labels');

plusBtn.addEventListener('click', () => {
    if (faide.style.display != 'block') {
        faide.style.display = 'block';
        plusBtn.style.backgroundImage = "url('images/x.png')";
        subBtnContainers.forEach((container) => {
            container.style.display = 'block';
        });
        labels.forEach((label) => {
            label.style.display = 'inline'; 
        });
    }
    else if (faide.style.display != 'none') {
        faide.style.display = 'none';
        plusBtn.style.backgroundImage = "url('images/plus.png')";
        subBtnContainers.forEach((container) => {
            container.style.display = 'none';
        });
        labels.forEach((label) => {
            label.style.display = 'none'; 
        });
    }
});