import zhipuai
from dotenv import load_dotenv
import os

jd_example_1 = """
小红书商业部-业务伙伴策略实习生
工作地点：小红书上海总部

工作福利：免费三餐/免费饮料+零食/每周五宠物日，工作氛围轻松，年轻人多

工作职责：
1、理解商业化广告业务，有互联网广告经验加分。
2、年框/产品政策支持：根据现有定价政策对销售问题进行解答及预审，对现有政策不符业务实际使用的情况进行梳理并推动政策、产品的迭代。
3、政策数据跟踪：协同产出各商业产品数据表现的分析。可以从数据中抓取关键信息，运用合理工具优化现有数据运营流程，提升团队整体效率。
4、业务流程支持：通过日常管理识别效率卡点，整理、优化各事项的SOP。

岗位要求：
1、熟练使用办公软件，有SQL能力优先。
2、有较好执行力，较强的沟通协调能力和文字表达能力。
3、2025届及以后毕业⽣，可以连续实习三个⽉以上，每周到岗时间⾄少4天。

联系人邮箱：lewenyun@xiaohongshu.com
"""

jd_example_1_response = """
{
  "title": "业务伙伴策略实习生",
  "company": "小红书商业部",
  "time": "未说明",
  "address": "上海总部",
  "job": "理解商业化广告业务，有互联网广告经验加分",
  "major": "未说明",
  "education": "2025届及以后毕业⽣",
  "experience": "熟练使用办公软件，有SQL能力优先",
  "source": "小红书",
  "status": "实习生",
  "type": "业务伙伴策略实习生",
  "period": "连续实习三个⽉以上",
  "duration": "每周到岗时间⾄少4天",
  "skills": "有较好执行力，较强的沟通协调能力和文字表达能力",
  "englishLevel": "未说明",
  "industry": "互联网",
  "deadline": "未说明",
  "compensation": "免费三餐/免费饮料+零食/每周五宠物日",
  "remote": "线下",
  "referral": "否",
  "contactway": "联系人邮箱：lewenyun@xiaohongshu.com"
}
"""

jd_example_2 = """
帮转 chatglm 开源团队的 JD 高考完了正好可以去玩

算法实习生JD
智谱AI 大模型研发 ｜ 开源团队 
智谱AI 是国内最早开始发布开源模型，运营开源社区的大模型公司之一。公司代表作品 ChatGLM-6B，ChatGLM2-6B，ChatGLM3，GLM-4，CogVLM，CogVLM2等开源仓库均获得较高的社区认同和支持。
具备数万人的开源社区，知名的开源项目
具备一定的计算资源，可以支持开源仓库维护，新功能增加的微调，长文本推理等工作。
【岗位内容】
参与到模型开源的研发/适配 工作中，包括模型在不同开源框架的适配
参与到开源模型的仓库设计，仓库维护等工作。
负责到开源模型结合开源框架的开源方案代码书写，包括微调，加速推理的开源框架书写。
与宣发部门，研发部门保持紧密，高效的沟通，促进开源模型的宣发和传播。
具有责任心，能快速处理应急的开源模型代码，事故。
【岗位要求】
熟悉Python，熟练使用各种开源工具，具备开源仓库维护的素养，包括Huggingface，github仓库。
快速处理Issue和PR，辅助公司产品/模型适配到主流的开源框架上，具备优秀的技术支持能力。
【要求】
硕士以上学历优先，本科特别优秀的可以自荐
每周四日以上到岗，6个月以上优先，仅支持线下到岗实习。
【简历投递】
yuxuan.zhang@aminer.cn
"""

jd_example_2_response = """
{
  "title": "算法实习生",
  "company": "智谱AI",
  "time": "未说明",
  "address": "未说明",
  "job": "大模型研发",
  "major": "开源团队",
  "education": "硕士及以上学历优先，本科特别优秀者可自荐",
  "experience": "熟悉Python，熟练使用各种开源工具，具备开源仓库维护的素养，包括Huggingface，github仓库",
  "source": "智谱AI",
  "status": "实习生",
  "type": "算法实习生",
  "period": "6个月以上优先",
  "duration": "每周四日以上到岗，仅支持线下到岗实习",
  "skills": "快速处理Issue和PR，辅助公司产品/模型适配到主流的开源框架上，具备优秀的技术支持能力",
  "englishLevel": "未说明",
  "industry": "人工智能",
  "deadline": "未说明",
  "compensation": "未说明",
  "remote": "线下",
  "referral": "否",
  "contactway": "微信：testtestetst"
}
"""

jd = """
【美团到店事业群】战略分析实习生

期望到岗时间：7月初可到岗，每周4天，实习期3个月以上

岗位职责
1.负责市场和行业方面持续深入的研究，挖掘机遇，产出洞见，为决策提供支持；
2.整理专家访谈会议纪要，整理外部市场信息，整理外部数据信息库数据并提炼关键认知

岗位基本需求
1. 具有知名战略咨询公司实习经验者优先；
2. 具备良好的信息整理与思考能力，能够运用逻辑、商业常识等快速拆解问题、形成假设并通过多种方式验证假设；
3.极强的自我驱动意识；沟通协作能力强，能快速实现跨团队沟通协作 。

岗位亮点
1.BG重点的能力探索与建设方向，业务上升空间大，策略迭代速度快，个人成长发挥空间大
2.团队背景丰富，具备各领域的资深专家（包括战略研究、经营分析等），团队氛围好，可互相交流学习，不断提升个人视野与基本功
3.与业务有良好的合作氛围，实现分析策略与落地闭环，工作有价值感

有意向可以直接发简历至：zhangruoyu06@meituan.com
简历及邮件标题命名格式：“学校+年级+到岗时间+每周实习天数”
"""

role = """
title
company
time
address
job
major
education
experience
source
status
type
period
duration
skills
englishLevel
industry
deadline
compensation
remote
referral
contactway
"""

class AI:
  def __init__(self):
    # 加载 .env 文件中的环境变量
    load_dotenv()
  def text2json(self,jd):
    api_key = os.getenv('ZHIPU_KEY')
    client = zhipuai.ZhipuAI(api_key=api_key)

    response = client.chat.completions.create(
      model="glm-4-0520",
      messages=[
        {"role": "user", "content": f"将```中的内容修改为json格式：```{jd_example_1}```，要求：需要包含的键为 {role}，如果未找到，就在 value 中标注:未提供，不要输出除json本身之外的任何内容，例如代码块和解释"},
        {"role": "assistant", "content": f"{jd_example_1_response}"},
        {"role": "user", "content": f"将```中的内容修改为json格式：```{jd_example_2}```"},
        {"role": "assistant", "content": f"{jd_example_2_response}"},
        {"role": "user", "content": f"{jd}"}
      ],
      # extra_body={"temperature": 0.5, "max_tokens": 50}
    )
    # print(response.choices[0].message.content)
    return response.choices[0].message.content


# 实例化类并调用方法
# ai_instance = AI()
# ai_instance.text2json(jd)