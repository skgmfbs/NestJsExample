import { Model } from "./model.base";

export interface ServiceInterface<T extends Model> {
    getAll(): T[];
    getById(id: number): T;
}