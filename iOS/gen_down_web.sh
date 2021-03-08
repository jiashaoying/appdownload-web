#!/bin/bash

IPA_BASE_URL="https://dev.shgsec.com:1782/builds/iOS/"
list=$(ls | grep "sgzq-phone")
for file in ${list[@]}
do
	file_path=`echo ${file%.*}`
	mkdir -p ./versions/${file_path}
	cp -a ./template_down/* ./versions/${file_path}
    IPA_URL="${IPA_BASE_URL}${file}"
    IPA_URL=${IPA_URL//\//\\\/}
    sed -i "s/IOS_APP_URL/${IPA_URL}/g" ./versions/${file_path}/shgsec_iphone.plist
    echo "${file}替换plist文件完成"
done
