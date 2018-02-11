import { AppPage } from "./app.po";

describe("wisott app", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display default text", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Dashboard");
  });
});
