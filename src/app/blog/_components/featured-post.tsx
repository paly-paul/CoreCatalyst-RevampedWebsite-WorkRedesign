export default function FeaturedPost() {
  const featuredPost = {
    title: "Why your skill data disagrees with itself - and what to do about it",
    excerpt:
      "We analysed skill records across 18 enterprise organizations and four source systems. The average agreement rate was 62%. Here's what's driving the conflict and why auto-resolution alone isn't the full answer.",
    category: "Research",
    author: "Sofia Lindqvist",
    date: "Aug 14, 2025",
    readTime: "9 min read",
    stats: [
      { label: "HRIS profile", value: "88%" },
      { label: "LinkedIn data", value: "61%" },
      { label: "Manager review", value: "44%" },
      { label: "LMS completion", value: "73%" },
    ],
  };

  return (
    <section data-testid="section-featured-post" className="py-20 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div
          data-testid="featured-post-card"
          className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 rounded-2xl overflow-hidden border border-slate-200"
        >
          {/* Featured Image/Graphic */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 flex items-center justify-center min-h-[400px]">
            <div className="w-full space-y-6">
              <div className="text-lg font-bold text-slate-900">
                Skill source agreement rate
              </div>
              {featuredPost.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-600 min-w-[120px]">
                    {stat.label}
                  </span>
                  <div className="flex-grow bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{
                        width: stat.value,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 min-w-[40px] text-right">
                    {stat.value}
                  </span>
                </div>
              ))}
              <div className="text-xs text-slate-500 mt-8 pt-4 border-t border-slate-200">
                Average agreement across 4 sources, 18 enterprise orgs, 2024
              </div>
            </div>
          </div>

          {/* Featured Content */}
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                {featuredPost.category}
              </span>
            </div>

            <h2 className="display-sm text-slate-900 mb-4">
              {featuredPost.title}
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                SL
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {featuredPost.author}
                </p>
                <p className="text-xs text-slate-500">
                  {featuredPost.date} • {featuredPost.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
