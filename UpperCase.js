

var wars = "The-Stealth_warrior"
let i;
// declaring a loop of i in multiple conditions
for ((i = wars.indexOf('-')) || (i = wars.indexOf('_')); i < wars.length; i++) {

    // asserting i only equal to "-" or "_"
    if ((wars.charAt(i) === '-') || (wars.charAt(i) === '_')) {
        let x = wars.charAt(i);

        //identifing the first letter after "-" 
        let cap = wars.charAt(i + 1)
        // assuring that the targeted letter is not capital
        if (cap != cap.toUpperCase()) {
            let char = cap.toUpperCase();

            // replacing the first letter and "-" or "_" with a capital one
            var wars = wars.replace(`${x + cap}`, `${char}`);
        }
        else {
            var wars = wars.replace(`${x}`, "");
        };


        // asserting that there isn't any "-" or "_" then excuting the final result 
        if ((wars.indexOf('-') == -1) && (wars.indexOf('_') == -1)) {
            console.log(wars)
        };
    };
};
