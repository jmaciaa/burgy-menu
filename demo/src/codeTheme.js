// @flow
// Converted automatically using ./tools/themeFromVsCode

var theme = {
  plain: {
    color: '#fcfcfa',
    backgroundColor: '#2d2a2e',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'rgb(255, 216, 102)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(147, 146, 147)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#ff6188',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'rgb(171, 157, 242)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'rgb(120, 220, 232)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'rgb(169, 220, 118)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#ff6188', // paint red
      },
    },
  ],
};

module.exports = theme;
