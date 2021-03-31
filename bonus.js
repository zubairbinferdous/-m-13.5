var  mark = [55 , 71 , 89 , 55 , 94 , 250 , 5000];

for (let i = 0; i < mark.length; i++) {
    
    var element = mark[i];
    console.log(element);

}

console.log('ok me');
console.log('ok me');


function add( nam , mun) {

    var result = nam + mun;
    return result;
    
}

var result = add( 55 , 50);
console.log(result);

console.log('ok me');
console.log('ok me am i ttt ');

var Add = add( 55 , 150);
console.log(Add);

console.log('ok me');



function bigNum (number) {

    var big = number[0];

    for (let i = 0; i < number.length; i++) {

        const element = number[i];

        if ( element > big ) {
             
             big = element; 
        }
        
    }

    return big;
}


var result = bigNum(mark);          // 1st line
console.log( 'big num', result)