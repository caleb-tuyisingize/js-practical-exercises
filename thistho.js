"use strict";
function IceScream(){
    this.scoop = 0;
}

IceScream.prototype.addScoop = function(){
    setTimeout(function(){
        this.scoop++;
        console.log("Scoop added to the function "+this.scoop);
    }, 500);
};
const dessert = new IceScream();
dessert.addScoop();
