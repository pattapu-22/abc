import React, { useState } from "react";

const AlumniBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How I Got Into My Dream College",
      content: `
        Achieving my dream of getting into my desired college was no easy feat. I knew early on that I had to excel not only in academics but also in extracurricular activities. 
  
        Throughout high school, I focused on building a well-rounded portfolio. I joined various clubs, took up leadership roles, and made sure to participate in community service projects. 
  
        My academic performance was key, so I put in extra hours studying, especially in the subjects related to my field of interest. 
  
        When it came time for the application, I made sure to craft a personal statement that showcased my journey, my passions, and how I planned to make the most of the opportunities offered at the college. In the end, hard work, dedication, and a clear goal helped me get that acceptance letter I had always dreamed of.
      `,
    },
    {
      id: 2,
      title: "Navigating College Life",
      content: `
        College life is a whole new world. When I first stepped on campus, I was overwhelmed by the sheer freedom and the countless opportunities available. But along with that freedom came responsibilities I hadn’t anticipated.
  
        The key to navigating college life is to find a balance between academics and your personal life. At first, I struggled with time management—balancing classes, assignments, socializing, and part-time jobs. I soon realized that planning out my week, setting priorities, and creating routines were essential.
  
        Surrounding yourself with a support system is equally important. Whether it's friends, professors, or campus support services, having people to lean on makes the journey a lot smoother. Lastly, remember to take care of yourself. College can be stressful, but making time for self-care ensures that you can handle the challenges that come your way.
      `,
    },
    {
      id: 3,
      title: "The Importance of Internships",
      content: `
        Internships are one of the best ways to gain real-world experience while still in college. They not only give you a taste of the professional world, but they also help you build connections and develop practical skills.
  
        My first internship was a game-changer. I learned things that textbooks couldn’t teach me. From understanding the dynamics of a team to handling real-world challenges, every day was a learning experience. 
  
        I recommend starting early. Even if you think you’re not “qualified” yet, internships are meant for learning. They’ll also help you figure out what you like—and what you don’t—about a certain career path. And when it comes time to apply for full-time jobs, that experience will set you apart from other candidates.
      `,
    },
    {
      id: 4,
      title: "How to Balance Academics and Social Life",
      content: `
        Balancing academics and social life in college can seem like an impossible task, but it’s entirely achievable with the right approach. 
  
        The first thing I learned was time management. Setting a schedule and sticking to it allowed me to designate time for studying without sacrificing social activities. Using planners or digital calendars helped me stay organized. I made sure to prioritize my assignments but still left room for relaxation and socializing.
  
        The second key was learning to say "no." There were times when I had to decline social invites because I needed to focus on my studies. It’s important to recognize your limits and not overcommit.
  
        Lastly, I found that my social life actually improved when I was less stressed about school. When I was on top of my academics, I could enjoy my time with friends without feeling guilty about procrastination. Balance isn’t easy, but with a little planning, it’s definitely doable.
      `,
    },
    {
      id: 5,
      title: "Networking in College",
      content: `
        Networking is one of the most important yet often overlooked aspects of college life. It’s not just about making friends—it’s about building connections that can last a lifetime and open doors to future opportunities.
  
        I started networking by attending events, joining clubs, and simply talking to people in my classes. Professors, alumni, guest speakers—everyone has valuable insights and advice to offer. I also learned to use LinkedIn early on. Keeping an updated profile and connecting with people I met along the way helped me stay in touch.
  
        One of the best tips I received was to network "before you need it." Building genuine relationships now, without expecting anything in return, means that when the time comes to look for internships or jobs, you’ll have a strong support system to rely on.
      `,
    },
    {
      id: 6,
      title: "What I Wish I Knew Before Starting College",
      content: `
        There’s a lot I wish I had known before stepping foot in college. For one, it’s okay not to have everything figured out from day one. College is a time to explore and discover what you truly enjoy. 
  
        I also wish I had known how important it is to ask for help. Whether it's academic assistance from professors or emotional support from counselors, college can be overwhelming, and there’s no shame in seeking guidance.
  
        Additionally, I didn’t realize how valuable extracurricular activities were. Joining clubs, attending workshops, and participating in events not only helped me make friends but also made my resume stand out when I started job hunting.
      `,
    },
    {
      id: 7,
      title: "How to Get Scholarships",
      content: `
        Scholarships can be life-changing, and getting one doesn’t always mean having a perfect GPA. In my case, persistence was key.
  
        I started by researching scholarships early on, even before I finished high school. I applied to both merit-based and need-based scholarships, ensuring that my applications were well-rounded. I made sure my essays were personal and compelling, showing not just my achievements but also my potential.
  
        I also sought out less popular scholarships that had fewer applicants. It’s amazing how many opportunities are out there if you’re willing to dig a little deeper. Ultimately, I secured multiple scholarships that helped reduce the financial burden of my college education.
      `,
    },
    {
      id: 8,
      title: "Dealing with Exam Stress",
      content: `
        Exam stress is something every student experiences, but learning how to manage it made a world of difference for me.
  
        The first thing I did was develop a study plan well in advance. Cramming the night before an exam never worked for me, and it only heightened my anxiety. Breaking up my study material into smaller chunks and reviewing it over time helped me feel more in control.
  
        Taking breaks was also essential. When I felt overwhelmed, I’d take a walk or practice deep breathing exercises to calm my nerves. Surrounding myself with supportive friends and family also helped me stay grounded during stressful times.
  
        Ultimately, I learned that exams are just one part of the bigger picture. While it’s important to do well, maintaining a healthy mindset is equally crucial for long-term success.
      `,
    },
    {
      id: 9,
      title: "Exploring Extracurriculars",
      content: `
        Extracurricular activities were one of the highlights of my college experience. They provided me with a sense of community, and I discovered new passions that I didn’t know I had.
  
        I tried out a variety of activities—from joining the debate team to participating in volunteer work. Each experience taught me different skills, whether it was public speaking, teamwork, or leadership. 
  
        Extracurriculars also gave me a break from academics. They allowed me to relax and recharge while still being productive. And the best part? The friendships I made during these activities have lasted well beyond graduation.
      `,
    },
    {
      id: 10,
      title: "Post-Graduation Plans",
      content: `
        Graduation may seem like the finish line, but in reality, it’s just the start of the next phase of life. After graduation, I had several paths in front of me: pursuing higher studies, entering the workforce, or even taking some time off.
  
        I decided to spend some time reflecting on what I truly wanted. I reached out to mentors, took a few internships, and explored different fields before committing to a full-time role.
  
        Remember, there’s no “right” plan post-graduation. The important thing is to stay open to opportunities and be patient with yourself as you figure out what’s next.
      `,
    },
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen bg-[#181818]">
      {/* Sidebar - Blogs List */}
      <div className="h-screen w-full overflow-y-auto no-scrollbar p-2 sm:p-3 md:p-4 lg:p-5 bg-[#151414]">
        <h2 className="text-[#511D52] text-lg sm:text-xl md:text-2xl font-bold mb-4">Alumni Blogs</h2>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className={`cursor-pointer p-2 sm:p-3 rounded-lg transition-all text-gray-300 ${selectedBlog.id === blog.id ? 'bg-[#511D52]' : 'hover:bg-[#3B123B]'}`}
              onClick={() => setSelectedBlog(blog)}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">{blog.title}</h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area - Selected Blog Content */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="text-gray-300">
          <h2 className="text-[#511D52] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{selectedBlog.title}</h2>
          <p className="text-sm sm:text-base md:text-lg">{selectedBlog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniBlogs;
