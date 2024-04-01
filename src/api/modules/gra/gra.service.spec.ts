import { Test, TestingModule } from "@nestjs/testing";
import { GRAService } from "./gra.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository } from "typeorm";
import { GRAFilmesDTO } from "./dto/gra.dto";

describe("GRAService", () => {
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
    repository = module.get<Repository<GRAFilmesEntity>>(
      getRepositoryToken(GRAFilmesEntity)
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of movies", async () => {
      const movies: GRAFilmesEntity[] = [
        {
          id: 1,
          year: "2021",
          title: "Movie 1",
          studios: "Studio 1",
          producers: "Producer 1",
          winner: "",
        },
      ];
      jest.spyOn(repository, "find").mockResolvedValue(movies);

      expect(await service.findAll()).toEqual(movies);
    });
  });

  describe("create", () => {
    it("should create a movie", async () => {
      const movie: GRAFilmesDTO = {
        year: "2021",
        title: "Movie 1",
        studios: "Studio 1",
        producers: "Producer 1",
        winner: "",
      };
      const createdMovie: GRAFilmesEntity = { id: 1, ...movie };
      jest.spyOn(repository, "save").mockResolvedValue(createdMovie);

      expect(await service.create(movie)).toEqual(createdMovie);
    });
  });

  describe("findProducerIntervals", () => {
    it("should return min and max producer intervals", async () => {
      // Mocking the query results
      const minResults = [
        {
          producers: "Producer 1",
          interval: 1,
          previousWin: 2000,
          followingWin: 2001,
        },
        {
          producers: "Producer 2",
          interval: 2,
          previousWin: 2005,
          followingWin: 2007,
        },
      ];
      const maxResults = [
        {
          producers: "Producer 3",
          interval: 5,
          previousWin: 1995,
          followingWin: 2000,
        },
        {
          producers: "Producer 4",
          interval: 8,
          previousWin: 2010,
          followingWin: 2018,
        },
      ];
      jest
        .spyOn(repository, "query")
        .mockResolvedValueOnce(minResults)
        .mockResolvedValueOnce(maxResults);

      const expected = {
        min: minResults,
        max: maxResults,
      };

      const result = await service.findProducerIntervals();

      expect(result).toEqual(expected);
    });

    it("should handle empty results", async () => {
      // Mocking empty query results
      jest
        .spyOn(repository, "query")
        .mockResolvedValueOnce([])
        .mockResolvedValueOnce([]);

      const expected = {
        min: [],
        max: [],
      };

      const result = await service.findProducerIntervals();

      expect(result).toEqual(expected);
    });

    it("should handle errors", async () => {
      jest
        .spyOn(repository, "query")
        .mockRejectedValueOnce(new Error("Database error"));

      await expect(service.findProducerIntervals()).rejects.toThrowError(
        "Database error"
      );
    });
  });
});
