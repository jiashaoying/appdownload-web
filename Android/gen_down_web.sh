#!/bin/bash
WORKDIR=/data/releases/builds/Android
list=$(ls ${WORKDIR} | grep "sgzq-android")
for file in ${list[@]}
do
	file_path=`echo ${file%.*}`
	mkdir -p ${WORKDIR}/versions/${file_path}
	cp -a ${WORKDIR}/template_down/* ${WORKDIR}/versions/${file_path}

    echo "${file}替换html文件完成"
done

