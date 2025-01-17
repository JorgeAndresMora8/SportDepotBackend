export interface User { 
    id: string; 
    name: string; 
    lastname: string; 
    password: string;
    dni: string; 
    phone: string; 
    email: string; 
    orders: Array<any>
}