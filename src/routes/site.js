import express from 'express';
import { Router } from 'express';
import siteController from '../app/controllers/SiteController.js';

const router = Router();

router.get('/hello-world', siteController.helloWorld);
router.get('/', siteController.index);

export default router;