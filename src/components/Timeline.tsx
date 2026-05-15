import { useState, useEffect, useRef } from "react";
import { education } from "@/data/profile";
import { GraduationCap, Award } from "lucide-react";

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          education.forEach((edu, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, edu.id]));
            }, index * 200);
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
      id="education"
      ref={sectionRef}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            学术历程
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            从北师大数学到清华博导，每一步都是追求卓越的印记
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber-500 via-blue-500 to-amber-500 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-center transition-all duration-700 ${
                  visibleItems.has(edu.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`lg:pr-12 ${index % 2 === 1 ? "lg:order-3" : ""}`}>
                  <div className={`relative p-6 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}>
                    <div className={`absolute top-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900 hidden lg:block ${
                      index % 2 === 0 ? "-right-10" : "-left-10"
                    }`} />

                    <div className={`flex items-start gap-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="text-amber-400 text-sm font-medium mb-1">{edu.period}</div>
                        <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                        <div className="text-white/50 text-sm mb-2">{edu.schoolEn}</div>
                        <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-2">
                          {edu.degree}
                        </div>
                        <p className="text-white/70 text-sm">{edu.major}</p>
                        {edu.description && (
                          <p className="text-white/50 text-sm mt-2 italic">{edu.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-slate-700 rounded-full text-xs text-white/50">
                      <Award className="w-3 h-3" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:flex ${index % 2 === 1 ? "lg:order-1 lg:justify-end" : "lg:justify-start"}`}>
                  <div className="w-16 h-16 bg-slate-800 border-2 border-amber-500/50 rounded-full flex items-center justify-center">
                    <span className="text-amber-400 font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/20 rounded-full">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="text-white/80">5所顶尖学府 · 全程全额奖学金</span>
          </div>
        </div>
      </div>
    </section>
  );
}
