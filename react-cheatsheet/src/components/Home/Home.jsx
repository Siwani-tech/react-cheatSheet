import {useState} from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './home.css'


const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  
  return (
    <>
     <div className="code-block-container">
      <div className="code-block">
    <SyntaxHighlighter language={language} style={darcula}  wrapLines={true} customStyle={{ borderRadius: '5px', padding: '10px' }} className="code-block">
      {value}
    </SyntaxHighlighter>
    </div>
    <button className="copy-button" onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      </div>
    </>
    
  );
};

function Home() {
  const markdownContent = `
# **Install React**

To get started with React, you need to have Node.js installed on your system.

1. **Create a New React App**: Open your terminal or command prompt and run the following command to create a new React app:

\`\`\`bash
npx create-react-app my-react-app
\`\`\`

Replace \`my-react-app\` with the name you want to give your React project.

2. **Navigate to Your Project**: Change directory to the newly created React app:

\`\`\`bash
cd my-react-app
\`\`\`

3. **Start the Development Server**: Run the following command to start the development server:

\`\`\`bash
npm start
\`\`\`

This will open your React app in your default web browser.

Enjoy coding with React!
`;

  return (
    <div className="home">
      <Markdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} {...props} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        className="markdown-content w-1/2 p-4 mx-auto "
      >
        {markdownContent}
      </Markdown>
    </div>
  );
}

export default Home;
