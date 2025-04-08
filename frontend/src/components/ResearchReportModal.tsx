import { X } from "lucide-react"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Highlight, themes } from "prism-react-renderer"

interface ResearchReportModalProps {
  riskId: string
  isOpen: boolean
  onClose: () => void
  isPrompt?: boolean
}

export default function ResearchReportModal({ riskId, isOpen, onClose, isPrompt = false }: ResearchReportModalProps) {
  const [reportContent, setReportContent] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState("Research Report")

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      
      // Load content based on type
      const path = isPrompt ? '/reports/research-prompt.md' : `/reports/${riskId}.md`
      const titleText = isPrompt 
        ? "Research Methodology Prompt" 
        : `Research Report: ${riskId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`
      
      setTitle(titleText)
      
      fetch(path)
        .then(response => {
          if (!response.ok) {
            throw new Error('Content not found')
          }
          return response.text()
        })
        .then(content => {
          setReportContent(content)
          setIsLoading(false)
        })
        .catch(error => {
          console.error("Failed to load content:", error)
          setReportContent(`# ${isPrompt ? 'Research Prompt' : 'Report'} Not Available\n\nThe requested content could not be loaded.`)
          setIsLoading(false)
        })
    }
  }, [riskId, isOpen, isPrompt])

  useEffect(() => {
    // Reset state when modal closes
    if (!isOpen) {
      setTimeout(() => {
        setReportContent("")
        setIsLoading(true)
      }, 300)
    }
  }, [isOpen])

  if (!isOpen) return null

  // Handle background click to close modal
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <CodeBlock
                        language={match[1]}
                        code={String(children).replace(/\n$/, '')}
                      />
                    ) : (
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                        {children}
                      </code>
                    )
                  },
                  a({node, className, children, ...props}) {
                    return (
                      <a 
                        className="bg-yellow-50 underline text-blue-600 hover:text-blue-800 hover:bg-yellow-100 transition-colors px-0.5 rounded" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        {...props}
                      >
                        {children}
                      </a>
                    )
                  },
                  h1({node, className, children, ...props}) {
                    return <h1 className="text-2xl font-bold mt-6 mb-4" {...props}>{children}</h1>
                  },
                  h2({node, className, children, ...props}) {
                    return <h2 className="text-xl font-bold mt-5 mb-3" {...props}>{children}</h2>
                  },
                  h3({node, className, children, ...props}) {
                    return <h3 className="text-lg font-bold mt-4 mb-2" {...props}>{children}</h3>
                  },
                  p({node, className, children, ...props}) {
                    return <p className="my-3" {...props}>{children}</p>
                  },
                  ul({node, className, children, ...props}) {
                    return <ul className="list-disc pl-6 my-3" {...props}>{children}</ul>
                  },
                  ol({node, className, children, ...props}) {
                    return <ol className="list-decimal pl-6 my-3" {...props}>{children}</ol>
                  },
                  li({node, className, children, ...props}) {
                    return <li className="my-1" {...props}>{children}</li>
                  },
                  blockquote({node, className, children, ...props}) {
                    return <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props}>{children}</blockquote>
                  },
                  strong({node, className, children, ...props}) {
                    return <strong className="font-bold" {...props}>{children}</strong>
                  },
                  em({node, className, children, ...props}) {
                    return <em className="italic" {...props}>{children}</em>
                  },
                  table({node, className, children, ...props}) {
                    return (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full divide-y divide-gray-300" {...props}>{children}</table>
                      </div>
                    )
                  },
                  th({node, className, children, ...props}) {
                    return <th className="px-3 py-2 bg-gray-50 text-left text-sm font-semibold text-gray-900" {...props}>{children}</th>
                  },
                  td({node, className, children, ...props}) {
                    return <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500 border-t border-gray-200" {...props}>{children}</td>
                  }
                }}
              >
                {reportContent}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Custom CodeBlock component using prism-react-renderer
const CodeBlock = ({ language, code }: { language: string, code: string }) => {
  return (
    <Highlight
      code={code}
      language={language as any}
      theme={themes.palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 rounded-md overflow-auto`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
} 