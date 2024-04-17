import { Controller, Get } from '@nestjs/common';

@Controller('api/factura')
export class FacturaController {


    @Get()
    getAll(){
        return [1,2,3];
    }
}
