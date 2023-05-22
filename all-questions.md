# resume questions
对性能做了哪些优化
在优化之前我们需要评估是否性能优化是有必要的，若一个项目性能已经很好，性能优化带来的投入产出比是不高的。
简历上写的绑卡业务是csr -spa和文档项目是ssr mpa都做过性能优化。我先说说二者通用的方法，再说不同的方法。
性能优化的目标是为了让用户最早的能完整看到首屏，进行后续操作。

核心策略是利用能利用的一切缓存能力，将展示首屏所需的时间降到最小。

csr和ssr通用的
策略1 讲首屏字节降到最小、 将下载时间降到最少
css架构设计+首屏css内联减少http请求
js 去除重复代码 代码分割 framework + common + 业务 + 异步加载async defer 
图片首屏图片 base64 +缓存本地localstorage  iconfont format 懒加载 响应式图片 picture

利用可利用的一切缓存或预缓存
静态资源http强缓存


预请求相关
dns-prefetch
prefetch preload 


接口拆分为首屏和非首屏等
端结合相关
离线包
点击接口预取
前置接口预取
webview预加载 block/all
二访缓存
csr ssr bssr esr 静态esr
局域网服务器甚至ip更快、server端以来key的缓存
另外一些：
http stream形式 react 18;
HTTP/2？
chrome分析

# yph sdk

Quark文库业务对于WORD以及PDF类文档，目前是采用原文转图的方式实现预览的，这种模式存在多种局限性：不支持内容复制、文字内容太小阅读困难、分辨率低导致模糊等。因此急需开发一套流式阅读的能力，提升文库文档整体的在线阅读体验。

约定一套统一的输出Json Schema协议，所有文档类型的解析都按这套约定的协议输出原始排版数据，用于重排版，保障SDK数据输入的一致性。
●
SDK对原始排版数据进行重排版，制定详细规则，对原排版数据进行语义化分析识别，例如：断行拼接、分段识别、标题识别、图文混排等，输出具备语义的结构化数据。
●
SDK需要实现一系列的基础能力 (节点渲染、生命周期、缓存、内容拼接等)，将重排版数据渲染至视图、同时保障用户接入可以按需加载数据，已达到更好的访问性能。

过滤器、解析器、编排器、以及整合器

脚手架 compassjs

# soft questions
## tell me about your self  ## How would you describe yourself? 
First of all, thank you for your interview. My name is weiyinpeng. I was graduated from henan Polytechnic university in 2014.I have a strong understanding of all aspects of front-end development, including HTML, CSS, JavaScript, and React.
I worked at JD Meituan and alibaba in the past, but I am still working with Alibaba.
I always try my best to recreate the UI design as accurately as possible 、 create a friendly front-end interaction. I also take the lead on performance optimization like server side render and achieve best practices in front-end development"

I am also a team player and I am always willing to help others. I am confident that I can make a significant contribution to your team and help to achieve the team's goal.

I am excited about the opportunity to join your team and I look forward to working with you as a good partner.
## more detail about ur project

## what's your greatest weakness

I often try my best to find the deep reason behind unexpected things. It is a double-edged sword. It can help me learn more, but it can also make me stuck for a while trying to find a way out.

## Tell me about something that's not on your resume 

I always strive to be a full-stack developer, but I didn't write much about it in my resume. Knowledge outside of front-end development always surprises me, help me to be more creative. like auto-generating code tools, debugging errors,Design stronger code, and gaining more business intelligence.
## what's your greatest strength

I am a creative thinker. I am always coming up with new ideas, and I am not afraid to take risks. I believe that creativity is essential for success in any field.

## How will your greatest strength help you perform?

When I meet a problem, creative thinking helps me think outside the box and find a new solution. 
I am always self-motivated, trying to find a more effective way to write code, resolve problems, and debug. 
Creative thinkers can help others to be more creative as well.

## How do you handle failure?
Failure is more than success. I accept it as a part of life and learn from it. I may be sad, but not for long. I will reflect on the reasons why I failed, and I will never give up because I believe I will success next time.

