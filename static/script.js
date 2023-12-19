function getReult(first, second, sign){
    document.querySelector('.main-header').innerHTML = 'Result';
    document.querySelector('form').style = "display:none;"
    result = document.createElement('div')
    result.style = "font-size:100; margin-top:2vh; margin-bottom:2vh;"
    result.innerHTML = first + sign + second + "="
    result.innerHTML += eval(first + sign + second)
    document.querySelector('.main-header').append(result)
    document.title = 'Result - Backend2'
}

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('.submit').onclick = function(){
        first_value = document.querySelector('.first-input').value
        second_value = document.querySelector('.second-input').value
        sign = document.querySelector('.sign').value
        if (first_value.length !=0 && second_value.length !=0){
            getReult(first_value,second_value, sign)
        }
    }
})