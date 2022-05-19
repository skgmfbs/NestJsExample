import { Model } from "./model.base";
import { ServiceInterface } from "./service.interface";

export class Service<T extends Model> implements ServiceInterface<T> {

    models: T[];

    getAll(): T[] {
        return this.models;
    }

    getById(id: number): T {
        let model: T = undefined;
        if (this.models !== undefined) {
            model = this.models.find(m => m.id === id);
        }
        return model;
    }
}