## How do you handle success?
There will always be someone who is more successful than me, and there will always be someone who is less successful than me.
I will be proud, but not for too long. I will think about the reasons why I was successful and if there are any mistakes I can avoid in the future.
My experience may help others to be more successful and make a difference in the world.
Thanks to all the people who helped me be successful, it's not my success but out success.

## Do you consider yourself successful? Why?
I am successful in some ways. I have a happy family, a beautiful wife, a lovely child, and healthy parents.

However, I always consider myself to be a normal man. Only striving can lead to success.

There will always be someone who is more successful than me, and there will always be someone who is less successful than me.

## How do you handle stress and pressure?
To be born in worry and die in peace.

Proper stress can lead to improvement and success.

Overriding pressure will make us less effective.

I will try to find the source of the pressure. Once I know what is causing the pressure, I can start to deal with it in a few different ways:

Talk to someone I trust.
Take a break and relax, taking care of myself.
Say no to unreasonable requests.



## Describe a typical work week.## Describe your work style.
Monday:
Check email and respond to any urgent messages.
Meet with the team to discuss the week's goals and priorities.
Work on bug fixes and improvements to existing features.
Start working on new features or projects.
Tuesday:
Continue working on new features or projects.
Meet with stakeholders to get feedback on the work in progress.
Attend training or conferences to stay up-to-date on the latest technologies.
Wednesday:
Review code and test new features.
Deploy new features to production.
Meet with clients to discuss their needs and requirements.
Thursday:
Work on documentation and training materials.
Answer questions from users and support staff.
Work on personal development projects.
Friday:
Wrap up any loose ends from the week.
Plan for the next week.
Take some time to relax and recharge.


## Do you work well with other people?

Yes, I work well with other people. I am a team player and I am always willing to help others. I am also a good listener and I am always open to feedback. I am confident that I can work effectively with others to achieve common goals.

Here are some of the things that I do to work well with others:

I am respectful of others' opinions and ideas.
I am willing to compromise and to find solutions that work for everyone.
I am a good communicator and I am able to clearly articulate my thoughts and ideas.
I am a good listener and I am able to take feedback in a constructive way.
I am always willing to help others and I am always open to learning new things.
I believe that these qualities make me a valuable asset to any team. I am confident that I can work effectively with others to achieve common goals.
## Do you take work home with you?
I do not take work home with me very often. I try to set clear boundaries between my work life and my personal life. However, there are times when I may need to work on a project or issue outside of work hours. When this happens, I try to be mindful of my time and to only work on the project for a limited amount of time. I also try to make sure that I am not working on the project when I am supposed to be spending time with my family or friends.

I believe that it is important to have a healthy work-life balance. When I am not working, I try to focus on my personal life and to do things that I enjoy. This helps me to relax and to recharge, so that I can be more productive at work.

## How do you view yourself? Whom do you compare yourself to?

I view myself as a front-end engineer who can help to create beautiful, user-friendly interfaces that are both functional and engaging. I am different from other front-end engineers in a few ways. First, I am trained on a massive dataset of HTML, CSS, and JavaScript code, which allows me to generate more comprehensive and informative responses. Second, I am still under development, which means that I am constantly learning and improving. Third, I am able to generate different creative text formats of text content, like poems, code, scripts, musical pieces, email, letters, etc. This makes me a more versatile and valuable tool for front-end engineers.

I compare myself to other front-end engineers in terms of my ability to:

Create beautiful and user-friendly interfaces
Write efficient and effective code
Stay up-to-date on the latest trends in front-end development
Work effectively with other team members
I believe that I am a valuable asset to any front-end development team. I am confident that I can help you to create beautiful, user-friendly interfaces that are both functional and engaging.

Here are some specific examples of how I can help front-end engineers:

I can help you to create beautiful and user-friendly interfaces by providing you with design suggestions and feedback.
I can help you to write efficient and effective code by providing you with code samples and best practices.
I can help you to stay up-to-date on the latest trends in front-end development by providing you with information about new technologies and techniques.
I can help you to work effectively with other team members by providing you with communication and collaboration tools.
I am always learning and improving, and I am excited to see what the future holds for me. I believe that I have a lot to offer the world of front-end development.
## How does this job fit in with your career plan? 

