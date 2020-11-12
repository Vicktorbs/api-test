var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeB03Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    clave: Number,
    
    operario: { type: String, required: true},
    id_worker: {type: String},
    unidad: { type: Number, required: true },

    vigaL: Boolean,
    vigaR: Boolean,
    vigaF: Boolean,
    observacionesV: String,
    
    unionL: Boolean,
    unionR: Boolean,
    unionF: Boolean,
    observacionesU: String,
    
    discoL: Boolean,
    discoR: Boolean,
    discoF: Boolean,
    observacionesD: String,
    
    revestL: Boolean,
    revestR: Boolean,
    revestA: Boolean,
    observacionesR: String,
    
    fuellesL: Boolean,
    fuellesR: Boolean,
    observacionesF: String,
    
    alojamientoL: Boolean,
    alojamientoR: Boolean,
    alojamientoA: Boolean,
    observacionesA: String,

    tapasL: Boolean,
    tapasR: Boolean,
    tapasF: Boolean,
    tapasA: Boolean,
    observacionesT: String,
    
    tapaspL: Boolean,
    tapaspR: Boolean,
    tapaspF: Boolean,
    tapaspA: Boolean,
    observacionesTp: String,
    
    moldurastL: Boolean,
    moldurastR: Boolean,
    moldurastA: Boolean,
    observacionesMt: String,
    
    nylamidL: Boolean,
    nylamidR: Boolean,
    nylamidE: Boolean,
    nylamidA: Boolean,
    nylamidD: Boolean,
    observacionesN: String,
    
    frentesM1L: Boolean,
    frentesM1R: Boolean,
    frentesM1A: Boolean,
    observacionesFm1: String,
    
    frentesM2L: Boolean,
    frentesM2R: Boolean,
    frentesM2A: Boolean,
    observacionesFm2: String,
    
    cableadoL: Boolean,
    cableadoR: Boolean,
    observacionesC: String,

    manguerasL: Boolean,
    manguerasR: Boolean,
    observacionesM: String,
    
    cofreL: Boolean,
    cofreR: Boolean,
    cofreA: Boolean,
    observacionesCe: String,
    
    observaciones: String,
    
    //material utilizado
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
module.exports = mongoose.model('memeB03', memeB03Schema);