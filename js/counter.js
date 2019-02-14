

function modifLvl(option){
    //entre 1 et 20
    let value = document.getElementById('spanLvl').innerHTML;
    if(option === '+'){
        value++ ; 
        if(value > 20){
            value = 20;
        }
    }
    else if(option === '-'){
        value-- ;
        if(value < 1){
            value = 1;
        }
    }
    document.getElementById('spanLvl').innerHTML = value ;

}

function modifBonus(option){

    let value = document.getElementById('spanBonus').innerHTML;
    if(option === '+'){
        value++ ;
        if(value > 100){
            value = 100;
        }
    }
    else if(option === '-'){
        value-- ;
        if(value < -20){
            value = -20;
        }
    }
    document.getElementById('spanBonus').innerHTML = value ;
}