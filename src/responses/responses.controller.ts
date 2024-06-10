import { Controller, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RateResponseDto } from 'src/common/dto/rate-response.dto';

@Controller('responses')
export class ResponsesController {
    constructor(private readonly responsesService: ResponsesService) { }

    @UseGuards(JwtAuthGuard)
    @Patch(':id/rate')
    async rateResponse(@Param('id') id: number, @Body() rateResponseDto: RateResponseDto) {
        return this.responsesService.rateResponse(id, rateResponseDto);
    }
}
