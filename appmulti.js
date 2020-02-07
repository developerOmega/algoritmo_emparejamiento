
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

let empare = [];

let count = folios.length-1;

while(folios.length > 0){
    for(let e =0 ; e < teachers.length; e++){
        
        if(folios[count].preferencias[0] == teachers[e].id){
            
            teachers[e].folio.push(folios[count]);
            folios.splice(count, 1);
            
            if(teachers[e].folio.length > 3){
                let folioContainer = [];//Caso estudiantes
              
                teachers[e].preferencias.forEach(preferencia => {
                   
                    for(let i = 0; i < teachers[e].folio.length; i++){
                        if(preferencia == teachers[e].folio[i].type){
                            
                            if(folioContainer.length < 3){
                                folioContainer.push(teachers[e].folio[i]);
                            } else{
                                teachers[e].folio[i].preferencias.shift();
                                folios.push(teachers[e].folio[i]);
                                
                                teachers[e].folio = folioContainer;
                                count++;
                                break;
                            }// CAso estudiante
                        }
                    }

                    if(teachers[e].folio.length <= 3){
                        return;
                    }

                });

            }
            break;
        }
    }   

    count--;
}