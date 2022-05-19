import { Model } from "../common/model.base";

export interface Address extends Model {
    street: string;
    city: string;
    zipCode: string;
}