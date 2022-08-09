
// html
const html__value = document.querySelector('.html__value');
let count_html = 0;
function running_html() {
    if(count_html == 90) {
        clearInterval();
    }
    else {
        count_html = count_html + 1;
        html__value.innerHTML = count_html + '%';
    }
}

running_html();
setInterval(running_html, 30);

// css
const css__value = document.querySelector('.css__value');
let count_css = 0;
function running_css() {
    if(count_css == 85) {
        clearInterval();
    }
    else {
        count_css = count_css + 1;
        css__value.innerHTML = count_css + '%';
    }
}
running_css();
setInterval(running_css, 30);

// sass
const sass__value = document.querySelector('.sass__value');
let count_sass = 0;
function running_sass() {
    if(count_sass == 80) {
        clearInterval();
    }
    else {
        count_sass = count_sass + 1;
        sass__value.innerHTML = count_sass + '%';
    }
}
running_sass();
setInterval(running_sass, 30);

// javascript
const js__value = document.querySelector('.js__value');
let count_js = 0;
function running_js() {
    if(count_js == 70) {
        clearInterval();
    }
    else {
        count_js = count_js + 1;
        js__value.innerHTML = count_js + '%';
    }
}
running_js();
setInterval(running_js, 30);