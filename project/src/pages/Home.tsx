import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Shield, Zap, Award } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Smart Carbon Monitoring for a Sustainable Future
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Advanced carbon metering solutions empowering businesses to measure, track, and reduce their environmental impact.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=2000"
                alt="Carbon monitoring dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose GreenwiseTech?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Industry-leading solutions for precise carbon monitoring and reduction
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                title: 'Real-time Monitoring',
                description: 'Track carbon emissions in real-time with our advanced IoT sensors and analytics platform.',
              },
              {
                icon: Shield,
                title: 'Compliance Ready',
                description: 'Stay compliant with environmental regulations through comprehensive reporting tools.',
              },
              {
                icon: Zap,
                title: 'Energy Optimization',
                description: 'Identify and implement energy-saving opportunities with AI-powered insights.',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <feature.icon className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Worldwide' },
              { number: '1M+', label: 'Tons CO₂ Reduced' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white">{stat.number}</p>
                <p className="mt-2 text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "GreenwiseTech's solutions have helped us reduce our carbon footprint by 40% in just one year.",
                  author: "Sarah Chen",
                  role: "Sustainability Director, TechCorp",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
                },
                {
                  quote: "The real-time monitoring capabilities have transformed how we approach sustainability.",
                  author: "Michael Rodriguez",
                  role: "CEO, EcoManufacturing",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
                },
                {
                  quote: "Exceptional support team and cutting-edge technology. Highly recommended!",
                  author: "Emma Thompson",
                  role: "Operations Manager, Global Logistics",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
                },
              ].map((testimonial) => (
                <div key={testimonial.author} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.author}</h3>
                      <p className="text-sm text-green-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to reduce your carbon footprint?</h2>
            <p className="mt-4 text-xl text-green-100">
              Join leading companies in their journey towards sustainability.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}