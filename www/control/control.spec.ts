import Control from "./control";
import * as request from "Request";
import * as http from "http";

describe("Control", () => {
  const port = 3000;
  const baseUrl = `http://localhost:${port}`;
  let server: http.Server;

  it("should create control", () => {
    expect(Control).toBeDefined();
  });

  describe("GET", () => {
    beforeEach(() => {
      Control.set("port", port);
      this.server = http.createServer(Control);
      this.server.listen(port);
    });
  
    afterEach(() => {
      this.server.close();
    });

    it("should return json string for '/watchdog'", (done) => {
      request.get(`${baseUrl}/watchdog`, (err, res, body) => {
        expect(JSON.parse(body).message).toBe("Hello World");
        done();
      });
    });
  });
});
