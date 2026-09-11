import Link from "next/link";
import CTABanner from "../_components/cta-banner";
import FeaturedPost from "./_components/featured-post";

const posts = [
  {
    title: "The Skills Gap That AI Won't Fill",
    excerpt:
      "AI is transforming every role. But most organisations still don't know what skills their people have.",
    date: "Sep 15, 2024",
    category: "Workforce Transformation",
  },
  {
    title: "Why Your Skills Data Is Broken (And How to Fix It)",
    excerpt:
      "Skills data exists everywhere - HRIS, LMS, manager brains - and nowhere useful. Here's how to get it right.",
    date: "Sep 8, 2024",
    category: "Data Governance",
  },
  {
    title: "From Org Charts to Capability Maps",
    excerpt:
      "Traditional org design is dead. Skills-based organisations are the future. Here's how to make the shift.",
    date: "Aug 29, 2024",
    category: "Organizational Design",
  },
];

export default function Blog() {
  return (
    <div className="pt-[68px]">
      <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h1 className="display-lg text-slate-900 mb-4">
            Insights on the Skills-Based Organisation
          </h1>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            Thoughts on workforce transformation, skills intelligence, and the future of work.
          </p>
        </div>
      </section>

      <FeaturedPost />

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h2 className="display-md text-slate-900 mb-12">More articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.title}
                href="#"
                className="group bg-slate-50 rounded-xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors"
              >
                <div className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-3">
                  {post.category}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <div className="text-xs text-slate-500">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Stay current on workforce transformation"
        subheadline="Subscribe to our insights newsletter"
        primaryCta={{
          label: "Subscribe",
          href: "#",
        }}
      />
    </div>
  );
}
