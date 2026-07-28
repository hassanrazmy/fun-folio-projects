const profile = {
  name: 'Hassan Raza',
  handle: 'hassan',
  host: 'hassan-raza.com',
  role: 'Full-Stack & WordPress Developer',
  location: 'Remote',
  tagline: 'I build fast, accessible web experiences — from custom WordPress themes to full-stack apps.',
  email: 'hello@hassan-raza.com',
};

const commands = {
  help: {
    description: 'show available commands',
    run: () => `
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <p class="text-muted">Available commands:</p>
        <div style="margin-top:0.25rem;display:flex;flex-direction:column;gap:0.125rem;">
          ${[
            { cmd: 'about', desc: 'who I am' },
            { cmd: 'skills', desc: 'languages & tools' },
            { cmd: 'projects', desc: 'things I have built' },
            { cmd: 'blog', desc: 'articles I have written' },
            { cmd: 'experience', desc: 'work history' },
            { cmd: 'contact', desc: 'how to reach me' },
            { cmd: 'whoami', desc: 'quick summary' },
            { cmd: 'ls', desc: 'list available sections' },
            { cmd: 'open &lt;name&gt;', desc: 'open a project or link' },
            { cmd: 'clear', desc: 'clear the terminal' },
            { cmd: 'help', desc: 'show this help menu' }
          ].map(e => `<div style="display:flex;gap:0.75rem;"><span style="width:8rem;flex-shrink:0;" class="text-primary">${e.cmd}</span><span class="text-muted">${e.desc}</span></div>`).join('')}
        </div>
        <p style="margin-top:0.5rem;" class="text-muted">Tip: use <span class="text-yellow">Tab</span> to autocomplete and <span class="text-yellow">↑ / ↓</span> to browse history.</p>
      </div>
    `
  },
  about: {
    description: 'who I am',
    run: () => `
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <p>I'm Hassan, a full-stack developer with deep roots in the WordPress ecosystem.</p>
        <p>I started by building custom themes and plugins, then grew into full-stack work with modern JavaScript, React, and Node. I care about performance, clean code, and shipping products that people actually enjoy using.</p>
        <br>
        <p>These days I split my time between headless WordPress builds, React/Next.js apps, and helping teams speed up their sites and workflows.</p>
      </div>
    `
  },
  skills: {
    description: 'languages & tools',
    run: () => `
      <div>
        ${[
          { group: 'languages', items: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML/CSS'] },
          { group: 'frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vue'] },
          { group: 'backend', items: ['Node.js', 'WordPress', 'REST APIs', 'GraphQL', 'MySQL'] },
          { group: 'tooling', items: ['Git', 'Docker', 'Vite', 'Webpack', 'Vercel'] }
        ].map(s => `
          <div class="skill-group">
            <span class="skill-label">${s.group}</span>
            <div class="skill-items">
              ${s.items.map(i => `<span class="skill-item">${i}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `
  },
  projects: {
    description: 'things I have built',
    run: () => `
      <div>
        ${[
          {
            name: 'headless-commerce',
            description: 'A headless WordPress + Next.js storefront with sub-second page loads and a custom checkout.',
            stack: ['Next.js', 'WordPress', 'GraphQL', 'Stripe'],
            link: 'https://github.com/'
          },
          {
            name: 'theme-forge',
            description: 'A reusable WordPress starter theme with a block-first workflow and CI-driven deploys.',
            stack: ['PHP', 'WordPress', 'Sass', 'GitHub Actions'],
            link: 'https://github.com/'
          },
          {
            name: 'dash-metrics',
            description: 'A real-time analytics dashboard for agencies, aggregating data from multiple client sites.',
            stack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
            link: 'https://github.com/'
          },
          {
            name: 'speed-audit',
            description: 'A CLI + web tool that audits WordPress sites and suggests concrete performance fixes.',
            stack: ['TypeScript', 'Lighthouse', 'Vercel'],
            link: 'https://github.com/'
          }
        ].map(p => `
          <div class="project-item">
            <div class="project-header">
              <span class="text-primary">~/${p.name}</span>
              ${p.link ? `<a href="${p.link}" target="_blank">[open]</a>` : ''}
            </div>
            <p>${p.description}</p>
            <div class="project-stack">
              ${p.stack.map(tech => `<span class="text-muted" style="font-size:0.875rem;">#${tech}</span>`).join('')}
            </div>
          </div>
        `).join('')}
        <p class="text-muted" style="margin-top:0.5rem;">Run <span class="text-yellow">open &lt;name&gt;</span> to visit a project.</p>
      </div>
    `
  },
  blog: {
    description: 'articles I have written',
    run: () => `
      <div style="display:flex;flex-direction:column;gap:1rem;">
        ${[
          { title: 'Going Headless with WordPress and Next.js', date: '2025-11-02', summary: 'A practical guide to decoupling your WordPress backend from a modern React frontend.', link: 'https://hassan-raza.com' },
          { title: 'Cutting WordPress Load Times in Half', date: '2025-08-18', summary: 'The caching, asset, and query strategies I use to make WordPress genuinely fast.', link: 'https://hassan-raza.com' },
          { title: 'Writing Custom Gutenberg Blocks in 2025', date: '2025-05-30', summary: 'How to build maintainable, accessible custom blocks without fighting the editor.', link: 'https://hassan-raza.com' }
        ].map(post => `
          <div>
            <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:0.75rem;">
              <span class="text-muted" style="font-size:0.875rem;">${post.date}</span>
              ${post.link ? `<a href="${post.link}" target="_blank">${post.title}</a>` : `<span>${post.title}</span>`}
            </div>
            <p class="text-muted">${post.summary}</p>
          </div>
        `).join('')}
      </div>
    `
  },
  experience: {
    description: 'work history',
    run: () => `
      <div>
        ${[
          { role: 'Senior Full-Stack Developer', company: 'Freelance / Contract', period: '2021 — Present', points: ['Built headless WordPress + Next.js sites for agencies and startups.', 'Led performance overhauls, cutting average load times by 40-60%.'] },
          { role: 'WordPress Developer', company: 'Digital Agency', period: '2018 — 2021', points: ['Delivered 30+ custom themes and plugins for clients across industries.', 'Mentored junior devs on modern PHP and block-based development.'] },
          { role: 'Front-End Developer', company: 'Web Studio', period: '2016 — 2018', points: ['Turned designs into responsive, accessible interfaces.', 'Introduced a component-based CSS system used across projects.'] }
        ].map(job => `
          <div class="job-item">
            <div class="job-header">
              <span class="text-primary">${job.role} <span class="text-muted">@ ${job.company}</span></span>
              <span class="text-muted" style="font-size:0.875rem;">${job.period}</span>
            </div>
            <ul class="job-points">
              ${job.points.map(pt => `<li><span class="text-green">→</span> ${pt}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `
  },
  contact: {
    description: 'how to reach me',
    run: () => `
      <div>
        <p class="text-muted" style="margin-bottom:0.25rem;">Let's build something. Reach me here:</p>
        <div style="display:flex;flex-direction:column;gap:0.25rem;">
          ${[
            { label: 'email', handle: 'hello@hassan-raza.com', url: 'mailto:hello@hassan-raza.com' },
            { label: 'github', handle: '@hassan-raza', url: 'https://github.com/' },
            { label: 'linkedin', handle: 'in/hassan-raza', url: 'https://linkedin.com/' },
            { label: 'x', handle: '@hassanraza', url: 'https://x.com/' },
            { label: 'website', handle: 'hassan-raza.com', url: 'https://hassan-raza.com' }
          ].map(s => `
            <div class="row">
              <span class="row-label">${s.label}</span>
              <a href="${s.url}" target="_blank">${s.handle}</a>
            </div>
          `).join('')}
        </div>
      </div>
    `
  },
  whoami: {
    description: 'quick summary',
    run: () => `
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <div class="row"><span class="row-label">name</span><span>${profile.name}</span></div>
        <div class="row"><span class="row-label">role</span><span>${profile.role}</span></div>
        <div class="row"><span class="row-label">location</span><span>${profile.location}</span></div>
        <div class="row"><span class="row-label">status</span><span class="text-green">available for work</span></div>
      </div>
    `
  },
  ls: {
    description: 'list available sections',
    run: () => `
      <div style="display:flex;flex-wrap:wrap;gap:1.5rem 0.25rem;">
        ${['about', 'skills', 'projects', 'blog', 'experience', 'contact'].map(s => `<span class="text-primary">${s}/</span>`).join('')}
      </div>
    `
  },
  open: {
    description: 'open a project or link',
    run: (args) => {
      const target = (args[0] || '').replace(/^~?\//, '').toLowerCase();
      if (!target) return `<span class="text-red">usage: open &lt;project-name&gt;</span>`;
      
      const projects = ['headless-commerce', 'theme-forge', 'dash-metrics', 'speed-audit'];
      if (projects.includes(target)) {
        window.open('https://github.com/', '_blank');
        return `<span class="text-muted">Opening <span class="text-primary">${target}</span> in a new tab…</span>`;
      }
      return `<span class="text-red">open: ${target}: no such project. Try <span class="text-yellow">projects</span>.</span>`;
    }
  },
  echo: {
    hidden: true,
    run: (args) => `<span>${args.join(' ')}</span>`
  },
  date: {
    hidden: true,
    run: () => `<span>${new Date().toString()}</span>`
  },
  sudo: {
    hidden: true,
    run: () => `<span class="text-red">[sudo] password for guest: permission denied — nice try.</span>`
  }
};

const commandNames = Object.keys(commands);

document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('cmd-input');
  const historyContainer = document.getElementById('history-container');
  const terminalBody = document.getElementById('terminal-body');
  const suggestionsEl = document.getElementById('suggestions');

  let commandLog = [];
  let logIndex = -1;

  function renderPrompt(dim = false) {
    const cls = dim ? 'dim' : 'green';
    return `
      <div class="prompt-line">
        <span class="prompt-text ${cls}">${profile.handle}@${profile.host}</span>
        <span class="text-muted">:</span>
        <span class="prompt-text blue">~</span>
        <span class="text-muted">$ </span>
      </div>
    `;
  }

  function appendHistory(input, output) {
    const entry = document.createElement('div');
    entry.className = 'history-entry';
    let html = '';
    if (input !== '') {
      html += `
        <div style="display:flex;gap:0.25rem;">
          ${renderPrompt(true)}
          <span style="word-break:break-all;">${input}</span>
        </div>
      `;
    }
    if (output !== null) {
      html += `<div style="padding-left:0;">${output}</div>`;
    }
    entry.innerHTML = html;
    historyContainer.appendChild(entry);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function runCommand(raw) {
    const trimmed = raw.trim();
    if (!trimmed) {
      appendHistory('', null);
      return;
    }

    commandLog.push(trimmed);
    logIndex = -1;

    const parts = trimmed.split(/\s+/);
    const name = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (name === 'clear') {
      historyContainer.innerHTML = '';
      return;
    }

    const command = commands[name];
    let output = '';
    if (command) {
      output = command.run(args);
    } else {
      output = `<span class="text-red">command not found: ${name}. Type <span class="text-yellow">help</span> for options.</span>`;
    }

    appendHistory(trimmed, output);
  }

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(inputEl.value);
      inputEl.value = '';
      updateSuggestions();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const val = inputEl.value.trim().toLowerCase();
      if (!val || val.includes(' ')) return;
      const suggestions = commandNames.filter(c => c.startsWith(val) && c !== val && !commands[c].hidden);
      if (suggestions.length > 0) {
        inputEl.value = suggestions[0];
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      logIndex = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      inputEl.value = commandLog[logIndex];
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (logIndex === -1) return;
      logIndex++;
      if (logIndex >= commandLog.length) {
        logIndex = -1;
        inputEl.value = '';
      } else {
        inputEl.value = commandLog[logIndex];
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      historyContainer.innerHTML = '';
    }
  });

  inputEl.addEventListener('input', updateSuggestions);

  function updateSuggestions() {
    const val = inputEl.value.trim().toLowerCase();
    if (!val || val.includes(' ')) {
      suggestionsEl.innerHTML = '';
      return;
    }
    const suggestions = commandNames.filter(c => c.startsWith(val) && c !== val && !commands[c].hidden);
    if (suggestions.length > 0) {
      suggestionsEl.innerHTML = `<span class="text-yellow">Tab</span> → ${suggestions.slice(0, 6).join('  ')}`;
    } else {
      suggestionsEl.innerHTML = '';
    }
  }

  // Focus terminal when clicking inside
  document.querySelector('.terminal-window').addEventListener('click', () => {
    inputEl.focus();
  });

  // Attach nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      runCommand(btn.textContent.trim());
      inputEl.value = '';
      inputEl.focus();
    });
  });

  // Initial focus
  inputEl.focus();
});
