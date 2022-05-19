import { Model } from "../common/model.base";

export interface Country extends Model {
    name: string;
    abbreviation: string;
}