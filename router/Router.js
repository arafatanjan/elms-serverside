// import { Router } from "express";
const express= require('express'); 
const router =  express.Router();

/** import controllers */
const quizController = require('../controllers/Controller.js');

/** Questions Routes API */

  router.route('/questions')
        .get(quizController.getQuestions) /** GET Request */
        .post(quizController.insertQuestions) /** POST Request */       
        .delete(quizController.dropQuestions) /** DELETE Request */
// export default router;


router.route('/result')
        .get(quizController.getResult)
        .post(quizController.storeResult)
        .delete(quizController.dropResult)

 module.exports= router;