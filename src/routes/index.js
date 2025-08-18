import express from 'express';
import siteRouter from './site.js';
import itemsRouter from './items.js';

function route(app) {
    app.use("/items", itemsRouter);

    app.use('/', siteRouter);
}

export default route;