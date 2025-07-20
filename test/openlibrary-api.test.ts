import { describe, expect, test } from "@jest/globals";
import { OpenlibraryClient } from "../src/openlibrary-client";

describe("OpenlibraryCleint", () => {
  test("Create new class", async () => {
    expect(await new OpenlibraryClient());
  });
});