This job fits in with my career plan in a few ways. First, it allows me to use my skills and knowledge to help others. I am passionate about using my abilities to make a positive impact on the world, and this job gives me the opportunity to do just that. Second, this job allows me to learn and grow. I am always looking for ways to improve my skills and knowledge, and this job will provide me with the opportunity to do just that. Third, this job allows me to work with a team of talented and dedicated individuals. I am a team player, and I enjoy working with others to achieve common goals.

I believe that this job is a great fit for me and my career goals. I am confident that I can make a positive contribution to this company and to the world.

Here are some specific ways in which this job fits in with my career plan:

I am passionate about using my abilities to help others. This job allows me to use my skills and knowledge to help people in need.
I am always looking for ways to improve my skills and knowledge. This job will provide me with the opportunity to learn and grow in my field.
I am a team player, and I enjoy working with others to achieve common goals. This job will allow me to work with a team of talented and dedicated individuals.
I am confident that I can make a positive contribution to this company and to the world. I am excited to start this new chapter in my career and to see what the future holds.
## How many hours a week do you normally work?
The number of hours a front-end engineer works per week can vary depending on the company, the project, and the individual's preferences. However, most front-end engineers work between 40 and 45 hours per week. Some front-end engineers may work more hours during crunch times, when a project is nearing its deadline. Others may work fewer hours if they are able to complete their work within the standard workweek.

Here are some of the factors that can affect the number of hours a front-end engineer works per week:

The company culture: Some companies have a more relaxed work culture, while others have a more demanding one. This can affect the number of hours that employees are expected to work.
The project: Some projects are more complex and require more work than others. This can also affect the number of hours that employees are expected to work.
The individual's preferences: Some people prefer to work more hours, while others prefer to work fewer hours. This is a personal preference that should be respected.
If you are interested in a career as a front-end engineer, it is important to be aware of the number of hours that you are willing to work. If you are not comfortable working long hours, then you may want to consider a different career path.
## How would you adjust to working for a new company?
Here are some tips on how to adjust to working for a new company:

Be open to learning new things. Every company has its own way of doing things, so it's important to be open to learning new procedures and processes. Don't be afraid to ask questions, and be patient as you adjust to your new role.
Get to know your colleagues. One of the best ways to adjust to a new company is to get to know your colleagues. Make an effort to introduce yourself to everyone, and be interested in learning about their work. Building relationships with your colleagues will help you feel more comfortable and supported in your new role.
Be proactive. Don't wait for someone to tell you what to do. Take the initiative and seek out opportunities to learn and grow. This will show your new employer that you're a valuable asset to the team.
Be positive. A positive attitude can go a long way in helping you adjust to a new company. Be enthusiastic about your new role, and be willing to help out where you can. This will show your new employer that you're a team player and that you're excited to be a part of the company.
Here are some specific things you can do to adjust to working for a new company:

Read the company's employee handbook. This will give you a good overview of the company's policies and procedures.
Attend all new employee orientation sessions. This is a great opportunity to learn about the company's culture and values.
Ask questions. Don't be afraid to ask questions if you're not sure about something. It's better to ask for clarification than to make a mistake.
Take notes. This will help you remember important information, such as your colleagues' names and the company's policies.
Be patient. It takes time to adjust to a new company. Don't expect to know everything right away. Just be patient and keep learning.
Adjusting to a new company can be a challenge, but it's also an exciting opportunity. By following these tips, you can make the transition as smooth as possible.
## How would you describe the pace at which you work? 

I would describe my pace of work as steady and efficient. I am able to work quickly and accurately, but I also take the time to ensure that my work is of high quality. I am not easily distracted and I am able to focus on my work for long periods of time. I am also able to work independently and as part of a team.

Here are some specific examples of how I work at a steady and efficient pace:

