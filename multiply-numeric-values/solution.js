// before calling
let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric(obj){
       for (let key in obj){
        if(typeof obj[key] === 'number'){
            console.log(obj[key] *= 2) // multiply every key (prop) by 2
        }
       }
    }

    multiplyNumeric(menu); // returns width: 400, height: 600
