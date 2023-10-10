import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const WhatIs = () => (
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col col--6">
                    <h1><Translate>What is KubeFin?</Translate></h1>
                    <p className="hero__subtitle">
                        <small>
                            <Translate>
                            Kubernetes + FinOps = KubeFin! It is an One-Stop platform for Kubernetes that enables you to efficiently gain insights and reduce costs for your Kubernetes clusters.
                            </Translate>
                            <br />
                            <br />
                            <Translate>
                                With KubeFin, you can
                            </Translate><strong><Translate> effortlessly analyze and minimize your cloud expenses, ensuring optimal utilization of resources.</Translate></strong>
                        </small>
                    </p>
                </div>
                <div className="col">
                    <img
                        className="image"
                        src={useBaseUrl("img/what-is-kubefin.png")}
                        align="right"
                        alt="what is kubefin"
                    />
                </div>
            </div>
        </div>
    </div >
);

export default WhatIs