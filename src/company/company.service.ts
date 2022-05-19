import { Injectable } from '@nestjs/common';
import { Service } from 'src/common/service.base';
import { Company } from 'src/models/company';

@Injectable()
export class CompanyService extends Service<Company> {

    constructor() {
        super();
        this.models = this.CreateMockCompany();
    }

    private CreateMockCompany(): Company[] {
        return [{
            id: 1,
            name: 'Company 1',
            address: {
                id: 1,
                street: 'I Land road.',
                city: 'CM',
                zipCode: '50000'
            }
        }];
    }
}
