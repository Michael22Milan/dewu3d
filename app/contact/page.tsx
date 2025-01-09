'use client';

import { useState } from 'react';
import Image from 'next/image';

// 联系方式数据
const contactInfo = [
  {
    name: '公司地址',
    description: '江苏省昆山市玉山镇祖冲之南路1666号启迪科技园创新大厦106',
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: '联系电话',
    description: (
      <div className="flex flex-col">
        <span>王经理：15210160623</span>
        <span>曹经理：17521562980</span>
      </div>
    ),
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    name: '电子邮箱',
    description: (
      <div className="flex flex-col">
        <span>fwang@dewu3d.com</span>
        <span>xz_cao@dewu3d.com</span>
      </div>
    ),
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-[#48cae6] text-white py-48">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">联系我们</h2>
            <p className="mt-6 text-lg leading-8">
              无论您有任何问题或需求，我们都随时准备为您提供专业的支持和服务。
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          {/* 联系表单 */}
          <div className="bg-white px-6 py-8 sm:px-8 lg:px-12 lg:py-12 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold leading-7 text-gray-900">联系表单</h3>
                <p className="text-base leading-6 text-gray-600">请填写以下信息，我们会尽快与您联系。</p>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    姓名
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    公司名称
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    电子邮箱
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    联系电话
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    主题
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    留言内容
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  提交
                </button>
              </div>
            </form>
          </div>

          {/* 联系信息 */}
          <div>
            <div className="mx-auto max-w-xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">联系方式</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                您可以通过以下方式与我们取得联系，我们将在24小时内回复您的咨询。
              </p>
              <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                {contactInfo.map((info) => (
                  <div key={info.name} className="flex gap-x-4">
                    <dt className="flex-none">
                      {info.icon}
                    </dt>
                    <dd>
                      <strong className="font-semibold text-gray-900">{info.name}:</strong> {info.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 地图区域 */}
            <div className="mt-10 rounded-lg overflow-hidden h-[400px] relative">
              <Image
                src="/images/location-map.webp"
                alt="公司地理位置"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">常见问题</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <div className="pt-6">
              <dt>
                <span className="font-semibold text-gray-900">如何获取产品报价？</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                您可以通过填写上方的联系表单，或直接拨打我们的服务热线0512-5796-4709获取产品报价信息。
              </dd>
            </div>
            <div className="pt-6">
              <dt>
                <span className="font-semibold text-gray-900">是否提供上门服务？</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                是的，我们的设备可以提供上门技术支持和售后服务。
              </dd>
            </div>
            <div className="pt-6">
              <dt>
                <span className="font-semibold text-gray-900">如何申请技术支持？</span>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                您可以通过电话、邮件或在线表单提交技术支持申请，我们的技术团队会在第一时间与您取得联系。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 