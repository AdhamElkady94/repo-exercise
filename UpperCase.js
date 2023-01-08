

function toCamelCase(str) {
    
    if ((str.includes('-') != true) && (str.includes('_') != true)) {
        console.log(str);
    }
    else {

        let i;
        // declaring a loop of i in multiple conditions
        for ((i = str.indexOf('-') && i != str.indexOf('_')) ||
            (i = str.indexOf('_') && i != str.indexOf('-'));
            i < str.length; i++) {

            // asserting i only equal to "-" or "_"
            if ((str.charAt(i) === '-' && str.charAt(i) != '_') ||
                (str.charAt(i) === '_' && str.charAt(i) != '-')) {

                let x = str.charAt(i);

                //identifing the first letter after "-" 
                let cap = str.charAt(i + 1)
                // assuring that the targeted letter is not capital
                if ((cap != cap.toUpperCase())) {
                    let char = cap.toUpperCase();

                    // replacing the first letter and "-" or "_" with a capital one
                    str = str.replace(`${x + cap}`, `${char}`);
                }
                else {
                    str = str.replace(`${x}`, "");
                };


                // asserting that there isn't any "-" or "_" then excuting the final result 
                if (str.indexOf('-') == -1 && str.indexOf('_') == -1) {
                    console.log(str);
                };

            };

        };
    };
    return str;
};


toCamelCase("the-stealth-warrior");

toCamelCase("the_stealth_warrior");
toCamelCase("the_stealth-warrior");

toCamelCase("the_stealth-Warrior");
toCamelCase("the-Stealth-Warrior");

toCamelCase("");