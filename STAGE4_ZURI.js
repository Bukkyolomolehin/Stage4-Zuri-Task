//================================START OF TASK ONE==============================================//

function convertFahrToCelsius(fahrenheit){
    let fahr = Object.prototype.toString.call(fahrenheit);
    if(fahr === "[object Number]" || (fahr == "[object String]"  && !isNaN(fahrenheit))){
        var cels = (5/9)*(fahrenheit - 32);
        var c = cels.toFixed(4)
        let message =  ` ${c}`;
        console.log(message);
        return message;
    }  else{
    let param = fahr.split(" "); 
    param[1] = param[1].substring(0, param[1].length-1);
    console.log(`${JSON.stringify(fahrenheit)} is not a valid number but a/an ${param[1]}`);
    return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${param[1]}`;

    }


} 

//================================ENF OF TASK ONE====================================================//

//=================================START OF TASK TWO==================================================//

function checkYuGiOh(n){
    let number = n;
    const arr = Array.from({length:number}, (_, index) => index + 1);


    //To check the type of input and if the data type is not a number but can be converted to number
    let numberToString = Object.prototype.toString.call(n);
    if(numberToString === "[object Number]" || (numberToString == "[object String]"  && !isNaN(n))){
        for (let i = 0; i < arr.length; i++) { 
            if (arr[i]%2===0  && arr[i]%3===0  && arr[i]%5===0 ) {
                arr[i] = 'yu-gi-oh'     
            }
            else if (arr[i]%2===0  && arr[i]%5===0 ) {
                arr[i] = 'yu-oh'   
            }
            else if (arr[i]%2===0 && arr[i]%3===0) {
                arr[i] = 'yu-gi'
            } else if (arr[i]%3===0 && arr[i]%5===0) {
                arr[i] = 'gi-oh'
            }
            else if(arr[i]%5==0 ){
                arr[i] ='oh'
            }  
            else if(arr[i]%3==0 ){
                arr[i] ='gi'
            }   
            else if (arr[i]%2===0) {
                arr[i] ='yu'
                
            }
        }return arr; //this will return the edited array   
    }
    else if(typeof n === "string"){
        let message = `invalid parameter:${JSON.stringify(number)}`;
        return message;
    }
    else if(Array.isArray(number) && number.length === 0){
        let message = `invalid parameter: ${JSON.stringify(number)}`;
        return message;        
    }else if( typeof n ==='object'){
        let message = `invalid parameter: ${JSON.stringify(number)}`;
        return message;

    } else if( n === true || n === false){
        let message = `invalid parameter: ${n}`;
        return message;

    }   else if(isNaN(n)){
        let message = `invalid parameter:  ${JSON.stringify(number)}` ;
        return message;
    } 
    



}



//==================================END OF TASK TWO==================================================//


      
   
 
    










