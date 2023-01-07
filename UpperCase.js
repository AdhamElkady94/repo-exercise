var wars = "the-stealth-warrior"
for (let i = wars.indexOf('-'); i < wars.length; i++) { 
    if (wars.charAt(i)==='-') {
 let cap = wars.charAt(i+1)
   
   
  let char = cap.toUpperCase();
   
let x = wars.charAt(i);
    var wars = wars.replace(`${x + cap}`, `${char}`);
        if (wars.indexOf('-') == -1) { 
console.log(wars)
        };
    };
};




/*
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