-- Seed data for the Onesto blog database
-- This script populates the blog tables with initial data

-- Insert authors
INSERT INTO authors (name, email, bio, avatar_url) VALUES
('Sarah Mitchell', 'sarah.mitchell@onesto.co', 'HR Strategy Expert with 10+ years of experience in employee benefits and workplace culture.', '/images/authors/sarah-mitchell.jpg'),
('Michael Rodriguez', 'michael.rodriguez@onesto.co', 'Philanthropic Programs Specialist focused on corporate social responsibility and community impact.', '/images/authors/michael-rodriguez.jpg'),
('Emily Chen', 'emily.chen@onesto.co', 'Employee Wellness Consultant helping companies build comprehensive health and wellness programs.', '/images/authors/emily-chen.jpg'),
('David Thompson', 'david.thompson@onesto.co', 'Data Analytics Expert specializing in HR metrics and employee engagement measurement.', '/images/authors/david-thompson.jpg'),
('Lisa Park', 'lisa.park@onesto.co', 'Remote Work Specialist with expertise in distributed team management and virtual benefits.', '/images/authors/lisa-park.jpg'),
('Dr. James Wilson', 'james.wilson@onesto.co', 'Licensed Clinical Psychologist specializing in workplace mental health and employee wellbeing.', '/images/authors/james-wilson.jpg');

-- Insert categories
INSERT INTO categories (name, slug, description) VALUES
('Employee Benefits', 'employee-benefits', 'Articles about comprehensive employee benefit programs and strategies'),
('Philanthropy', 'philanthropy', 'Content focused on corporate philanthropic programs and social impact'),
('Wellness', 'wellness', 'Employee wellness, health programs, and workplace wellbeing topics'),
('Analytics', 'analytics', 'Data-driven insights and metrics for HR and employee engagement'),
('Remote Work', 'remote-work', 'Best practices for remote and hybrid work environments'),
('Mental Health', 'mental-health', 'Mental health support and resources for the workplace');

-- Insert tags
INSERT INTO tags (name, slug) VALUES
('Employee Engagement', 'employee-engagement'),
('Talent Retention', 'talent-retention'),
('Corporate Social Responsibility', 'corporate-social-responsibility'),
('Workplace Culture', 'workplace-culture'),
('Health Benefits', 'health-benefits'),
('Charitable Giving', 'charitable-giving'),
('Work-Life Balance', 'work-life-balance'),
('HR Technology', 'hr-technology'),
('Team Building', 'team-building'),
('Professional Development', 'professional-development');

-- Insert blog posts
INSERT INTO blog_posts (
    title, 
    slug, 
    excerpt, 
    content, 
    author_id, 
    category_id, 
    status, 
    published_at, 
    read_time_minutes,
    meta_title,
    meta_description,
    meta_keywords
) VALUES
(
    'The Future of Employee Benefits: Integrating Philanthropy in the Workplace',
    'future-employee-benefits-philanthropy',
    'Discover how modern companies are revolutionizing employee benefits by incorporating philanthropic programs that boost engagement and social impact.',
    'Employee benefits have evolved significantly over the past decade. Today''s workforce expects more than just traditional health insurance and retirement plans. They want to work for companies that align with their values and make a positive impact on society.

Integrating philanthropic programs into your employee benefits package is no longer just a nice-to-have – it''s becoming essential for attracting and retaining top talent. Companies that offer charitable giving matching, volunteer time off, and community impact initiatives see higher employee satisfaction rates and stronger company culture.

The key to successful philanthropic benefits is giving employees choice and ownership. Allow them to select causes they care about, participate in volunteer activities during work hours, and see the direct impact of their contributions. This approach not only benefits the community but also creates a sense of purpose and fulfillment among your workforce.

Modern platforms like Onesto make it easier than ever to implement and manage these programs, providing transparency, tracking, and reporting that helps both employees and leadership understand the impact of their philanthropic efforts.',
    1,
    1,
    'published',
    '2024-01-15 10:00:00+00',
    8,
    'The Future of Employee Benefits: Integrating Philanthropy | Onesto',
    'Learn how integrating philanthropic programs into employee benefits boosts engagement, attracts talent, and creates positive social impact.',
    'employee benefits, philanthropy, corporate social responsibility, employee engagement, charitable giving'
),
(
    'Overcoming Donor Fatigue: Innovative Strategies for Corporate Giving',
    'overcoming-donor-fatigue-strategies',
    'Learn effective strategies to combat donor fatigue and maintain employee engagement in corporate philanthropic initiatives.',
    'Donor fatigue is a real challenge facing many organizations today. When employees are constantly asked to contribute to various causes, they can become overwhelmed and disengaged from philanthropic activities altogether.

The solution lies in creating more strategic, meaningful, and varied approaches to corporate giving. Instead of frequent one-off campaigns, consider implementing year-round programs that allow employees to make ongoing, smaller contributions to causes they personally care about.

Gamification can also play a crucial role in maintaining engagement. Create friendly competitions between departments, track collective impact, and celebrate milestones together. When employees can see the tangible results of their contributions, they''re more likely to stay engaged.

Another effective strategy is to diversify giving opportunities. Not everyone can contribute financially, but they might be able to volunteer their time or skills. Offering multiple ways to participate ensures that all employees can contribute in ways that work for them.',
    2,
    2,
    'published',
    '2024-01-10 14:30:00+00',
    6,
    'Overcoming Donor Fatigue: Corporate Giving Strategies | Onesto',
    'Combat donor fatigue with innovative corporate giving strategies that maintain employee engagement and maximize social impact.',
    'donor fatigue, corporate giving, employee engagement, philanthropic programs, charitable donations'
),
(
    'Building a Comprehensive Employee Wellness Program',
    'comprehensive-employee-wellness-program',
    'A complete guide to creating employee wellness programs that improve productivity, reduce healthcare costs, and boost morale.',
    'Employee wellness programs have become a cornerstone of modern benefits packages, and for good reason. Companies with comprehensive wellness programs see reduced healthcare costs, lower absenteeism, and higher employee satisfaction.

A successful wellness program goes beyond just gym memberships. It should address physical, mental, and financial wellness holistically. This includes preventive healthcare services, mental health support, stress management resources, and financial planning assistance.

The key to program success is personalization and accessibility. Not every employee has the same wellness needs or preferences. Some might benefit from on-site fitness classes, while others prefer mental health apps or financial counseling services.

Regular assessment and feedback are crucial for program improvement. Survey employees regularly to understand what''s working, what isn''t, and what additional support they need. Use this data to continuously refine and expand your wellness offerings.',
    3,
    3,
    'published',
    '2024-01-05 09:15:00+00',
    10,
    'Building a Comprehensive Employee Wellness Program | Onesto',
    'Create effective employee wellness programs that improve productivity, reduce costs, and boost morale with our complete guide.',
    'employee wellness, workplace wellness, health programs, employee benefits, wellness initiatives'
);

-- Insert blog post tags relationships
INSERT INTO blog_post_tags (blog_post_id, tag_id) VALUES
(1, 1), (1, 3), (1, 4), (1, 6),
(2, 1), (2, 3), (2, 6), (2, 9),
(3, 1), (3, 5), (3, 7), (3, 10);
