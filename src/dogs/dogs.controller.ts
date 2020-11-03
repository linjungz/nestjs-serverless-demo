import { Controller, Get } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    @Get()
    getDogs() {
        return 'we get all dogs';
    }

}

