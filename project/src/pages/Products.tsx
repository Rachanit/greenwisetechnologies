import React from 'react';
import { ArrowRight, BarChart, Cloud, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Products & Solutions</h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive carbon monitoring and management solutions designed for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart,
                title: 'CarbonMetrics Pro',
                description: 'Enterprise-grade carbon monitoring system with advanced analytics and reporting capabilities.',
                features: [
                  'Real-time monitoring',
                  'Custom dashboards',
                  'Automated reporting',
                  'API integration',
                ],
                price: 'Starting at $499/mo',
              },
              {
                icon: Cloud,
                title: 'CarbonCloud',
                description: 'Cloud-based solution for small to medium-sized businesses looking to track their carbon footprint.',
                features: [
                  'Easy setup',
                  'Basic analytics',
                  'Monthly reports',
                  'Email support',
                ],
                price: 'Starting at $199/mo',
              },
              {
                icon: Database,
                title: 'DataCenter Monitor',
                description: 'Specialized solution for monitoring and optimizing data center energy consumption.',
                features: [
                  'Power usage monitoring',
                  'Cooling efficiency tracking',
                  'Capacity planning',
                  'Alert system',
                ],
                price: 'Custom pricing',
              },
              {
                icon: Shield,
                title: 'Compliance Suite',
                description: 'Comprehensive solution for meeting environmental regulations and reporting requirements.',
                features: [
                  'Regulatory compliance',
                  'Audit trails',
                  'Document management',
                  'Compliance reporting',
                ],
                price: 'Custom pricing',
              },
            ].map((product) => (
              <div key={product.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
                <product.icon className="h-12 w-12 text-emerald-600" />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">{product.title}</h2>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <ArrowRight className="h-5 w-5 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-gray-900">{product.price}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Seamless Integration</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our solutions integrate with your existing systems and workflows
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {['AWS', 'Azure', 'Google Cloud', 'Salesforce'].map((partner) => (
              <div key={partner} className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm">
                <span className="text-xl font-semibold text-gray-600">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Contact our sales team for a personalized demo and consultation.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}