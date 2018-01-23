import express from 'express';
import mongoose from 'mongoose';
import Contract from '../models/contract.js';

const router = express.Router();

router.get('/', function(req, res) {
  Contract.find(function(err, contracts) {
      if (err)
          res.send(err);

      res.json(contracts);
  });
});
router.get('/:id', function(req, res, next) {
  Contract.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})
router.post('/', function(req, res) {
  var contract = new Contract(),
    contractData = {
      with: {
        name: req.body.with.name,
        _id: req.body.with._id
      },
      signed: req.body.signed,
      md: req.body.md,
      clientMd: req.body.clientMd,
      role: req.body.role,
      from: req.body.from,
      to: req.body.to,
      payDate: req.body.payDate,
      client: req.body.client
    };

  Object.assign(contract, contractData);

  contract.save(function(err) {
    if (err)
      res.send(err);
    
    res.json({ message: 'Contract created' });
  });
});

router.put('/:id', function(req, res, next) {
  Contract.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Contract.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;