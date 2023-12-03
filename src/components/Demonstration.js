import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Demonstration = () => (
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="col col--6">
                    <video width="90%" controls align="center" className="video" >
                        <source src={useBaseUrl("img/kubefin-demo-video.mp4")}  align="center"/>
                    </video>
                </div>
                <div className="col">
                    <h1><Translate>Demonstration of KubeFin</Translate></h1>
                    <p className="hero__subtitle">
                        <small>
                            You can install KubeFin in your cluster in just
                            <strong>
                                <Translate> two simple steps</Translate>
                            </strong>, enabling you to
                            <strong>
                                <Translate> monitor resource and cost allocation across multiple dimensions.</Translate>
                            </strong>
                            <br />
                            <br />
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div >
);

export default Demonstration
