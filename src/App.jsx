import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Terminal, Code, Cloud, Activity, Award, BookOpen, ChevronDown, ExternalLink, Menu, X, Calendar, Clock, ArrowRight, Lightbulb, Rocket, Users, TestTube, Zap, TrendingUp, Shield, Boxes, Layout, Eye, Gauge, Server, GitBranch, Target, Sparkles, Award as Trophy, MessageSquare } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  
  const fullText = '> devops@rouaa:~$ whoami';
  
  const roles = [
    "DevOps Engineer",
    "Chaos Engineering Advocate", 
    "Workshop Designer",
    "Observability Enthusiast",
    "SRE Practitioner"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'featured', 'story', 'teaching', 'writings', 'journey', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleTimer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Microservices Chat Platform",
      category: "Production Platform",
      icon: Boxes,
      color: "cyan",
      tagline: "Building the foundation for multiple client projects",
      description: "Architected and developed a production-ready microservices ecosystem serving as the core platform for client applications.",
      metrics: [
        { label: "Services", value: "4 Core", icon: Server },
        { label: "Pattern", value: "Service Discovery", icon: GitBranch },
        { label: "Stack", value: "Spring Boot + React", icon: Code }
      ],
      technologies: ["Java Spring Boot", "React", "Eureka", "Feign", "Docker", "Kubernetes"],
      highlights: [
        "Designed microservices architecture with service discovery (Eureka) and inter-service communication (Feign)",
        "Built responsive React frontend with modern UI/UX patterns",
        "Implemented event-driven communication between services",
        "Containerized all services with multi-stage Docker builds",
        "Deployed on Kubernetes with auto-scaling and health checks"
      ],
      impact: "Foundation platform now used across multiple client projects, reducing project kickoff time from weeks to days"
    },
    {
      id: 2,
      title: "Enterprise RBAC Security Layer",
      category: "Security & Authorization",
      icon: Shield,
      color: "purple",
      tagline: "Policy-based access control at scale",
      description: "Engineered a centralized role-based access control system protecting 8-10 backend services with fine-grained authorization.",
      metrics: [
        { label: "Services Protected", value: "8-10", icon: Shield },
        { label: "Gateway", value: "APISIX", icon: Target },
        { label: "Policy Engine", value: "Casbin", icon: Code }
      ],
      technologies: ["APISIX", "Casbin", "Spring Security", "JWT", "OpenID Connect"],
      highlights: [
        "Integrated APISIX API Gateway with Casbin authorization engine",
        "Designed flexible RBAC policies supporting complex permission hierarchies",
        "Implemented JWT-based authentication with token refresh mechanisms",
        "Protected both backend API endpoints and frontend routes",
        "Built admin interface for policy management and role assignment"
      ],
      impact: "Centralized security layer enabling consistent access control across the entire platform, reducing security review time by 70%"
    },
    {
      id: 3,
      title: "Real-Time Observability Dashboard",
      category: "Observability & Analytics",
      icon: Activity,
      color: "green",
      tagline: "Complete visibility into system health and performance",
      description: "Built a comprehensive observability platform from scratch, providing real-time insights into system metrics, application performance, and test execution.",
      metrics: [
        { label: "Data Sources", value: "Multi-layered", icon: Eye },
        { label: "Visualization", value: "Real-time", icon: Gauge },
        { label: "Stack", value: "React + Express", icon: Layout }
      ],
      technologies: ["React", "Express.js", "OpenTelemetry", "Dynatrace", "Grafana", "Splunk"],
      highlights: [
        "Engineered custom React dashboard with real-time metric visualization",
        "Integrated OpenTelemetry for distributed tracing across all microservices",
        "Built Express.js backend for data aggregation and processing",
        "Implemented automated report generation in HTML/PDF formats",
        "Created custom visualizations for JVM metrics, response times, and load patterns"
      ],
      impact: "Reduced mean time to detection (MTTD) from 15+ minutes to under 2 minutes, enabling proactive issue resolution"
    },
    {
      id: 4,
      title: "Emirates Chaos Engineering Initiative",
      category: "Strategic Engagement",
      icon: Zap,
      color: "yellow",
      tagline: "Bringing resilience practices to enterprise aviation",
      description: "Led month-long strategic engagement introducing chaos engineering practices to Emirates, demonstrating resilience testing and defining adoption roadmap.",
      metrics: [
        { label: "Duration", value: "1 Month", icon: Calendar },
        { label: "Teams", value: "Multi-team", icon: Users },
        { label: "Tools", value: "Gremlin + Gatling", icon: TestTube }
      ],
      technologies: ["Gremlin", "Gatling", "Splunk", "Kubernetes", "Chaos Mesh"],
      highlights: [
        "Designed and executed live chaos experiments on staging infrastructure",
        "Demonstrated CPU stress, network failures, and pod termination scenarios",
        "Created multi-team adoption roadmap with phased rollout plan",
        "Delivered hands-on training sessions with real-time observability in Splunk",
        "Established baseline resilience metrics and improvement targets"
      ],
      impact: "Established foundation for ongoing chaos engineering practice, with 3 teams adopting regular chaos experiments within 2 months"
    }
  ];

  const workshops = [
    {
      id: 1,
      title: "OpenTelemetry Observability Workshop",
      role: "Designer",
      icon: Eye,
      color: "cyan",
      duration: "Full Day",
      participants: "Technical Teams",
      description: "Comprehensive hands-on workshop covering distributed systems observability from theory to production implementation.",
      topics: [
        "OpenTelemetry architecture and core concepts",
        "Building observability pipelines with Grafana Alloy Collector",
        "OTLP receivers, exporters, and processors configuration",
        "Auto-instrumentation vs SDK-based instrumentation",
        "Trace structure, span lifecycle, and context propagation",
        "Metrics collection with Prometheus and Kubernetes service discovery",
        "Unified visualization in Grafana dashboards"
      ],
      outcomes: [
        "Participants built complete observability pipeline from scratch",
        "Deployed instrumentation on live Kubernetes cluster",
        "Created custom dashboards showing traces, metrics, and logs",
        "Gained practical experience debugging distributed systems"
      ],
      testimonial: "This workshop transformed how we think about monitoring. The hands-on labs made complex concepts immediately practical."
    },
    {
      id: 2,
      title: "ECV DevOps & SRE Bootcamp",
      role: "Designer & Lead Trainer",
      icon: Rocket,
      color: "purple",
      duration: "3 Days",
      participants: "DevOps Engineers",
      description: "Intensive bootcamp covering modern DevOps practices including CI/CD, observability, testing strategies, and chaos engineering.",
      topics: [
        "CI/CD automation with Harness platform",
        "Microservice deployment patterns",
        "OpenTelemetry instrumentation and integration",
        "Performance testing with k6 and load testing pipelines",
        "Chaos engineering fundamentals and practice",
        "CPU stress and network failure experiments",
        "SRE principles and reliability concepts",
        "Real-time monitoring and alerting"
      ],
      outcomes: [
        "Teams deployed production-grade CI/CD pipelines",
        "Implemented comprehensive observability stack",
        "Conducted successful chaos experiments",
        "Established baseline SRE metrics and SLOs"
      ],
      testimonial: "The best technical training I've attended. Real scenarios, practical labs, and immediate application to our work."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Why Observability is More Than Just Monitoring",
      date: "Dec 2024",
      readTime: "8 min read",
      category: "Observability",
      icon: Activity,
      color: "cyan",
      excerpt: "When I first started working with distributed systems, I thought monitoring was enough. I was wrong. Here's what I learned about the difference between seeing metrics and truly understanding your system...",
      content: `Monitoring tells you WHAT is happening. Observability tells you WHY it's happening.

After spending months building observability platforms with OpenTelemetry, I've learned that true observability is about asking questions you didn't know you needed to ask. It's about traces that tell stories, metrics that provide context, and logs that connect the dots.

The Monitoring Trap

Early in my career, I was proud of our monitoring setup. We had dashboards showing CPU usage, memory consumption, request rates, and error percentages. When something went wrong, we'd look at the graphs, see a spike, and start investigating.

But here's the problem: monitoring only tells you that something is wrong. It doesn't tell you why it's wrong, what triggered it, or how it's affecting your users.

The Real Power of Observability

The real power comes when you can correlate a spike in latency with a specific user journey, trace it back to a database query, and see the exact moment things went wrong. This is what observability gives you.

With OpenTelemetry, I built a system where:
- Every request has a trace ID that follows it through the entire system
- Each service adds context to that trace
- Metrics are automatically correlated with traces
- Logs include trace context

When a user reports slow checkout times, I don't start with "let me check the CPU graphs." I start with their trace ID and see exactly what happened in their specific journey.

The Three Pillars (And Why They Need Each Other)

Logs tell you what happened in your application. Metrics show you trends and patterns. Traces connect the dots across your distributed system.

But the magic happens when you can pivot between them:
- See a metric spike? Jump to traces from that time period
- Find a slow trace? Check the logs from those services
- Investigating logs? See the metrics context around that time

This is what I mean by observability - the ability to ask arbitrary questions of your system and get answers, even if you didn't know to instrument for that specific question ahead of time.

The key insight: good observability means you can debug production issues without deploying new code or restarting services.`,
      tags: ["OpenTelemetry", "Observability", "SRE", "Distributed Systems"]
    },
    {
      id: 2,
      title: "Breaking Things on Purpose: My Chaos Engineering Journey",
      date: "Nov 2024",
      readTime: "10 min read",
      category: "Chaos Engineering",
      icon: Zap,
      color: "purple",
      excerpt: "Getting certified in Chaos Engineering with Gremlin changed how I think about reliability. It's not about if systems will fail - it's about when, and whether you're ready...",
      content: `The first time I deliberately crashed a production-like service, my hands were shaking. But that's exactly the point of chaos engineering - controlled experiments that expose weaknesses before they become incidents.

Why Break Things?

Traditional testing validates that your system works when everything is perfect. Chaos engineering validates that your system works when things go wrong.

And things WILL go wrong. Networks partition. Disks fill up. Dependencies timeout. The question isn't if these failures will happen - it's whether you'll discover them at 3 AM when customers are affected, or during a controlled experiment when you're ready.

My First Chaos Experiment

I'll never forget my first experiment. We had a microservices architecture with good monitoring, automated deployments, and a solid test suite. We thought we were prepared.

The experiment was simple: introduce 200ms of latency to one service and see what happens.

Within minutes, the cascade began. The affected service started timing out. Its callers started retrying. Those retries amplified the problem. Soon, we had services that weren't even direct consumers showing degraded performance.

The root cause? Our retry logic didn't have exponential backoff. Our connection pools were sized for happy-path latency.

All of these issues were "known best practices" - but we hadn't implemented them because we'd never seen the failure modes that made them necessary.

Building Confidence Through Chaos

Through Gremlin, I've learned that resilience isn't built by hoping nothing breaks. It's built by:

1. Systematically discovering failure modes
2. Understanding blast radius
3. Building confidence through experimentation
4. Making fixes and validating they work

The process becomes:
- Form a hypothesis (e.g., "If service A is slow, we should degrade gracefully")
- Design an experiment (inject latency into service A)
- Run the experiment in a controlled environment
- Observe what actually happens
- Fix the gaps
- Re-run to validate

From Fear to Hunting

The best part? Watching teams go from fear of failure to actively hunting for weaknesses.

After running chaos experiments for a few months, our mindset shifted. Instead of "I hope this works," it became "Let's find out what breaks." Instead of being scared of production issues, we became confident because we'd already seen and fixed the failure modes.

Chaos engineering gave us something invaluable: the ability to sleep well at night, knowing we'd already broken our system in every way we could think of - and fixed it.

The lesson: resilience isn't absence of failure. It's graceful degradation when failure inevitably occurs.`,
      tags: ["Chaos Engineering", "Gremlin", "SRE", "Resilience", "Testing"]
    },
    {
      id: 3,
      title: "The Testing Pyramid is Broken (And What to Do About It)",
      date: "Oct 2024",
      readTime: "12 min read",
      category: "Testing",
      icon: TestTube,
      color: "green",
      excerpt: "Everyone talks about the testing pyramid - lots of unit tests, some integration tests, few e2e tests. But in a microservices world with complex dependencies, this model falls apart. Here's what actually works...",
      content: `Everyone talks about the testing pyramid - lots of unit tests at the bottom, some integration tests in the middle, a few end-to-end tests at the top. It makes sense in theory: unit tests are fast and cheap, e2e tests are slow and expensive.

But after building testing pipelines for distributed systems, I've learned the pyramid is broken. Or at least, it's missing crucial pieces.

The Problem with Traditional Testing

In a monolithic application, the testing pyramid works great. Your unit tests verify individual functions. Integration tests verify modules work together. E2E tests verify the whole application works.

But in a microservices architecture:
- Unit tests can't catch integration issues between services
- Integration tests are complex because you need to mock multiple services
- E2E tests are brittle because they depend on everything working

I've seen teams with 90% test coverage still have production incidents because their tests didn't cover:
- Network failures between services
- Timeout scenarios
- Rate limiting and backpressure
- Database connection pool exhaustion
- Cache invalidation issues

The Missing Pieces

Through implementing TestKube and building comprehensive testing strategies, I discovered what the pyramid is missing:

1. Contract Testing (Pact)
Instead of mocking service responses, contract testing validates that consumers and providers agree on the API contract. When service A expects field "user_id" but service B returns "userId", you catch it immediately.

2. Performance Testing (k6, JMeter)
A service that works correctly but takes 10 seconds to respond is a broken service. Load testing should be continuous, not an afterthought before launch.

3. Chaos Testing (Gremlin)
What happens when the database is slow? When the network has 5% packet loss? When a deployment fails halfway? These scenarios need testing too.

4. Smoke Testing in Production
The most realistic test environment is production. Deploy behind a feature flag, run smoke tests with real traffic, and verify behavior before full rollout.

My Testing Strategy

Here's what actually works for distributed systems:

Unit Tests (Fast, Isolated)
- Business logic validation
- Pure functions
- Algorithm correctness
- Run on every commit

Contract Tests (Medium Speed)
- API compatibility between services
- Request/response schema validation
- Breaking change detection
- Run on every PR

Integration Tests (Slower)
- Database interactions
- External service calls
- Authentication flows
- Run on every PR

Performance Tests (Continuous)
- Baseline: every deployment
- Load tests: weekly
- Stress tests: before major releases
- Soak tests: monthly

Chaos Tests (Scheduled)
- Latency injection: weekly
- Error injection: weekly
- Resource pressure: bi-weekly
- Full gamedays: monthly

The New Pyramid

If I were to redraw the testing pyramid for microservices, it would look more like a testing honeycomb - multiple types of tests at similar scales, each serving a specific purpose.

The key insight: comprehensive testing isn't about one type of test. It's about the right mix of tests that give you confidence your system works under all conditions, not just happy-path scenarios.

Remember: tests that don't fail occasionally are tests that aren't testing enough.`,
      tags: ["Testing", "k6", "TestKube", "Pact", "CI/CD", "Microservices"]
    },
    {
      id: 4,
      title: "From Student to Workshop Designer: Teaching as Learning",
      date: "Sep 2024",
      readTime: "9 min read",
      category: "Career",
      icon: BookOpen,
      color: "yellow",
      excerpt: "A year ago, I was learning about CI/CD pipelines. Today, I'm teaching them. Here's what I learned about going from student to mentor, and why teaching forced me to understand things at a deeper level...",
      content: `A year ago, I was a student learning about CI/CD pipelines, trying to understand the difference between continuous integration and continuous deployment, and wondering why everyone was so excited about containers.

Today, I design and deliver technical workshops. The ECV DevOps Bootcamp I created covers CI/CD, observability, testing, and chaos engineering over three intensive days.

But here's what nobody tells you about teaching: it's the best way to learn.

The Imposter Syndrome Phase

When I was first asked to design a workshop, my immediate thought was "I'm not qualified for this." I'd only been working professionally for a few months. Who was I to teach others?

But that's exactly the point. The best time to teach something is right after you've learned it - when you still remember what it's like to not understand it, when you still have the beginner's questions fresh in your mind.

The Deep Understanding Phase

Creating a workshop forced me to understand things I thought I already knew.

To explain how OpenTelemetry works, I couldn't just say "it collects telemetry data." I had to understand:
- The collector architecture
- How sampling works
- Why context propagation matters
- The difference between push and pull models
- How to design a pipeline that actually works in production

Writing the workshop content meant answering every question I could think of:
- Why do we need this?
- What problem does it solve?
- What are the alternatives?
- When would you NOT use this?
- What are the gotchas?

The "Aha!" Moment Design

The best part of workshop design is creating those "aha!" moments - when a concept clicks for someone and you see their face light up.

For the chaos engineering section, I designed an experiment where participants:
1. Deploy a microservice application
2. Run load tests to get baseline performance
3. Inject latency into one service
4. Watch the cascade failure happen

That moment when they see the difference between "it breaks" and "it degrades gracefully" - that's when chaos engineering stops being abstract and becomes real.

The Feedback Loop

Teaching also gave me something unexpected: validation of my own understanding.

When someone asks a question I can't answer, it reveals a gap in my knowledge. When someone challenges an assumption, it forces me to think critically about why I believe what I believe.

The best questions I've gotten:
- "Why not just use Prometheus instead of OpenTelemetry?" (Leads to discussion about vendor lock-in and standard protocols)
- "Isn't chaos engineering just breaking things randomly?" (Perfect opportunity to explain hypothesis-driven experiments)
- "How do you know which tests to write?" (Forces conversation about risk-based testing)

From Student to Mentor

The journey from student to workshop designer taught me:

1. You don't need to know everything to teach something. You just need to know more than your students and be honest about what you don't know.

2. Teaching forces deep understanding. You can't handwave explanations when someone is relying on you to learn.

3. The best teaching is hands-on. People don't learn DevOps by reading slides - they learn by deploying services and breaking them.

4. Knowledge sharing is a multiplier. Every person you teach can teach others, and your impact grows exponentially.

The Real Lesson

The real lesson isn't that I became a good teacher. It's that teaching made me a better engineer.

When you design labs that actually work, you learn about edge cases. When students ask questions, you're forced to think critically about assumptions.

Teaching isn't a diversion from learning - it's the deepest form of learning there is.`,
      tags: ["Teaching", "DevOps", "Career Growth", "Workshops", "Mentorship"]
    },
    {
      id: 5,
      title: "The Hidden Cost of Bad CI/CD Pipelines",
      date: "Aug 2024",
      readTime: "11 min read",
      category: "CI/CD",
      icon: TrendingUp,
      color: "cyan",
      excerpt: "Slow pipelines aren't just annoying - they're expensive. Here's what I learned about optimizing CI/CD for both speed and reliability, and why the fastest pipeline isn't always the best pipeline...",
      content: `A 45-minute pipeline might not seem terrible. It's a coffee break. A chance to check email. Time to context switch.

But let me show you the real cost:
- 10 developers on your team
- 5 deployments per day (conservative)
- 45 minutes per deployment
- That's 225 minutes of waiting per day
- Almost 19 hours of collective time per day
- 95 hours per week
- More than two full-time positions just waiting for pipelines

Now multiply that by developer salary and the opportunity cost of what could have been built instead.

Slow pipelines are expensive.

But Speed Without Reliability is Worse

Early in my career, I optimized a pipeline from 45 minutes to 8 minutes. I was proud. I saved the team hours every day.

Then we started having production incidents. Tests that we used to run were now skipped. Security scans were moved to async. We were deploying faster but breaking more.

The lesson: the goal isn't the fastest pipeline. It's the fastest feedback loop that still catches real issues.

The Three Dimensions of Pipeline Performance

Through building pipelines with GitLab CI and Harness, I learned that good pipelines balance three dimensions:

1. Speed: How fast do developers get feedback?
2. Reliability: How often do we catch real issues?
3. Cost: What resources do we consume?

You can't optimize for one without considering the others.

The Optimization Strategy

Here's what actually works:

Fast Feedback First
- Lint and unit tests: < 2 minutes
- Quick build: < 5 minutes
- Deploy to dev environment: < 3 minutes
Total: 10 minutes to see your code running

Then Comprehensive Validation
- Integration tests: 10-15 minutes
- Security scans: 10-15 minutes
- Performance tests: 15-20 minutes
- Contract tests: 5 minutes
Total: 30-40 minutes for full validation

The key: fast feedback for developers, comprehensive validation before production.

Intelligent Caching

The biggest speedup often comes from not rebuilding things you don't need to rebuild.

Parallel Execution

Why run tests sequentially when you can run them in parallel?

Instead of:
Build → Unit Tests → Integration Tests → Security Scan → Deploy (45 min)

Do this:
Build → [Unit Tests || Integration Tests || Security Scan] → Deploy (18 min)

But be careful: too much parallelism can overwhelm your infrastructure and actually slow things down.

The Testing Pyramid in CI/CD

Not all tests should run on every commit.

Fast/Always:
- Linting
- Unit tests
- Basic smoke tests

Medium/Pull Requests:
- Integration tests
- Security scans
- Contract tests

Slow/Before Release:
- E2E tests
- Load tests
- Soak tests

Daily/Scheduled:
- Full regression suite
- Chaos tests
- Dependency updates

Progressive Deployment

The fastest safe deployment isn't pushing to production immediately - it's:
1. Deploy to dev (automatic on merge)
2. Run smoke tests
3. Deploy to staging (automatic if tests pass)
4. Run full test suite
5. Deploy to 5% of production (manual approval)
6. Monitor for issues
7. Gradually roll out to 100%

Takes longer, but catches issues before they affect everyone.

The Security Scan Problem

Security scans are thorough but slow. Running a full scan on every commit kills pipeline speed.

The solution:
- Quick scan on every commit (known high-severity issues)
- Full scan nightly
- Deep scan weekly
- Manual scan before release

Balance security with velocity.

The Real Cost of Bad Pipelines

Bad pipelines don't just waste time. They have hidden costs:

1. Context Switching: Every time a developer waits 45 minutes, they context switch. Getting back into flow state takes time.

2. Batch Commits: Slow pipelines encourage batching changes. Larger changes are riskier and harder to review.

3. Testing in Production: When pipelines are slow, developers start testing in production. "It's faster to just push and see."

4. Reduced Confidence: When tests take forever and still miss issues, people stop trusting the pipeline.

5. Talent Retention: Good developers leave companies with bad tooling.

The Lesson

Good CI/CD is about balance:
- Fast enough that developers stay in flow
- Reliable enough that you catch real issues
- Cheap enough that you can run it frequently
- Comprehensive enough that you're confident in deployments

The fastest pipeline is worthless if it doesn't catch bugs. The most thorough pipeline is worthless if nobody waits for it to finish.

Find the balance that works for your team.`,
      tags: ["CI/CD", "GitLab", "Harness", "DevOps", "Performance", "Testing"]
    }
  ];

  const insights = [
    {
      icon: Lightbulb,
      title: "Philosophy",
      description: "Infrastructure as code isn't just automation - it's documentation that never lies. Systems should be reproducible, observable, and most importantly, understandable by humans."
    },
    {
      icon: Rocket,
      title: "Approach",
      description: "Start with the problem, not the tool. The best architecture is the one that solves your actual needs, not the one that looks good on a conference slide."
    },
    {
      icon: Users,
      title: "Belief",
      description: "The best DevOps engineers are multipliers, not gatekeepers. If you're the only one who can deploy, you've built job security, not reliability."
    }
  ];

  const timeline = [
    {
      period: "Now",
      role: "DevOps Engineer @ Swiss Digital Network",
      color: "purple",
      story: "Building cloud-native platforms and enabling teams to ship faster with confidence. From microservices architecture to complete observability pipelines. Created and delivered technical workshops on OpenTelemetry and DevOps practices. Teaching is the best way to learn deeply."
    },
    {
      period: "Early 2024",
      role: "DevOps Intern @ Swiss Digital Network",
      color: "green",
      story: "Started my professional journey diving deep into chaos engineering, testing automation, and MLOPS. This is where theory met reality."
    },
    {
      period: "2021-2024",
      role: "Computer Science Engineering Student",
      color: "yellow",
      story: "National Engineering School of Tunis. Where I learned to think like an engineer and built the foundation for everything that followed."
    }
  ];

  const skills = {
    'DevOps & CI/CD': ['GitLab CI', 'Harness', 'Jenkins', 'ArgoCD', 'Docker', 'Kubernetes', 'Helm', 'Ansible', 'Snyk'],
    'Observability & SRE': ['OpenTelemetry', 'Grafana', 'Prometheus', 'Dynatrace', 'Splunk', 'eBPF', 'DataDog'],
    'Testing & Reliability': ['k6', 'JMeter', 'JUnit', 'Cypress', 'Playwright', 'Pact', 'TestKube', 'Gremlin'],
    'Development': ['Java Spring Boot', 'Python', 'React', 'REST APIs', 'Microservices'],
    'Security & Auth': ['Spring Security', 'JWT', 'Casbin', 'APISIX', 'OpenID', 'Azure AD'],
    'Cloud & Systems': ['AWS', 'Linux', 'Kafka']
  };

  const certifications = [
    { name: 'Gremlin Certified Enterprise Chaos Engineering', issuer: 'Gremlin', link: 'https://credsverse.com/credentials/bc1bbd90-720c-4b23-9ac6-1cbf5f936451' },
    { name: 'Harness Certified CI', issuer: 'Harness', link: 'https://www.credly.com/badges/2a0455ae-1ad2-437f-903f-914ba3ef067b' },
    { name: 'Harness Certified CD & GitOps', issuer: 'Harness', link: 'https://www.credly.com/badges/8aca0435-b7b8-4202-9ea9-96a9d7b27ade' },
    { name: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'AWS', link: 'https://www.credly.com/earner/earned/badge/4044fe92-6142-4072-863d-341000ced5e8' }
  ];

  const impactMetrics = [
    { label: "Systems Built", value: "10+", icon: Server },
    { label: "Engineers Trained", value: "50+", icon: Users },
    { label: "Services Secured", value: "8-10", icon: Shield },
    { label: "MTTD Reduced", value: "87%", icon: Zap }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-xl">Rouaa.dev</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Featured', 'Story', 'Teaching', 'Writings', 'Journey', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            {['Home', 'Featured', 'Story', 'Teaching', 'Writings', 'Journey', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-slate-800 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 font-mono text-cyan-400 text-sm sm:text-base">
            {terminalText}<span className="animate-pulse">_</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Rouaa BEN AYED
          </h1>
          
          <div className="h-8 mb-4">
            <p className="text-xl sm:text-2xl text-slate-300 transition-opacity duration-500">
              {roles[currentRole]}
            </p>
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            I build reliable systems, break them on purpose, and teach others to do the same. 
            Currently exploring the intersection of observability, chaos engineering, and developer experience.
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                <metric.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                <div className="text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/Rouaaba" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rouaa-ben-ayed-a11738225/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:rouaa.ba.3@gmail.com" className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>

          <button onClick={() => scrollTo('featured')} className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Work</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real projects solving real problems. Here's what I've built and the impact it's had.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-${project.color}-500/20 rounded-lg`}>
                        <project.icon className={`w-6 h-6 text-${project.color}-400`} />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyan-400 text-sm mb-3 font-semibold">
                    {project.tagline}
                  </p>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded p-2 text-center">
                        <metric.icon className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                        <div className="text-xs font-bold text-slate-200">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    View details <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 bg-${selectedProject.color}-500/20 rounded-lg`}>
                    <selectedProject.icon className={`w-8 h-8 text-${selectedProject.color}-400`} />
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl font-bold mt-2 text-slate-100">{selectedProject.title}</h2>
                    <p className="text-cyan-400 font-semibold mt-1">{selectedProject.tagline}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-100">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <metric.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-slate-200">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-slate-100">Overview</h3>
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-slate-100">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-slate-100">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2 text-cyan-400">Impact</h3>
                <p className="text-slate-300">{selectedProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Story Section */}
      <section id="story" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">What I'm About</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-slate-300 leading-relaxed">
            <p>
              I'm not just interested in making things work - I'm interested in understanding <em className="text-cyan-400">why</em> they work, 
              <em className="text-purple-400"> when</em> they fail, and <em className="text-green-400">how</em> to make them better.
            </p>
            
            <p>
              My journey in DevOps started with a simple realization: the gap between development and operations isn't a technical problem - 
              it's a communication problem. Good DevOps isn't about tools; it's about building systems that teams can understand, debug, and improve together.
            </p>

            <p>
              That's why I'm passionate about <span className="text-cyan-400 font-semibold">observability</span> - not just monitoring, 
              but truly understanding system behavior. It's why I got certified in <span className="text-purple-400 font-semibold">chaos engineering</span> - 
              because resilience comes from intentionally discovering weaknesses. And it's why I design <span className="text-green-400 font-semibold">workshops</span> - 
              because the best way to learn is by doing, and the best way to grow is by teaching.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {insights.map((insight, idx) => (
                <div key={idx} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                  <insight.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{insight.title}</h3>
                  <p className="text-slate-400 text-sm">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Teaching & Workshops</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sharing knowledge and empowering teams through hands-on technical training
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-slate-800/30 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-${workshop.color}-500/20 rounded-lg`}>
                      <workshop.icon className={`w-8 h-8 text-${workshop.color}-400`} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">{workshop.role}</div>
                      <div className="text-xs text-cyan-400 mt-1">{workshop.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-slate-100">
                    {workshop.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4">
                    {workshop.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Topics Covered</h4>
                    <div className="space-y-1">
                      {workshop.topics.slice(0, 4).map((topic, idx) => (
                        <div key={idx} className="flex items-start text-sm text-slate-300">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                      {workshop.topics.length > 4 && (
                        <div className="text-sm text-slate-400 italic ml-4">
                          + {workshop.topics.length - 4} more topics
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <MessageSquare className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 italic">"{workshop.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writings Section */}
      <section id="writings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Writings & Thoughts</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Lessons learned, perspectives gained, and ideas worth sharing from the trenches of DevOps and SRE
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all cursor-pointer group"
                onClick={() => setSelectedBlog(post)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedBlog(null)}>
          <div className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">
                  {selectedBlog.category}
                </span>
                <button onClick={() => setSelectedBlog(null)} className="text-slate-400 hover:text-slate-100">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 text-slate-100">{selectedBlog.title}</h2>
              
              <div className="flex items-center space-x-4 text-sm text-slate-400 mb-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedBlog.readTime}
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none mb-6">
                <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
                  {selectedBlog.content}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedBlog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">The Journey So Far</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Every role taught me something different. Here's the story behind the timeline.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-${item.color}-400 border-4 border-slate-950`}></div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-slate-700 to-transparent"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-8">
                  <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-cyan-400">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-100">{item.role}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tools & Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md text-sm hover:bg-slate-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">{cert.name}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          
          <p className="text-slate-300 mb-12 text-lg">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about DevOps and cloud technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:rouaa.ba.3@gmail.com" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-slate-400">rouaa.ba.3@gmail.com</p>
            </a>
            
            <a href="tel:+21623311045" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-400 transition-all group">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-slate-400">+216 23311045</p>
            </a>
            
            <a href="https://www.linkedin.com/in/rouaa-ben-ayed-a11738225/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all group">
              <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-400">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2025 Rouaa BEN AYED.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;