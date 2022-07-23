import { Controller, Post, HttpStatus, Param, Res, Body } from '@nestjs/common';
import { TestsService } from './tests.service';
import { Logger } from '@nestjs/common';
import { WhatsappAPIRequest } from '../tests/dto/whatsapp-api-request.dto';

@Controller('tests')
export class TestsController {
  private readonly logger = new Logger('tests');
  constructor(private testsService: TestsService) {}

  @Post()
  testMessage(@Body() request: WhatsappAPIRequest, @Res() response) {
    this.logger.warn('testMessage');
    this.testsService
      .testMessage(request)
      .then((res) => {
        response.status(HttpStatus.CREATED).json(res);
      })
      .catch((err) => {
        console.log(err.response.data.error);
        response.status(HttpStatus.BAD_REQUEST).json(err.response.data.error);
      });
  }
}
