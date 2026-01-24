// Internationalization System for Bilingual Portfolio

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },

        // Home Page
        home: {
            title: 'Architecting the',
            titleHighlight1: 'Future of Cloud',
            titleHighlight2: 'Artificial Intelligence',
            intro: "Hi, I'm",
            introName: 'Kemal Gokhan',
            introDesc: 'DevOps Engineer & Cloud Architect with',
            introYears: '9+ years',
            introDesc2: 'of experience building scalable AWS infrastructures and AI-driven solutions.',
            ctaYoutube: '@devopsyolu',
            ctaContact: 'Contact Me',
            featuredProjects: 'Architectural',
            featuredProjectsHighlight: 'Masterpieces',
            latestVideos: 'Latest from the',
            latestVideosHighlight: 'Channel',
            viewAllVideos: 'View All Videos',
        },

        // About Page
        about: {
            title: 'About Me',
            subtitle: 'DevOps Engineer, Cloud Architect & AI Enthusiast',
            intro: "I'm a passionate DevOps Engineer and Cloud Architect with over 9 years of experience designing and implementing enterprise-scale cloud infrastructures. My expertise spans AWS cloud services, Kubernetes orchestration, Infrastructure as Code, and cutting-edge AI/ML solutions.",
            mission: 'My Mission',
            missionText: 'To empower organizations with robust, scalable, and intelligent cloud infrastructures that drive innovation and business growth. I believe in automation, continuous improvement, and making complex systems simple.',
            journey: 'My Journey',
            expertise: 'Core Expertise',
            expertiseAreas: [
                'AWS Solutions Architecture & Multi-Region Deployments',
                'Kubernetes & Container Orchestration (EKS, Docker)',
                'Infrastructure as Code (Terraform, CloudFormation)',
                'CI/CD Pipelines & GitOps Workflows',
                'AI/ML Operations (AWS Bedrock, SageMaker, LangChain)',
                'Serverless Architectures (Lambda, Fargate, EventBridge)',
                'Security & Compliance Automation',
                'DevOps Culture & Best Practices',
            ],
        },

        // Skills Page
        skills: {
            title: 'Skills & Expertise',
            subtitle: 'Technologies and tools I work with to build world-class solutions',
            devopsTitle: 'DevOps & Cloud',
            devopsDesc: 'Enterprise-grade cloud infrastructure and automation',
            aiTitle: 'AI & Machine Learning',
            aiDesc: 'Intelligent systems powered by state-of-the-art AI',
            toolsTitle: 'Tools & Platforms',
            toolsDesc: 'Battle-tested technologies for production environments',
            certifications: 'Certifications & Credentials',
        },

        // Projects Page
        projects: {
            title: 'Projects & Portfolio',
            subtitle: 'Real-world solutions that make an impact',
            enterprise: 'Enterprise Solutions',
            personal: 'Personal Projects',
            opensource: 'Open Source Contributions',
            viewProject: 'View Project',
            viewCode: 'View Code',
            techStack: 'Tech Stack',
        },

        // Contact Page
        contact: {
            title: 'Get In Touch',
            subtitle: "Let's build something amazing together",
            name: 'Your Name',
            email: 'Your Email',
            message: 'Your Message',
            send: 'Send Message',
            or: 'Or reach out directly',
            location: 'Location',
            availability: 'Availability',
            availableStatus: 'Available for consulting and collaboration',
            followMe: 'Follow Me',
        },

        // Footer
        footer: {
            rights: 'All rights reserved.',
            madeWith: 'Made with',
            and: 'and',
            by: 'by',
        },

        // Projects Data
        projectsData: {
            genai: {
                title: 'Enterprise GenAI RAG Pipeline',
                desc: 'Designed a secure Retrieval-Augmented Generation system using AWS Bedrock, Kendra, and Lambda to enable employees to query internal documentation with 95% accuracy.',
                tags: ['AWS Bedrock', 'LangChain', 'Python', 'Vector DB'],
            },
            kubernetes: {
                title: 'Multi-Region Kubernetes Mesh',
                desc: 'Architected a fault-tolerant EKS environment across 3 regions using Cilium Service Mesh, achieving 99.99% availability for mission-critical banking apps.',
                tags: ['EKS', 'Istio', 'Terraform', 'GitOps'],
            },
            compliance: {
                title: 'Serverless Compliance Sentinel',
                desc: 'Built an event-driven security framework processing 1M+ CloudTrail events daily to automatically remediate non-compliant resources in near real-time.',
                tags: ['Lambda', 'EventBridge', 'Security Hub', 'Python'],
            },
        },
    },

    tr: {
        // Navigation
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            skills: 'Yetenekler',
            projects: 'Projeler',
            contact: 'İletişim',
        },

        // Home Page
        home: {
            title: 'Bulut ve',
            titleHighlight1: 'Yapay Zeka',
            titleHighlight2: 'Geleceğini İnşa Ediyorum',
            intro: 'Merhaba, ben',
            introName: 'Kemal Gökhan',
            introDesc: 'Ölçeklenebilir AWS altyapıları ve yapay zeka destekli çözümler geliştirmede',
            introYears: '9+ yıllık',
            introDesc2: 'deneyime sahip DevOps Mühendisi ve Bulut Mimarı.',
            ctaYoutube: '@devopsyolu',
            ctaContact: 'İletişime Geç',
            featuredProjects: 'Mimari',
            featuredProjectsHighlight: 'Başyapıtlar',
            latestVideos: 'Kanaldan',
            latestVideosHighlight: 'Son Videolar',
            viewAllVideos: 'Tüm Videoları Gör',
        },

        // About Page
        about: {
            title: 'Hakkımda',
            subtitle: 'DevOps Mühendisi, Bulut Mimarı & Yapay Zeka Tutkunu',
            intro: '9 yılı aşkın deneyime sahip, kurumsal ölçekli bulut altyapılarını tasarlayan ve uygulayan tutkulu bir DevOps Mühendisi ve Bulut Mimarıyım. Uzmanlık alanlarım AWS bulut hizmetleri, Kubernetes orkestrasyonu, Infrastructure as Code ve son teknoloji yapay zeka/makine öğrenmesi çözümlerini kapsamaktadır.',
            mission: 'Misyonum',
            missionText: 'Kuruluşları inovasyonu ve iş büyümesini sağlayan sağlam, ölçeklenebilir ve akıllı bulut altyapılarıyla güçlendirmek. Otomasyona, sürekli gelişime ve karmaşık sistemleri basitleştirmeye inanıyorum.',
            journey: 'Yolculuğum',
            expertise: 'Temel Uzmanlık Alanları',
            expertiseAreas: [
                'AWS Çözüm Mimarisi & Çok Bölgeli Dağıtımlar',
                'Kubernetes & Container Orkestrasyonu (EKS, Docker)',
                'Infrastructure as Code (Terraform, CloudFormation)',
                'CI/CD Pipelines & GitOps İş Akışları',
                'Yapay Zeka/Makine Öğrenmesi Operasyonları (AWS Bedrock, SageMaker, LangChain)',
                'Sunucusuz Mimariler (Lambda, Fargate, EventBridge)',
                'Güvenlik & Uyumluluk Otomasyonu',
                'DevOps Kültürü & En İyi Uygulamalar',
            ],
        },

        // Skills Page
        skills: {
            title: 'Yetenekler & Uzmanlık',
            subtitle: 'Dünya standartlarında çözümler oluşturmak için kullandığım teknolojiler ve araçlar',
            devopsTitle: 'DevOps & Bulut',
            devopsDesc: 'Kurumsal düzeyde bulut altyapısı ve otomasyon',
            aiTitle: 'Yapay Zeka & Makine Öğrenmesi',
            aiDesc: 'Son teknoloji yapay zeka ile desteklenen akıllı sistemler',
            toolsTitle: 'Araçlar & Platformlar',
            toolsDesc: 'Üretim ortamları için test edilmiş teknolojiler',
            certifications: 'Sertifikalar & Belgeler',
        },

        // Projects Page
        projects: {
            title: 'Projeler & Portfolio',
            subtitle: 'Gerçek dünyada etki yaratan çözümler',
            enterprise: 'Kurumsal Çözümler',
            personal: 'Kişisel Projeler',
            opensource: 'Açık Kaynak Katkıları',
            viewProject: 'Projeyi Gör',
            viewCode: 'Kodu Gör',
            techStack: 'Teknoloji Yığını',
        },

        // Contact Page
        contact: {
            title: 'İletişime Geçin',
            subtitle: 'Birlikte harika bir şeyler inşa edelim',
            name: 'Adınız',
            email: 'E-posta Adresiniz',
            message: 'Mesajınız',
            send: 'Mesaj Gönder',
            or: 'Veya doğrudan ulaşın',
            location: 'Konum',
            availability: 'Müsaitlik',
            availableStatus: 'Danışmanlık ve işbirliği için müsait',
            followMe: 'Takip Edin',
        },

        // Footer
        footer: {
            rights: 'Tüm hakları saklıdır.',
            madeWith: 'ile yapıldı',
            and: 've',
            by: 'tarafından',
        },

        // Projects Data
        projectsData: {
            genai: {
                title: 'Kurumsal GenAI RAG Pipeline',
                desc: 'AWS Bedrock, Kendra ve Lambda kullanarak çalışanların dahili dokümantasyonu %95 doğrulukla sorgulamasını sağlayan güvenli bir Retrieval-Augmented Generation sistemi tasarladım.',
                tags: ['AWS Bedrock', 'LangChain', 'Python', 'Vector DB'],
            },
            kubernetes: {
                title: 'Çok Bölgeli Kubernetes Mesh',
                desc: 'Cilium Service Mesh kullanarak 3 bölge genelinde hata-toleranslı bir EKS ortamı tasarladım ve kritik bankacılık uygulamaları için %99.99 kullanılabilirlik sağladım.',
                tags: ['EKS', 'Istio', 'Terraform', 'GitOps'],
            },
            compliance: {
                title: 'Sunucusuz Uyumluluk Sentinel',
                desc: 'Günlük 1M+ CloudTrail olayını işleyerek uyumsuz kaynakları neredeyse gerçek zamanlı olarak otomatik düzelten olay-tabanlı bir güvenlik çerçevesi oluşturdum.',
                tags: ['Lambda', 'EventBridge', 'Security Hub', 'Python'],
            },
        },
    },
};

export default translations;
