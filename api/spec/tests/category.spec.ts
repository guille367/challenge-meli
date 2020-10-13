import CategoriesService from "@components/categories/categories.service";
import app from "@server";
import { ENDPOINTS } from "@shared/constants";
import { StatusCodes } from "http-status-codes";
import moxios from "moxios";
import supertest, { Response, SuperTest, Test } from "supertest";
import categoryMeliMock from "./mocks/category_meli_mock.json";
import categoryResponseMock from "./mocks/category_response_mock.json";

describe("Get Items By Id", () => {
  let categoriesService: CategoriesService;

  beforeAll(() => {
    categoriesService = new CategoriesService();
    moxios.install();
    moxios.stubRequest(`${ENDPOINTS.CATEGORIES}/MLA3697`, {
      status: 200,
      response: categoryMeliMock,
    });
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it("should return the category MLA3697 correctly mapped", async (done) => {
    const category = await categoriesService.getById("MLA3697");

    expect(category).toBeDefined();
    expect(category.id).toBe("MLA3697");
    expect(category.name).toBe("Auriculares");
    expect(category.path.length).toBe(3);

    done();
  });
});

describe(`"GET:/api/categories/MLA3697"`, () => {
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  it(`should return a item and a status code of "${StatusCodes.OK}" if the request was successful.`, (done) => {
    agent.get(`/api/categories/MLA3697`).end((err: Error, res: Response) => {
      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual(categoryResponseMock);
      done();
    });
  });
});
