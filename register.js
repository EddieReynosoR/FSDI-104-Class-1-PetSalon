// arrays []
// objects {}
let petSaloon = {
    //attributes
    name:"The Fashion Pet",
    address:"Ave University 768",
    hours:{
        open:"9:00 am",
        close:"6:00 pm"
    },
    pets:[
        { //anonymous object
            name:"Scooby",
            age:50,
            breed:"Dane",
            gender:"Male",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"666-666-6666"
        },

        { //anonymous object
            name:"Dante",
            age:38,
            breed:"Mixed",
            gender:"Male",
            service:"Nails cut",
            ownerName:"Eduardo",
            contactPhone:"666-666-6666"
        },

        { //anonymous object
            name:"Rango",
            age:12,
            breed:"Mixed",
            gender:"Male",
            service:"Vaccine",
            ownerName:"Mario",
            contactPhone:"666-666-6666"
        },

        { //anonymous object
            name:"Barbie",
            age:12,
            breed:"Mixed",
            gender:"Female",
            service:"Vaccine",
            ownerName:"Mary",
            contactPhone:"666-666-6666"
        },

        { //anonymous object
            name:"Speedy Gonzales",
            age:99,
            breed:"Mixed",
            gender:"Male",
            service:"Vaccine",
            ownerName:"Pedro",
            contactPhone:"666-666-6666"
        }

    ]
}


function displayNames(){

    for (let i = 0; i < petSaloon.pets.length; i++) {
        document.getElementById("listPets").innerHTML+=`<li>${petSaloon.pets[i].name}</li>`;
        
        
    }
    
}

function displayInfo(){
    document.getElementById("salonInfo").innerHTML=`Welcome to the ${petSaloon.name} family. It is available at ${petSaloon.address} from ${petSaloon.hours.open} to ${petSaloon.hours.close}`;
}

displayNames();
displayInfo();