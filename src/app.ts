import express from 'express';
import productsRoutes from './routers/products.router';
import usersRoutes from './routers/user.router';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

export default app;
