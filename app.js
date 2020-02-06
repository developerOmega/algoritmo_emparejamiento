//Pareja1 = novias
//Pareja2 = novios
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
let count = objectNovias.length-1;//Contado igual a numero de parejas1

while(objectNovias.length > 0){ //Hay parejas1?
    for(let e =0 ; e < objectNovios.length; e++){ //Ciclo para recorrer a todas las opciones existentes
        
        if(objectNovias[count].preferencias[0] == objectNovios[e].id){ //Comparar preferencia de pareja1 con opciones de pareja2
            
            objectNovios[e].pareja.push(objectNovias[count]); //pareja1 se empareja con pareja2
            objectNovias.splice(count, 1);//se elimina la opcion de pareja1 de varible de parejas1
            
            if(objectNovios[e].pareja.length > 1){//Comparar si la pareja2 tiene mas de dos parejas1
              
                objectNovios[e].preferencias.forEach(dataPreferencias => {//Ciclo de preferencias de pareja2
                   
                    for(let i = 0; i < objectNovios[e].pareja.length; i++){//Ciclo de parejas1 pertenecientes a pareja2
                        if(dataPreferencias == objectNovios[e].pareja[i].id){//Comparar si preferencia de pareja2 coinicide con pareja1 del ciclo
                            let newPareja = objectNovios[e].pareja[i];//Almacenar pareja1 de posicion de array 'i' en varible newPareja
                            let posp = objectNovios[e].pareja.splice(i,1);//Obtener los elementos restantes de parejas1 elimiando pareja1 de posicion de array 'i'
                            objectNovios[e].pareja[0].preferencias.shift();//Eliminar primer preferencia de pareja1[0] perteneciente a pareja2

                            objectNovias.push(objectNovios[e].pareja[0]);//Almacenar pareja1[0] perteneciente a pareja2  en varible de parejas1 
                            objectNovios[e].pareja = [];//parejas1 de parejas2 es array bacio 
                            objectNovios[e].pareja.push(newPareja);//Almacenar variable newPareja en parejas1 de parejas2
                            count++;//Contador sumatorio
                            break;//Romper ciclo de parejas1 de pareja2

                        }
                    }

                    if(objectNovios[e].pareja.length <= 1){ //Comparar si hay menos o igual de parejas1 perteneciente a pareja2
                        return;//Romper ciclo de preferencias de pareja2
                    }

                });

            }
            break;//Romper ciclo de parejas1
        }
    }   

    count--;//Contador restante
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
    