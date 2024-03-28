import { AppController } from './app.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { API_VERSION } from './constants';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Execute Running Version', () => {
    it('should return text "Running Version" variable value', () => {
      expect(appController.getVersionEndpoint()).toContain(
        `Running Version ${API_VERSION}`,
      );
    });
  });
});
