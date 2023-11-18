import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <Translate>Cost insights</Translate>,
    imgUrl: 'img/cost-insights.png',
    description: (
      <p>
        <Translate>
          Easily view the cost overview of multiple clusters from different clouds in one page. Additionally, KubeFin allows you to dive deeper into the cost details of each cluster by analyzing various dimensions such as nodes, workloads, namespaces and etc.
        </Translate>
      </p>
    ),
  },
  {
    title: <Translate>Optimize cost automatically(available soon)</Translate>,
    imgUrl: 'img/optimize-cost-automatically.png',
    description: (
      <p>
        <Translate>
          Once KubeFin is installed in clusters, it will analyze cloud resources usage and do multidimensional cost optimization(CPU/Memory Request right-sizing, EC2 nodes' spec right-sizing and Spot optimization etc) automatically to reduce your cloud cost.
        </Translate>
      </p>
    ),
    reverse: true,
  },
  {
    title: <Translate>Optimize cost continually(available soon)</Translate>,
    imgUrl: 'img/optimize-cost-continually.png',
    description: (
      <p>
        <Translate>
          KubeFin will continuously profile the workloads and categorize workloads within the cluster in detail, enabling each application to be scheduled on the most "appropriate" node. For example, highly fault-tolerant workloads can be scheduled on Spot nodes, and workloads supporting ARM architecture can be scheduled on ARM nodes. Based on the workloads profile, continuous cost optimization will be carried out.
        </Translate>
      </p>
    ),
  },
]

export default features
