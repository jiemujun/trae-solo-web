# 孙宇祥教授个人简历网站 - 技术架构文档

## 1. 架构设计

```
┌─────────────────────────────────────────────────────────┐
│                      前端展示层                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │  Hero   │ │  Timeline│ │Research │ │Contact  │       │
│  │  组件   │ │  组件   │ │  组件   │ │  组件   │       │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘       │
│       └────────────┴────────────┴────────────┘           │
│                         │                                │
│                    React + Vite                          │
└─────────────────────────┬───────────────────────────────┘
                          │
                    Tailwind CSS
```

## 2. 技术选型

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **状态管理**：Zustand
- **路由**：React Router DOM（单页应用无需路由）
- **图标库**：Lucide React
- **动画**：CSS动画 + Framer Motion（可选）

## 3. 项目结构

```
src/
├── components/
│   ├── Hero.tsx              # 首页英雄区域
│   ├── Timeline.tsx          # 教育经历时间线
│   ├── Research.tsx          # 研究方向
│   ├── Achievements.tsx       # 学术成就
│   ├── Contact.tsx           # 联系方式
│   └── Navigation.tsx        # 导航栏
├── data/
│   └── profile.ts            # 个人数据
├── App.tsx                   # 主应用组件
├── main.tsx                  # 入口文件
└── index.css                # 全局样式
```

## 4. 组件清单

| 组件 | 用途 | 关键特性 |
|------|------|----------|
| Navigation | 导航栏 | 滚动时背景变化、固定顶部 |
| Hero | 英雄区域 | 全屏、渐变背景、动态文字 |
| Timeline | 时间线 | 垂直布局、节点动画、交替排列 |
| Research | 研究方向 | 卡片网格、悬浮效果 |
| Achievements | 成就展示 | 数字统计动画 |
| Contact | 联系方式 | 邮箱链接、地址信息 |

## 5. 数据模型

### 5.1 个人信息
```typescript
interface PersonalInfo {
  name: string;           // "孙宇祥"
  title: string;          // "清华大学计算机系博士生导师"
  avatar: string;         // 头像URL
  email: string;          // 联系邮箱
  office: string;         // 办公地点
  bio: string;            // 个人简介
}
```

### 5.2 教育经历
```typescript
interface Education {
  school: string;         // 学校名称
  degree: string;         // 学位
  major: string;          // 专业
  period: string;         // 时间段
  location: string;      // 地点
  description?: string;   // 补充说明
}
```

### 5.3 研究方向
```typescript
interface ResearchArea {
  title: string;           // 方向名称
  description: string;   // 描述
  icon: string;            // 图标名称
}
```

## 6. 响应式断点

| 设备 | 断点 | 布局 |
|------|------|------|
| 桌面 | ≥1024px | 多列布局，完整动画 |
| 平板 | 768px-1023px | 两列布局 |
| 移动 | <768px | 单列堆叠 |

## 7. 性能目标

- 首屏加载时间：<2秒
- Lighthouse评分：≥90
- 动画帧率：60fps
