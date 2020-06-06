import express from "express";
import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi } from "celebrate";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig)

const pointsController = new PointsController();
const itemsController = new ItemsController();

// Listar Items
routes.get("/items", itemsController.index);

// Listar Ponto de Coleta
routes.get("/points", pointsController.index);

// Listar Ponto de Coleta Específico
routes.get('/points/:id', pointsController.show)

// Deletar Ponto de Coleta
routes.delete("/points/:id", pointsController.delete);

// Criar Ponto de Coleta
routes.post("/points",
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email,
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pointsController.create);

export default routes;
