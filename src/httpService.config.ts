import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Authorization': 'Bearer EAAUnZBAKRM4MBAEZCQMvQ7kVSj8E53cF887zZAFcBAofhNqYl63FkoTyUaXJTZBd93i8blBLAyNc5W8VLyWkHZCnMEMFOKvAZAvHyaVuOB6J1bDtifCZA7kbEbY9at5fZCWeyI0mlOOmoO59iCd5rNzoZClPtqoCUw8mfwTZAxgleJzZCFKogmgfSsNz4Ag25n9FUz0GnQprpSFHgZDZD'
      },
    };
  }
}
