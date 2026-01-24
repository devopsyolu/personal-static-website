// Home Page JavaScript
import i18n, { initLanguageSwitcher } from './i18n.js';

// Configuration
const CHANNEL_ID = 'UC_YOUR_CHANNEL_ID_HERE';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

// Projects data
const projects = [
    {
        title: 'Enterprise GenAI RAG Pipeline',
        desc: 'Designed a secure Retrieval-Augmented Generation system using AWS Bedrock, Kendra, and Lambda to enable employees to query internal documentation with 95% accuracy.',
        tags: ['AWS Bedrock', 'LangChain', 'Python', 'Vector DB'],
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        title: 'Multi-Region Kubernetes Mesh',
        desc: 'Architected a fault-tolerant EKS environment across 3 regions using Cilium Service Mesh, achieving 99.99% availability for mission-critical banking apps.',
        tags: ['EKS', 'Istio', 'Terraform', 'GitOps'],
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        title: 'Serverless Compliance Sentinel',
        desc: 'Built an event-driven security framework processing 1M+ CloudTrail events daily to automatically remediate non-compliant resources in near real-time.',
        tags: ['Lambda', 'EventBridge', 'Security Hub', 'Python'],
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
];

const staticVideos = [
    {
        title: 'Mastering AWS Lambda Layers & Extensions',
        link: 'https://youtube.com/@devopsyolu',
        thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
        pubDate: '2025-10-15'
    },
    {
        title: 'Deploying LLMs on Kubernetes with KServe',
        link: 'https://youtube.com/@devopsyolu',
        thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
        pubDate: '2025-09-22'
    },
    {
        title: 'Terraform Best Practices for Large Scale Infra',
        link: 'https://youtube.com/@devopsyolu',
        thumbnail: 'https://img.youtube.com/vi/placeholder/maxresdefault.jpg',
        pubDate: '2025-08-30'
    }
];

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projects.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'project-card animate-in';
        card.style.animationDelay = `${0.1 * (idx + 1)}s`;

        card.innerHTML = `
      <div class="project-content">
        <div style="width: 60px; height: 60px; background: ${p.gradient}; border-radius: 12px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center;">
          <i class="fas fa-rocket" style="font-size: 28px; color: white;"></i>
        </div>
        <h3>${p.title}</h3>
        <p style="color: var(--text-secondary); margin: 0.5rem 0;">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-sm">${t}</span>`).join('')}
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Load videos
async function loadVideos() {
    const container = document.getElementById('video-container');
    if (!container) return;

    try {
        const res = await fetch(RSS_URL);
        const data = await res.json();

        if (data.status === 'ok' && data.items.length > 0) {
            renderVideos(data.items, container);
        } else {
            throw new Error('No items');
        }
    } catch (e) {
        console.log('Using static video data');
        renderVideos(staticVideos, container);
    }
}

function renderVideos(items, container) {
    container.innerHTML = '';
    items.slice(0, 3).forEach((item, idx) => {
        const card = document.createElement('a');
        card.href = item.link;
        card.target = "_blank";
        card.className = 'card animate-in';
        card.style.animationDelay = `${0.1 * (idx + 1)}s`;
        card.style.cursor = 'pointer';
        card.style.textDecoration = 'none';

        const thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.guid?.split(':')[2] || 'default'}/hqdefault.jpg`;

        card.innerHTML = `
      <img src="${thumb}" 
           style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem;" 
           alt="${item.title}" 
           loading="lazy" 
           onerror="this.src='https://via.placeholder.com/480x360/667eea/ffffff?text=DevOps+Yolu'" />
      <h4 style="margin-bottom: 0.5rem;">${item.title}</h4>
      <p style="color: var(--text-tertiary); font-size: 0.875rem;">${new Date(item.pubDate).toLocaleDateString()}</p>
    `;
        container.appendChild(card);
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-in').forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navbarMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    renderProjects();
    loadVideos();

    // Delay animation init to allow elements to render
    setTimeout(initAnimations, 100);
});
