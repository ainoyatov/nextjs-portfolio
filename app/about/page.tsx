
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Freelance Web Developer</title>
        <meta name="description" content="Freelance web developer profile with expertise in building and optimizing web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-gray-50 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto py-12 px-6">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900">Freelance Web Developer</h1>
            <p className="mt-2 text-lg text-gray-600">
              Creating tailored web solutions to meet your needs.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Experience</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium text-gray-700">Web Application Development</h3>
                <p>Building dynamic and responsive web applications tailored to client needs, focusing on user-friendly interfaces and seamless functionality.</p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">Performance Optimization</h3>
                <p>Enhancing website performance through code optimization, efficient database management, and caching mechanisms.</p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">Team Collaboration</h3>
                <p>Working closely with diverse teams to deliver cohesive solutions while ensuring clear communication and execution of project goals.</p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">Adaptability</h3>
                <p>Staying updated with industry trends and technologies to meet evolving project requirements effectively.</p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Proficiencies</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li><strong>Programming Languages:</strong> React, Python, Bash, Typescript</li>
              <li><strong>Frameworks:</strong> Next JS, Django, Shopify</li>
              <li><strong>Database Management:</strong> SQL, NoSQL, MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
              <li><strong>Deployment:</strong> AWS, GCP, Vercel</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Portfolio Highlights</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium text-gray-700">E-commerce Platform</h3>
                <p>Developed a full-featured e-commerce website, increasing client sales by 18% in the first quarter of launch.</p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">Content Management System</h3>
                <p>Created a bespoke CMS for a publishing company, improving content update efficiency by 15%.</p>
              </li>
              <li>
                <h3 className="text-lg font-medium text-gray-700">Responsive Redesign</h3>
                <p>Led the responsive redesign of a corporate website, boosting mobile traffic by 10%.</p>
              </li>
            </ul>
          </section>

          {/* <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education & Certifications</h2>
            <ul className="space-y-2">
              <li><strong>Bachelor of Science in Computer Science</strong> - XYZ University (2018)</li>
              <li><strong>Certified Web Developer</strong> - ABC Institute (2019)</li>
            </ul>
          </section> */}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Philosophy</h2>
            <p>
              I believe in the power of technology to transform businesses and enhance user experiences. My approach is client-centric, focusing on understanding the unique needs of each project and delivering solutions that exceed expectations.
            </p>
          </section>

          <footer className="text-center mt-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@gravityelements.com" className="text-blue-500 underline">info@gravityelements.com</a></li>
              <li>Phone: <a href="tel:4805599391" className="text-blue-500 underline">(480) 559-9391</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 underline">linkedin.com/in/aki-inoyatov</a></li>
              <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-500 underline">github.com/ainoyatov</a></li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );
}