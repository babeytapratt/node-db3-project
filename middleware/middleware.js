const Schemes = require('../api/schemes/scheme-model');
const Steps = require('../api/steps/steps-model');

const validateSchemesId = async (req, res, next) => {
    const { id } = req.params;
    try {
        const schemes = await Schemes.findById(id);
        if (!scheme) {
            res.status(404).json({ message: `Scheme with id ${id} not found`});
        } else {
            req.scheme = scheme;
            next();
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the scheme' });
    }
};

const validateStepsId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const step = await Steps.getById(id);
      if (!step) {
        res.status(404).json({ message: `Step with id ${id} not found`});
      } else {
        req.post = step;
        next();
      }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the step', error: error.message })
      }
};

module.exports = {
    validateStepsId,
    validateSchemesId,
};
