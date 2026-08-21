import type { Metadata } from "next";

export const metadata: Metadata = { title: "隐私说明", description: "山江设计与智能应用咨询表单的信息处理说明。", alternates: { canonical: "/privacy" }, robots: { index: false, follow: true } };

export default function PrivacyPage() { return <main className="privacyPage"><header><a href="/">← 返回首页</a></header><article><p>PRIVACY NOTICE</p><h1>隐私说明</h1><h2>收集什么信息</h2><p>当你提交咨询表单时，我们会收集姓名或称呼、联系电话、邮箱（如填写）、项目所在地（如填写）及项目需求，用于判断服务范围、联系沟通和人工报价。</p><h2>如何处理</h2><p>表单由 FormSubmit.co 技术服务转发至山江指定邮箱。请勿在表单中提交身份证号、银行卡号、密码或其他不必要的敏感个人信息；图纸和项目资料仅用于本次咨询沟通。</p><h2>保存与联系</h2><p>我们仅在完成咨询、报价、项目沟通及必要的后续服务期间保留相关信息。如需更正、删除或询问信息处理方式，请通过 135 3995 7289（微信同号）或 13120056@qq.com 联系我们。</p></article></main>; }
