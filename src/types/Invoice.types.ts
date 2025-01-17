import { User } from "./User.types";
import { Shoe } from "./Shoe.types";

interface Invoice {
    user: User;
    total: number;
    products: Shoe[];
    date: string;
    status: string;
    userId: string;
    id: string;
    paymentMode: {
        type: string;
        paymentNetwork: string;
        installments: number;
    }
}

export default Invoice