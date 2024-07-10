# 开始

```bash
git clone https://github.com/caoyang2002/jobandhunter.git
cd jobandhunter
```

## 安装环境

> 环境配置
>
> - `mysql` 数据库
> - `virtualenv` python 虚拟环境
> - `Supervisor` 管理 flask 应用
> - `python3.10^` 语言

### 创建表

```sql
CREATE TABLE job (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    time VARCHAR(255),
    address VARCHAR(255),
    job TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    major VARCHAR(255),
    education VARCHAR(255),
    experience VARCHAR(255),
    source VARCHAR(255),
    status VARCHAR(255),
    type VARCHAR(255),
    period VARCHAR(255),
    duration VARCHAR(255),
    skills TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    englishLevel VARCHAR(255),
    industry VARCHAR(255),
    deadline VARCHAR(255),
    compensation VARCHAR(100),
    remote VARCHAR(255),
    referral VARCHAR(255),
    contactway VARCHAR(255)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


```

## 安装 python 库

```bash
cd server
pip install -r requirement.txt
```

## 配置环境变量

打开 `.env copy` 文件（位于 `server` 和 `frontend`），把后缀改为 `.env`，以下是示例：

```env title="server/.env"
DOMAIN_NAME=127.0.0.1
```

```env title="frontent/.env"
ZHIPU_KEY=23443242342432432423432.zhipuZHIPU435
MYSQL_USERNAME=username
MYSQL_PSSWORD=password
```

## 启动

```bash
./start.sh
```

## 停止

```bash
./stop.sh
```

# 其他

## 安装 `python3.10`

```bash
apt-get install python3.10
# -------------------- or --------------------
sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tgz

find / -name Python-3.10.0.tgz
cd /home/
cp /root/Python-3.10.0.tgz /home/
tar -zvxf Python-3.10.0.tgz


cd Python-3.10.0/
./configure --enable-optimizations
make # 可能需要先安装 sudo apt install make
sudo make install
sudo make altinstall
python3.10 --version

```

要让 Flask 应用在后台运行并将日志分别输出到 `success.log` 和 `error.log` 文件中，可以通过以下步骤实现：

## 安装 `Supervisor`

- 安装 Supervisor（如果尚未安装）：
  ```bash
  sudo apt-get update
  sudo apt-get install supervisor
  ```
- 创建 Supervisor 配置文件：
  ```bash
  sudo nano /etc/supervisor/conf.d/flask-app.conf
  ```
  在文件中添加以下内容（根据你的实际情况调整路径和命令）：
  ```ini
  [program:flask-app]
  command=/path/to/your/python/bin/python /path/to/your/app.py
  directory=/path/to/your/project
  environment=PATH="/path/to/your/python/bin",HOME="/path/to/your/home/directory"
  autostart=true
  autorestart=true
  stderr_logfile=/path/to/your/error.log
  stdout_logfile=/path/to/your/success.log
  ```
  - `command`: 指定启动 Flask 应用的命令。
  - `directory`: 指定 Flask 应用的工作目录。
  - `environment`: 设置环境变量，确保 Python 解释器和其他必要的环境设置正确。
  - `autostart` 和 `autorestart`: 配置自动启动和重启。
  - `stderr_logfile` 和 `stdout_logfile`: 分别指定标准错误输出和标准输出的日志文件路径。

1. **启动 Supervisor 服务：**

   ```bash
   sudo service supervisor start
   ```

2. **查看日志文件：**
   - 成功日志文件：`success.log`
   - 错误日志文件：`error.log`

通过上述步骤，你可以使用 Supervisor 管理 Flask 应用的后台运行，并将标准输出和标准错误分别记录到指定的日志文件中，以便于调试和监控应用的运行状态。

## 安装 `virtualenv`

首先，确保系统中已经安装了 `virtualenv` 工具。如果没有安装，可以使用以下命令安装：

```bash
sudo apt install python3-virtualenv  # 如果使用 Python 3

```

### 2. 创建虚拟环境

使用 `virtualenv` 命令创建一个新的虚拟环境。假设你要创建一个名为 `myenv` 的虚拟环境：

```bash
virtualenv venv  # 创建一个名为 myenv 的虚拟环境
```

如果系统中同时安装了 Python 2 和 Python 3，可以通过指定 Python 解释器的版本来创建对应版本的虚拟环境。例如，使用 Python 3 创建虚拟环境：

```bash
virtualenv -p python3 venv
```

### 3. 激活虚拟环境

创建虚拟环境后，需要激活它以便在其中工作。激活虚拟环境会修改当前 shell 的环境变量，使得所有的 Python 命令和包管理操作都指向该环境。

在 Linux 中，使用以下命令激活虚拟环境：

```bash
source myenv/bin/activate
```

激活后，你会在命令行提示符前看到环境名称 `(myenv)`，表示当前已经进入了虚拟环境。

### 4. 使用虚拟环境

在虚拟环境中，使用 `pip` 安装需要的包：

```bash
pip install package_name
```

或者执行 Python 脚本：

```bash
python script.py
```

### 5. 退出虚拟环境

当你完成工作或者需要切换回系统默认的 Python 环境时，可以使用 `deactivate` 命令退出虚拟环境：

```bash
deactivate
```

退出虚拟环境后，命令行提示符会恢复到默认状态。

如果是提交失败，可能的原因：
