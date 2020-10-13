import supertest from "supertest";
import { StatusCodes } from "http-status-codes";
import { Response, SuperTest, Test } from "supertest";
import moxios from "moxios";
import app from "@server";
import { ENDPOINTS } from "@shared/constants";
import itemMeliMock from "./mocks/item_meli_mock.json";
import itemResponseMock from "./mocks/item_response_mock.json";
import itemDescriptionMock from "./mocks/item_description.json";
import itemSearchMock from "./mocks/item_search_mock.json";
import itemSearchResponseMock from "./mocks/item_search_response_mock.json";
import ItemsService from "@components/items/items.service";

describe("Get Items By Id", () => {
  let itemsService: ItemsService;

  beforeAll(() => {
    itemsService = new ItemsService();
    moxios.install();
    moxios.stubRequest(`${ENDPOINTS.ITEMS}/MLA878688742`, {
      status: 200,
      response: itemMeliMock,
    });

    moxios.stubRequest(`${ENDPOINTS.ITEMS}/MLA878688742/description`, {
      status: 200,
      response: itemDescriptionMock,
    });
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it("should return the item MLA878688742 correctly mapped", async (done) => {
    const item = await itemsService.getById("MLA878688742");

    // const spai = await spyOn(ItemsDao.prototype, "getById");
    // expect(spai).toHaveBeenCalledWith("MLA878688742");

    expect(item).toBeDefined();
    expect(item.title).toBe("Auriculares Inalámbricos I12 Tws Blanco");
    expect(item.free_shipping).toBe(false);
    expect(item.description).toContain(
      "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares i12 TWS y ¡escapate de la rutina por un rato!"
    );

    done();
  });
});

describe(`"GET:/api/items/MLA878688742"`, () => {
  let agent: SuperTest<Test>;

  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  it(`should return a item and a status code of "${StatusCodes.OK}" if the request was successful.`, (done) => {
    agent.get(`/api/items/MLA878688742`).end((err: Error, res: Response) => {
      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body).toEqual(itemResponseMock);
      done();
    });
  });

  it(`should return a item and a status code of "${StatusCodes.OK}" and return the author when headers were sended.`, (done) => {
    agent
      .get(`/api/items/MLA878688742`)
      .set("x-author-name", "guillermo")
      .set("x-author-lastname", "ponce andres")
      .end((err: Error, res: Response) => {
        expect(res.status).toBe(StatusCodes.OK);
        const author = res.body.author;

        expect(author.name).toBe("guillermo");
        expect(author.lastname).toBe("ponce andres");
        done();
      });
  });
});

describe("Get Items By Query", () => {
  let itemsService: ItemsService;

  beforeAll(() => {
    itemsService = new ItemsService();
    moxios.install();
    moxios.stubRequest(`${ENDPOINTS.SEARCH}?q=apple`, {
      status: 200,
      response: itemSearchMock,
    });
  });

  afterAll(() => {
    moxios.uninstall();
  });

  it("should return results on 'apple' search", async (done) => {
    const results = await itemsService.search("apple");

    expect(results).toBeDefined();
    expect(results.categories).toBeDefined();
    expect(results.categories.length).toBeGreaterThan(0);
    expect(results.items).toBeDefined();
    expect(results.items.length).toBeGreaterThan(0);

    done();
  });

  it("should map correctly the results given by query 'apple'", async (done) => {
    const results = await itemsService.search("apple");

    expect(results.items[0].price).toBeDefined();
    expect(results.items[0].price.amount).toBeGreaterThan(0);
    expect(results.items[0].price.currency).toBeDefined();

    done();
  });
});

describe(`"GET:/api/items/search"`, () => {
  let agent: SuperTest<Test>;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${ENDPOINTS.SEARCH}?q=apple`, {
      status: 200,
      response: itemSearchMock,
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  beforeEach((done) => {
    agent = supertest.agent(app);
    done();
  });

  it(`should return a item and a status code of "${StatusCodes.OK}" if the request was successful.`, (done) => {
    agent.get(`/api/items?q=apple`).end((err: Error, res: Response) => {
      expect(res.status).toBe(StatusCodes.OK);
      expect(res.body.error).toBeUndefined();

      expect(res.body.items).toEqual(itemSearchResponseMock.items);
      expect(res.body.categories.length).toEqual(
        itemSearchResponseMock.categories.length
      );
      done();
    });
  });

  it(`should return a item and a status code of "${StatusCodes.OK}" and return the author when headers were sended.`, (done) => {
    agent
      .get(`/api/items?q=apple`)
      .set("x-author-name", "guillermo")
      .set("x-author-lastname", "ponce andres")
      .end((err: Error, res: Response) => {
        expect(res.status).toBe(StatusCodes.OK);
        const author = res.body.author;

        expect(author.name).toBe("guillermo");
        expect(author.lastname).toBe("ponce andres");
        done();
      });
  });
});
