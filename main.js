/*Eric Shantz 
shan0255@algonquinlive.com
October 18, 2020 */

const data = require('./data');

let chars = data.characters.filter(function(item){
    if (!item.race.includes('S')){
        return item;
    }
});
console.log(chars);


chars.sort( function(a , b){
    if(a.name > b.name){
        return 1;
    }else if (b.name > a.name){
        return -1;
    }
});
console.log(chars);

