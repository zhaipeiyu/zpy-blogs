---
title: MySQL下载及启动
date: 2021-5-10
author: zhaipeixi
sidebar: 'auto'
tags:
 - MySQL
categories:
 - MySQL
---
## MySQL下载及启动
 1. `https://dev.mysql.com/downloads/mysql/` 下载第一个
 2. 解压后放到任意一个你指定的目录  我的放在 E:\myServer\mysql-8.0.25-winx64
 3. 打开该文件夹  新建自定义默认配置文件 my.ini文件 内容如下，根据实际存放地址修改路径  port是端口号 连接可视化数据库时需要对应
```txt
[mysqld] 
# port 设置端口 ,若设置3306是默认端口可生路
# basedir 设置MySQL的安装目录  
# datadir 设置MySQL数据库的数据的存放目录
port = 3306
basedir=E:\myServer\mysql-8.0.25-winx64\
datadir=E:\myServer\mysql-8.0.25-winx64\data
# mysql8.0.11 默认值为caching_sha2_password
default_authentication_plugin=mysql_native_password

[client]
# cmd.exe MySQL命令行所用端口 与上方保持一致
port = 3306
# https://dev.mysql.com/doc/refman/8.0/en/connecting.html
```
  4. 以管理员身份进入命令行cmd.exe  运行如下命令
   ```txt
    # 1 [跳转到MySQL主进程mysqld目录]
    E:
    cd E:\myServer\mysql-8.0.25-winx64\bin

    # 2 [加入windows服务,自定义名字MySQL3306]
    mysqld -install MySQL3306

    #3 [初始化将生成数据存放文件夹data，生成无密码root帐号]
    mysqld --initialize-insecure

    # 4 [启动MySQL服务]
    net start MySQL3306

    # 5 通过命令行,进入mysql控制台。默认密码为空，回车即可
    mysql -u root -p
    #--------------------------------------------
    # [卸载服务(未用到)]
    net stop MySQL3380
    sc delete MySQL3380
   ```  
