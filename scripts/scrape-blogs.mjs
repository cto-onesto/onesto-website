import axios from 'axios';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://www2.onesto.co/blog/';

async function getBlogUrls() {
    return [
        'https://www2.onesto.co/the-age-half-of-australians-on-financial-brink-as-living-costs-bite/',
        'https://www2.onesto.co/herald-sun-victorians-in-grop-of-bill-shock-as-the-average-unpaid-power-bill-debt-spikes-to-2500/',
        'https://www2.onesto.co/hhr-how-to-calculate-your-employee-turnover-costs/',
        'https://www2.onesto.co/fast-company-2023-honorable-mention/',
        'https://www2.onesto.co/hrd-exclusive-feature-boosting-employee-retention-through-financial-wellbeing/',
        'https://www2.onesto.co/managing-organising-above/',
        'https://www2.onesto.co/the-great-resignation/',
        'https://www2.onesto.co/employers-seeking-creative-ways/',
        'https://www2.onesto.co/how-to-spend-less-and-save-money/',
        'https://www2.onesto.co/xero-me/',
        'https://www2.onesto.co/xero-app-marketplace/',
        'https://www2.onesto.co/the-importance-of-financial-wellness/',
        'https://www2.onesto.co/managing-employee-retention/',
    ];
}

async function scrapeBlogPost(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $('h1').first().text().trim();
        const slug = url.split('/').filter(Boolean).pop();
        const authorName = $('.author-name').first().text().trim() || 'Onesto';
        const date = $('.date').first().text().trim();
        const readTime = $('.read-time').first().text().trim();
        const category = $('.category').first().text().trim();
        const content = $('.blog-post-content').first().html()?.trim() ?? '';
        const excerpt = content.substring(0, 150) + '...';
        const image = $('meta[property="og:image"]').attr('content') || '';
        const metaDescription = $('meta[name="description"]').attr('content') || '';

        const author = {
            id: authorName.toLowerCase().replace(/\s/g, '-'),
            name: authorName,
            role: 'Author',
            image: '', 
            bio: '',
            credentials: [],
            social: {},
            posts: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        return {
            id: Math.floor(Math.random() * 100000),
            host: 'Onesto',
            slug,
            title,
            excerpt,
            content,
            date: date ? new Date(date).toISOString() : new Date().toISOString(),
            readTime: readTime || '5 min read',
            category: category || 'General',
            tags: [],
            image,
            featured: false,
            metaDescription,
            authorId: author.id,
            author,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return null;
    }
}

async function main() {
    const blogUrls = await getBlogUrls();
    const blogPosts = [];

    for (const url of blogUrls) {
        const post = await scrapeBlogPost(url);
        if (post) {
            blogPosts.push(post);
        }
    }

    const outputPath = resolve(process.cwd(), 'lib/blog-posts.json');
    writeFileSync(outputPath, JSON.stringify(blogPosts, null, 2));
    console.log(`Successfully scraped ${blogPosts.length} blog posts.`);
}

main();