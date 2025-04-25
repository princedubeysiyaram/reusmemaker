import Header from '@/components/custom/Header';
import { UserButton } from '@clerk/clerk-react';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-6 mx-auto max-w-7xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Build Your Resume <span className="text-primary">With AI</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Craft a stunning, job-ready resume powered by smart AI suggestions.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-primary text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-primary/90 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {["AI Suggestions", "PDF Export", "Customization"].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg text-left">
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature === "AI Suggestions" && "Generate personalized, job-tailored content instantly."}
                  {feature === "PDF Export" && "Export resumes in professional, high-quality PDF format."}
                  {feature === "Customization" && "Easily rate and manage skills based on your expertise."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Enter Details", "Generate with AI", "Download & Apply"].map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-primary mb-4">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step === "Enter Details" && "Fill in your personal, education, and job experience details."}
                {step === "Generate with AI" && "Our AI enhances your content to match job roles."}
                {step === "Download & Apply" && "Export as PDF and start applying instantly."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Preview Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">See it in Action</h2>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={3000}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="/img1.png"
              alt="Resume Preview 1"
              className="rounded-xl w-full"
            />
            <img
              src="/img2.png"
              alt="Resume Preview 2"
              className="rounded-xl w-full"
            />
          </Slider>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Resume?</h2>
        <p className="mb-6">Join thousands of users crafting beautiful resumes today!</p>
        <a
          href="/dashboard"
          className="inline-block bg-white text-primary px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}

export default Home;
