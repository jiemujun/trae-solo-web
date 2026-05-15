import { useState, useEffect, useRef } from "react";
import { achievements } from "@/data/profile";
import { Trophy, Users, FileText, Globe, Star } from "lucide-react";

export default function Achievements() {
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          achievements.forEach((achievement) => {
            const target = parseInt(achievement.value.replace(/\D/g, ""));
            const duration = 2000;
            const steps = 60;
            const stepValue = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += stepValue;
              if (current >= target) {
                setCounters((prev) => ({ ...prev, [achievement.label]: target }));
                clearInterval(timer);
              } else {
                setCounters((prev) => ({ ...prev, [achievement.label]: Math.floor(current) }));
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            学术成就
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            多年深耕，积累丰硕研究成果
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className={`relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-2xl transition-all duration-700 hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl" />

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4">
                  {index === 0 && <FileText className="w-8 h-8 text-amber-400" />}
                  {index === 1 && <Globe className="w-8 h-8 text-amber-400" />}
                  {index === 2 && <Star className="w-8 h-8 text-amber-400" />}
                  {index === 3 && <Users className="w-8 h-8 text-amber-400" />}
                </div>

                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {counters[achievement.label] || 0}
                  <span className="text-3xl text-amber-400">{achievement.suffix}</span>
                </div>

                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {achievement.labelEn}
                </div>
                <div className="text-white/40 text-xs mt-1">
                  {achievement.label}
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-amber-500/5 rounded-full blur-xl" />
            </div>
          ))}
        </div>

        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-lg font-semibold text-white">最佳论文奖</div>
            </div>
            <p className="text-white/50 text-sm">NeurIPS, ICML, ICLR</p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-lg font-semibold text-white">国家级人才计划</div>
            </div>
            <p className="text-white/50 text-sm">青年千人计划入选者</p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-lg font-semibold text-white">学术服务</div>
            </div>
            <p className="text-white/50 text-sm">顶会Area Chair / TPC Member</p>
          </div>
        </div>
      </div>
    </section>
  );
}
