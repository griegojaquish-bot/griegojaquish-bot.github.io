export default function QuoteForm({ variant = "design" }: { variant?: "design" | "ai" }) {
  const isAi = variant === "ai";
  return (
    <form className="quoteForm" action="https://formsubmit.co/13120056@qq.com" method="POST">
      <input type="hidden" name="_subject" value={isAi ? "山江 AI 应用：新业务需求" : "山江设计服务：设计与详图需求"} />
      <input type="hidden" name="_next" value="https://shanjiang.asia/thanks" />
      <input type="hidden" name="_url" value={`https://shanjiang.asia/${isAi ? "ai-applications" : "design-detailing"}`} />
      <input type="hidden" name="_template" value="table" />
      <p className="quoteHint">提交后由人工确认工作范围并报价，通常在一个工作日内回复；紧急项目请直接电话或微信联系。提交的信息仅用于本次项目沟通。</p>
      <label>
        您的称呼
        <input name="name" required maxLength={80} placeholder="请输入姓名或公司称呼" />
      </label>
      <label>
        联系电话
        <input name="phone" required maxLength={40} inputMode="tel" placeholder="请输入电话或微信号" />
      </label>
      <label>
        电子邮箱（选填）
        <input name="email" type="email" maxLength={120} placeholder="便于接收方案和报价" />
      </label>
      <label className="formWide">
        项目类型
        <select name="projectType" required defaultValue="">
          <option value="" disabled>请选择项目类型</option>
          {isAi ? <>
            <option>企业 AI 智能体与工作流</option>
            <option>AI FDE 全行业协同</option>
            <option>网站建设</option>
            <option>微信小程序开发</option>
            <option>AI 工程图文与资料自动化</option>
            <option>其他 AI 应用</option>
          </> : <>
            <option>方案设计 / CAD 图纸表达</option>
            <option>Tekla 三维建模</option>
            <option>钢结构详图 / 加工图</option>
            <option>其他设计与深化支持</option>
          </>}
        </select>
      </label>
      <label>
        项目所在地（选填）
        <input name="city" maxLength={100} placeholder="例如：广东广州" />
      </label>
      <label>
        项目需求
        <textarea name="requirement" required maxLength={2000} placeholder={isAi ? "请说明使用对象、当前流程、主要痛点、现有资料和希望实现的结果" : "请说明项目类型、图纸资料、交付内容、执行标准和目标交期"} />
      </label>
      <button type="submit">提交需求，获取人工报价 <b>→</b></button>
    </form>
  );
}
