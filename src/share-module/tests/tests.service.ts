import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BASEURL } from 'src/common/api-resource';
import { WhatsappAPIRequest } from './dto/whatsapp-api-request.dto';
import { WhatsappAPIResponse } from './dto/whatsapp-api-response.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TestsService {
  constructor(private httpService: HttpService) {}
  baseUrl = BASEURL.baseUrlWhatsapp;
  async testMessage(
    request: WhatsappAPIRequest,
  ): Promise<AxiosResponse<WhatsappAPIResponse>> {
    const { data } = await firstValueFrom(
      this.httpService.post(this.baseUrl, request),
    );
    return data;
  }
}
