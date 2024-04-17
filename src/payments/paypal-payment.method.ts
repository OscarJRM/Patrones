import { PaymentMethod } from "./payment-method.interface";

export class PaypalMethod implements PaymentMethod{
    async pay(amount: number): Promise<boolean>{
        
        return true;
    }
}