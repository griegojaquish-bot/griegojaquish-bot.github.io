import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the finished Shanjiang portal", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /山江设计与智能应用/);
  assert.match(html, /设计深化/);
  assert.match(html, /AI 应用/);
  assert.doesNotMatch(html, /Codex is working|codex-preview|react-loading-skeleton/);
});

test("keeps AI Agent and AI FDE as separate services", async () => {
  const overview = await (await render("/ai-applications")).text();
  assert.match(overview, /href="\/services\/ai-agent-workflow"/);
  assert.match(overview, /href="\/services\/ai-fde"/);

  const agent = await (await render("/services/ai-agent-workflow")).text();
  assert.match(agent, /重点是搭系统/);
  assert.match(agent, /知识问答智能体/);
  assert.doesNotMatch(agent, /ai-fde-all-industries-mobile\.mp4/);

  const fde = await (await render("/services/ai-fde")).text();
  assert.match(fde, /进入客户真实业务场景/);
  assert.match(fde, /ai-fde-all-industries-mobile\.mp4/);
  assert.doesNotMatch(fde, /重点是搭系统/);
});
