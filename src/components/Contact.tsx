import { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/profile";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            联系方式
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            期待与您交流合作，共同推动学术进步
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">直接联系我</h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">电子邮箱</div>
                    <div className="text-white font-medium">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">办公地点</div>
                    <div className="text-white font-medium">{personalInfo.office}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm mb-1">清华大学计算机系</div>
                    <div className="text-white font-medium">欢迎访问交流</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-white/50 text-sm mb-3">关注更多</div>
                <div className="flex gap-3">
                  {["GitHub", "Google Scholar", "LinkedIn"].map((platform) => (
                    <button
                      key={platform}
                      className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-lg text-white/70 text-sm hover:border-amber-500/30 hover:text-amber-400 transition-colors"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-white/70 text-sm mb-2">您的姓名</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">电子邮箱</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">留言内容</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                    placeholder="请输入您想说的话..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                      发送中...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      发送消息
                    </>
                  )}
                </button>
              </div>

              {showSuccess && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center animate-pulse">
                  消息发送成功！我会尽快回复您
                </div>
              )}
            </form>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-600 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-full">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span className="text-white/70">北京市海淀区清华大学 · FIT楼</span>
          </div>
        </div>
      </div>
    </section>
  );
}
