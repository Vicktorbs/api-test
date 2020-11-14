var memeC01 = require('../models/maintenence-c');
const MEME_C01 = {};

MEME_C01.getMEME_C01Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeC01.findById(id)
    console.log(maintenance);
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
        noInspeccion: req.body.noInspeccion || '',
        noTren: req.body.noTren || '',
        kilometraje: req.body.kilometraje || 0,
        horaInicio: req.body.horaInicio || '',
        horaTerminacion: req.body.horaTerminacion || '',
        
        revision: req.body.revision,
        sopleteado: req.body.sopleteado,
        limpieza: req.body.limpieza,
        
        revisionM2: req.body.revisionM2,
        sopleteadoM2:req.body.sopleteadoM2,
        limpiezaM2: req.body.limpiezaM2,
        
        revisionPM1: req.body.revisionPM1,
        sopleteadoPM1:req.body.sopleteadoPM1,
        limpiezaPM1: req.body.limpiezaPM1,
        
        revisionPM2: req.body.revisionPM2,
        sopleteadoPM2:req.body.sopleteadoPM2,
        limpiezaPM2: req.body.limpiezaPM2,
        
        revisionSM1: req.body.revisionSM1,
        sopleteadoSM1:req.body.sopleteadoSM1,
        limpiezaSM1: req.body.limpiezaSM1,
        
        revisionSM2: req.body.revisionSM2,
        sopleteadoSM2: req.body.sopleteadoSM2,
        limpiezaSM2: req.body.limpiezaSM2,
        
        revisionVM1: req.body.revisionVM1,
        sopleteadoVM1: req.body.sopleteadoVM1,
        limpiezaVM1: req.body.limpiezaVM1,
        
        revisionVM2: req.body.revisionVM2,
        sopleteadoVM2: req.body.sopleteadoVM2,
        limpiezaVM2: req.body.limpiezaVM2,
        
        revisionEM1: req.body.revisionEM1,
        sopleteadoEM1: req.body.sopleteadoEM1,
        limpiezaEM1: req.body.limpiezaEM1,
        
        revisionEM2: req.body.revisionEM2,
        sopleteadoEM2:req.body.sopleteadoEM2,
        limpiezaEM2: req.body.limpiezaEM2,
        
        revisionMM1: req.body.revisionMM1,
        sopleteadoMM1:req.body.sopleteadoMM1,
        limpiezaMM1: req.body.limpiezaMM1,
        
        revisionMM2: req.body.revisionMM2,
        sopleteadoMM2:req.body.sopleteadoMM2,
        limpiezaMM2: req.body.limpiezaMM2,
        
        revisionAM1: req.body.revisionAM1,
        sopleteadoAM1:req.body.sopleteadoAM1,
        limpiezaAM1: req.body.limpiezaAM1,
        
        revisionAM2: req.body.revisionAM2,
        sopleteadoAM2:req.body.sopleteadoAM2,
        limpiezaAM2: req.body.limpiezaAM2,
        
        revisionCM1: req.body.revisionCM1,
        sopleteadoCM1:req.body.sopleteadoCM1,
        limpiezaCM1: req.body.limpiezaCM1,
        
        revisionCM2: req.body.revisionCM2,
        sopleteadoCM2:req.body.sopleteadoCM2,
        limpiezaCM2: req.body.limpiezaCM2,
        
        //caja de conexiones
        revisionTM1: req.body.revisionTM1,
        sopleteadoTM1: req.body.sopleteadoTM1,
        limpiezaTM1: req.body.limpiezaTM1,
        
        revisionTM2: req.body.revisionTM2,
        sopleteadoTM2: req.body.sopleteadoTM2,
        limpiezaTM2: req.body.limpiezaTM2,
        
        revisionToM1: req.body.revisionToM1,
        sopleteadoToM1: req.body.sopleteadoToM1,
        limpiezaToM1: req.body.limpiezaToM1,
        
        revisionToM2: req.body.revisionToM2,
        sopleteadoToM2: req.body.sopleteadoToM2,
        limpiezaToM2: req.body.limpiezaToM2,
        
        revisionRM1: req.body.revisionRM1,
        sopleteadoRM1: req.body.sopleteadoRM1,
        limpiezaRM1: req.body.limpiezaRM1,
        
        revisionRM2: req.body.revisionRM2,
        sopleteadoRM2: req.body.sopleteadoRM2,
        limpiezaRM2: req.body.limpiezaRM2,
        
        revisionBM1: req.body.revisionBM1,
        sopleteadoBM1: req.body.sopleteadoBM1,
        limpiezaBM1: req.body.limpiezaBM1,
        
        revisionBM2: req.body.revisionBM2,
        sopleteadoBM2: req.body.sopleteadoBM2,
        limpiezaBM2: req.body.limpiezaBM2,

        observaciones: req.body.observaciones || '',
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
        "noTren": 1, 
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