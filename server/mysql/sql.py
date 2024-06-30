import json
import pymysql
from dotenv import load_dotenv
import os



class Job:
    def __init__(self):
        # 加载 .env 文件中的环境变量
        load_dotenv()
        self.db = pymysql.connect(
            host="localhost",
            user=os.getenv('MYSQL_USERNAME'),
            password=os.getenv('MYSQL_PASSWORD'),
            database="jobandhunter",
            charset="utf8mb4",
            cursorclass=pymysql.cursors.DictCursor
        )

    def insert_job(self, job_data):
        try:
            # Prepare SQL query to insert data
            sql = """
                INSERT INTO job (title, company, time, address, job, major, education, experience,
                                 source, status, type, period, duration, skills, englishLevel,
                                 industry, deadline, compensation, remote, referral, contactway)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            values = (
                job_data.get('title', ''),
                job_data.get('company', ''),
                job_data.get('time', ''),
                job_data.get('address', ''),
                json.dumps(job_data.get('job', []), ensure_ascii=False),  # Convert list to JSON string
                job_data.get('major', ''),
                job_data.get('education', ''),
                job_data.get('experience', ''),
                job_data.get('source', ''),
                job_data.get('status', ''),
                job_data.get('type', ''),
                job_data.get('period', ''),
                job_data.get('duration', ''),
                json.dumps(job_data.get('skills', []), ensure_ascii=False),  # Convert list to JSON string
                job_data.get('englishLevel', ''),
                job_data.get('industry', ''),
                job_data.get('deadline', ''),
                job_data.get('compensation', ''),
                job_data.get('remote', ''),
                job_data.get('referral', ''),
                job_data.get('contactway', '')
            )

            # Execute SQL query
            with self.db.cursor() as cursor:
                cursor.execute(sql, values)
                self.db.commit()
                print("Job inserted successfully!")

        except pymysql.MySQLError as e:
            print(f"Error: {e}")
        finally:
            if self.db:
                self.db.close()

    def get_all_jobs(self):
        try:
            # Prepare SQL query to select all rows from job table
            sql = "SELECT * FROM job"

            # Execute SQL query
            with self.db.cursor() as cursor:
                cursor.execute(sql)
                result = cursor.fetchall()


                # Convert result to JSON format
                json_result = json.dumps(result, default=str, ensure_ascii=False)  # Use default=str to handle datetime objects
                print(json_result)
                return json_result

        except pymysql.MySQLError as e:
            print(f"Error: {e}")
            return None

        finally:
            if self.db:
                self.db.close()

# if __name__ == "__main__":
#     job = Job()
#
#     # 获取所有数据并返回为 JSON
#     all_jobs_json = job.get_all_jobs()
#     print(type(all_jobs_json))
#     print(all_jobs_json)
#








# -----------------------------------------------------------------------------------------------
# if __name__ == "__main__":
#     job_json = """
#     {'title': 'AI产品运营实习生', 'company': '腾讯集团', 'time': '尽快到岗', 'address': '深圳',
#                  'job': ['协助统筹模型训练数据相关准备工作', '对话效果评测', '支持运营其他相关工作'],
#                  'major': '专业不限', 'education': '本科及以上学历', 'experience': '有AI产品运营经验加分',
#                  'source': '腾讯集团', 'status': '实习生', 'type': 'AI产品运营实习生', 'period': '连续实习3-6个月',
#                  'duration': '每周能够全职4天',
#                  'skills': ['优秀的沟通能力和学习能力', '有责任心，做事细心', '文案功底好，擅长把握用户心理'],
#                  'englishLevel': '未提供', 'industry': '人工智能', 'deadline': '尽快到岗', 'compensation': '未提供',
#                  'remote': '未提供', 'referral': '未提供', 'contactway': 'recruit00002024@163.com'}
#     """
#     job_json = job_json.replace("'", "\"")
#
#     job = Job()
#
#     # Parse JSON data
#     job_data = json.loads(job_json)
#
#     # Insert job data
#     job.insert_job(job_data)
