const age = document.querySelector('.ipt')
const display = document.getElementById('display')
const button = document.getElementById('btn')

btn.addEventListener('mouseover', function(){
    let ageValue=age.value


    if (ageValue <= 18){
        // alert('PERSON CANNOT VOTE');
        display.textContent = 'person cannot vote'
    }

    else if(ageValue >=18){
        // alert('PERSON CAN VOTE');
        display.textContent = 'person can vote'

    }

    else{
    // alert('GET AWAY!!!!!!!');
        display.textContent = 'get away'

    }

    age.Value='';
})