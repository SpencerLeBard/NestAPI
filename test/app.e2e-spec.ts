import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
//NOTE import modules required

const app = 'http://localhost:3000';

describe('ROOT', () => {
  it('should ping', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});

test('2 plus 2 equqls 4', () => {
  expect(2 + 2).toBe(4);
});

//NOTE before edits below
// describe('AppController (e2e)', () => {
//   let app: INestApplication;

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('/ (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/')
//       .expect(200)
//       .expect('Hello World!');
//   });
// });
