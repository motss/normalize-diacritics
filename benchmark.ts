import { bench, runBenchmarks } from "https://deno.land/x/std/testing/bench.ts";
import { normalize } from "./mod.ts";

bench({
  name: "runs3ForNormalizeX1e6s",
  runs: 3,
  async func(b) {
    b.start();
    for (let i = 0; i < 1e3; i += 1) {
      await normalize(
        `söme stüff with áccènts ${Math.random()
          .toString(16)
          .slice(-7)}`
      );
    }
    b.stop();
  }
});

runBenchmarks();
