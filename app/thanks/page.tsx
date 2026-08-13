import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="thanksPage">
      <p>THANK YOU</p>
      <h1>需求已提交，<br />我们会尽快联系您。</h1>
      <span>山江团队将在 24 小时内提供初步建议；紧急项目请直接拨打 13539957289（微信同号）。</span>
      <Link href="/">返回网站首页</Link>
    </main>
  );
}
