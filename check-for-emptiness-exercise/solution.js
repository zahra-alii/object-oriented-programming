function isEmpty(obj) {
    for (let key in obj){ // if the loop's started & there's a property...
        return false;
    }
        return true;
    }

    // test case:
    
    let schedule = {};

    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    alert( isEmpty(schedule) ); // false
