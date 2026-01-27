import { Code, Monitor, Palette, BarChart3, Brain, Smartphone } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Dev',
      description: 'Scalable SaaS architectures built for peak performance and global availability using modern frameworks.',
      technologies: ['NEXT.JS', 'NODE', 'TYPESCRIPT'],
      hoverColor: 'hover:border-neon-cyan/50',
      iconBg: 'bg-neon-cyan/10',
      iconColor: 'text-neon-cyan',
      iconHoverBg: 'group-hover:bg-neon-cyan',
    },
    {
      icon: Smartphone,
      title: 'App Dev',
      description: 'Cross-platform mobile solutions designed to provide a native-feel experience on both iOS and Android.',
      technologies: ['REACT NATIVE', 'FLUTTER'],
      hoverColor: 'hover:border-neon-blue/50',
      iconBg: 'bg-neon-blue/10',
      iconColor: 'text-neon-blue',
      iconHoverBg: 'group-hover:bg-neon-blue',
    },
    {
      icon: Palette,
      title: 'UI/UX',
      description: 'Conversion-focused interface design backed by behavioral research and user-centric psychology.',
      technologies: ['FIGMA', 'PROTOTYPING'],
      hoverColor: 'hover:border-neon-cyan/50',
      iconBg: 'bg-neon-cyan/10',
      iconColor: 'text-neon-cyan',
      iconHoverBg: 'group-hover:bg-neon-cyan',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Turning raw metrics into actionable business intelligence through custom dashboards and modeling.',
      technologies: ['PYTHON', 'SQL'],
      hoverColor: 'hover:border-neon-blue/50',
      iconBg: 'bg-neon-blue/10',
      iconColor: 'text-neon-blue',
      iconHoverBg: 'group-hover:bg-neon-blue',
    },
    {
      icon: Brain,
      title: 'AI Automation & LLM Integration',
      description: 'Streamlining complex enterprise workflows using custom GPT agents, vector databases, and sophisticated LLM orchestration.',
      technologies: ['OPENAI API', 'LANGCHAIN', 'PINECONE', 'HUGGINGFACE'],
      hoverColor: 'hover:border-neon-cyan/50',
      iconBg: 'bg-neon-cyan/10',
      iconColor: 'text-neon-cyan',
      iconHoverBg: 'group-hover:bg-neon-cyan',
      isWide: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32" id="services">
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <h2 className="text-gradient font-bold uppercase tracking-[0.3em] text-sm">Capabilities</h2>
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">Tailored Tech Solutions</h3>
        <p className="text-slate-400 max-w-2xl text-lg">
          Fusing design-thinking with enterprise-grade engineering to deliver products that matter.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`glass-card group p-8 rounded-3xl ${service.hoverColor} transition-all duration-500 cursor-default ${
              service.isWide ? 'lg:col-span-2' : ''
            } animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {service.isWide ? (
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div
                  className={`w-20 h-20 shrink-0 rounded-2xl ${service.iconBg} flex items-center justify-center ${service.iconColor} group-hover:text-white ${service.iconHoverBg} transition-all duration-500`}
                >
                  <service.icon className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                  <div className="mt-6 flex gap-4 flex-wrap">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 ${service.iconColor} group-hover:text-white ${service.iconHoverBg} transition-all duration-500`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity flex-wrap">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[10px] font-bold px-2 py-1 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
