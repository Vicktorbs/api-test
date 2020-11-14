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
    let equipos = {
        numberOfEquipo: req.body.numberOfEquipmentInputs,
        arr: req.body.equipments
    }
    const MMMA_M01 = {
        noInspeccion: req.body.noInspeccion || '',
        kilometraje: req.body.kilometraje || 0,
        horaInicio: req.body.horaInicio,
        horaTerminacion: req.body.horaTerminacion,
        fechaInicio: req.body.fechaInicio,
        fechaTerminacion: req.body.fechaTerminacion,
        
        observacions1: req.body.observacions1,
    
        terminalTensionVF: req.body.terminalTensionVF,
        terminalTensionL: req.body.terminalTensionL,
        terminalTensionF: req.body.terminalTensionF,
    
        cubiertaPorcelanaVF: req.body.cubiertaPorcelanaVF,
        cubiertaPorcelanaL: req.body.cubiertaPorcelanaL,
        cubiertaPorcelanaF: req.body.cubiertaPorcelanaF,
    
        orificioGasVF: req.body.orificioGasVF,
        orificioGasL: req.body.orificioGasL,
        orificioGasF: req.body.orificioGasF,
    
        coneccionTierraVF: req.body.coneccionTierraVF,
        coneccionTierraL: req.body.coneccionTierraL,
        coneccionTierraF: req.body.coneccionTierraF,
    
        orificioLluviaVF: req.body.orificioLluviaVF,
        orificioLluviaL: req.body.orificioLluviaL,
        orificioLluviaF: req.body.orificioLluviaF,
    
        orificioFijacionVF: req.body.orificioFijacionVF,
        orificioFijacionL: req.body.orificioFijacionL,
        orificioFijacionF: req.body.orificioFijacionF,
    
        tornilleriaVF: req.body.tornilleriaVF,
        tornilleriaL: req.body.tornilleriaL,
        tornilleriaF: req.body.tornilleriaF,
    
        resistenciNLineal100: req.body.resistenciNLineal100,
        resistenciNLineal200: req.body.resistenciNLineal200,
    
        observacions2: req.body.observacions2,    

        materialUtilizado: materiales,

        equipoUtilizado: equipos

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
        "noTren": 1, 
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