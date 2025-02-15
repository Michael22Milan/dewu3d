import Image from 'next/image';
import Link from 'next/link';

// 产品数据
const products = [
  {
    id: 'metal',
    name: '高精度金属3D打印设备',
    description: '自主研发的先进选区激光熔化技术（SLM），成型公差10μm以内、Ra最低可至1μm。适用于消费电子航空航天、医疗器械、人形机器人等高端制造领域。',
    features: [
      '高光洁度：Ra≤1.5μm',
      '高精度：可成型壁厚低至30μm',
      '成型尺寸：最大成型尺寸100×100×200mm',
      '高致密度：≥99.9%',
    ],
    image: '/images/metal-printer.jpg', // 需要添加实际图片
  },
  {
    id: 'polymer',
    name: '多材料金属打印服务',
    description: '独创的多材料铺粉工艺，满足两种及以上金属粉末一体成型。适用于航空航天、核能等极端工况场景。',
    features: [
      '铺粉质量好：不存在铺粉不均匀的问题',
      '材料多样：支持铜、不锈钢、铝合金、高温合金等各种金属粉末材料',
      '易操作：更换或添加粉末高效便捷',
    ],
    image: '/images/polymer-printer.jpg', // 需要添加实际图片
  },
  {
    id: 'software',
    name: 'CAx软件',
    description: '自主研发的拓扑优化、仿真和打印控制软件，提供从模型设计到制造的全流程解决方案。',
    features: [
      '拓扑优化：具备材料各项异性的优化功能',
      '仿真分析：自研高精度、大规模并行CFD求解器',
      '过程监控：基于机器学习方法构建的打印监控与预测系统',
      '集群管理：可实现多设备统一调度',
    ],
    image: '/images/software.jpg', // 需要添加实际图片
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-[#023e8a] text-white py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">产品与技术</h2>
            <p className="mt-6 text-lg leading-8">
              专业的3D打印设备和解决方案提供商
            </p>
          </div>
        </div>
      </div>

      {/* 产品列表 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } mb-32`}
            >
              {/* 产品图片 */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 产品信息 */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
                  {product.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">主要特点</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
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
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={`/products/${product.id}`}
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
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl sm:mt-40 mb-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            需要更多产品信息？
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            我们的技术专家随时为您提供专业的咨询服务
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              联系我们
            </Link>
            <Link
              href="/downloads"
              className="text-sm font-semibold leading-6 text-white"
            >
              下载产品手册 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 