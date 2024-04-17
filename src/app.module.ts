import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaModule } from './factura/factura.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'my_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10
  }),
    FacturaModule,
    ClienteModule,
    ProductoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
