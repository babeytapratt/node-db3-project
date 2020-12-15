const express = require('express');

const Steps = require('./steps-model');

const middleware = require('../../middleware/middleware');

const router = express.Router();

router.get('/', (req, res) => {
    Steps.find(req.query)
        .then(steps => {
            res.status(200).json({ steps })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the steps '})
        })
});

router.get('/:id', middleware.validateStepsId, (req, res) => {
    res.status(200).json({ step });
});

router.delete('/:id', middleware.validateStepsId, (req, res) => {
    Steps.remove(req.params.id)
        .then(count => {
            count > 0
            res.status(200).json({ message: 'The step has been deleted' })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error removing the step' })
        })
});

router.post('/:id/steps', (req, res) => {
    const stepData = req.body;
    const { id } = req.params;

    Steps.findById(id)
      .then(scheme => {
        if (scheme) {
          return Steps.addStep(stepData, id);
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id.' })
        }
      })
      .then(step => {
        res.status(201).json(step);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new step' });
      });
  });

router.put('/:id', middleware.validateStepsId, (req, res) => {
    const changes = req.body
    Steps.update(req.params.id, changes)
        .then(step => {
            res.status(200).json(step);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the step' })
        })
});

module.exports = router;
