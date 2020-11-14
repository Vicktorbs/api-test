var memeB03 = require('../models/maintenence-b');

const MEME_B03 = {};

MEME_B03.getMEME_B03Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeB03.findById(id)
    res.json(maintenance)
};
MEME_B03.editMEME_B03Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    console.log(req.body);
    const MEME_B03 = {
        noInspeccion: req.body.noInspeccion || '',
        kilometraje: req.body.kilometraje || 0,
        horaInicio: req.body.horaInicio || '',
        horaTerminacion: req.body.horaTerminacion || '',
        clave: req.body.clave || '',

        vigaL: req.body.vigaL,
        vigaR: req.body.vigaR,
        vigaF: req.body.vigaF,
        observacionesV: req.body.observacionesV,
        
        unionL: req.body.unionL,
        unionR: req.body.unionR,
        unionF: req.body.unionF,
        observacionesU: req.body.observacionesU,
        
        discoL: req.body.discoL,
        discoR: req.body.discoR,
        discoF: req.body.discoF,
        observacionesD: req.body.observacionesD,
        
        revestL: req.body.revestL,
        revestR: req.body.revestR,
        revestA: req.body.revestA,
        observacionesR: req.body.observacionesR,
        
        fuellesL: req.body.fuellesL,
        fuellesR: req.body.fuellesR,
        observacionesF: req.body.observacionesF,
        
        alojamientoL: req.body.alojamientoL,
        alojamientoR: req.body.alojamientoR,
        alojamientoA: req.body.alojamientoA,
        observacionesA: req.body.observacionesA,

        tapasL: req.body.tapasL,
        tapasR: req.body.tapasR,
        tapasF: req.body.tapasF,
        tapasA: req.body.tapasA,
        observacionesT: req.body.observacionesT,
        
        tapaspL: req.body.tapaspL,
        tapaspR: req.body.tapaspR,
        tapaspF: req.body.tapaspF,
        tapaspA: req.body.tapaspA,
        observacionesTp: req.body.observacionesTp,
        
        moldurastL: req.body.moldurastL,
        moldurastR: req.body.moldurastR,
        moldurastA: req.body.moldurastA,
        observacionesMt: req.body.observacionesMt,
        
        nylamidL: req.body.nylamidL,
        nylamidR: req.body.nylamidR,
        nylamidE: req.body.nylamidE,
        nylamidA: req.body.nylamidA,
        nylamidD: req.body.nylamidD,
        observacionesN: req.body.observacionesN,
        
        frentesM1L: req.body.frentesM1L,
        frentesM1R: req.body.frentesM1R,
        frentesM1A: req.body.frentesM1A,
        observacionesFm1: req.body.observacionesFm1,
        
        frentesM2L: req.body.frentesM2L,
        frentesM2R: req.body.frentesM2R,
        frentesM2A: req.body.frentesM2A,
        observacionesFm2: req.body.observacionesFm2,
        
        cableadoL: req.body.cableadoL,
        cableadoR: req.body.cableadoR,
        observacionesC: req.body.observacionesC,

        manguerasL: req.body.manguerasL,
        manguerasR: req.body.manguerasR,
        observacionesM: req.body.observacionesM,
        
        cofreL: req.body.cofreL,
        cofreR: req.body.cofreR,
        cofreA: req.body.cofreA,
        observacionesCe: req.body.observacionesCe,
        
        observaciones: req.body.observaciones,

        materialUtilizado: materiales,
    };
    await memeB03.findByIdAndUpdate(id, { $set: MEME_B03}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B03.getAllMaintenenceMEME_B03 = async (req, res) => {
    const maintenances = await memeB03.find({}, {
        "_id": 1, 
        "noTren": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    console.log(maintenances);
    res.json(maintenances)
}
MEME_B03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B03New = {
        historyFile: req.body.historyFile || []
    }
    await memeB03.findByIdAndUpdate(id, { $set: historyMEME_B03New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B03.createMaintenenceMEME_B03 = async (req, res) => {
    const maintenence = new memeB03(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B03;