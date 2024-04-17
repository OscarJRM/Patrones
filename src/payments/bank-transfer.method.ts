import { PaymentMethod } from "./payment-method.interface";

export class BankTransferMethod implements PaymentMethod {
    async pay(amount: number): Promise<boolean>{
        //TODO: LOGICA PARA TRANFERENCIA BANCARIA
        return true;
    }
}