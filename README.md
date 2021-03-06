# Reviews Mining in Nodejs

## DCrawler

DCrawler is Nodejs Crawler, multi-module-spider, jQuery query page content, multi thread support.

Manager is generated by [LoopBack](http://loopback.io).

Version: 0.1.2

Testing in: 
* Nodejs v4.2.1
* NPM v2.14.7

# Install 
```sh
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential mongodb git 
npm install -g grunt-cli bower strongloop pm2

cd ~
git clone https://github.com/duyetdev/reviews-mining
cd reviews-mining

export REVIEW_MINING_PATH=$(pwd)

## Install Strongloop server and Dashboard server 
cd $REVIEW_MINING_PATH/Dashboard; npm install; bower install --allow-root
pm2 start $(which grunt) --name "dashboard-server" -- serve 

## Install Crawler deps
cd $REVIEW_MINING_PATH/Crawler; npm install
```

Contact 
=============

Van-Duyet Le (me[at]duyetdev.com)

Home: http://duyetdev.com

Features
--------

Current features:

* Content parser like jQuery.
* Multi-modules spider parse.
* MongoDb Store
* Queues stack on Database, you can stop and resume anytime.
* UI Manager

License
-------
MIT License

Copyright (c) 2015 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/duyetdev/dcrawler/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

