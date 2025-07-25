import { vi, describe, expect, it, type Mock } from "vitest";
import { fetchData } from "./fetchData";
import { mockRawData } from "../../test/mock";

const progressEndpoint = "/progress.json";

describe("fetchData", () => {
  it("fetched passed endpoint", async () => {
    await fetchData(progressEndpoint);
    expect(globalThis.fetch).toHaveBeenCalledWith(progressEndpoint);
  });

  it("returns data", async () => {
    const data = await fetchData(progressEndpoint);
    expect(data).toEqual(mockRawData);
  });

  it("throws error when fetching a random source", async () => {
    await expect(fetchData("/unknown-endpoint")).rejects.toThrow(
      "Failed response",
    );
  });

  it("throws error if response fails", async () => {
    (globalThis.fetch as Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchData(progressEndpoint)).rejects.toThrow(
      "Failed response",
    );
  });

  it("throws error if JSON parsing fails", async () => {
    (globalThis.fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockImplementationOnce(() => {
        throw new Error("bad json");
      }),
    });

    await expect(fetchData(progressEndpoint)).rejects.toThrow(
      "Failed parsing response",
    );
  });

  it("throws error if fetch fails", async () => {
    (globalThis.fetch as Mock).mockRejectedValueOnce(
      new Error("network error"),
    );

    await expect(fetchData(progressEndpoint)).rejects.toThrow(
      "Failed fetching data",
    );
  });
});
