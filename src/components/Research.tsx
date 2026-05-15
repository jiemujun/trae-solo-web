import { useState, useEffect, useRef } from "react";
import { researchAreas } from "@/data/profile";
import { Brain, Sparkles, Eye, LineChart, Network, Cpu, Microscope } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  Eye,
  LineChart,
  Network,
  Cpu,
  Microscope,
};

export default function Research() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          researchAreas.forEach((area, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, area.title]));
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <Microscope className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Research</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            研究方向
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            聚焦大模型与人工智能前沿，探索计算机科学的无限可能
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Brain;
            const isVisible = visibleCards.has(area.title);

            return (
              <div
                key={area.title}
                className={`group relative p-6 lg:p-8 bg-slate-800/50 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-500 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-blue-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-blue-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-amber-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    {area.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="text-xs text-white/30 uppercase tracking-wider">
                      {area.titleEn}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-1 bg-amber-500/20 rounded-full animate-ping" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-800"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-medium">6大研究方向</div>
              <div className="text-white/50 text-sm">覆盖AI核心领域</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
