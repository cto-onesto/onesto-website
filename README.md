
<div align="center">
  <img src="public/logo.png" alt="Onesto Logo" width="200"/>
  <h1>Onesto Website</h1>
  <p>The official website for Onesto, built with Next.js and Tailwind CSS.</p>
</div>

<hr>

<h2>🚀 Tech Stack</h2>
<ul>
  <li><strong>Framework:</strong> <a href="https://nextjs.org/">Next.js</a></li>
  <li><strong>Language:</strong> <a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><strong>Styling:</strong> <a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><strong>UI Components:</strong> <a href="https://ui.shadcn.com/">shadcn/ui</a></li>
  <li><strong>Package Manager:</strong> <a href="https://pnpm.io/">pnpm</a></li>
</ul>

<h2>📋 Prerequisites</h2>
<p>Before you begin, ensure you have the following installed:</p>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (v18 or later recommended)</li>
  <li><a href="https://pnpm.io/installation">pnpm</a></li>
</ul>

<h2>🛠️ Getting Started</h2>
<h3>1. Clone the Repository</h3>
<pre><code>git clone &lt;repository-url&gt;
cd onesto-website</code></pre>

<h3>2. Install Dependencies</h3>
<p>Use pnpm to install the project dependencies:</p>
<pre><code>pnpm install</code></pre>

<h2>📜 Available Scripts</h2>
<p>In the project directory, you can run the following commands:</p>

<h3><code>pnpm dev</code></h3>
<p>Runs the app in development mode.<br />
Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser. The page will reload if you make edits.</p>

<h3><code>pnpm build</code></h3>
<p>Builds the app for production to the <code>.next</code> folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.</p>

<h3><code>pnpm start</code></h3>
<p>Starts a production server for the built app. Use this command after running <code>pnpm build</code>.</p>

<h3><code>pnpm lint</code></h3>
<p>Runs the Next.js linter to identify and fix code quality issues.</p>

<h2>📁 Project Structure</h2>
<pre>
.
├── app/                  # Main application source (App Router)
│   ├── (pages)/          # Route directories
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable UI components
├── public/               # Static assets (images, fonts)
├── lib/                  # Utility functions
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies and scripts
</pre>
