import express from 'express';
import productsRoutes from './routers/products.router';
import usersRoutes from './routers/user.router';
import orderRoutes from './routers/order.router';
import loginRoutes from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);

export default app;
