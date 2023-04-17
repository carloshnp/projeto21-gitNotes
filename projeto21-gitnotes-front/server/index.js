import express from "express";
import { createRequestHandler } from '@remix-run/express';

const app = express();

const handler = createRequestHandler({
    build: path.join('./build', '..', 'remix', 'build'),
});