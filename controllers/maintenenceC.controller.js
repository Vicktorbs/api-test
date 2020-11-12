var memeC01 = require('../models/maintenence-c');
const MEME_C01 = {};

MEME_C01.getMEME_C01Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeC01.findById(id)
    res.json(maintenance)
};
MEME_C01.editMEME_C01Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MEME_C01 = {
        //date_created: req.body.data || '',
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
        
        revision: req.body.rev,
        sopleteado: req.body.sop,
        limpieza: req.body.limp,
        
        revisionM2: req.body.rev2,
        sopleteadoM2:req.body.sop2,
        limpiezaM2: req.body.limp2,
        
        revisionPM1: req.body.revPm1,
        sopleteadoPM1:req.body.sopPM1,
        limpiezaPM1: req.body.limpPM1,
        
        revisionPM2: req.body.revPM2,
        sopleteadoPM2:req.body.sopPM2,
        limpiezaPM2: req.body.limpPM2,
        
        revisionSM1: req.body.revSM1,
        sopleteadoSM1:req.body.sopSM1,
        limpiezaSM1: req.body.limpSM1,
        
        revisionSM2: req.body.revSM2,
        sopleteadoSM2: req.body.sopSM2,
        limpiezaSM2: req.body.limpSM2,
        
        revisionVM1: req.body.revVM1,
        sopleteadoVM1: req.body.sopVM1,
        limpiezaVM1: req.body.limpVM1,
        
        revisionVM2: req.body.revVM2,
        sopleteadoVM2: req.body.sopVM2,
        limpiezaVM2: req.body.limpVM2,
        
        revisionEM1: req.body.revEM1,
        sopleteadoEM1: req.body.sopEM1,
        limpiezaEM1: req.body.limpEM1,
        
        revisionEM2: req.body.revEM2,
        sopleteadoEM2:req.body.sopEM2,
        limpiezaEM2: req.body.limpEM2,
        
        revisionMM1: req.body.revMM1,
        sopleteadoMM1:req.body.sopMM1,
        limpiezaMM1: req.body.limpMM1,
        
        revisionMM2: req.body.revMM2,
        sopleteadoMM2:req.body.sopMM2,
        limpiezaMM2: req.body.limpMMM2,
        
        revisionAM1: req.body.revAM1,
        sopleteadoAM1:req.body.sopAM1,
        limpiezaAM1: req.body.limpAM1,
        
        revisionAM2: req.body.revAM2,
        sopleteadoAM2:req.body.sopAM2,
        limpiezaAM2: req.body.limpAM2,
        
        revisionCM1: req.body.revCM1,
        sopleteadoCM1:req.body.sopCM1,
        limpiezaCM1: req.bodylimpCM1,
        
        revisionCM2: req.body.revCM2,
        sopleteadoCM2:req.body.sopCM2,
        limpiezaCM2: req.body.sopCM2,
        
        //caja de conexiones
        revisionTM1: req.body.revTM1,
        sopleteadoTM1: req.body.sopTM1,
        limpiezaTM1: req.body.limpTM1,
        
        revisionTM2: req.body.revTM2,
        sopleteadoTM2: req.body.sopTM2,
        limpiezaTM2: req.body.limpTM2,
        
        revisionToM1: req.body.revToM1,
        sopleteadoToM1: req.body.sopToM1,
        limpiezaToM1: req.body.limpToM1,
        
        revisionToM2: req.body.revToM2,
        sopleteadoToM2: req.body.sopToM2,
        limpiezaToM2: req.body.limpToM2,
        
        revisionRM1: req.body.revRM1,
        sopleteadoRM1: req.body.sopRM1,
        limpiezaRM1: req.body.limpRM1,
        
        revisionRM2: req.body.revRM2,
        sopleteadoRM2: req.body.sopRM2,
        limpiezaRM2: req.body.limpRM2,
        
        revisionBM1: req.body.revBM1,
        sopleteadoBM1: req.body.sopBM1,
        limpiezaBM1: req.body.limpBM1,
        
        revisionBM2: req.body.revBM2,
        sopleteadoBM2: req.body.sopBM2,
        limpiezaBM2: req.body.limpBM2,

        observaciones: req.body.obs || '',
        materialUtilizado: materiales,
    };
    await memeC01.findByIdAndUpdate(id, { $set: MEME_C01}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_C01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_C01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_C01.getAllMaintenenceMEME_C01 = async (req, res) => {
    const maintenances = await memeC01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_C01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_C01New = {
        historyFile: req.body.historyFile || []
    }
    await memeC01.findByIdAndUpdate(id, { $set: historyMEME_C01New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_C01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeC01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_C01.createMaintenenceMEME_C01 = async (req, res) => {
    const maintenence = new memeC01(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_C01;