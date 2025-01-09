import Image from 'next/image';
import Link from 'next/link';

// 新闻数据
const news = [
  {
    id: 1,
    title: '公司成功研发新一代金属3D打印设备',
    category: '公司新闻',
    date: '2024-01-05',
    description: '我司自主研发的新一代金属3D打印设备成功下线，打印精度提升50%，生产效率提高30%。',
    image: '/images/news/printer.jpg',
    author: '技术部',
  },
  {
    id: 2,
    title: '成功交付航空发动机关键零部件项目',
    category: '项目案例',
    date: '2024-01-03',
    description: '为某航空发动机制造商成功交付一批关键零部件，获得客户高度认可。',
    image: '/images/news/engine.jpg',
    author: '项目部',
  },
  {
    id: 3,
    title: '3D打印技术在医疗领域的最新应用',
    category: '行业动态',
    date: '2024-01-02',
    description: '3D打印技术在医疗器械、假体制造等领域的应用不断深入，带来革命性变革。',
    image: '/images/news/medical.jpg',
    author: '市场部',
  },
  {
    id: 4,
    title: '公司参加2024年工业制造展览会',
    category: '公司新闻',
    date: '2023-12-28',
    description: '我司携最新3D打印设备及解决方案参加展会，展示创新技术成果。',
    image: '/images/news/exhibition.jpg',
    author: '市场部',
  },
  {
    id: 5,
    title: '获得国家级高新技术企业认定',
    category: '公司新闻',
    date: '2023-12-25',
    description: '公司凭借强大的研发实力和创新能力，成功获得国家级高新技术企业认定。',
    image: '/images/news/award.jpg',
    author: '行政部',
  },
  {
    id: 6,
    title: '3D打印在汽车制造中的应用趋势',
    category: '行业动态',
    date: '2023-12-20',
    description: '探讨3D打印技术如何改变传统汽车制造流程，带来效率提升。',
    image: '/images/news/automotive.jpg',
    author: '研发部',
  },
];

// 新闻分类
const categories = [
  { name: '全部', count: news.length },
  { name: '公司新闻', count: news.filter(item => item.category === '公司新闻').length },
  { name: '项目案例', count: news.filter(item => item.category === '项目案例').length },
  { name: '行业动态', count: news.filter(item => item.category === '行业动态').length },
];

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-[#0096c7] text-white py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">新闻资讯</h2>
            <p className="mt-6 text-lg leading-8">
              了解公司最新动态、项目案例和行业资讯
            </p>
          </div>
        </div>
      </div>

      {/* 新闻内容 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 分类导航 */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="新闻分类">
            {categories.map((category) => (
              <button
                key={category.name}
                className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                {category.name}
                <span className="ml-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {category.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* 新闻列表 */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl" />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {article.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/news/${article.id}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {article.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 分页 */}
        <nav className="mt-16 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
              </svg>
              上一页
            </a>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <a href="#" className="inline-flex items-center border-t-2 border-blue-500 px-4 pt-4 text-sm font-medium text-blue-600" aria-current="page">1</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">2</a>
            <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <a
              href="#"
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              下一页
              <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* 订阅区域 */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 mb-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            订阅我们的新闻资讯
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            及时了解行业动态和公司最新消息
          </p>
          <form className="mx-auto mt-10 max-w-md">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                邮箱地址
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="输入您的邮箱地址"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                订阅
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 