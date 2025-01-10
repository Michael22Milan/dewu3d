import Image from 'next/image';
import Link from 'next/link';

// 发展历程数据
const timeline = [
  {
    year: '2025-1月',
    title: '技术突破',
    description: '开发出全新工艺，可极大提高金属打印精度和致密度，实现高反金属的稳定成型。',
  },
  {
    year: '2024-10',
    title: '全新里程碑',
    description: '自主研发的高精度金属3D打印设备顺利下线并投入使用。',
  },
  {
    year: '2024-5',
    title: '企业成立',
    description: '公司正式成立，致力于为工业界提供高效的设计与制造一体化解决方案。',
  },
  {
    year: '2023-9',
    title: '团队建立',
    description: '数位行业经验丰富的工程师与高校博士一起组建了初创团队，开始了早期的科研成果转化。',
  },
];

// 团队成员数据
const team = [
  {
    name: 'Fei Wang',
    role: '总经理',
    description: '拥有多年3D打印科研与产业经验，曾师从3D打印行业泰斗级教授。',
    image: '/images/team/ceo.jpg',
  },
  {
    name: 'Michael Tsao',
    role: '副总经理',
    description: '曾就职于中国商飞，拥有深厚的设计与制造一体化工程经验。',
    image: '/images/team/vice-general-manager.jpg',
  },
  {
    name: 'Wenhao Xu',
    role: 'CTO',
    description: '上海交通大学博士后，在能源与3D打印领域拥有多年科研经验，为公司的产品研发与落地提供技术支持。',
    image: '/images/team/cto.jpg',
  },
  {
    name: 'Arios Wang',
    role: 'CFO',
    description: '拥有多年投资与财务管理经验，为公司的财务管理与战略规划提供支持。',
    image: '/images/team/cfo.jpg',
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
    description: '成为全球领先的设计与制造解决方案提供商。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: '价值观',
    description: '让我们获得共同的发展与成功。',
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
              致力于为工业场景提供先进的设计与3D打印解决方案，推动制造业智能化转型升级。
            </p>
          </div>
        </div>
      </div>

      {/* 公司简介 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">公司简介</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们是一家专注于创新3D打印的高科技企业，拥有自主知识产权的仿真设计平台和打印设备构成的完整产品线。
            通过持续创新和技术积累，我们为客户提供从设计、材料到制造的完整解决方案。
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            公司汇聚了一批在3D打印、流体力学、机械设计、材料科学、人工智能等领域的专业人才，建立了完善的研发、生产、销售和服务体系。
            我们的产品和服务已广泛应用于热管理、医疗器械、3C电子、eVTOL等高端制造领域。
          </p>
        </div>
      </div>

      {/* 企业文化 */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">企业文化</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我们秉持以人为本、创新、专注的工程师文化，致力于为社会创造价值。
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
              优秀的工程师是我们最宝贵的财富
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
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
            我们期待优秀的人才加入，一起推动智能设计与制造的发展
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