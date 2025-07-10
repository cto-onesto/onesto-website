'use client';

import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

export default function BlogPostContent({ content }: { content: string }) {
  const [processedContent, setProcessedContent] = useState('');

  useEffect(() => {
    const processContent = async () => {
      const result = await remark().use(html).process(content);
      setProcessedContent(result.toString());
    };
    processContent();
  }, [content]);

  return (
    <div
      className="prose mt-8 max-w-none"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
