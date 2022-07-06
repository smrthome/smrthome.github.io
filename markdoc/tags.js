import { Tag } from '@markdoc/markdoc';
import { Callout } from '@/components/Callout'
import { LinkGrid } from '@/components/LinkGrid'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'definition-list': { 
    render: ({children}) => (<dl className='sm:divide-y sm:divide-gray-200'>{children}</dl>)
  },
  definition: {
    attributes: {
      term: { type: String },
    },
    render: ({ term, children }) => (
      <div className="py-4 sm:py-5 sm:flex sm:px-6 divide-y">
        <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">{term}</dt>
        <dd className="mt-1 pl-4 text-sm sm:mt-0 sm:col-span-2">{children}</dd>
      </div>
    )
  },
  'sup': { render: 'sup'},
  'link-grid': {
    render: LinkGrid,
  },
  'link-grid-link': {
    selfClosing: true,
    render: LinkGrid.Link,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
