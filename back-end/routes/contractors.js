import express from 'express';
import mongoose from 'mongoose';
import Contractor from '../models/contractor.js';

const router = express.Router();

router.get('/', function(req, res) {
  Contractor.find(function(err, contractors) {
      if (err)
          res.send(err);
      res.json(contractors);
  });
});

router.get('/:id', function(req, res, next) {
  Contractor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})
router.post('/', function(req, res) {
  var contractor = new Contractor(),
      contractorData = {
        name: req.body.name,
        md: req.body.md,
        role: req.body.role,
        freeFrom: req.body.freeFrom,
        firstExperience: req.body.firstExperience
      };

  Object.assign(contractor, contractorData);
  contractor.save(function(err) {
    if (err)
      res.send(err);
    
    res.json({ message: 'Contractor created' });
  });
});

router.put('/:id', function(req, res, next) {
  Contractor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Contractor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;