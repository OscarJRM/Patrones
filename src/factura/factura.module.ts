import { Module } from '@nestjs/common';
import { FacturaService } from './services/factura.service';
import { FacturaController } from './controllers/factura.controller';

@Module({
  providers: [FacturaService],
  controllers: [FacturaController]
})
export class FacturaModule {
  
}
