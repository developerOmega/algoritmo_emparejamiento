
//modulo 1 = folios
//modulo 2 = teachers
let folios = [
    {
        id: 1,
        name_student: 'manuel',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 2,
        name_student: 'jesus',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 3,
        name_student: 'marcos',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 4,
        name_student: 'lucero',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 5,
        name_student: 'carolina',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 6,
        name_student: 'estefania',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 7,
        name_student: 'martin',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 8,
        name_student: 'miguel',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 9,
        name_student: 'gustabo',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 10,
        name_student: 'dulce',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 11,
        name_student: 'anahi',
        type: 1,
        preferencias: [
           5,2,3,8,7,6,1,4
        ]
    },
    {
        id: 12,
        name_student: 'alberto',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },

    {
        id: 13,
        name_student: 'isrrael',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 14,
        name_student: 'arturo',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 15,
        name_student: 'ferananda',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 16,
        name_student: 'pablo',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 17,
        name_student: 'luis',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 18,
        name_student: 'eduardo',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 19,
        name_student: 'nayeli',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 20,
        name_student: 'armando',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 21,
        name_student: 'lucas',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    },
    {
        id: 22,
        name_student: 'nacho',
        type: 0,
        preferencias: [
            4,7,1,3,8,5,6,2
        ]
    }
    
];
let teachers = [
    {
        id: 1,
        name: 'ignacio',
        preferencias:[
            0,1
        ],
        folio:[

        ]
    },
    {
        id: 2,
        name: 'rafael',
        preferencias:[
            0,1
        ],
        folio:[

        ]
    },
    {
        id: 3,
        name: 'oscar',
        preferencias:[
            1,0
        ],
        folio:[

        ]
    },
    {
        id: 4,
        name: 'liliana',
        preferencias:[
            0,1
        ],
        folio:[

        ]
    },
    {
        id: 5,
        name: 'buenacara',
        preferencias:[
            1,0
        ],
        folio:[

        ]
    },
    {
        id: 6,
        name: 'nepamusena',
        preferencias:[
            0,1
        ],
        folio:[

        ]
    },
    {
        id: 7,
        name: 'alejandro',
        preferencias:[
            1,0
        ],
        folio:[

        ]
    },
    {
        id: 8,
        name: 'bianca',
        preferencias:[
            0,1
        ],
        folio:[

        ]
    },
];

emparejar(folios,teachers);

function emparejar(folios, teachers){
    let count = folios.length-1;//contador igual al total de elementos de modulo1

    while(folios.length > 0){//repetir si hay mas de 0 modulos1
        for(let e =0 ; e < teachers.length; e++){//ciclo de modulos2
            
            if(folios[count].preferencias[0] == teachers[e].id){//condicional si la primer preferencia de modulo1 es iguales al modulo2 
                
                teachers[e].folio.push(folios[count]);//el modulo1 se agregara a los modulos1 de modulo2
                folios.splice(count, 1);//el modulo1 se eliminara del array de objetos de modulos1
                
                if(teachers[e].folio.length > 3){//condicional si hay mas de 3 modulos1 pertenecientes a modulo2
                    let folioContainer = [];//variable folioContainer que almacena un array
                  
                    teachers[e].preferencias.forEach(preferencia => {//ciclo de preferencias de modulo2
                       
                        for(let i = 0; i < teachers[e].folio.length; i++){//ciclo de modulos1 pertenecientes a modulo2
                            if(preferencia == teachers[e].folio[i].type){//condicional preferenacia de modulo2 es igual a tipo de modulo1 perteneciente a modulo2 
                                
                                if(folioContainer.length < 3){//condicional si el numero de elementos en el array folioContainer es menor que 3  
                                    folioContainer.push(teachers[e].folio[i]);//modulo1 perteneciente a modulo2 se agregara al array folioContainer
                                } else{ //en caso de que no se cumpla la condicion
                                    teachers[e].folio[i].preferencias.shift();//eliminal primera opcion de preferencias de modulo1 perteneciente a modulo2
                                    folios.push(teachers[e].folio[i]);//modulo1 perteneciente a modulo se argegara a modulos1
                                    
                                    teachers[e].folio = folioContainer;//modulos1 pertenecientes a modulo2 seran igual al array folioContainer
                                    count++;//contador sumado
                                    break;//romper ciclo
                                }
                            }
                        }
    
                        if(teachers[e].folio.length <= 3){//condicional si hay menos de 3 modulos1 pertenecientes a modulo2
                            return;//romper ciclo
                        }
    
                    });
    
                }
                break;//romper ciclo
            }
        }   
    
        count--;//contador restando
    }
}
