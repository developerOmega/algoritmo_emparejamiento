let novias = {
    alejandra: {
        id: 1,
        name: 'alejandra',
        preferencias: [
            4, 5, 1, 2, 3
        ]
    },
    nayeli: {
        id: 2,
        name: 'nayeli',
        preferencias: [
            4, 3, 1, 2, 5
        ]
    },
    estefania: {
        id: 3,
        name: 'estefania',
        preferencias: [
            5, 4, 3, 1, 2
        ]
    },
    carla: {
        id: 4,
        name: 'carla',
        preferencias: [
            2, 3, 5, 4, 1
        ]
    },
    noemi: {
        id: 5,
        name: 'noemi',
        preferencias: [
            3, 4, 2, 5, 1
        ]
    }
}

let novios = {
    alejandro: {
        id: 1,
        name: 'alejandro',
        preferencias:[
            1, 5, 2, 3, 4
        ],
        pareja: [

        ]
    },
    martin: {
        id: 2,
        name: 'martin',
        preferencias:[
            2, 5, 1, 4, 3
        ],
        pareja: [
            
        ]
    },
    sebastian: {
        id: 3,
        name: 'sebastian',
        preferencias:[
            3, 2, 1, 5, 4
        ],
        pareja: [
            
        ]
    },
    marcos: {
        id: 4,
        name: 'marcos',
        preferencias:[
            4, 5, 1, 2, 3
        ],
        pareja: [
            
        ]
    },
    rafael: {
        id: 5,
        name: 'rafael',
        preferencias:[
            2, 4, 3, 5, 1
        ],
        pareja: [
            
        ]
    }
}

let objectNovias = Object.values(novias);
let objectNovios = Object.values(novios);
let empare = [];
let count = objectNovias.length-1;

while(objectNovias.length > 0){
    for(let e =0 ; e < objectNovios.length; e++){
        
        if(objectNovias[count].preferencias[0] == objectNovios[e].id){
            
            objectNovios[e].pareja.push(objectNovias[count]);
            objectNovias.splice(count, 1);
            
            if(objectNovios[e].pareja.length > 1){
              
                objectNovios[e].preferencias.forEach(dataPreferencias => {
                   
                    for(let i = 0; i < objectNovios[e].pareja.length; i++){
                        if(dataPreferencias == objectNovios[e].pareja[i].id){
                            
                            let newPareja = objectNovios[e].pareja[i];
                            let posp = objectNovios[e].pareja.splice(i,1);
                            objectNovios[e].pareja[0].preferencias.shift();

                            objectNovias.push(objectNovios[e].pareja[0]);
                            objectNovios[e].pareja = [];
                            objectNovios[e].pareja.push(newPareja);
                            count++;
                            break;

                        }
                    }

                    if(objectNovios[e].pareja.length <= 1){
                        return;
                    }

                });

            }
            break;
        }
    }   

    count--;
}

for(let l =0 ; l < objectNovios.length; l++){
    var data = {
        novio: objectNovios[l].name,
        novia: objectNovios[l].pareja[0].name
    }
    empare.push(data);
}



// var data = {
            //     novio: objectNovios[e].name,
            //     novia: objectNovias[i].name 
            // }  

            // empare.push(data);
    