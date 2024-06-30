import json
import re
import zhipuai
from flask import Flask, request, jsonify
import mysql.sql
import zhipu.text2json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 允许所有源的跨域请求

jd = """
理想汽车-hr实习生岗位 需7月初到岗 
[职位描述]
1)协助招聘,电话预约、协调候选人、面试官时间，并面试安排;
2)负责基础岗位招聘,根据岗位JD 筛选及 sourcing简历,并进行电话面试;
3)协助进行招聘渠道维护,数据统计工作;
4)其他招聘运营项目辅助等工作。
[职位要求]
1)2025年及之后毕业的本科生及以上优先专业不限;
2)对于 HR 有较深的理解或者浓厚的兴趣;
3)善于与人沟通,逻辑思维能力及应变能力较好,富于团队协助精神;
4)能够连续实习3个月以上,每周出勤4天及以上者优先。
[工作地点]北京市顺义区
🔆面向对象：大三大四、研一研二同学均可
🔆我实习时间：要求每周至少出勤4天，2个月时长
🔆实习工资：180元/天
投递邮箱 m1805536297@163.com
"""

from flask import make_response

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    return response

@app.route('/hello')
def hello():  # put application's code here
    return 'Hello World!'

@app.route('/addjob', methods=['POST'])
def add_job():
    if request.method == 'POST':
        # 获取 JSON 数据
        json_data = request.json
        print("JSON Data:", json_data)

        # 从 JSON 数据中获取 job_description 字段
        job_description = json_data.get('job_description')
        if job_description is not None:
            jd = job_description
            print("Job Description:", jd)
            ai_instance = zhipu.text2json.AI()
            ai_response = ai_instance.text2json(jd)
            print(f"ai 回复的内容 {ai_response}")
            # 删除{} 前后的内容
            # 使用正则表达式提取大括号内的 JSON 部分
            pattern = r'\{.*?\}'  # 匹配最小长度的大括号内的内容
            json_str = re.search(pattern, ai_response, re.DOTALL).group(0)  # 使用 DOTALL 模式以匹配包括换行符在内的所有字符

            print(f"删除非 json 内容后的字符串: {json_str}")


            # 解析 JSON 字符串为字典
            job_json = json_str.replace("'", "\"")
            print(f"替换单引号为双引号: {job_json}")


            job = mysql.sql.Job()
            print("开始插入数据库")
            job_json = json.loads(job_json)
            # 输出解析后的内容
            print(f"加载为 json 格式 {job_json}")
            job_data_json = json.dumps(job_json, ensure_ascii=False)
            print(f"json 格式的字符串为: {job_data_json}")
            job_data_json = json.loads(job_data_json)
            print(type(job_data_json))

            job.insert_job(job_data_json)

        # 如果需要将数据返回给客户端，可以使用 jsonify
        return jsonify({"message": "Data received successfully"})

@app.route('/getalljob', methods=['GET'])
def get_all_job():
    try:
        # 调用 Job 类中的方法获取所有作业数据
        job = mysql.sql.Job()
        all_jobs = job.get_all_jobs()
        print(type(all_jobs))

        # 将查询到的数据转换为 JSON 格式
        all_jobs_json = jsonify(all_jobs)

        return all_jobs

    except Exception as e:
        app.logger.error(f"Failed to fetch all jobs: {e}")
        return jsonify({"error": "Failed to fetch all jobs"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
