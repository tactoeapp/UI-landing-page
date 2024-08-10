import React from 'react';

function Testimonials() {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">What Early Adopters Are Excited About</h2>
            <p className="text-xl text-gray-600">Hear from those who have seen a demo of tactoe. and are eagerly awaiting the MVP release.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 p-2 text-blue-500 mr-4">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {/* LinkedIn Logo */}
                    <path d="M4.98 3.5c0 1.5-1.07 2.75-2.4 2.75-1.36 0-2.43-1.23-2.43-2.75S1.15.75 2.51.75c1.37 0 2.4 1.23 2.4 2.75zm-3.22 5.87h-2.68v13.11h2.68v-13.11zm9.16 2.71c-1.09 0-1.98.36-2.59 1.08v-.9h-2.68v8.84h2.68v-4.62c0-1.22.47-2.1 1.46-2.1 1.21 0 1.82.82 1.82 2.04v4.68h2.68v-5.33c0-2.84-1.56-4.58-4.49-4.58zm10.06 6.48v-1.3c0-.81-.18-1.61-.56-2.35-.39-.74-.95-1.36-1.63-1.84-.67-.47-1.4-.82-2.23-1.05-.81-.24-1.62-.37-2.41-.37-.74 0-1.48.11-2.19.31-.71.22-1.39.56-2 1.04-.61.49-1.14 1.05-1.58 1.67-.44.63-.73 1.29-.88 2.02-.15.73-.22 1.48-.22 2.28v2.24h-2.68v-7.2c0-2.47.46-4.52 1.38-6.24.92-1.73 2.11-3.02 3.65-3.74 1.54-.72 3.22-1.08 5.05-1.08 2.55 0 4.82.62 6.72 1.86 1.89 1.24 3.32 2.98 4.27 5.16 1.26 2.85 1.89 6.29 1.89 10.24v2.28h-2.68z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600">Early Adopter from LinkedIn</div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "I was impressed with the demo of tactoe. The features look promising, and I’m excited to see how the MVP will enhance my workflow. It’s clear that a lot of thought has gone into its design."
              </blockquote>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 p-2 text-orange-500 mr-4">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {/* Reddit Logo */}
                    <path d="M12 2.5c-5.21 0-9.5 3.93-9.5 8.75s4.29 8.75 9.5 8.75 9.5-3.93 9.5-8.75-4.29-8.75-9.5-8.75zm0 15c-3.4 0-6.15-2.4-6.15-5.25S8.6 7 12 7c3.4 0 6.15 2.4 6.15 5.25s-2.75 5.25-6.15 5.25zm4.75-5.25c0 1.16-.94 2.1-2.1 2.1-1.16 0-2.1-.94-2.1-2.1s.94-2.1 2.1-2.1c1.16 0 2.1.94 2.1 2.1zm-7.5 0c0 1.16-.94 2.1-2.1 2.1-1.16 0-2.1-.94-2.1-2.1s.94-2.1 2.1-2.1c1.16 0 2.1.94 2.1 2.1zm-1.27-7.22c.06-.31-.21-.58-.52-.58-.15 0-.3.06-.42.17-1.48.9-3.15 1.42-4.99 1.42-.14 0-.27-.02-.4-.06-.37-.13-.66-.46-.66-.86v-.16c0-.53.43-.97.97-.97.18 0 .34.06.48.16 1.32.9 2.83 1.35 4.36 1.35.14 0 .27-.02.4-.06.37-.13.66-.46.66-.86v-.16c0-.53-.43-.97-.97-.97-.18 0-.34.06-.48.16-1.32.9-2.83 1.35-4.36 1.35-.14 0-.27-.02-.4-.06-.37-.13-.66-.46-.66-.86v-.16c0-.53.43-.97.97-.97.18 0 .34.06.48.16 1.32.9 2.83 1.35 4.36 1.35.14 0 .27-.02.4-.06.37-.13.66-.46.66-.86v-.16c0-.53-.43-.97-.97-.97-.18 0-.34.06-.48.16-1.32.9-2.83 1.35-4.36 1.35-.14 0-.27-.02-.4-.06-.37-.13-.66-.46-.66-.86z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600">Early Adopter from Reddit</div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "The demo of tactoe left me impressed with its potential. The concept and planned features are spot-on for our needs. I'm eagerly awaiting the MVP to see it all come together."
              </blockquote>
            </div>
          </div>

          {/* Alpha version callout */}
          <div className="max-w-3xl mx-auto mt-12 bg-[#e0f7fa] rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#008a96] mb-2">Early Adopters (MVP) Version Coming Soon!</h3>
            <p className="text-[#00a686] font-semibold mb-4">Be among the first to try our MVP and stay updated with exclusive screenshots, news, and feature plans. Your feedback will help us shape the future of project management.</p>
            <a href="#" className="inline-block bg-[#008a96] text-white font-semibold px-6 py-2 rounded hover:bg-[#00a686] transition duration-300">
              Get Early Access
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
