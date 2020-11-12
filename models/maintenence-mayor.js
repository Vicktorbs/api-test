var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var mmmaM01Schema = Schema({//esquema de la estructura que va a tener el formulario

    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    fechaInicio: { type: String },
    fechaTerminacion: { type: String },
    
    //1. DESMONTAJE DE PANTOGRAFO
    operario1: { type: String, required: true},
    id_worker1: {type: String},
    operario2: { type: String, required: true},
    id_worker2: {type: String},
    unidad: { type: Number, required: true },

    colocarSm1: Boolean,
    observacionesCs: String,

    retirarTm1: Boolean,
    observacionesRt: String,

    desconectarMm1: Boolean,
    observacionesDm: String,

    retirarTFm1: Boolean,
    observacionesRtf: String,

    bajarPm1: Boolean,
    observacionesBp: String,

    //2. MANTENIMIENTO DEL PANTOGRAFO
    conjuntoAR: Boolean,
    conjuntoAL: Boolean,
    conjuntoAC: Boolean,
    observacionesCam: String,

    conjuntoBR: Boolean,
    conjuntoBL: Boolean,
    conjuntoBE: Boolean,
    conjuntoBC: Boolean,
    observacionesCb: String,

    conjuntoBIR: Boolean,
    conjuntoBIL: Boolean,
    conjuntoBIE: Boolean,
    conjuntoBIC: Boolean,
    observacionesCbi: String,

    conjuntoER: Boolean,
    conjuntoEL: Boolean,
    conjuntoEE: Boolean,
    conjuntoEC: Boolean,
    observacionesCe: String,

    conjuntoBER: Boolean,
    conjuntoBEL: Boolean,
    conjuntoBEE: Boolean,
    conjuntoBEC: Boolean,
    observacionesCbe: String,

    conjuntoCR: Boolean,
    conjuntoCL: Boolean,
    conjuntoCE: Boolean,
    conjuntoCC: Boolean,
    observacionesCc: String,

    conjuntoAC: Boolean,
    observacionesCa: String,

    conjuntoMR: Boolean,
    conjuntoML: Boolean,
    conjuntoME: Boolean,
    conjuntoMC: Boolean,
    observacionesCm: String,

    conjuntoMSR: Boolean,
    conjuntoMSL: Boolean,
    conjuntoMSC: Boolean,
    observacionesCms: String,

    conjuntoVR: Boolean,
    conjuntoVL: Boolean,
    conjuntoVE: Boolean,
    conjuntoVC: Boolean,
    observacionesCv: String,

    //CONEXIONES FLEXIBLES
    verificarE8re: Boolean,
    observacionesVe8: String,

    verificarECre: Boolean,
    observacionesVec: String,

    aplicarGre: Boolean,
    observacionesAg: String,

    colocarMCre: Boolean,
    observacionesCmc: String,

    aplicarPre: Boolean,
    observacionesAp: String,

    //ARQUET NUEVO
    verificarVre: Boolean,
    observacionesVv: String,

    separacionBre: Boolean,
    observacionesSb: String,

    alizarAre: Boolean,
    observacionesAa: String,

    verificarTre: Boolean,
    observacionesVt: String,

    //MOTOR NEUMATICO(CON PRESION DE AIRE REGULADA)
    presionAre: Boolean,
    observacionesPa: String,

    presionRre: Boolean,
    observacionesPr: String,

    recorridoPre: Boolean,
    observacionesRp: String,

    alimentarCre: Boolean,
    observacionesAc: String,

    //LUBRICACION
    codigoCm: String,
    descipcionCm: String,
    reCm: Boolean,
    observacionesCmec: String,

    codigoCep: String,
    descipcionCep: String,
    reCep: Boolean,
    observacionesCep: String,

    codigoEn: String,
    descipcionEn: String,
    reEn: Boolean,
    observacionesEn: String,

    codigoPe: String,
    descipcionPe: String,
    rePe: Boolean,
    observacionesPe: String,

    //3. MONTAJE DE PANTOGRAFO
    subirPm1: Boolean,
    observacionesSp: String,

    colocarTm1: Boolean,
    observacionesCt: String,

    conectarMm1: Boolean,
    observacionesCm: String,

    conectarCm1: Boolean,
    observacionesCc: String,

    realizarAm1: Boolean,
    observacionesRa: String,

    //PARES DE APRIETE
    re1: Boolean,
    observaciones1: String,

    re2: Boolean,
    observaciones2: String,

    re3: Boolean,
    observaciones3: String,

    re4: Boolean,
    observaciones4: String,

    re5: Boolean,
    observaciones5: String,

    noSeriePantografo: Number,
    noSerieValvula: Number,

    //AJUSTES DEL PANTOGRAFO
    //ESFUERZO ESTATICO
    eE1: String,
    eE2: String,

    //ESTI
    esti: String,

    //TIEMPO DE ELEVACION Y DESCENSO
    ted1: String,
    ted2: String,

    ///DISTANCIA GANCHO TOPE 
    dgt: String,

    //ESFUERZO DE DISPARO
    fd1: String,
    fd2: String,

    //ESTANQUEIDAD
    voE: String,
    observacionesE: String,

    //material utilizado
    materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
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