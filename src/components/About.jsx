import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 w-full bg-[rgb(251,252,255)] text-gray-800"
    >
      <div className="w-full max-w-[1600px] mx-auto px-5 lg:px-8 xl:px-[8%]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#7081C8]">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto text-lg leading-relaxed text-justify space-y-6 p-6 md:p-10 bg-white rounded-2xl shadow-lg border border-gray-100">
          <p>
            Hello! I'm <strong className="text-green-500">Mohin Ridoy</strong>, a passionate and self-driven web developer based in Bangladesh. My journey into programming began with a curiosity for how websites work. Over the years, that curiosity evolved into a full-blown passion for crafting modern, user-friendly web applications.
          </p>

          <p>
            I enjoy building responsive, interactive interfaces using tools like <strong className="text-blue-500">React</strong>, <strong className="text-purple-500">Tailwind CSS</strong>, and <strong className="text-yellow-600">JavaScript</strong>. I love solving real-world problems with clean code and intuitive user experiences. I’m always seeking to improve and learn new technologies to stay current in the fast-paced world of web development.
          </p>

          <p>
            Beyond coding, I’m also an active learner and mentor. I enjoy contributing to small projects, exploring open source, and helping other developers grow. Outside the digital world, you'll find me enjoying football matches, watching documentaries, or spending time with friends and family.
          </p>

          <p>
            I'm always open to new challenges, collaborations, or simply chatting about tech and life. <span className="text-[#7081C8] font-semibold">Let’s connect!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;