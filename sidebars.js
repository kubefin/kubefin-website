const { Component } = require('react');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'getting-started/introduction',
        },
        {
          type: 'category',
          collapsed: true,
          label: 'Installation',
          link: {
            type: 'doc',
            id: 'install',
          },
          items: [
            {
              type: 'doc',
              label: 'kubectl',
              id: 'installation/kubectl',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Core Concepts',
      items: [
        {
          type: 'doc',
          label: 'CustomAllocationConfiguration',
          id: 'concepts/customallocationconfiguration',
        },
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          label: 'View CustomResource Allocation',
          id: 'tutorials/cr-allocation',
        },
      ],
    },
    'roadmap/README',
  ],
};
