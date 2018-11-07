/**
 * New typescript file
 */
export class User {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    telephone: string;
    mobile: number;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.name = obj && obj.name || null;
        this.surname = obj && obj.surname || null;
        this.email = obj && obj.email || null;
        this.telephone = obj && obj.telephone || null;
        this.mobile = obj && obj.mobile || null;
    }

}
