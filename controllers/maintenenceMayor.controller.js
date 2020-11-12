var mmmaM01 = require('../models/maintenence-mayor');

const MMMA_M01 = {};

MMMA_M01.getMMMA_M01Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM01.findById(id)
    res.json(maintenance)
};
MMMA_M01.editMMMA_M01Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M01 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        colocarSm1: req.body || false,
        observacionesCs: req.body || '',

        retirarTm1: req.body || false,
        observacionesRt: req.body || '',

        desconectarMm1: req.body || false,
        observacionesDm: req.body || '',

        retirarTFm1: req.body || false,
        observacionesRtf: req.body || '',

        bajarPm1: req.body || false,
        observacionesBp: req.body || '',

        //2. MANTENIMIENTO DEL PANTOGRAFO
        conjuntoAR: req.body || false,
        conjuntoAL: req.body || false,
        conjuntoAC: req.body || false,
        observacionesCam: req.body || '',

        conjuntoBR: req.body || false,
        conjuntoBL: req.body || false,
        conjuntoBE: req.body || false,
        conjuntoBC: req.body || false,
        observacionesCb: req.body || '',

        conjuntoBIR: req.body || false,
        conjuntoBIL: req.body || false,
        conjuntoBIE: req.body || false,
        conjuntoBIC: req.body || false,
        observacionesCbi: req.body || '',

        conjuntoER: req.body || false,
        conjuntoEL: req.body || false,
        conjuntoEE: req.body || false,
        conjuntoEC: req.body || false,
        observacionesCe: req.body || '',

        conjuntoBER: req.body || false,
        conjuntoBEL: req.body || false,
        conjuntoBEE: req.body || false,
        conjuntoBEC: req.body || false,
        observacionesCbe: req.body || '',

        conjuntoCR: req.body || false,
        conjuntoCL: req.body || false,
        conjuntoCE: req.body || false,
        conjuntoCC: req.body || false,
        observacionesCc: req.body || '',

        conjuntoAC: req.body || false,
        observacionesCa: req.body || '',

        conjuntoMR: req.body || false,
        conjuntoML: req.body || false,
        conjuntoME: req.body || false,
        conjuntoMC: req.body || false,
        observacionesCm: req.body || '',

        conjuntoMSR: req.body || false,
        conjuntoMSL: req.body || false,
        conjuntoMSC: req.body || false,
        observacionesCms: req.body || '',

        conjuntoVR: req.body || false,
        conjuntoVL: req.body || false,
        conjuntoVE: req.body || false,
        conjuntoVC: req.body || false,
        observacionesCv: req.body || '',

        //CONEXIONES FLEXIBLES
        verificarE8re: req.body || false,
        observacionesVe8: req.body || '',

        verificarECre: req.body || false,
        observacionesVec: req.body || '',

        aplicarGre: req.body || false,
        observacionesAg: req.body || '',

        colocarMCre: req.body || false,
        observacionesCmc: req.body || '',

        aplicarPre: req.body || false,
        observacionesAp: req.body || '',

        //ARQUET NUEVO
        verificarVre: req.body || false,
        observacionesVv: req.body || '',

        separacionBre: req.body || false,
        observacionesSb: req.body || '',

        alizarAre: req.body || false,
        observacionesAa: req.body || '',

        verificarTre: req.body || false,
        observacionesVt: req.body || '',

        //MOTOR NEUMATICO(CON PRESION DE AIRE REGULADA)
        presionAre: req.body || false,
        observacionesPa: req.body || '',

        presionRre: req.body || false,
        observacionesPr: req.body || '',

        recorridoPre: req.body || false,
        observacionesRp: req.body || '',

        alimentarCre: req.body || false,
        observacionesAc: req.body || '',

        //LUBRICACION
        codigoCm: req.body || '',
        descipcionCm: req.body || '',
        reCm: req.body || false,
        observacionesCmec: req.body || '',

        codigoCep: req.body || '',
        descipcionCep: req.body || '',
        reCep: req.body || false,
        observacionesCep: req.body || '',

        codigoEn: req.body || '',
        descipcionEn: req.body || '',
        reEn: req.body || false,
        observacionesEn: req.body || '',

        codigoPe: req.body || '',
        descipcionPe: req.body || '',
        rePe: req.body || false,
        observacionesPe: req.body || '',

        //3. MONTAJE DE PANTOGRAFO
        subirPm1: req.body || false,
        observacionesSp: req.body || '',

        colocarTm1: req.body || false,
        observacionesCt: req.body || '',

        conectarMm1: req.body || false,
        observacionesCm: req.body || '',

        conectarCm1: req.body || false,
        observacionesCc: req.body || '',

        realizarAm1: req.body || false,
        observacionesRa: req.body || '',

        //PARES DE APRIETE
        re1: req.body || false,
        observaciones1: req.body || '',

        re2: req.body || false,
        observaciones2: req.body || '',

        re3: req.body || false,
        observaciones3: req.body || '',

        re4: req.body || false,
        observaciones4: req.body || '',

        re5: req.body || false,
        observaciones5: req.body || '',

        noSeriePantografo: req.body || 0,
        noSerieValvula: req.body || 0,

        //AJUSTES DEL PANTOGRAFO
        //ESFUERZO ESTATICO
        eE1: req.body || '',
        eE2: req.body || '',

        //ESTI
        esti: req.body || '',

        //TIEMPO DE ELEVACION Y DESCENSO
        ted1: req.body || '',
        ted2: req.body || '',

        ///DISTANCIA GANCHO TOPE 
        dgt: req.body || '',

        //ESFUERZO DE DISPARO
        fd1: req.body || '',
        fd2: req.body || '',

        //ESTANQUEIDAD
        voE: req.body || '',
        observacionesE: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM01.findByIdAndUpdate(id, { $set: MMMA_M01}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M01.getAllMaintenenceMMMA_M01 = async (req, res) => {
    const maintenances = await mmmaM01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M01New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM01.findByIdAndUpdate(id, { $set: historyMMMA_M01New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M01.createMaintenenceMMMA_M01 = async (req, res) => {
    const maintenence = new mmmaM01(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M01;