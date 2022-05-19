import { Controller } from '@nestjs/common';
import { ControllerBase } from 'src/common/controller.base';
import { Company } from 'src/models/company';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController extends ControllerBase<Company> {

    constructor(companyService: CompanyService) {
        super(companyService);
    }

}
