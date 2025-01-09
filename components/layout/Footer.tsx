import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  solutions: [
    { name: '工业制造', href: '/solutions#manufacturing' },
    { name: '医疗器械', href: '/solutions#medical' },
    { name: '航空航天', href: '/solutions#aerospace' },
    { name: '汽车工业', href: '/solutions#automotive' },
  ],
  support: [
    { name: '技术支持', href: '/support' },
    { name: '常见问题', href: '/faq' },
    { name: '在线咨询', href: '/contact' },
    { name: '下载中心', href: '/downloads' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '新闻资讯', href: '/news' },
    { name: '加入我们', href: '/careers' },
    { name: '联系我们', href: '/contact' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '使用条款', href: '/terms' },
  ],
  social: [
    {
      name: '微信',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.364 16.146a.75.75 0 0 1 .75-.75h5.792a.75.75 0 0 1 0 1.5H9.114a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h5.792a.75.75 0 0 1 0 1.5H9.114a.75.75 0 0 1-.75-.75Zm0-4a.75.75 0 0 1 .75-.75h5.792a.75.75 0 0 1 0 1.5H9.114a.75.75 0 0 1-.75-.75Z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        页面底部
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="/images/logo-footer.png"
              alt="德悟增材"
              width={160}
              height={50}
              className="h-12 w-auto"
              style={{ width: 'auto', height: '48px' }}
            />
            <p className="text-sm leading-6 text-gray-300">
              致力于为工业制造提供先进的3D打印解决方案
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">解决方案</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">支持服务</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">公司</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">法律</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 