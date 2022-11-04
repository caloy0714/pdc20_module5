//object
let car ={
    brand:"Toyota",
    variant:"wigo",
    transmission:"Automatic",
    lights : {
        front:"LED",
        rear:"LED/Bulb",
        signal:"Bulb"
    },
    //this methods
    displayBrand(){
        alert(this.brand);
        document.writeln(this.transmission);
    }
}

//classes
class myCar{
    constructor(brand, variant, transmission){
        this.brand=brand;
        this.variant=variant;
        this.transmission=transmission;
    }
}

//abstraction
function vehicle(){
    this.vechicleType="vechicleType";
}
vehicle.prototype.display=function(){
    return "The brand is: "+ this.vechicleType;
}

function MyCar(vechicleType){
    this.vechicleType=vechicleType;
}

MyCar.prototype=Object.create(vehicle.prototype);
var mycar = new MyCar("Toyota");
