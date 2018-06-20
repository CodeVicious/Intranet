/**
 * New typescript file
 */


 
import { Role } from './role';
import { Sector } from './sector';

export interface User {
    id:number;
    name:string;
    surname: string;
    username: string;
    email: string;
    telephone:string;
    mobile:number;
    roles: Role[];
    sectors: Sector[];
}