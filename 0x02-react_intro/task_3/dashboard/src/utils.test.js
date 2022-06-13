import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Test Suite nº1", () => {
  it("Test nº1 - getFullYear should return correct year", () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  it("Test nº2 - getFooterCopy returns the correct string is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  it("Test nº3 - getFooterCopy returns the correct string is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School Main Dashboard");
  });

  it("Test nº4 - getLatestNotification returns the correct string", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
