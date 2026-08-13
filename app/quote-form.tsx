export default function QuoteForm() {
  return (
    <form className="quoteForm" action="https://formsubmit.co/13120056@qq.com" method="POST">
      <input type="hidden" name="_subject" value="山江网站：新方案报价咨询" />
      <input type="hidden" name="_next" value="https://YOUR-DOMAIN.example/thanks" />
      <input type="hidden" name="_url" value="https://YOUR-DOMAIN.example/" />
      <input type="hidden" name="_template" value="table" />
      <p className="quoteHint">提交后将直接发送给山江团队；紧急项目请直接电话或微信联系。</p>
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
          <option>工地临建 / 营地</option>
          <option>办公 / 住宿空间</option>
          <option>文旅 / 商业空间</option>
          <option>其他模块化项目</option>
        </select>
      </label>
      <label>
        项目所在地（选填）
        <input name="city" maxLength={100} placeholder="例如：广东广州" />
      </label>
      <label>
        项目需求
        <textarea name="requirement" required maxLength={2000} placeholder="例如：预计面积、使用人数、计划工期、产品需求等" />
      </label>
      <button type="submit">获取初步方案与报价 <b>→</b></button>
    </form>
  );
}
