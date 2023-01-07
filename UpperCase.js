

var wars = "The-Stealth-Warrior"

// declaring a loop of i
for (let i = wars.indexOf('-'); i < wars.length; i++) {

    // asserting i only equal to "-"
    if (wars.charAt(i) === '-') {
        let x = wars.charAt(i);

        //identifing the first letter after "-" 
        let cap = wars.charAt(i + 1)

       if (cap != cap.toUpperCase()){
        let char = cap.toUpperCase();

        // replacing the first letter and "-" with a capital one
        var wars = wars.replace(`${x + cap}`, `${char}`);
       }
       else {
           var wars = wars.replace(`${x}`,"");
       };


        // asserting that there isn't any "-" then excuting the final result 
        if (wars.indexOf('-') == -1) {
            console.log(wars)
        };
    };
};




/*
 if (cap === cap.toUpperCase()) {
            var wars = wars.replace(`${x}`, "");
        };

else {
    let char = cap.toUpperCase();

    // replacing the first letter and "-" with a capital one
    var wars = wars.replace(`${x + cap}`, `${char}`);
};



wars.charAt(i + 1) != cap.toUpperCase()



let x = war.charAt(i);


for (let i = war.indexOf('-'); i < war.length; i++) { }


if (wars.indexOf('-') == -1){}


var arr;
function logic () {
    for (var i=arr.indexOf("_")) {
        return { 
            arr.indexOf(i+1);
    }
        }
const capitaliza = arr.indexOf(i+1).toUpperCase();

}
*/