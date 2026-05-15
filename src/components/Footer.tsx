import { personalInfo } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              {personalInfo.name.charAt(0)}
            </div>
            <div className="text-xl font-bold text-white">{personalInfo.name}</div>
          </div>

          <p className="text-white/50 text-sm mb-6">{personalInfo.title}</p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/50 hover:text-amber-400 transition-colors text-sm"
            >
              {personalInfo.email}
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/50 text-sm">{personalInfo.office}</span>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/30 text-xs">
              © 2024 {personalInfo.name} · 清华大学计算机系 · All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
