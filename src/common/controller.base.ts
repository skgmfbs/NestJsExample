import { Get, Param, ParseIntPipe } from "@nestjs/common";
import { Model } from "./model.base";
import { Service } from "./service.base";

export class ControllerBase<T extends Model> {

    constructor(protected service: Service<T>) {
    }

    /**
     * Generic method to call getAll method from the service.
     * @returns The array of models.
     */
    @Get()
    getAll(): T[] {
        return this.service.getAll();
    }

    /**
     * Generic method to call getById method from the service to find a model by id.
     * @returns A model.
     */
    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): T {
        return this.service.getById(id);
    }
}