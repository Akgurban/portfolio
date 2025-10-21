export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know me better and understand my passion for software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate software engineer with a keen eye for design and a love for creating
                exceptional user experiences. With expertise in modern web technologies, I transform
                ideas into responsive, accessible, and performant applications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in software development started 5 years ago, and I've been continuously
                learning and adapting to new technologies and best practices ever since. I believe
                in writing clean, maintainable code and creating solutions that not only look
                great but also provide value to users.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 text-blue-600 mb-2">
                  5+
                </h3>
                <p className="text-gray-600 text-gray-600">
                  Years Experience
                </p>
              </div>
              <div className="bg-gray-50 bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 text-blue-600 mb-2">
                  50+
                </h3>
                <p className="text-gray-600 text-gray-600">
                  Projects Completed
                </p>
              </div>
              <div className="bg-gray-50 bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 text-blue-600 mb-2">
                  20+
                </h3>
                <p className="text-gray-600 text-gray-600">
                  Happy Clients
                </p>
              </div>
              <div className="bg-gray-50 bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 text-blue-600 mb-2">
                  100%
                </h3>
                <p className="text-gray-600 text-gray-600">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto">
              <img
                src="/image.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}