export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">关于我</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          你好！欢迎来到我的博客。
        </p>
        <p className="mb-4">
          这是一个现代化的个人博客，用于分享技术文章、学习笔记和生活感悟。
        </p>
        <p className="mb-4">
          博客使用 Next.js 14、TypeScript 和 Tailwind CSS 构建，
          支持 Markdown 文章、暗色模式、响应式设计等现代化特性。
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">技术栈</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js 14 - React 框架</li>
          <li>TypeScript - 类型安全</li>
          <li>Tailwind CSS - 样式框架</li>
          <li>Markdown - 文章格式</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">联系方式</h2>
        <p>
          如果你想联系我，可以通过以下方式：
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>GitHub: <a href="https://github.com" className="text-blue-600 hover:underline">@yourusername</a></li>
          <li>Twitter: <a href="https://twitter.com" className="text-blue-600 hover:underline">@yourusername</a></li>
          <li>Email: your.email@example.com</li>
        </ul>
      </div>
    </div>
  );
}
