
let n
init()

setInterval(() => {
    makeLeave(getImg(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImg(n+1))
    n += 1
}, 2000)



function x(n) {//1 2 3 4 5 6 7 8 9.....
    if (n > 3) {
        n = n % 3
        if (n === 0) { //6%3===0
            n = 3
        }
    }// 1 2 3
    return n
}
function init() {
    n = 1
    $(`.images > img:nth-child(${x(n)})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node){
    return  $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node){
    return  $node.removeClass('leave current').addClass('enter') 
}

function getImg(n) {
    return $(`.images > img:nth-child(${x(n)})`) //有变量n
}