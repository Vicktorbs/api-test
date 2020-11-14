var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeC01Schema = Schema({//esquema de la estructura que van a tener los formularios
    date_created: { type: Date, required: true },
    //datos tren 
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    clave: Number,
    
    user: { type: String, required: true},
    id_worker: {type: String, required: true},
    unidad: { type: Number, required: true },

    //motor de traccion
    revision: Boolean,
    sopleteado:Boolean,
    limpieza: Boolean,

    revisionM2: Boolean,
    sopleteadoM2:Boolean,
    limpiezaM2: Boolean,

    revisionPM1: Boolean,
    sopleteadoPM1:Boolean,
    limpiezaPM1: Boolean,
    
    revisionPM2: Boolean,
    sopleteadoPM2:Boolean,
    limpiezaPM2: Boolean,

    revisionSM1: Boolean,
    sopleteadoSM1:Boolean,
    limpiezaSM1: Boolean,

    revisionSM2: Boolean,
    sopleteadoSM2:Boolean,
    limpiezaSM2: Boolean,
    
    revisionVM1: Boolean,
    sopleteadoVM1:Boolean,
    limpiezaVM1: Boolean,
    
    revisionVM2: Boolean,
    sopleteadoVM2:Boolean,
    limpiezaVM2: Boolean,
    
    revisionEM1: Boolean,
    sopleteadoEM1:Boolean,
    limpiezaEM1: Boolean,
    
    revisionEM2: Boolean,
    sopleteadoEM2:Boolean,
    limpiezaEM2: Boolean,
    
    revisionMM1: Boolean,
    sopleteadoMM1:Boolean,
    limpiezaMM1: Boolean,
    
    revisionMM2: Boolean,
    sopleteadoMM2:Boolean,
    limpiezaMM2: Boolean,
    
    revisionAM1: Boolean,
    sopleteadoAM1:Boolean,
    limpiezaAM1: Boolean,
    
    revisionAM2: Boolean,
    sopleteadoAM2:Boolean,
    limpiezaAM2: Boolean,
    
    revisionCM1: Boolean,
    sopleteadoCM1:Boolean,
    limpiezaCM1: Boolean,
    
    revisionCM2: Boolean,
    sopleteadoCM2:Boolean,
    limpiezaCM2: Boolean,
    
    //caja de conexiones
    revisionTM1: Boolean,
    sopleteadoTM1: Boolean,
    limpiezaTM1: Boolean,
    lubricacionTM1: Boolean,
    
    revisionTM2: Boolean,
    sopleteado: Boolean,
    limpiezaTM2: Boolean,
    lubricacionTM2: Boolean,
    
    revisionToM1: Boolean,
    sopleteadoToM1: Boolean,
    limpiezaToM1: Boolean,
    lubricacionToM1: Boolean,
    
    revisionToM2: Boolean,
    sopleteadoToM2: Boolean,
    limpiezaToM2: Boolean,
    lubricacionToM2: Boolean,
    
    revisionRM1: Boolean,
    sopleteadoRM1: Boolean,
    limpiezaRM1: Boolean,
    lubricacionRM1: Boolean,
    
    revisionRM2: Boolean,
    sopleteadoRM2: Boolean,
    limpiezaRM2: Boolean,
    lubricacionRM2: Boolean,
    
    revisionBM1: Boolean,
    sopleteadoBM1: Boolean,
    limpiezaBM1: Boolean,
    lubricacionBM1: Boolean,
    
    revisionBM2: Boolean,
    sopleteadoBM2: Boolean,
    limpiezaBM2: Boolean,
    lubricacionBM2: Boolean,
    
    observaciones: String,
    //MATERIAL UTILIZADO
    materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
            unit: String
        }]
    },

    documentFormCurrentState: {
        approvalByWorker    : { id_worker: String, checked: Boolean },
        approvalBySupervisor: { id_worker: String, checked: Boolean },
        approvalByMannager  : { id_worker: String, checked: Boolean },
        loading: Boolean
    },

    historyFile: [
        {
            id_worker: String,
            workerName: String,
            editDate: Date,
            editValue: Number
        }
    ]
});

module.exports = mongoose.model('memeC01', memeC01Schema);
//exportacion del modelo para que pueda ser utilizado por otro fichero, 'User' es el nombre de la entidad, 'UserSchema' es el formato o campos que va a tener cada objeto que se defina en el modelo usuario