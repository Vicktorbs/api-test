// Definicion de los esquemas de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir nuevo esquema de la base de datos para modelar los datos de los empleados
const MaintenenceTypeA = new Schema({
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    unidad: { type: Number, required: true },
    kilometraje: { type: Number },
    ubicacion: { type: String },
    hora_inicio: { type: String },
    hora_termino: { type: String },

    //Preparacion de material
    //otonera encendido /apagado
    tizqm1: Boolean,
    tizqm2: Boolean,
    tizqobs: String,

    bbm1: Boolean,
    bbm2: Boolean,
    bbmobs: String,

    vom1: Number,
    vom2: Number,
    ilum1: Boolean, //aplica solo en TE-06/12
    ilum2: Boolean, //aplica solo en TE-06/12

    sacm1: Boolean,
    sacm2: Boolean,
    sacobs: String,
    
    aspm1: Boolean,
    aspm2: Boolean,
    aspobs: String,
    
    //Ventilacion
    vpm1: Boolean,
    vpm2: Boolean,
    vpmobs: String,
    vcm1: Boolean,
    vcm2: Boolean,
    vbm1: Boolean, //solo en TE-06/12
    vbm2: Boolean, //solo en TE-06/12
    vam1: Boolean,//solo en TE-06/12
    vam2: Boolean,//solo en TE-06/12

    //carteros
    cvm1: Boolean,
    cvm2: Boolean,
    cvobs: String,

    cam1: Boolean,
    cam2: Boolean,
    caobs: String,

    //desacoplamiento
    dmm1: Boolean,
    dmm2: Boolean,
    dmobs: String,

    dem1: Boolean,
    dem2: Boolean,
    bbim1: Boolean, //solo en TE-06/12
    bbim2: Boolean, //solo en TE-06/12

    dnm1: Boolean,
    dnm2: Boolean,
    bbilm1:Boolean, //solo en TE-06/12
    bbilm2:Boolean, //solo en TE-06/12

    //anuncio
    bapm1: Boolean,
    bapm2: Boolean,
    volm1: Boolean, //solo en TE-90/95
    volm2: Boolean, //solo en TE-90/95
    micrm1: Boolean, //solo en TE-90/95
    micrm2: Boolean, //solo en TE-90/95

    baim1: Boolean,
    baim2: Boolean,
    vol2m1: Boolean, //solo en TE-90/95
    vol2m2: Boolean, //solo en TE-90/95
    micr2m1: Boolean, //solo en TE-90/95
    micr2m2: Boolean, //solo en TE-90/95

    //Limpia parabrisas
    veAlm1:Boolean,
    veAlm2:Boolean,
    veAlobs: String,

    vebam1: Boolean,
    vebam2: Boolean,
    vebaobs: String,
    
    //lavaparabrisas
    lpm1: Boolean,
    lpm2: Boolean,
    lpobs: String,

    //Fanales de transito rojos
    ftrm1: Boolean,//solo en TE-06/12
    ftrm2: Boolean,//solo en TE-06/12

    //-----------Mandos--------------
    
    kpm1: Boolean,
    kpm2: Boolean,
    kpobs: String,
    
    cm1: Boolean,
    cm2: Boolean,
    cobs: String,
    
    chcm1:Boolean,
    chcm2:Boolean,
    chcobs: String,

    smm1: Boolean,
    smm2: Boolean,
    smobs: String,
    
    mam1: Boolean,
    mam2: Boolean,
    ahm90m1: Boolean,
    ahm90m2: Boolean,
    ahm95m1: Boolean,
    ahm95m2: Boolean,
    ahm06m1: Boolean,
    ahm06m2: Boolean,
    ahm12m1: Boolean,
    ahm12m2: Boolean,

    sclm1: Boolean,//solo en TE-06/12
    sclm2: Boolean,//solo en TE-06/12

    //sistema de comunicaciones
    scpm1: Boolean,
    scpm2: Boolean,
    pihmim1: Boolean,
    pihmim2: Boolean,//solo en TE-06/12 y trenes modificados
    scim1: Boolean,//solo en TE-06/12 y trenes modificados
    scim2: Boolean,//solo en TE-06/12 y trenes modificados
    scam1: Boolean,//solo en TE-06/12 y trenes modificados
    scam2: Boolean,//solo en TE-06/12 y trenes modificados

    lbdsm1: Boolean, //No aplica en TE-06/12 No operar boton rojo en TE-90/95
    lbdsm2: Boolean, //No aplica en TE-06/12 No operar boton rojo en TE-90/95

    hbceam1: Boolean,//Solamente TE-06/12
    hbceam2: Boolean,//Solamente TE-06/12

    ftam1: Boolean,
    ftam2: Boolean,
    ftaobs: String,

    //Bloqueo de Señalizacion
    bpm1: Boolean,
    bpm2: Boolean,
    bpobs: String,

    bsam1: Boolean,
    bsam2: Boolean,
    bsaim1: Boolean, //Solamente TE-06/12
    bsaim2: Boolean, //Solamente TE-06/12

    kfspm1: Boolean, //Solamente TE-06/12
    kfspm2: Boolean, //Solamente TE-06/12

    //torreta
    tlm1: Boolean,
    tlm2: Boolean,
    tlobs: String,

    bpapm1: Boolean,
    bpapm2: Boolean,
    bpapim1: Boolean,
    bpapim2: Boolean,

    baam1: Boolean,//No aplica en TE-95
    baam2: Boolean,//No aplica en TE-95

    //Botonera de anuncio de salida/cierre
    badm1: Boolean,
    badm2: Boolean,
    badim1: Boolean,
    badim2: Boolean,

    baambasm1: Boolean,
    baambasm2: Boolean,
    baaim1: Boolean,
    baaim2: Boolean,

    baizqm1: Boolean,
    baizqm2: Boolean,
    baizqim1: Boolean,
    baizqim2: Boolean,
    
    //Puertas
    pdm1: Boolean,
    pdm2: Boolean,
    pdm1s: Boolean,
    pdm2s: Boolean,
    pdm1b: Boolean,
    pdm2b: Boolean,

    pam1: Boolean,
    pam2: Boolean,
    pam1s: Boolean,
    pam2s: Boolean,
    pam1b: Boolean,
    pam2b: Boolean,

    pizqm1: Boolean,
    pizqm2: Boolean,
    pizqm1s: Boolean,
    pizqm2s: Boolean,
    pizqm1b: Boolean,
    pizqm2b: Boolean,

    lcmm1: Boolean,
    lcmm2: Boolean,
    lcmobs: String,

    tmgm1: Boolean,
    tmgm2: Boolean,
    tmgobs: String,

    //Puerta de operador
    potizqm1: Boolean,
    potizqm2: Boolean,
    potizqobs: String,

    pobbm1: Boolean,
    pobbm2: Boolean,
    pobbobs: String,

    //Lamparas falla fusible
    fmm1: Boolean,//No aplica en TE-06/12
    fmm2: Boolean,//No aplica en TE-06/12

    //letrero de ruta
    lrim1: Boolean, //Solamente TE-90/95
    lrim2: Boolean, //Solamente TE-90/95

    lrdm1: Boolean, //solo en TE-06/12 y trenes modificados
    lrdm2: Boolean, //solo en TE-06/12 y trenes modificados

    //Selector mando fanales HERE
    smfpm1: Boolean,
    smfpm2: Boolean,
    smfpobs: String,

    smfam1: Boolean,
    smfam2: Boolean,
    smfaobs: String,

    sbclm1: Boolean,
    sbclm2: Boolean,
    sbclm1i: Boolean, //TE-90/95 y TE-06/12
    sbclm2i: Boolean, //TE-90/95 y TE-06/12

    //Motocompresor
    mnm1: Boolean,
    mnm2: Boolean,
    mnpa: Number,
    mnpp: Number,

    mscdm1: Boolean,
    mscdm2: Boolean,
    mscdm1vf: Boolean,
    mscdm2vf: Boolean,

    opevsm1: Boolean,
    opevsm2: Boolean,
    opevsobs: String,

    opevam1: Boolean, //No aplica en TE-06/12
    opevam2: Boolean,//No aplica en TE-06/12

    stbm1: Boolean,//Solamente TE-90/95
    stbm2: Boolean,//Solamente TE-90/95
    litbm1: Boolean,//Solamente TE-90/95
    litbm2: Boolean,//Solamente TE-90/95
    plom1: Boolean,//Solamente TE-90/95
    plom2: Boolean,//Solamente TE-90/95
    
    slfpm1: Boolean,//Solamente TE-90/95
    slfpm2: Boolean,//Solamente TE-90/95
    slfpplomo: Boolean,//Solamente TE-90/95
    
    snprsdm1: Boolean, // TE-06/12
    snprsdm2: Boolean, // TE-06/12

    sfem1: Boolean, 
    sfem2: Boolean, 
    sfeobs: String,

    srum1: Boolean, // TE-06/12
    srum2: Boolean, // TE-06/12

    //Claxon
    cem1: Boolean,
    cem2: Boolean,
    ceam1: Boolean,
    ceam2: Boolean,
    cegm1: Boolean,
    cegm2: Boolean,
    
    cnm1: Boolean,
    cnm2: Boolean,
    cnobs: String,

    akfsm1: Boolean,
    akfsm2: Boolean,
    akfsobs: String,

    tfem1: Boolean,
    tfem2: Boolean,
    tfeobs: String,

    veom1: Boolean,
    veom2: Boolean,
    veom1i: Boolean,
    veom2i: Boolean,

    //Varios
    //Extinguidor
    extcm1: Boolean,
    extcm2: Boolean,
    extcNsm1: String,
    extsm1: Boolean,
    extsm2: Boolean,
    extsNsm2: String,
    
    //Asientos de operador
    aom1: Boolean,
    aom2: Boolean,
    aoObs: String,

    //Ventanas de cabina
    vcdm1: Boolean,
    vcdm2: Boolean,
    vcdmm1: Boolean,
    vcdmm2: Boolean,

    vcim1: Boolean,
    vcim2: Boolean,
    vcimm1: Boolean,
    vcimm2: Boolean,

    //Mantas de letrero de ruta
    lem1: Boolean,
    lem2: Boolean,
    lema1: Boolean, //Solamente TE-90/95
    lema2: Boolean, //Solamente TE-90/95
    mrum1: Boolean, 
    mrum2: Boolean, 
    mrum1m: Boolean, //Solamente TE-90/95
    mrum2m: Boolean, //Solamente TE-90/95
    mrdm1: Boolean,
    mrdm2: Boolean,
    mrdm1m: Boolean, //Solamente TE-90/95
    mrdm2m: Boolean,//Solamente TE-90/95

    //Para sol
    ppm1: Boolean,
    ppm2: Boolean,
    ppobs: String,

    pvcm1: Boolean, //Solamente TE-06/12
    pvcm2: Boolean, //Solamente TE-06/12

    pcm1: Boolean,
    pcm2: Boolean,
    pcm1b: Boolean,
    pcm2b: Boolean,
    pcm1cc: Boolean,
    pcm2cc: Boolean,

    //Ventanas largas
    vldm1: Boolean,
    vldm2: Boolean,
    vldm1m: Boolean,
    vldm2m: Boolean,

    vlim1: Boolean,
    vlim2: Boolean,
    vlim1m: Boolean,
    vlim2m: Boolean,

    vecdm1: Boolean,
    vecdm2: Boolean,
    vecdm1m: Boolean,
    vecdm2m: Boolean,

    vecim1: Boolean,
    vecim2: Boolean,
    vecim1m: Boolean,
    vecim2m: Boolean,

    //Asiento de articulacion
    aadm1: Boolean,
    aadm2: Boolean,
    aadobs: String,

    aaim1: Boolean,
    aaim2: Boolean,
    aaiobs: String,

    //Asientos salon de pasajeros
    aspdm1: Boolean,
    aspdm2: Boolean,
    aspdobs: String,

    aspim1: Boolean,
    aspim2: Boolean,
    aspiobs: String,

    //Pasamanos horizontales
    phdm1: Boolean,
    phdm2: Boolean,
    phdobs: String,
    
    phim1: Boolean,
    phim2: Boolean,
    phiobs: String,

    //Varios
    psmvdm1: Boolean,
    psmvdm2: Boolean,
    psmvdobs: String,

    psmvim1: Boolean,
    psmvim2: Boolean,
    psmviobs: String,

    pspm1: Boolean,
    pspm2: Boolean,
    pspobs: String,

    partm1: Boolean,
    partm2: Boolean,
    partmm1: Boolean,
    partmm2: Boolean,

    //umbrales de puertas
    updm1: Boolean,
    updm2: Boolean,
    updobs: String,

    upim1: Boolean,
    upim2: Boolean,
    upiobs: String,

    tzdm1: Boolean,
    tzdm2: Boolean,
    tzdobs: String,

    tzim1: Boolean,
    tzim2: Boolean,
    tziobs: String,

    fadm1: Boolean,
    fadm2: Boolean,
    fadobs: String,
    
    fasm1: Boolean,
    fasm2: Boolean,
    fasobs: String,

    faim1: Boolean,
    faim2: Boolean,
    faiobs: String,

    fspdm1: Boolean,
    fspdm2: Boolean,
    fspdobs: String,

    fspsm1: Boolean,
    fspsm2: Boolean,
    fspsobs: String,

    fspim1: Boolean,
    fspim2: Boolean,
    fspiobs: String,
    
    mvm1: Boolean,
    mvm2: Boolean,
    mvobs: String,

    rcm1: Boolean,
    rcm2: Boolean,
    rcobs: String,

    rfam1: Boolean,
    rfam2: Boolean,
    rfaobs: String,
    
    dom1: Boolean,
    dom2: Boolean,
    dorm1: Boolean,
    dorm2: Boolean,
    dolm1: Boolean,
    dolm2: Boolean,

    apmm1: Boolean,
    apmm2: Boolean,
    apmobs: String,
    
    //valvulas de corte neumatico
    ssm1: Boolean,
    ssm2: Boolean,
    ssobs: String,
    
    acm1: Boolean,
    acm2: Boolean,
    acobs: String,
    
    pantm1: Boolean,
    pantm2: Boolean,
    pantobs: String,

    obs: String,

    //Materiales
    materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
            unit: String
        }]
    },

    //Ventanas 
    vidrios: {
        vagonM1: {
            izquierda: {
                vidIzquierda1 : String,
                vidIzquierda2 : String,
                vidIzquierda3 : String,
                vidIzquierda4 : String,
                vidIzquierda5 : String,
                vidIzquierda6 : String,
                vidIzquierda7 : String,
                vidIzquierda8 : String,
                vidIzquierda9 : String,
                vidIzquierda10: String,
                vidIzquierda11: String
            },
            derecha: {
                vidDerecha1 : String,
                vidDerecha2 : String,
                vidDerecha3 : String,
                vidDerecha4 : String,
                vidDerecha5 : String,
                vidDerecha6 : String,
                vidDerecha7 : String,
                vidDerecha8 : String,
                vidDerecha9 : String,
                vidDerecha10: String,
                vidDerecha11: String
            },
            frente: {
                frente1: String,
                frente2: String,
                frente3: String
            }
        },
        vagonM2: {
            izquierda: {
                vidIzquierda1 : String,
                vidIzquierda2 : String,
                vidIzquierda3 : String,
                vidIzquierda4 : String,
                vidIzquierda5 : String,
                vidIzquierda6 : String,
                vidIzquierda7 : String,
                vidIzquierda8 : String,
                vidIzquierda9 : String,
                vidIzquierda10: String,
                vidIzquierda11: String
            },
            derecha: {
                vidDerecha1 : String,
                vidDerecha2 : String,
                vidDerecha3 : String,
                vidDerecha4 : String,
                vidDerecha5 : String,
                vidDerecha6 : String,
                vidDerecha7 : String,
                vidDerecha8 : String,
                vidDerecha9 : String,
                vidDerecha10: String,
                vidDerecha11: String
            },
            frente: {
                frente1: String,
                frente2: String,
                frente3: String
            }
        }
    },

    //Luminarias
    luminarias: {
        vagonM1:{
            aSide: {
                a1: String,
                a2: String,
                a3: String,
                a4: String,
                a5: String,
                a6: String,
                a7: String,
                a8: String,
                a9: String
            },
            bSide: {
                b1: String,
                b2: String,
                b3: String,
                b4: String,
                b5: String,
                b6: String,
                b7: String,
                b8: String,
                b9: String
            }
        },
        vagonM2:{
            aSide: {
                a1: String,
                a2: String,
                a3: String,
                a4: String,
                a5: String,
                a6: String,
                a7: String,
                a8: String,
                a9: String,
            },
            bSide: {
                b1: String,
                b2: String,
                b3: String,
                b4: String,
                b5: String,
                b6: String,
                b7: String,
                b8: String,
                b9: String,
            }
        }
    },
    
    nuevaMarca: {
        numberOfMarks: Number,
        arr: [{
            _id: String,
            marcaNumber: String,
            description: String
        }]
    },

    //origen de ingreso al mantenimiento
    origenIngreso: String,

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

// Pasando a modelo de datos de mongoose
module.exports = mongoose.model('TypeA', MaintenenceTypeA);
