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
    pets:[]

    // //{ //anonymous object
        //     name:"Scooby",
        //     age:50,
        //     breed:"Dane",
        //     gender:"Male",
        //     service:"Grooming",
        //     ownerName:"Shaggy",
        //     contactPhone:"666-666-6666"
        // }
    
}

//constructor function
function Pet(name,age,breed,gender,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
}




function displayNames(){


    
    for (let i = 0; i < petSaloon.pets.length; i++) {
        document.getElementById("listPets").innerHTML+=`<li>${petSaloon.pets[i].name}</li>`;
                         
    }  
    
    
}

function displayInfo(){
    document.getElementById("salonInfo").innerHTML=`<p>Welcome to the ${petSaloon.name} family. It is available at ${petSaloon.address} from ${petSaloon.hours.open} to ${petSaloon.hours.close}</p>`;
}


function displayNPets(){
    document.getElementById("container-pets").innerHTML=(`<p>There's ${petSaloon.pets.length} pets registered.</p>`)
}






function init(){

    //creating objects
    // let scooby = new Pet("Scooby",20,"Dane","Male","Grooming","Shaggy","666-666-6666");

    // let speedyGonzales = new Pet("Speedy",10,"Dane","Male","Grooming","Eduardo","666-666-6666");

    // let jessie= new Pet("Jessie",10,"Mixed","Female","Grooming","Pedro","666-666-6666");

    

    // petSaloon.pets.push(scooby,speedyGonzales,jessie);
    //main function
    //hook events
    
    if(petSaloon.pets.length == 0){
        document.getElementById("listPets").innerHTML=`<p>There's no pets registered.</p>`;
    }
    
    displayInfo();
    
    
    
}

function clearForm(){
    document.getElementById("txtPetName").value="";
    document.getElementById("txtPetAge").value="";
    document.getElementById("txtPetBreed").value="";
    document.getElementById("txtPetOwner").value="";
    document.getElementById("txtPetOwnerNumber").value="";
}

function register(){
    
    
    let petName=document.getElementById("txtPetName").value;


    
    let petAge = document.getElementById("txtPetAge").value;

    let petBreed = document.getElementById("txtPetBreed").value;

    let petGender = document.getElementById("txtPetGender").value;

    let petService = document.getElementById("txtPetService").value;

    let petOwner = document.getElementById("txtPetOwner").value;

    let petOwnerNumber = document.getElementById("txtPetOwnerNumber").value;
    
    if(petName == "" || petAge == "" || petBreed=="" || petGender=="" || petService=="" || petOwner == "" || petOwnerNumber == ""){
        alert("You must add all the information that is needed.");
    }else{

    

        let newPet = new Pet(petName, petAge, petBreed, petGender, petService, petOwner, petOwnerNumber);

        petSaloon.pets.push(newPet);

        displayNPets();
        
        document.getElementById("listPets").innerHTML="";
        displayNames();
        clearForm();
        

        console.log(petSaloon.pets);
    }

}


window.onload=init;
