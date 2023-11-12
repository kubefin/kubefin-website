import React from 'react';

const Integration = () => {
  const integrations = [
    {
        title: 'Kubernetes',
        logo: '/img/logos/k8s.svg',
    },
    {
        title: 'Knative',
        logo: '/img/logos/knative.png',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <h2 className="title">Visualize the Cost and Resource Allocation of Cloud-Native Ecosystems</h2>
        </div>
        <div class="rotating-tools-wrapper container">
            <div class="rotate-tools-wrapper row">
                {integrations.map((group) => {
                    return (
                        <div key={group.title} class="span3">
                            <div class="tool-circle-item">
                                <img src={group.logo} loading="lazy" title={group.title} alt={group.title}/>
                            </div>
                        </div>
                    );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;