const app = require("../app");
const supertest = require("supertest");
const { expect } = require("@jest/globals");
const request = supertest(app);

describe("Test Handlers", () => {
  test("responds to /", async () => {
    const res = await request.get("/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(parseInt(res.header["content-length"])).toBeLessThan(1000);
  });

  test("responds to /", async () => {
    const res = await request.get("/admin/61a921f6028954d4f0319e6d");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(parseInt(res.header["content-length"])).toBeLessThan(1000);
  });

  test("responds to /", async () => {
    const res = await request.get("/employee");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(parseInt(res.header["content-length"])).toBeLessThan(1000);
  });

  test("responds to /", async () => {
    const res = await request.get("/patient");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(parseInt(res.header["content-length"])).toBeLessThan(1000);
  });

  test("responds to /", async () => {
    const res = await request.get("/schedule");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(parseInt(res.header["content-length"])).toBeLessThan(1000);
  });
});
