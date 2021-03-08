#!/bin/bash

# 当前脚本的绝对路径
scriptPath=$(cd `dirname $0`; pwd)
binPath="${scriptPath}/.."

cd ${binPath}
bin="app"

# 当前脚本名称
scriptName=`basename $0`

# 记录进程号的文件
pidFile="pid"

#使用说明，用来提示输入参数
usage() {
    echo "Usage: ${scriptName} [start|stop|status]"
}

#检查程序是否在运行
process_status() {
    if [ -f ${pidFile} ]; then
        pid=`sed -n 1p ${pidFile}`
        ps -p ${pid} > /dev/null
        return 0
    fi
    # 应用已停止
    return 1
}

#启动方法
start() {
    process_status
    procStatus=$?
    if [ ${procStatus} -eq "0" ]; then
        # 服务进程号
        pid=`sed -n 1p ${pidFile}`
        echo -e "Service is RUNNING(${pid})."
    else
        echo -e "Starting service..."
        nohup ./${bin} >/dev/null 2>&1 &
        sleep 3
    fi
}

#停止方法
stop() {
    process_status
    procStatus=$?
    if [[ ${procStatus} -eq "0" ]]; then
        echo -e "Stopping service..."
        # 服务进程号
        pid=`sed -n 1p ${pidFile}`
        kill -2 ${pid}
        sleep 3
    else
        echo -e "Service has STOPPED."
    fi
}

#输出运行状态
status() {
    process_status
    procStatus=$?
    if [[ ${procStatus} -eq "0" ]]; then
        # 服务进程号
        pid=`sed -n 1p ${pidFile}`
        echo -e "Service is RUNNING(${pid})."
    else
        echo -e "Service has STOPPED."
    fi
}

#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
    "start")
        start
        ;;
    "stop")
        stop
        ;;
    "status")
        status
        ;;
    *)
        usage
        ;;
    esac

