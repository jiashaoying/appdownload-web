# -*- coding: utf-8 -*-

from flask import Flask, request, json, jsonify
from flask_cors import CORS

import os
app = Flask(__name__)

@app.route('/stockinstall/ios/versions/', methods=['GET'])
def ios_versions():
    path = '/data/releases/builds/iOS/versions'
    folders = os.listdir(path)
    
    for item in folders[:]:
        if 'sgzq-' not in item:
            folders.remove(item)
    folders.sort(reverse=True)
    returnDic = {}
    list = []
    for item in folders:
        if 'sgzq-' in item:
            dataDic = {}
            elements = item.split('-')
            ver_name = elements[0] + '-' + elements[1] + '-' + elements[2]
            build_time = elements[3]
            build_time = build_time[:4] + '-' + build_time[4:6] + '-' + build_time[6:8] + ' ' + build_time[8:10] + ':' + build_time[10:12]
            dataDic['name'] = ver_name
            dataDic['time'] = build_time
            dataDic['file_name'] = item
            list.append(dataDic)
    
    returnDic['code'] = 200
    returnDic['msg'] = 'SUCCESS'
    returnDic['list'] = list
    return jsonify(returnDic)

@app.route('/stockinstall/android/versions/', methods=['GET'])
def android_versions():
    path = '/data/releases/builds/Android/versions'
    folders = os.listdir(path)
    
    for item in folders[:]:
        if 'sgzq-' not in item:
            folders.remove(item)
    folders.sort(reverse=True)
    returnDic = {}
    list = []
    for item in folders:
        if 'sgzq-' in item:
            dataDic = {}
            elements = item.split('-')
            ver_name = elements[0] + '-' + elements[1] + '-' + elements[2]
            build_time = elements[3]
            build_time = build_time[:4] + '-' + build_time[4:6] + '-' + build_time[6:8] + ' ' + build_time[8:10] + ':' + build_time[10:12]
            dataDic['name'] = ver_name
            dataDic['time'] = build_time
            dataDic['file_name'] = item
            list.append(dataDic)
    
    returnDic['code'] = 200
    returnDic['msg'] = 'SUCCESS'
    returnDic['list'] = list
    return jsonify(returnDic)

if __name__ == '__main__':
    CORS(app, supports_credentials=True)
    app.run(host='0.0.0.0', port=5088)
