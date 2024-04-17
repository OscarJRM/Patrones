//SERVICE

import { Injectable } from "@nestjs/common";
import { PaymentMethod } from "./payment-method.interface";
import { PaypalMethod } from "./paypal-payment.method";
import { StripePayment } from "./stripe-payment.method";
import { BankTransferMethod } from "./bank-transfer.method";

@Injectable()
export class PaymentMethodFactory{
    createPaymentMethod(type: string): PaymentMethod{
        switch (type){
            case "paypal":
                return new PaypalMethod();
            case "stripe":
                return new StripePayment();
            case "bankTransfer":
                return new BankTransferMethod();
            default:
                throw new Error("Metodo de pago no disponible");
        }
    }
}