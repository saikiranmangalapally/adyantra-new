import { getPostBySlug, blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col w-full pb-20 bg-surface min-h-screen">
      
      {/* ================= POST HERO ================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="container-xl max-w-4xl relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
               <Clock size={14} />
               {post.readTime}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-medium border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                <User size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-bold">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
            
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* ================= POST CONTENT ================= */}
      <section className="py-12">
        <div className="container-xl max-w-4xl">
          
          {/* Featured Image Placeholder */}
          <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-12 overflow-hidden shadow-sm relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 mix-blend-multiply"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Sharing */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 flex flex-col items-center gap-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Share</span>
                <div className="w-px h-12 bg-gray-200"></div>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            {/* Markdown Content Area */}
            <div className="lg:col-span-11 prose prose-lg prose-blue max-w-none">
               {/* We parse the simple markdown content we defined. For a real app, you'd use a markdown parser. */}
               {post.content.split('\n\n').map((paragraph, idx) => {
                 if (paragraph.startsWith('## ')) {
                   return <h2 key={idx} className="text-3xl font-bold font-heading mt-10 mb-6 text-gray-900">{paragraph.replace('## ', '')}</h2>
                 }
                 if (paragraph.startsWith('### ')) {
                   return <h3 key={idx} className="text-2xl font-bold font-heading mt-8 mb-4 text-gray-800">{paragraph.replace('### ', '')}</h3>
                 }
                 if (paragraph.startsWith('- ')) {
                   const items = paragraph.split('\n').filter(i => i.startsWith('- '));
                   return (
                     <ul key={idx} className="list-disc pl-6 mb-6 text-gray-600">
                       {items.map((item, i) => <li key={i} className="mb-2">{item.replace('- ', '')}</li>)}
                     </ul>
                   )
                 }
                 if (paragraph.trim() === '') return null;
                 
                 // Handle bold text simply
                 const p = paragraph.split('**').map((part, i) => 
                   i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900">{part}</strong> : part
                 );

                 return <p key={idx} className="text-gray-600 leading-relaxed mb-6">{p}</p>
               })}
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 mt-10">
        <div className="container-xl max-w-4xl">
          <div className="bg-primary text-white rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-heading mb-4">Want to apply these insights to your business?</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Speak with our team to see how Adyantra can help you implement these strategies and drive measurable growth.
              </p>
              <Link href="/contact" className="btn-secondary inline-block">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
