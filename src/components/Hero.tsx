import { personalInfo } from "@/data/profile";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 text-sm font-medium">清华大学计算机系博导</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">{personalInfo.name}</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-white/60 mt-2">
                  {personalInfo.nameEn}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
              >
                <Mail className="w-5 h-5" />
                联系我
              </a>

              <button
                onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-amber-400/50 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
              >
                查看履历
              </button>
            </div>

            <div className="flex items-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.office}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform -rotate-3" />
              <div className="relative bg-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <div className="text-3xl font-bold text-amber-400">5</div>
              <div className="text-xs text-white/60">顶尖学府</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
