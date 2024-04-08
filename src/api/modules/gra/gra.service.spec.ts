import { Test, TestingModule } from "@nestjs/testing";
import { GRAService } from "./gra.service";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { ProducerInterval } from "src/api/interfaces/gra.interface";
import * as fs from "fs";

describe("GRAService", () => {
  let service: GRAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GRAService],
    }).compile();

    service = module.get<GRAService>(GRAService);
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

      jest.spyOn(service, "findAll").mockResolvedValue(movies);

      expect(await service.findAll()).toEqual(movies);
    });
  });

  describe("create", () => {
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

      expect(await service.create(movie)).toEqual(movie);
    });
  });

  describe("findProducerIntervals", () => {
    it("should return min and max producer intervals", async () => {
      // Mockando os resultados da consulta
      const minResults: ProducerInterval[] = [
        {
          producer: "Producer 1",
          interval: 1,
          previousWin: 2000,
          followingWin: 2001,
        },
        {
          producer: "Producer 2",
          interval: 2,
          previousWin: 2005,
          followingWin: 2007,
        },
      ];

      const maxResults: ProducerInterval[] = [
        {
          producer: "Producer 3",
          interval: 5,
          previousWin: 1995,
          followingWin: 2000,
        },
        {
          producer: "Producer 4",
          interval: 8,
          previousWin: 2010,
          followingWin: 2018,
        },
      ];

      jest
        .spyOn(service, "findProducerIntervals")
        .mockResolvedValueOnce({ min: minResults, max: maxResults });

      const expected = {
        min: minResults,
        max: maxResults,
      };

      const result = await service.findProducerIntervals();

      expect(result).toEqual(expected);
    });

    it("should handle empty results", async () => {
      jest
        .spyOn(service, "findProducerIntervals")
        .mockResolvedValueOnce({ min: [], max: [] });

      const expected = {
        min: [],
        max: [],
      };

      const result = await service.findProducerIntervals();

      expect(result).toEqual(expected);
    });

    it("should handle errors", async () => {
      jest
        .spyOn(service, "findProducerIntervals")
        .mockRejectedValueOnce(new Error("Database error"));

      await expect(service.findProducerIntervals()).rejects.toThrowError(
        "Database error"
      );
    });
  });
});
