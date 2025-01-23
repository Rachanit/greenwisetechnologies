import React from 'react';
import { Building2, Factory, Database, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Success Stories</h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how leading companies are reducing their carbon footprint with CarbonMetrics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {[
              {
                icon: Building2,
                company: 'TechCorp International',
                title: '45% Reduction in Data Center Emissions',
                description: 'How a leading tech company achieved significant carbon reductions across their global data centers.',
                results: [
                  '45% reduction in carbon emissions',
                  '$2.5M annual energy cost savings',
                  'Improved regulatory compliance',
                ],
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
              },
              {
                icon: Factory,
                company: 'EcoManufacturing Co.',
                title: 'Sustainable Manufacturing Excellence',
                description: 'Transforming manufacturing processes to achieve carbon neutrality goals.',
                results: [
                  '60% reduction in factory emissions',
                  'Zero-waste certification achieved',
                  'Enhanced brand reputation',
                ],
                image: 'https://images.unsplash.com/photo-1565715101841-4e50c7eced5a?auto=format&fit=crop&q=80&w=1200',
              },
              {
                icon: Database,
                company: 'Global Logistics Ltd',
                title: 'Smart Fleet Management',
                description: 'Optimizing logistics operations for reduced environmental impact.',
                results: [
                  '30% reduction in fleet emissions',
                  '25% improvement in route efficiency',
                  'Real-time carbon tracking',
                ],
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
              },
            ].map((study) => (
              <div key={study.company} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center">
                      <study.icon className="h-8 w-8 text-emerald-600" />
                      <span className="ml-2 text-sm text-emerald-600 font-semibold">{study.company}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">{study.title}</h2>
                    <p className="mt-4 text-gray-600">{study.description}</p>
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-900">Key Results:</h3>
                      <ul className="mt-4 space-y-3">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center text-gray-600">
                            <ArrowRight className="h-5 w-5 text-emerald-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CarbonMetrics has transformed how we think about and manage our environmental impact. The insights provided are invaluable.",
                author: "Sarah Chen",
                role: "Sustainability Director, TechCorp",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
              },
              {
                quote: "The real-time monitoring and reporting capabilities have helped us achieve our sustainability goals ahead of schedule.",
                author: "Michael Rodriguez",
                role: "CEO, EcoManufacturing",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
              },
              {
                quote: "Implementation was smooth, and the support team has been exceptional. We're seeing real results in our carbon reduction efforts.",
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
                    <p className="text-sm text-emerald-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Join Our Success Stories</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Start your journey towards sustainable business operations today.
            </p>
            <button className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}