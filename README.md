🌊 水电费提醒系统 | Water Bill Reminder
一个轻量级、响应式的网页应用，帮助用户管理水电费账单并设置每月提醒。支持多账户管理，集成邮件提醒功能，适合个人使用或社区部署。

<!-- 可替换为实际截图 -->

🚀 项目亮点
✅ 多账户支持：可添加多个用户及其提醒设置

📩 邮件提醒：集成 EmailJS，无需后端即可发送提醒邮件

📱 响应式设计：适配手机、平板和桌面端

💾 本地存储：用户数据保存在浏览器，无需数据库

🎨 清新界面：现代化 UI，简洁易用

📸 页面预览
访问项目 👉 https://yilaguan80.github.io/water-bill-reminder/

🧰 技术栈
层级	技术
前端	HTML, CSS, JavaScript
邮件服务	EmailJS
部署平台	GitHub Pages
📦 使用方法
打开网页并填写用户信息（用户名、编号、邮箱、提醒日）

点击“添加用户”保存信息

每月指定日期自动触发邮件提醒

可随时查看用户列表并发送提醒

🔧 本地开发
bash
# 克隆项目
git clone https://github.com/yilaguan80/water-bill-reminder.git

# 打开 index.html 即可运行
📩 配置 EmailJS
注册 EmailJS

创建邮件服务（如 Gmail）

创建模板并添加变量：to_email, to_name, message

替换 script.js 中的：

YOUR_EMAILJS_USER_ID

YOUR_SERVICE_ID

YOUR_TEMPLATE_ID

🧠 TODO
[ ] 添加短信提醒功能（如 Twilio）

[ ] 接入真实账单查询 API

[ ] 用户登录与权限管理

[ ] 数据持久化（如 Firebase 或 Supabase）

📄 许可证
MIT License © yilaguan80