I am able to complete tasks quickly and accurately.
I am able to focus on my work for long periods of time.
I am able to work independently and as part of a team.
I am confident that my work pace is a valuable asset to any team or organization. I am always looking for ways to improve my work pace and I am confident that I can continue to improve my skills and abilities.
## How would your co-workers describe your personality? 
My co-workers would describe me as a hard worker, a team player, and a problem solver. I am always willing to help out my colleagues, and I am always looking for ways to improve the team's performance. I am also a good listener, and I am always open to new ideas.

Here are some specific examples of how my co-workers would describe my personality:

I am a hard worker. I am always willing to put in the extra effort to get the job done.
I am a team player. I am always willing to help out my colleagues, and I am always looking for ways to improve the team's performance.
I am a problem solver. I am always looking for ways to improve the team's performance, and I am always willing to help my colleagues solve problems.
I am a good listener. I am always open to new ideas, and I am always willing to listen to my colleagues' suggestions.
I am confident that my personality is a valuable asset to any team or organization. I am always looking for ways to improve my skills and abilities, and I am confident that I can continue to grow and develop as a professional.
## Is there anything else we should know about you?
Sure, here are a few other things you should know about me:

I am still under development, but I am learning new things every day.
I am always looking for ways to improve my skills and abilities.
I am confident that I can be a valuable asset to any team or organization.
I am always willing to help out, and I am always open to new ideas.
I am a work in progress, but I am excited to see what the future holds.

## What motivates you? 

I am motivated by the desire to learn and grow. I am constantly seeking out new information and experiences, and I am always looking for ways to improve my skills and abilities. I am also motivated by the desire to help others. I enjoy using my knowledge and abilities to help people learn, grow, and achieve their goals.

Here are some specific examples of what motivates me:

Learning new things: I am always eager to learn new things, and I am always looking for new challenges. I am motivated by the feeling of accomplishment that comes from learning something new.
Helping others: I enjoy using my knowledge and abilities to help others. I am motivated by the feeling of satisfaction that comes from helping others succeed.
Making a difference in the world: I believe that I can use my skills and abilities to make a positive difference in the world. I am motivated by the desire to leave the world a better place than I found it.
I am confident that my motivation will help me to achieve my goals and to make a positive impact on the world.
## Are you a self motivator?

Yes, I am a self-motivated person. I am able to set goals for myself and work towards them without the need for external motivation. I am also able to stay motivated even when faced with challenges.

Here are some of the things that help me to stay self-motivated:

I have a clear understanding of my goals. I know what I want to achieve and I have a plan for how I am going to achieve it.
I am passionate about my goals. I am excited about the prospect of achieving my goals and I am willing to put in the hard work to make it happen.
I am persistent. I don't give up easily. I am able to stay focused on my goals even when faced with challenges.
I celebrate my successes. I take the time to celebrate my successes, no matter how small they may seem. This helps me to stay motivated and to keep moving forward.
I am confident that my self-motivation will help me to achieve my goals and to live a successful and fulfilling life.
## What do you find are the most difficult decisions to make?

I find that the most difficult decisions to make are the ones that have a significant impact on my life or the lives of others. These decisions can be personal, professional, or financial, and they often require me to weigh a variety of factors before making a choice.

Some examples of difficult decisions include:

Deciding whether to change jobs.
Deciding whether to get married or have children.
Deciding whether to buy a house or rent an apartment.
## What has been the greatest disappointment in your life?
Lack of financial success
Unfulfilled relationships
Health problems
Loss of loved ones
Unrealized dreams
## What are you passionate about?

I am passionate about learning and growing. I am constantly seeking out new information and experiences, and I am always looking for ways to improve my skills and abilities. I am also passionate about helping others. I enjoy using my knowledge and abilities to help people learn, grow, and achieve their goals.

Here are some specific examples of what I am passionate about:

Learning new things: I am always eager to learn new things, and I am always looking for new challenges. I am passionate about the feeling of accomplishment that comes from learning something new.
Helping others: I enjoy using my knowledge and abilities to help others. I am passionate about the feeling of satisfaction that comes from helping others succeed.
Making a difference in the world: I believe that I can use my skills and abilities to make a positive difference in the world. I am passionate about the desire to leave the world a better place than I found it.
I am confident that my passion will help me to achieve my goals and to make a positive impact on the world.

