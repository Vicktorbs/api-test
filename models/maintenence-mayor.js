var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM01Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: { type: Date, required: true },
    //datos tren
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //1. DESMONTAJE DE PANTOGRAFO
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},

    observacions1: String,

    terminalTensionVF: String,
    terminalTensionL: String,
    terminalTensionF: String,

    cubiertaPorcelanaVF: String,
    cubiertaPorcelanaL: String,
    cubiertaPorcelanaF: String,

    orificioGasVF: String,
    orificioGasL: String,
    orificioGasF: String,

    coneccionTierraVF: String,
    coneccionTierraL: String,
    coneccionTierraF: String,

    orificioLluviaVF: String,
    orificioLluviaL: String,
    orificioLluviaF: String,

    orificioFijacionVF: String,
    orificioFijacionL: String,
    orificioFijacionF: String,

    tornilleriaVF: String,
    tornilleriaL: String,
    tornilleriaF: String,

    resistenciNLineal100: Number,
    resistenciNLineal200: Number,

    observacions2: String,

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

    //Equipo utilizado
    equipoUtilizado: {
        numberOfEquipo: Number,    
        arr: [{
            equipo: String,
            marca: String,
            inventario: String
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
module.exports = mongoose.model('mmmaM01', mmmaM01Schema);