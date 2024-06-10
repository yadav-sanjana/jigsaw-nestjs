import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RateResponseDto } from 'src/common/dto/rate-response.dto';
import { QuestionResponse } from 'src/models/responses.model';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectModel(QuestionResponse)
    private responseModel: typeof QuestionResponse,
  ) { }

  async rateResponse(id: number, rateResponseDto: RateResponseDto) {
    const response = await this.responseModel.findByPk(id);
    if (!response) {
      throw new Error('Response not found');
    }
    response.rating = rateResponseDto.rating;
    return response.save();
  }
}
