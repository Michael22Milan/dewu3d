import React from 'react';
import Link from 'next/link';

// 产品数据
const products = [
  {
    name: '超高精度金属3D打印\nRa≤1.5微米',
    description: '自研超高精度金属打印设备，可成型壁厚低至30微米，为消费电子、航空航天、医疗器械等行业提供高精度、高性能的金属零部件制造解决方案。',
    href: '/products/metal',
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M864 640H832c-17.92 0-32 14.08-32 32v32H768V320h32c17.92 0 32-14.08 32-32V201.6c0-12.8-3.84-24.96-10.88-35.2l-49.28-73.6a62.848 62.848 0 0 0-53.12-28.8H305.28c-21.76 0-41.6 10.88-53.12 28.8L202.88 166.4c-7.04 10.24-10.88 22.4-10.88 35.2V288c0 17.92 14.08 32 32 32H256v384h-32c-17.92 0-32 14.08-32 32V960h64v-64h512v64h64v-128h32c17.92 0 32-14.08 32-32v-128c0-17.92-14.08-32-32-32zM256 201.6L305.28 128h413.44L768 201.6V256H256v-54.4zM608 448v64h-192V448h192z m-128-64V320h64v64h-64zM320 320h96v64c-35.2 0-64 28.8-64 64v64c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V448c0-35.2-28.8-64-64-64V320H704v384H320V320z m448 512H256v-64h512v64z" />
      </svg>
    ),
  },
  {
    name: '多材料金属3D打印\n独创铺粉技术',
    description: '提供≥2种材料的金属3D打印解决方案，满足复杂工况、高性能零件生产等多样化需求。',
    href: '/products/polymer',
    icon: (
      <svg className="h-8 w-8 text-white" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M975.294449 1023.296523H145.958749c-33.639002 0-56.661893-31.52857-44.510923-60.754852l89.533465-215.136127a47.836452 47.836452 0 0 1 44.574876-28.458851h650.268769c19.761315 0 37.476151 11.319588 44.574875 28.458851l89.597418 215.136127c12.15097 29.226281-10.999826 60.754852-44.70278 60.754852z" />
        <path d="M908.272254 763.265758h-42.720253c-7.48244 0-13.43002-5.563865-13.43002-12.534685V255.802866c0-6.97082 5.94758-12.534685 13.43002-12.534685h42.720253c7.418487 0 13.43002 5.563865 13.43002 12.534685v494.928207c0 6.97082-6.075485 12.534685-13.43002 12.534685zM265.294068 763.265758H222.573814c-7.418487 0-13.43002-5.563865-13.43002-12.534685V255.802866c0-6.97082 6.011533-12.534685 13.43002-12.534685h42.720254c7.48244 0 13.43002 5.563865 13.430019 12.534685v494.928207c0 6.97082-5.94758 12.534685-13.430019 12.534685z" />
        <path d="M243.997893 348.853718v-39.842392c0-6.97082 6.011533-12.534685 13.43002-12.534685h638.117799c7.418487 0 13.43002 5.563865 13.43002 12.534685v39.842392c0 7.034772-6.011533 12.598638-13.43002 12.598638H257.491866c-7.48244 0-13.43002-5.627818-13.43002-12.598638z" />
        <path d="M630.782464 538.79257H500.063605c-6.71501 0-12.214923-5.116198-12.214923-11.447493V239.942653c0-6.267343 5.499913-11.447493 12.214923-11.447493h130.718859c6.71501 0 12.214923 5.116198 12.214923 11.447493v287.402424c0 6.267343-5.499913 11.447493-12.214923 11.447493z" />
        <path d="M594.457458 591.873124h-58.068848c-3.197624 0-5.819675-2.430194-5.819675-5.499913V476.055191c0-2.941814 2.558099-5.43596 5.819675-5.43596h58.068848c3.197624 0 5.819675 2.366242 5.819675 5.43596v110.31802c0 3.069719-2.686004 5.499913-5.819675 5.499913zM136.301925 876.589544C100.680396 807.584824 52.332325 680.703112 24.385093 552.478399-0.620325 437.491849-18.974685 275.692086 35.320966 158.403247 68.064634 87.160189 123.447477 39.6435 199.550923 17.132229c90.68461-26.86004 171.072871-22.063604 238.73459 14.389307 118.120222 63.376903 151.823176 199.595675 153.294084 205.287445l-61.842044 12.9184c-0.25581-1.151145-29.482091-117.03303-123.364325-167.17177C354.763581 54.928142 291.642487 51.986328 218.672713 73.602264c-58.64442 17.267168-99.637957 52.69684-125.346852 108.335494-37.795913 81.731263-40.290059 205.735113-6.842914 358.773386 26.86004 123.23642 73.097679 244.618218 106.864586 310.233458l-57.045608 25.58099z" />
      </svg>
    ),
  },
  {
    name: '解决方案咨询\n高精度仿真',
    description: '专业CAx团队，提供建模-仿真-制造的全流程解决方案，自研CFD求解器和拓扑优化平台提供高性价比服务',
    href: '/solutions',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// 优势数据
const advantages = [
  {
    name: '技术领先',
    description: '拥有自主研发的核心技术，多项发明专利，始终保持行业技术领先地位。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: '品质保证',
    description: '严格的质量管理体系，确保每一个产品都符合最高标准。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: '服务完善',
    description: '专业的技术支持团队，7*12小时响应，为客户提供全方位服务。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    name: '经验丰富',
    description: '服务过众多国内顶尖高校和国家级实验室，具有丰富的项目实施经验。',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[#03045E]" />
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40 relative z-10">
          <div className="px-0 lg:px-0 flex items-center h-full">
            <div className="max-w-2xl">
              <div className="max-w-lg space-y-4">
                <h1 className="text-5xl font-bold tracking-tight text-white">
                  更先进的设计
                </h1>
                <h2 className="text-5xl font-bold tracking-tight text-white">
                  更精密的制造
                </h2>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-[#0077B6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0077B6]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077B6]"
                  >
                    联系我们
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-white">
                    了解更多 <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            {/* 视频播放区域 */}
            <div className="relative w-[130%]" style={{ paddingBottom: '70%' }}>
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* 产品服务 section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">产品与服务</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们提供全方位的高性能设计与精密3D打印解决方案，满足您在不同场景下的需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    {product.icon}
                  </div>
                  <div className="flex flex-col">
                    {product.name.split('\n').map((line, index) => (
                      <div key={index} className="text-base font-semibold leading-7">
                        {line}
                      </div>
                    ))}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{product.description}</p>
                  <p className="mt-6">
                    <Link href={product.href} className="text-sm font-semibold leading-6 text-blue-600">
                      了解更多 <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* 优势 section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">为什么选择我们</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            专业的团队，卓越的服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            凭借多年的行业经验和技术积累，我们为客户提供最优质的服务和解决方案
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {advantage.icon}
                  {advantage.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{advantage.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 mb-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            开启您的智能制造之旅
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            联系我们，获取先进的设计与制造解决方案
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              立即咨询
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#3b82f6" />
                <stop offset={1} stopColor="#1d4ed8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
