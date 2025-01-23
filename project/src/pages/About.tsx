import React from 'react';
import { Users, Target, History } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About CarbonMetrics</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in carbon emission monitoring and reduction technologies since 2010.
            We help businesses create a more sustainable future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-6 text-lg text-gray-600">
                At CarbonMetrics, we're committed to empowering businesses with the tools and insights
                they need to measure, understand, and reduce their carbon footprint. Our mission is to
                accelerate the transition to a sustainable, low-carbon economy through innovative
                technology solutions.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'Vision', text: 'A world where every business operates sustainably' },
                  { icon: Users, title: 'Values', text: 'Innovation, Integrity, Impact' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start">
                    <item.icon className="h-6 w-6 text-emerald-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-2 text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Leadership Team</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'Michael Chen',
                role: 'Chief Technology Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
              },
              {
                name: 'Emma Williams',
                role: 'Head of Sustainability',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-emerald-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <div className="mt-12 relative">
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-emerald-100 -translate-x-1/2" />
              {[
                { year: '2010', title: 'Founded', description: 'CarbonMetrics was established with a vision for sustainable business.' },
                { year: '2015', title: 'Global Expansion', description: 'Expanded operations to Europe and Asia.' },
                { year: '2018', title: 'Innovation Award', description: 'Received Environmental Technology Innovation Award.' },
                { year: '2023', title: 'Industry Leader', description: 'Became the leading provider of carbon monitoring solutions.' },
              ].map((event, index) => (
                <div key={event.year} className={`relative ${index % 2 === 0 ? 'text-right pr-8 lg:ml-auto lg:pl-20' : 'text-left pl-8 lg:mr-auto lg:pr-20'} pb-12 lg:w-1/2`}>
                  <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} w-4 h-4 rounded-full bg-emerald-600 top-0 transform -translate-y-2 ${index % 2 === 0 ? 'translate-x-2' : '-translate-x-2'}`} />
                  <span className="text-emerald-600 font-semibold">{event.year}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}