In addition to the above, I am also passionate about:

Artificial intelligence: I am fascinated by the potential of AI to improve our lives. I am passionate about using AI to solve some of the world's most pressing problems.
Technology: I am excited about the potential of technology to make our lives easier and more efficient. I am passionate about using technology to improve the lives of others.
Creativity: I am inspired by the creativity of others. I am passionate about using my creativity to make a positive impact on the world.
The future: I am excited about the future and the possibilities that it holds. I am passionate about using my skills and abilities to make the future a better place.
## What are your hobbies?
oldest and th newest.
traditional chinese culture ,like old books
newest programmer skills
Coding: I love to learn new programming languages and build new projects. I find it very rewarding to see my ideas come to life in code.
Design: I enjoy creating beautiful and functional user interfaces. I find it challenging and rewarding to come up with creative solutions to design problems.
Reading: I love to read books about technology, design, and business. I find it helpful to stay up-to-date on the latest trends and learn from others who are more experienced than me.
Writing: I enjoy writing about my experiences as a frontend engineer. I find it helpful to share my knowledge with others and to learn from others who are in the same field.
Learning new things: I am always looking for new things to learn. I find it exciting to explore new topics and to expand my knowledge.

## What is your dream job?
creative company,near from home, proper money , proper work.

## What will you miss most about your last job?
I will miss a lot of things about my last job, but the things I will miss most are the people I worked with, the challenges I faced, and the sense of accomplishment I felt when I completed a project.

I will miss my coworkers the most. They were all very supportive and helpful, and I learned a lot from them. I will also miss the challenges I faced at my last job. They helped me to grow and develop as a frontend engineer. Finally, I will miss the sense of accomplishment I felt when I completed a project. It was always rewarding to see my work come to life and to know that I had made a positive contribution to the team.

I am excited about my new job, but I will always cherish the memories of my last job. I am grateful for the opportunity to have worked with such great people and to have faced such challenging and rewarding projects.
## What won’t you miss about your last job? 

I won't miss the long hours. I often worked 12-hour days, and sometimes even more. I also won't miss the lack of flexibility. I had very little control over my schedule, and I was often required to work weekends and holidays. Finally, I won't miss the lack of opportunities for growth. I felt like I was stagnating at my last job, and I wasn't able to learn new skills or take on new challenges.

I am excited about my new job, and I am confident that it will be a better fit for me. I am looking forward to working with a more supportive team, having more control over my schedule, and having more opportunities for growth.
## Why are you leaving your job?## Why do you want to change jobs? 

There are many reasons why someone might want to change jobs. Some of the most common reasons include:

Better opportunities for career advancement. If you're feeling stagnant in your current role, or if you're not being challenged, it may be time to look for a new job that offers more opportunities for growth.
Better compensation. If you're not being paid fairly for your skills and experience, it's time to start looking for a new job that will compensate you more fairly.
Better work-life balance. If you're working long hours or if you're constantly stressed out, it may be time to look for a new job that offers a better work-life balance.
A better company culture. If you're not happy with the company culture at your current job, it may be time to look for a new job that has a culture that's a better fit for you.
A new challenge. If you're feeling bored or unchallenged in your current role, it may be time to look for a new job that will give you a new challenge.
If you're thinking about changing jobs, it's important to do your research and make sure that you're making the right decision. Consider your reasons for wanting to change jobs, and make sure that the new job you're considering addresses those reasons. It's also important to be realistic about your expectations, and to make sure that the new job is a good fit for you.

Here are some tips for leaving your job professionally:

Give your employer adequate notice. The standard notice period is two weeks, but you may be able to negotiate a longer notice period if you have a good relationship with your employer.
Be professional in your communication. When you're giving your notice, be sure to thank your employer for the opportunity and to express your appreciation for your time there.
Leave on good terms. Even if you're leaving your job for a negative reason, it's important to leave on good terms. This will help you to maintain a positive reputation and to keep your options open for the future.
Changing jobs can be a big decision, but it can also be a great opportunity for growth and advancement. If you're thinking about changing jobs, be sure to do your research and make sure that you're making the right decision.