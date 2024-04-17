import { PaymentMethod } from "./payment-method.interface";

export class StripePayment implements PaymentMethod {
    async pay(amount: number): Promise<boolean>{
        //TO_DO: CODIGO PARA STRIPE
        
        return true;
        }
}