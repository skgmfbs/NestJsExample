import { Address } from "./address";
import { Model } from "../common/model.base";

export interface Company extends Model {
    name: string;
    address: Address;
}