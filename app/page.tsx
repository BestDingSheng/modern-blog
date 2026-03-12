import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          欢迎来到我的博客
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          分享技术、思考与生活
        </p>
      </section>

      {/* Posts Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8">最新文章</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                <time>{post.date}</time>
                <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-block">
                  阅读更多 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
