import { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/profile";
import { BookOpen, Award, Users } from "lucide-react";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: BookOpen,
      title: "学术背景",
      description: "数学 → 电子信息 → 计算机科学，跨学科背景",
    },
    {
      icon: Award,
      title: "顶尖经历",
      description: "北师大、清华、UCB、MIT，世界顶尖学府全覆盖",
    },
    {
      icon: Users,
      title: "人才培养",
      description: "指导博士生与硕士生，培养下一代计算机科学人才",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            关于我
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <p className="text-lg text-white/70 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-slate-800/50 border border-white/10 rounded-xl transition-all duration-700 hover:border-amber-500/30 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <Icon className="w-6 h-6 text-amber-400 mb-3" />
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-800/80 border border-white/10 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {personalInfo.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{personalInfo.name}</div>
                      <div className="text-white/50">{personalInfo.nameEn}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/50">职位</span>
                      <span className="text-white">博士生导师</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/50">机构</span>
                      <span className="text-white">{personalInfo.institution}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/50">研究方向</span>
                      <span className="text-white">大模型 · AI</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-white/50">最高学位</span>
                      <span className="text-amber-400">UCB 计算机博士</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
