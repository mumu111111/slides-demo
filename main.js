$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')

let n=1
setInterval( ()=>{
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (e)=>{
            console.log()
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })

    $(`.images > img:nth-child(${x(n+1)}`).removeClass('enter').addClass('current')
    n += 1
},2000)

function x(n){//1 2 3 4 5 6 7 8 9
    if(n>3){
        n= n%3
        if(n===0){ //6%3===0
            n=3
        }
    }// 1 2 3
    return n
}
