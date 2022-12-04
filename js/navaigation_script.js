let navigationBox1 = document.getElementById('navigationBox1');
let navigationBox2 = document.getElementById('navigationBox2');
let navigationBox3 = document.getElementById('navigationBox3');
let navigationBox4 = document.getElementById('navigationBox4');
if (document.getElementById('navigationBox1')) {
    navigationBox1.addEventListener('mouseover', () => {
        navigationBox1.getElementsByClassName('navigation__button-info')[0].style.display = 'block';
        navigationBox1.getElementsByClassName('navigation__button-info')[0].style.animation = 'textAnimNav 1s forwards';
        navigationBox1.addEventListener('mouseleave', () => {
            navigationBox1.getElementsByClassName('navigation__button-info')[0].style.display = 'none';
        });
    });
}
if (document.getElementById('navigationBox2')) {
    navigationBox2.addEventListener('mouseover', () => {
        navigationBox2.getElementsByClassName('navigation__button-info')[0].style.display = 'block';
        navigationBox2.getElementsByClassName('navigation__button-info')[0].style.animation = 'textAnimNav 1s forwards';
        navigationBox2.addEventListener('mouseleave', () => {
            navigationBox2.getElementsByClassName('navigation__button-info')[0].style.display = 'none';
        });
    });
}
if (document.getElementById('navigationBox3')) {
    navigationBox3.addEventListener('mouseover', () => {
        navigationBox3.getElementsByClassName('navigation__button-info')[0].style.display = 'block';
        navigationBox3.getElementsByClassName('navigation__button-info')[0].style.animation = 'textAnimNav 1s forwards';
        navigationBox3.addEventListener('mouseleave', () => {
            navigationBox3.getElementsByClassName('navigation__button-info')[0].style.display = 'none';
        });
    });
}
if (document.getElementById('navigationBox4')) {
    navigationBox4.addEventListener('mouseover', () => {
        navigationBox4.getElementsByClassName('navigation__button-info')[0].style.display = 'block';
        navigationBox4.getElementsByClassName('navigation__button-info')[0].style.animation = 'textAnimNav 1s forwards';
        navigationBox4.addEventListener('mouseleave', () => {
            navigationBox4.getElementsByClassName('navigation__button-info')[0].style.display = 'none';
        });
    });
}
