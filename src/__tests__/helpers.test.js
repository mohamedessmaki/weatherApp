import * as helpers from "./../helpers";


test("Day and Ordinal", () => {
  expect(helpers.getDayAndOrdinal("2020-05-27 15:00:00")).toEqual(
    expect.stringContaining("27th")
  );
  expect(helpers.getDayAndOrdinal("2020-05-21 15:00:00")).toBe("Thursday 21st");
  expect(helpers.getDayAndOrdinal("2020-05-22 15:00:00")).toEqual(
    expect.stringContaining("22nd")
  );
  expect(helpers.getDayAndOrdinal("2020-05-23 15:00:00")).toEqual(
    expect.stringContaining("23rd")
  );
});
