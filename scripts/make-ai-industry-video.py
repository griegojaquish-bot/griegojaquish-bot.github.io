from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "ai-industry-frames"
OUT.mkdir(exist_ok=True)

W, H = 1280, 720
DEEP = "#102b24"
GREEN = "#21463b"
ORANGE = "#ed6a3a"
PAPER = "#eef2ed"
MUTED = "#9eb2a8"
FONT = Path(r"C:\Windows\Fonts\msyh.ttc")
FONT_BOLD = Path(r"C:\Windows\Fonts\msyhbd.ttc")


def font(size, bold=False):
    return ImageFont.truetype(str(FONT_BOLD if bold else FONT), size)


def rounded(draw, box, fill, outline=None, width=2, radius=22):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def scene(label, title, nodes, index):
    image = Image.new("RGB", (W, H), DEEP)
    d = ImageDraw.Draw(image)
    d.ellipse((845, -210, 1420, 365), fill="#173b31")
    d.ellipse((-220, 500, 380, 1100), fill="#18362e")
    d.text((75, 62), f"AI FDE  /  {label}", font=font(22, True), fill=ORANGE)
    d.text((75, 110), title, font=font(48, True), fill=PAPER)
    d.line((75, 180, 1205, 180), fill="#46665b", width=2)

    cx, cy = 640, 410
    rounded(d, (535, 320, 745, 500), ORANGE, radius=34)
    d.text((583, 355), "AI", font=font(58, True), fill="white")
    d.text((568, 425), "协同中枢", font=font(24, True), fill="white")

    positions = [(110, 270), (910, 270), (110, 510), (910, 510)]
    for (x, y), (name, detail) in zip(positions, nodes):
        x2, y2 = x + 260, y + 120
        d.line((cx, cy, x + 130, y + 60), fill="#6c8a7e", width=3)
        rounded(d, (x, y, x2, y2), GREEN, outline="#638176", radius=20)
        d.text((x + 24, y + 22), name, font=font(28, True), fill=PAPER)
        d.text((x + 24, y + 70), detail, font=font(18), fill=MUTED)

    d.text((1120, 655), f"0{index}", font=font(22, True), fill="#6c8a7e")
    image.save(OUT / f"scene-{index:02d}.png", optimize=True)
    return image


scenes = [
    ("ALL INDUSTRIES", "从一项真实业务任务开始", [("客户咨询", "更快找到答案"), ("销售跟进", "线索与报价协同"), ("资料知识库", "整理与检索"), ("运营交付", "节点与清单")]),
    ("CUSTOMER SERVICE", "客服与售后：先解决重复问题", [("常见问答", "统一口径"), ("历史记录", "提取上下文"), ("工单分流", "识别优先级"), ("人工接管", "复杂问题复核")]),
    ("SALES", "销售：让线索、方案和跟进不断档", [("客户线索", "自动归类"), ("需求摘要", "快速看重点"), ("方案草拟", "人工确认"), ("跟进提醒", "减少遗漏")]),
    ("KNOWLEDGE", "资料：把分散文件变成可用知识", [("文档资料", "分类与摘要"), ("制度手册", "问答检索"), ("会议记录", "行动项提取"), ("交付清单", "版本核对")]),
    ("WEB & MINI PROGRAM", "网站与小程序：接住客户需求", [("服务展示", "手机优先"), ("需求表单", "资料上传"), ("人工报价", "明确边界"), ("后台待办", "持续跟进")]),
    ("OPERATIONS", "运营与交付：把关键节点串起来", [("任务接收", "信息完整"), ("AI 整理", "生成草稿"), ("人工复核", "责任不缺位"), ("结果记录", "持续优化")]),
    ("MULTI-INDUSTRY", "制造、贸易、零售、服务、文旅、教育", [("制造", "资料与质量"), ("贸易零售", "咨询与销售"), ("专业服务", "知识与交付"), ("文旅教育", "内容与运营")]),
    ("HUMAN IN THE LOOP", "AI 提效，人来确认关键决定", [("专业判断", "由专业人员确认"), ("合同承诺", "由负责人确认"), ("对外发布", "先审核再发送"), ("持续反馈", "越用越贴合")]),
    ("START SMALL", "先验证一件事，再扩展到更多流程", [("选定任务", "明确目标"), ("接入资料", "限定范围"), ("验证结果", "用数据说话"), ("逐步扩展", "控制风险")]),
]

last = None
for idx, payload in enumerate(scenes, 1):
    last = scene(*payload, idx)

assert last is not None
last.save(ROOT / "public" / "ai-fde-all-industries-poster.webp", "WEBP", quality=82, method=6)
print(f"created {len(scenes)} frames and poster")
