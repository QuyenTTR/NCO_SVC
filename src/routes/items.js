import express from 'express';
import { Router } from 'express';
import itemsController from '../app/controllers/ItemsController.js';

const router = Router();

router.get('/', itemsController.index);

export default router;