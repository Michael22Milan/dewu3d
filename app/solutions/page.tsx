import Image from 'next/image';
import Link from 'next/link';

// 行业解决方案数据
const solutions = [
  {
    id: 'aerospace',
    name: '航空航天',
    description: '为航空航天行业提供高性能金属3D打印解决方案，实现复杂零件的轻量化设计和快速制造。',
    benefits: [
      '减重30-50%',
      '零件整合度提升60%',
      '生产周期缩短70%',
      '成本降低40%',
    ],
    cases: [
      {
        title: '发动机燃油喷嘴优化',
        description: '通过3D打印技术重新设计燃油喷嘴，提升燃烧效率，降低燃料消耗。',
      },
      {
        title: '结构件轻量化设计',
        description: '采用拓扑优化设计，在保证强度的同时大幅减轻零件重量。',
      },
    ],
    image: '/images/aerospace.jpg', // 需要添加实际图片
  },
  {
    id: 'medical',
    name: '医疗器械',
    description: '为医疗行业提供定制化的3D打印解决方案，实现医疗器械的个性化定制和快速生产。',
    benefits: [
      '个性化定制',
      '快速交付',
      '精度保证',
      '成本可控',
    ],
    cases: [
      {
        title: '定制化手术导板',
        description: '基于患者CT数据，快速打印个性化手术导板，提高手术精准度。',
      },
      {
        title: '医疗器械原型验证',
        description: '快速打印医疗器械原型，缩短产品开发周期，降低开发成本。',
      },
    ],
    image: '/images/medical.jpg', // 需要添加实际图片
  },
  {
    id: 'automotive',
    name: '汽车工业',
    description: '为汽车行业提供从产品开发到生产制造的全流程3D打印解决方案。',
    benefits: [
      '快速原型验证',
      '模具制造周期短',
      '小批量生产灵活',
      '设计优化便捷',
    ],
    cases: [
      {
        title: '复杂冷却水道模具',
        description: '采用3D打印技术制造带有共形冷却水道的模具，提升生产效率。',
      },
      {
        title: '功能性零件验证',
        description: '快速打印功能性零件进行装配验证和性能测试。',
      },
    ],
    image: '/images/automotive.jpg', // 需要添加实际图片
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-[#0077b6] text-white py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">行业解决方案</h2>
            <p className="mt-6 text-lg leading-8">
              为不同行业提供专业的3D打印解决方案
            </p>
          </div>
        </div>
      </div>

      {/* 解决方案列表 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {solutions.map((solution, index) => (
            <div key={solution.id} className="mb-32">
              <div className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* 解决方案图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-blue-600" />
                  </div>
                </div>

                {/* 解决方案信息 */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  
                  {/* 效益分析 */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {solution.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <svg
                          className="h-5 w-5 flex-none text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* 案例展示 */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">成功案例</h4>
                    <div className="space-y-6">
                      {solution.cases.map((case_) => (
                        <div key={case_.title}>
                          <h5 className="font-medium text-gray-900">{case_.title}</h5>
                          <p className="mt-2 text-sm text-gray-600">{case_.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/solutions/${solution.id}`}
                      className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      了解更多
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl sm:mt-40 mb-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            寻找适合您的解决方案
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            我们的专家团队将根据您的具体需求，为您定制最优的3D打印解决方案
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              联系我们
            </Link>
            <Link
              href="/cases"
              className="text-sm font-semibold leading-6 text-white"
            >
              查看更多案例 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 