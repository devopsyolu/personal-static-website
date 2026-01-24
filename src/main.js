import '../style.css';

// Configuration
// NOTE: Use your actual Channel ID here. 
// Function to try and fetch videos, falling back to static data if it fails or ID is missing.
const CHANNEL_ID = 'UC_YOUR_CHANNEL_ID_HERE';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

const projects = [
    {
        title: 'Enterprise GenAI RAG Pipeline',
        desc: 'Designed a secure Retrieval-Augmented Generation system using AWS Bedrock, Kendra, and Lambda to enable employees to query internal documentation with 95% accuracy.',
        tags: ['AWS Bedrock', 'LangChain', 'Python', 'Vector DB']
    },
    {
        title: 'Multi-Region Kubernetes Mesh',
        desc: 'Architected a fault-tolerant EKS environment across 3 regions using Cilium Service Mesh, achieving 99.99% availability for mission-critical banking apps.',
        tags: ['EKS', 'Istio', 'Terraform', 'GitOps']
    },
    {
        title: 'Serverless Compliance Sentinel',
        desc: 'Built an event-driven security framework processing 1M+ CloudTrail events daily to automatically remediate non-compliant resources in near real-time.',
        tags: ['Lambda', 'EventBridge', 'Security Hub', 'Python']
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

document.querySelector('#app').innerHTML = `
  <!-- Content injected by main.js logic -->
`;

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card animate-in';
        card.innerHTML = `
      <div class="project-content">
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

async function loadVideos() {
    const container = document.getElementById('video-container');
    if (!container) return;

    try {
        // Attempt fetch
        const res = await fetch(RSS_URL);
        const data = await res.json();

        if (data.status === 'ok' && data.items.length > 0) {
            renderVideos(data.items, container);
        } else {
            throw new Error('No items');
        }
    } catch (e) {
        // Fallback
        console.log('Using static video data');
        renderVideos(staticVideos, container);
    }
}

function renderVideos(items, container) {
    container.innerHTML = '';
    items.slice(0, 3).forEach(item => { // Show last 3
        const card = document.createElement('a');
        card.href = item.link;
        card.target = "_blank";
        card.className = 'video-card animate-in';

        // Fix thumbnail for RSS items vs static
        const thumb = item.thumbnail || `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/hqdefault.jpg`;

        card.innerHTML = `
      <img src="${thumb}" class="video-thumb" alt="${item.title}" loading="lazy" />
      <div class="video-info">
        <h4 class="video-title">${item.title}</h4>
        <p class="video-date">${new Date(item.pubDate).toLocaleDateString()}</p>
      </div>
    `;
        container.appendChild(card);
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    loadVideos();
});
