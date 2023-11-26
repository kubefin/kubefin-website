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
              label: 'Install KubeFin with kubectl',
              id: 'installation/install-with-kubectl',
            },
            {
              type: 'doc',
              label: 'Install KubeFin within multiple clusters',
              id: 'installation/multi-cluster-installation',
            }
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
    {
      type: 'category',
      collapsed: true,
      label: 'Integration',
      items: [
        {
          type: 'doc',
          label: "Integration with Prometheus",
          id: 'integration/integration-with-prometheus',
        },
      ]
    },
    'roadmap/README',
  ],
};
