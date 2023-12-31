---
title: Install KubeFin with kubectl
---

## Install KubeFin with kubectl

Before installing KubeFin, please ensure that the metrics-server is running. If it is not, please execute the following command:
```sh
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

To install the latest KubeFin release in primary cluster from the official manifest, execute the following command.
```sh
kubectl apply -f https://github.com/kubefin/kubefin/releases/latest/download/kubefin.yaml
```

Once your KubeFin has been installed, wait for the pod to be ready and port forward with:
```sh
kubectl port-forward -nkubefin svc/kubefin-cost-analyzer-service 8080 3000
```

To verify that the dashboard and server are running, you may access the KubeFin dashboard at [http://localhost:3000](http://localhost:3000).
