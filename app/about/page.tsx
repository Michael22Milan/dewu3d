import Image from 'next/image';
import Link from 'next/link';

// 发展历程数据
const timeline = [
  {
    year: '2024',
    title: '全新里程碑',
    description: '发布新一代金属3D打印设备，打印精度和效率大幅提升。',
  },
  {
    year: '2023',
    title: '技术突破',
    description: '自主研发的3D打印控制系统获得多项发明专利。',
  },
  {
    year: '2022',
    title: '市场拓展',
    description: '成功进入航空航天、医疗器械等高端制造领域。',
  },
  {
    year: '2021',
    title: '品质认证',
    description: '通过ISO9001质量管理体系认证，获得多项行业资质。',
  },
  {
    year: '2020',
    title: '创新发展',
    description: '建立研发中心，组建专业技术团队。',
  },
  {
    year: '2019',
    title: '企业成立',
    description: '公司正式成立，致力于3D打印技术的研发与应用。',
  },
];

// 团队成员数据
const team = [
  {
    name: '张三',
    role: '首席执行官',
    description: '拥有20年制造业经验，曾任多家知名企业高管。',
    image: '/images/team/ceo.jpg',
  },
  {
    name: '李四',
    role: '技术总监',
    description: '机械工程博士，在3D打印领域有多项发明专利。',
    image: '/images/team/cto.jpg',
  },
  {
    name: '王五',
    role: '研发总监',
    description: '材料学专家，曾主导多个重大技术项目。',
    image: '/images/team/rd.jpg',
  },
  {
    name: '赵六',
    role: '市场总监',
    description: '十年市场营销经验，精通行业发展趋势。',
    image: '/images/team/marketing.jpg',
  },
];

// 企业文化数据
const culture = [
  {
    title: '使命',
    description: '用创新科技推动制造业升级，让智能制造更简单。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: '愿景',
    description: '成为全球领先的3D打印解决方案提供商。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: '价值观',
    description: '创新、专注、协作、共赢。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-[#00b4d8] text-white py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">关于我们</h2>
            <p className="mt-6 text-lg leading-8">
              致力于为工业制造提供先进的3D打印解决方案，推动制造业智能化转型升级。
            </p>
          </div>
        </div>
      </div>

      {/* 公司简介 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">公司简介</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们是一家专注于3D打印技术研发与应用的高新技术企业，拥有自主知识产权的核心技术和完整的产品线。
            通过持续创新和技术积累，我们为客户提供从设备、材料到解决方案的全方位服务。
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            公司汇聚了一批在3D打印、机械设计、材料科学等领域的专业人才，建立了完善的研发、生产、销售和服务体系。
            我们的产品和服务已广泛应用于航空航天、医疗器械、汽车制造等高端制造领域。
          </p>
        </div>
      </div>

      {/* 企业文化 */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">企业文化</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们秉持创新、专注、协作、共赢的价值观，致力于为客户创造价值。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {culture.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {item.icon}
                    {item.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{item.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 发展历程 */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">发展历程</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              见证我们的成长与进步
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200" />

              {/* 事件列表 */}
              <div className="space-y-16">
                {timeline.map((event) => (
                  <div key={event.year} className="relative pl-12">
                    {/* 时间点 */}
                    <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>

                    {/* 内容 */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.year}</h3>
                      <h4 className="mt-2 text-lg font-medium text-gray-900">{event.title}</h4>
                      <p className="mt-3 text-base text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 管理团队 */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">管理团队</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              专业的团队是我们最宝贵的财富
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-sm leading-6 text-blue-600">{member.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl sm:mt-40 mb-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            加入我们，共创未来
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            我们期待优秀的人才加入，一起推动智能制造的发展
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Link
              href="/careers"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              查看职位
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              联系我们 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 