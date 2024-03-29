import { Test, TestingModule } from '@nestjs/testing';
import { GRAService } from './gra.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GRAFilmesEntity } from 'src/database/entity/grafilmes.entity';
import { Repository, UpdateResult } from 'typeorm';
import { GRAFilmesDTO } from './dto/gra.dto';

describe('GRAService', () => {
  let service: GRAService;
  let repository: Repository<GRAFilmesEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GRAService,
        {
          provide: getRepositoryToken(GRAFilmesEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<GRAService>(GRAService);
    repository = module.get<Repository<GRAFilmesEntity>>(getRepositoryToken(GRAFilmesEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const movies: GRAFilmesEntity[] = [{ id: 1, year: '2021', title: 'Movie 1', studios: 'Studio 1', producers:'Producer 1', winner:'' }];
      jest.spyOn(repository, 'find').mockResolvedValue(movies);

      expect(await service.findAll()).toEqual(movies);
    });
  });

  describe('create', () => {
    it('should create a movie', async () => {
      const movie: GRAFilmesDTO = { year: '2021', title: 'Movie 1', studios: 'Studio 1', producers:'Producer 1', winner:'' };
      const createdMovie: GRAFilmesEntity = { id: 1, ...movie };
      jest.spyOn(repository, 'save').mockResolvedValue(createdMovie);

      expect(await service.create(movie)).toEqual(createdMovie);
    });
  });
});
