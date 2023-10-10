---
title: Install KubeFin with kubectl
---

## Supported public cloud

* [Alibaba Cloud](https://www.alibabacloud.com/)

If the public cloud is not listed, KubeFin will calculate the cost with default price configuration. And other public clouds will be supported in the future.

## Install KubeFin with kubectl

KubeFin provides an quite easy way to install KubeFin with kubectl.
```sh
kubectl apply -f https://github.com/kubefin/kubefin/releases/latest/download/kubefin.yaml
```

Once your KubeFin has been installed, wait for the pod to be ready and port forward with:
```sh
kubectl port-forward -nkubefin svc/kubefin-cost-analyzer-service 8080 3000
```

To verify that the dashboard and server are running, you may access the KubeFin dashboard at [http://localhost:3000](http://localhost:3000).
