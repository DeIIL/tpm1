import express from "express";
import { promises as fs } from "fs";

const { readFile } = fs;
const router = express.Router();

router.get("/moreModels", async (request, response, next) => {
  try {
    const brandList = JSON.parse(await readFile(global.fileName));
    const brandWithMoreModels = brandList.reduce((prev, current) =>
      prev.models.length > current.models.length ? prev : current
    );
    delete brandWithMoreModels.models;
    response.send(brandWithMoreModels);
  } catch (error) {
    next(error);
  }
});

router.get("/lessModels", async (request, response, next) => {
  try {
    const brandList = JSON.parse(await readFile(global.fileName));
    const brandWithLessModels = brandList.reduce((prev, current) =>
      prev.models.length < current.models.length ? prev : current
    );
    delete brandWithLessModels.models;
    response.send(brandWithLessModels);
  } catch (error) {
    next(error);
  }
});

router.get("/hasMoreModels/:x", async (request, response, next) => {
  try {
    const brandList = JSON.parse(await readFile(global.fileName));
    const hasMoreModels = brandList.sort((prev, current) => {
      if (prev.models.length > current.models.length) {
        return -1;
      } else if (prev.models.length < current.models.length) {
        return 1;
      } else {
        return 0;
      }
    });
    hasMoreModels.forEach((element) => {
      element.modelCount = element.models.length;
      delete element.models;
    });
    response.send(hasMoreModels.slice(0, request.params.x));
  } catch (error) {
    next(error);
  }
});

router.get("/hasLessModels/:x", async (request, response, next) => {
  try {
    const brandList = JSON.parse(await readFile(global.fileName));
    const hasLessModels = brandList.sort((prev, current) => {
      if (prev.models.length < current.models.length) {
        return -1;
      } else if (prev.models.length > current.models.length) {
        return 1;
      } else {
        return 0;
      }
    });
    hasLessModels.forEach((element) => {
      element.modelCount = element.models.length;
      delete element.models;
    });
    response.send(hasLessModels.slice(0, request.params.x));
  } catch (error) {
    next(error);
  }
});

router.get("/findBrand/:name", async (request, response, next) => {
  try {
    const brandList = JSON.parse(await readFile(global.fileName));
    const brand = brandList.find(
      (brand) => brand.brand.toUpperCase() === request.params.name.toUpperCase()
    );
    if (!brand) {
      response.send([]);
    }
    delete brand.brand;
    response.send(brand);
  } catch (error) {
    next(error);
  }
});

router.use((error, request, response, next) => {
  console.log(error);
  response.status(400).send({ error: error.message });
});

export default router;
