import Markdoc from '@markdoc/markdoc';
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
  'definition-list': { render: 'dl' },
  definition: {
    attributes: {
      term: { type: String },
    },
    transform(node, config) {
      var children = node.transformChildren(config);

      return [
        new Markdoc.Tag('dt', {}, node.attributes.term),
        new Markdoc.Tag('dd', {}, children[0].children),
      ];
    },
  },
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
