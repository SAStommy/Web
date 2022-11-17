# 111-1 師大科技系網際網絡慨論
>**這裡記錄我在111-1 師大科技系網際網絡慨論的課程的筆記,作業以及專題**


# 目錄  
>+ [**1. 課程介紹** ](https://github.com/SAStommy/Web#課程介紹)
>+ [**2. 自我介紹**](https://github.com/SAStommy/Web#自我介紹)
>+ [**3. 課程筆記區**](https://github.com/SAStommy/Web#課程筆記區)
>+ [**4. 作業連結區**](https://github.com/SAStommy/Web#作業連結區)
>+ [**5. 專題連結區**](https://github.com/SAStommy/Web#專題連結區)
---

# 課程介紹
**授課老師 :**

蔡芸琤老師
  
**內容 :** 
1. 介紹Web1.0至Web3.0的發展
2. 以作業和專題訓練實作能力

# 自我介紹
**姓名**：杜洺鋒\
**學校**：國立臺灣師範大學\
**系級**：科技系二年級\
**E-mail**：mingfungto@gmail.com

# 課程筆記區
>+ [**Week 1**](https://github.com/SAStommy/Web#Week-1)
>+ [**Week 2**](https://github.com/SAStommy/Web#Week-2)
>+ [**Week 3**](https://github.com/SAStommy/Web#Week-3)
>+ [**Week 4**](https://github.com/SAStommy/Web#Week-4)
>+ [**Week 5**](https://github.com/SAStommy/Web#Week-5)
>+ [**Week 6**](https://github.com/SAStommy/Web#Week-6)
>+ [**Week 7**](https://github.com/SAStommy/Web#Week-7)
>+ **Week 8**
>+ **Week 9**
>+ **Week 10**
>+ **Week 11**
>+ **Week 12**
>+ **Week 13**
>+ **Week 14**
>+ **Week 15**
>+ **Week 16**
---

# 作業連結區
>+ [**HW 1:超基礎教學---如何建立靜態網頁**](https://youtu.be/lJikqgQfTs4)
>+ [**HW 2:超基礎教學---如何建立Web2.0**](https://youtu.be/r8noz_0ydgg)
>+ **HW 3**\
> **HW3**:[**Lab 1 Introduction to Amazon S3**](https://youtu.be/YFtk5DD0mMQ)\
> **HW3**:[**Lab 2 Introduction to Amazon ES2**](https://youtu.be/rWho8xmmnEE)\
> **注**: Lab 2沒有拿滿分原因是task 6完全沒評分,他的評分只有到instance running,所以做task 6後要記得去啟動instance而我忘了去啟動
>+ **HW 4**\
> **HW4**:[**Lab 5 Introduction to Amazon Virtual Private Cloud (Amazon VPC)**](https://youtu.be/qmE-n9WEOv0)\
> **HW4**:[**Lab 6 Introduction to AWS Identity and Access Management (IAM)**](https://youtu.be/d_wjzPQhzok)
>+ **HW 5**\
> **HW 5**:[**Lab 3 Introduction to Amazon DynamoDB**](https://youtu.be/2ASittfralY)\
> **HW 5**:[**Lab 4 Introduction to Amazon Relational Database Service(Amazon RDS)**](https://youtu.be/2YtLtvHacg8)\
> **HW 5**:[**Lab 7 Hosting a Static Website Using Amazon Simple Storage Service (Amazon S3)**](https://youtu.be/AtlqKQwASvU)
---

# 專題連結區
>+ **專題 1:**
---

# Week 1
+ 課程介紹

[回目錄](https://github.com/SAStommy/Web#目錄)

# Week 2
+ Web 1.0時代是單向的,是只能顯示資料

## 堂課
> [**task 1** : 更改html模板](https://sastommy.github.io/Web/mypage/)
>
> **目標** : 簡單展示web1.0特性

[回目錄](https://github.com/SAStommy/Web#目錄)

# Week 3
### 資訊傳送過程---osi模型
> **資訊傳送過程主要分為七層進行,分別為實體層,資料連結層,網絡層,傳輸層,會議層,展示層和應用層,而最內層為實體層而最外層是應用層**

### 流程介紹
> **Step 1 : 實體層---電子設備會把資料換成`位元`**
>> **位元 : 電子設備的最少單位**
---
> **Step 2 : 資料連結層---將位元換成`資料框`**
>> **資料框 : 區域網絡傳輸的最少單位,整理位元資料**
---
> **Step 3 : 網絡層---將資料框換成封包**
>> **封包 : 網絡傳輸的最少單位,令位元增加`標頭`**
>>> **標頭 : 封包內容的簡介包括`IP地址`**
>>>> **IP地址 : 封包的名字**
---
> **Step 4 : 傳輸層---將封包換成`傳輸包`**
>> **傳輸包 : 確保封包資料的完整,同時保障傳輸的效率**
---
> **Step 5 : 會議層---管理兩台電腦傳輸的過程,控制傳輸連接通道**
---
> **Step 6 : 展示層---把傳輸包換成接受者能看懂的內容**
---
> **Step 7 : 應用層---運用相關軟件可以把接受的資料進行整理,設計Web的介面,讓其他使用者操作和查看**
---
**osi七層架構圖表**\
![osi七層架構](https://images.vocus.cc/76c1f12c-6735-4275-a82c-f00ae8ef1c28.jpg)\
**圖源** : https://vocus.cc/article/618c7853fd8978000108c4d5
 
+ **通訊協定 :**

**應用層,資料連結層,傳輸層和網絡層都會有的統一規則e.g 應用層:html,資料連結層:mac,傳輸層:udp,網絡層:ip**
+ **網域名稱系統(DNS) :**

**把網址轉釋成IP地址並檢查網址是否存在,繼以能透過其IP地址取得網址資料,可以看到網址內容**

[回目錄](https://github.com/SAStommy/Web#目錄)

# Week 4
+ **html 狀態碼**
  + 100-199 參考資料
  + 200-299 成功
  + 300-399 重新導向
  + 400-499 用戶端錯誤
  + 500-599 伺服器錯誤
  
+ **Web 2.0 可以雙向互動,瀏覽者能夠在網頁設計者的程計下對網頁進行改變,同時網頁設計者也能在網頁中回饋**
+ **互動原理: 需要邏輯判斷而達到互動 ➢ ➢ ➢ 使用server(中間程序)---把邏輯判斷轉化成網頁式輸出**

## 堂課
> **task 2** : 超簡單web2.0伺服器
>
> **目標** : 簡單展示web12.0特性

[回目錄](https://github.com/SAStommy/Web#目錄)

# Week 5
### Web 2.架構
![架構介紹](https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg)\
**圖源** : https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg\

+ **Web2.0會分為三部分進行---前端,後端(node.js[中間] + mysql[資料庫])**
  + 前端 : 顯示資料給瀏覽者,瀏覽者與網絡設計師互動的地方
  + 後端(中間) : 連接瀏覽器和自己的電腦工作
  + 後端(資料庫) : 把瀏覽者與網絡設計師互動的資料進行記錄,分析,處理的地方


+ **用MySQL建立簡單的web 2.0(之後會在HW2中展示)**

[回目錄](https://github.com/SAStommy/Web#目錄)

# Week 6

+ **用MySQL建立簡單的web 2.0(之後會在HW2中展示)**

[回目錄](https://github.com/SAStommy/Web#目錄)

# W



 

 
