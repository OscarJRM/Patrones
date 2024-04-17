import { Injectable } from "@nestjs/common";
import { PaymentMethodFactory } from "src/payments/payment-method.factory";


@Injectable()
export class BillingService{
    constructor(private readonly paymentMethodFactory: PaymentMethodFactory){}

    async processPayment(type:string,amount:number): Promise<boolean>{
        const paymentMethod = this.paymentMethodFactory.createPaymentMethod(type);
        return paymentMethod.pay(amount);
    }
}   