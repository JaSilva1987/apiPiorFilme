import { Test, TestingModule } from "@nestjs/testing";
import { GRAController } from "./gra.controller";
import { GRAService } from "./gra.service";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { ProducerInterval } from "src/api/interfaces/gra.interface";

describe("GRAController", () => {
  let controller: GRAController;
  let service: GRAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GRAController],
      providers: [GRAService],
    }).compile();

    controller = module.get<GRAController>(GRAController);
    service = module.get<GRAService>(GRAService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("getAll", () => {
    it("should return array of movies", async () => {
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
      jest.spyOn(service, "findAll").mockResolvedValue(movies);

      expect(await controller.getAll()).toEqual(movies);
    });
  });

  describe("getProducerIntervals", () => {
    it("should return min and max producer intervals", async () => {
      const intervals: {
        min: ProducerInterval[];
        max: ProducerInterval[];
      } = {
        min: [
          {
            producer: "Producer 1",
            interval: 1,
            previousWin: 2000,
            followingWin: 2001,
          },
        ],
        max: [
          {
            producer: "Producer 2",
            interval: 2,
            previousWin: 2005,
            followingWin: 2007,
          },
        ],
      };
      jest.spyOn(service, "findProducerIntervals").mockResolvedValue(intervals);

      expect(await controller.getProducerIntervals()).toEqual(intervals);
    });
  });

  describe("postRanking", () => {
    it("should create a movie", async () => {
      const movie: GRAFilmesEntity = {
        id: 1,
        year: "2021",
        title: "Movie 1",
        studios: "Studio 1",
        producers: "Producer 1",
        winner: "",
      };
      jest.spyOn(service, "create").mockResolvedValue(movie);

      const movieDTO = {
        year: "2021",
        title: "Movie 1",
        studios: "Studio 1",
        producers: "Producer 1",
        winner: "",
      };

      expect(await controller.postRanking(movieDTO)).toEqual(movie);
    });
  });
});
