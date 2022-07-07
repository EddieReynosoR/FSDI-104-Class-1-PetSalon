function displayCardPets(){
    //travel tha array of cards
    let card="";
    for(let i = 0; i < petSaloon.pets.length; i++)
    {
        
        card+=`
        <div class="pet">
            <h4>Name: ${petSaloon.pets[i].name}</h4>
            <p>Age: ${petSaloon.pets[i].age}</p>
            <p>Gender: ${petSaloon.pets[i].gender}</p>
            <p>Breed: ${petSaloon.pets[i].breed}</p>
            <p>Service: ${petSaloon.pets[i].service}</p>
            <p>Owner: ${petSaloon.pets[i].ownerName}</p>
            <p>Phone: ${petSaloon.pets[i].contactPhone}</p>
        </div>
        `;

        console.log(card);
    }

    document.getElementById("pet-cards").innerHTML=card;
}

function displayPetsTable(){
    //tr+= (tr, th, td)
    let element="";
    for (let i = 0; i < petSaloon.pets.length; i++) {
        element+=`

            
            
            <tr>
                <th scope="row">${i+1}</th>
                <td>${petSaloon.pets[i].name}</td>
                <td>${petSaloon.pets[i].age}</td>
                <td>${petSaloon.pets[i].breed}</td>
                <td>${petSaloon.pets[i].gender}</td>
                <td>${petSaloon.pets[i].service}</td>
                <td>${petSaloon.pets[i].ownerName}</td>
                <td>${petSaloon.pets[i].contactPhone}</td>
                
            </tr>
            
            
        `;
        
    }

    document.getElementById("tablePets").innerHTML=element;
}