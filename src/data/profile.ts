export interface PersonalInfo {
  name: string;
  nameEn: string;
  title: string;
  titleEn: string;
  institution: string;
  email: string;
  office: string;
  bio: string;
  avatar: string;
}

export interface Education {
  id: string;
  school: string;
  schoolEn: string;
  degree: string;
  major: string;
  majorEn: string;
  period: string;
  location: string;
  description?: string;
}

export interface ResearchArea {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface Achievement {
  label: string;
  labelEn: string;
  value: string;
  suffix?: string;
}

export const personalInfo: PersonalInfo = {
  name: "孙宇祥",
  nameEn: "Yuxiang Sun",
  title: "清华大学计算机系博士生导师",
  titleEn: "Ph.D. Supervisor, Department of Computer Science",
  institution: "清华大学",
  email: "yuxiang.sun@tsinghua.edu.cn",
  office: "清华大学FIT楼",
  bio: "青年学者，专注于大模型、人工智能与计算机科学研究。历经北师大数学、清华电子信息、UCB计算机、MIT博后，现为清华计算机系博导，致力于培养下一代计算机科学人才。",
  avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional+portrait+photo+of+a+young+Chinese+scholar+in+his+30s+Asian+man+wearing+casual+formal+attire+clean+white+background+high+quality&image_size=square_hd",
};

export const education: Education[] = [
  {
    id: "bnu",
    school: "北京师范大学",
    schoolEn: "Beijing Normal University",
    degree: "理学学士",
    major: "数学与应用数学",
    majorEn: "Mathematics and Applied Mathematics",
    period: "2009-2013",
    location: "北京",
    description: "打下坚实的数学基础，培养严谨的逻辑思维能力",
  },
  {
    id: "tsinghua-master",
    school: "清华大学",
    schoolEn: "Tsinghua University",
    degree: "工学硕士",
    major: "电子信息（大模型方向）",
    majorEn: "Electronic Information (Large Language Models)",
    period: "2013-2016",
    location: "北京",
    description: "师从顶尖导师，开始深入大模型研究",
  },
  {
    id: "ucb",
    school: "加州大学伯克利分校",
    schoolEn: "UC Berkeley",
    degree: "哲学博士",
    major: "计算机科学",
    majorEn: "Computer Science",
    period: "2016-2020",
    location: "加州伯克利",
    description: "世界顶尖学府，获得全额奖学金资助",
  },
  {
    id: "mit",
    school: "麻省理工学院",
    schoolEn: "MIT",
    degree: "博士后",
    major: "计算机科学与人工智能",
    majorEn: "Computer Science and Artificial Intelligence",
    period: "2020-2024",
    location: "马萨诸塞州剑桥",
    description: "跟随图灵奖得主团队开展前沿研究",
  },
  {
    id: "tsinghua-faculty",
    school: "清华大学",
    schoolEn: "Tsinghua University",
    degree: "博士生导师",
    major: "计算机科学与技术",
    majorEn: "Computer Science and Technology",
    period: "2024-至今",
    location: "北京",
    description: "回归清华，培养下一代计算机科学人才",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    title: "大语言模型",
    titleEn: "Large Language Models",
    description: "专注于大规模语言模型的预训练、微调与推理优化",
    descriptionEn: "Focusing on pre-training, fine-tuning, and inference optimization of large language models",
    icon: "Brain",
  },
  {
    title: "人工智能",
    titleEn: "Artificial Intelligence",
    description: "探索AI基础理论与前沿应用，推动通用人工智能发展",
    descriptionEn: "Exploring fundamental AI theory and cutting-edge applications",
    icon: "Sparkles",
  },
  {
    title: "计算机视觉",
    titleEn: "Computer Vision",
    description: "研究视觉感知与理解的深度学习方法",
    descriptionEn: "Research on deep learning methods for visual perception and understanding",
    icon: "Eye",
  },
  {
    title: "机器学习",
    titleEn: "Machine Learning",
    description: "开发新型机器学习算法与理论框架",
    descriptionEn: "Developing novel machine learning algorithms and theoretical frameworks",
    icon: "LineChart",
  },
  {
    title: "分布式计算",
    titleEn: "Distributed Computing",
    description: "构建高效的大规模分布式训练与推理系统",
    descriptionEn: "Building efficient large-scale distributed training and inference systems",
    icon: "Network",
  },
  {
    title: "神经架构搜索",
    titleEn: "Neural Architecture Search",
    description: "自动化设计高性能神经网络结构",
    descriptionEn: "Automatically designing high-performance neural network architectures",
    icon: "Cpu",
  },
];

export const achievements: Achievement[] = [
  { label: "发表论文", labelEn: "Papers Published", value: "80", suffix: "+" },
  { label: "引用次数", labelEn: "Citations", value: "5000", suffix: "+" },
  { label: "科研项目", labelEn: "Projects", value: "15" },
  { label: "指导学生", labelEn: "Students Mentored", value: "30", suffix: "+" },
];
