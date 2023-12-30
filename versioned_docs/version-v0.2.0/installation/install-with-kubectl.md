---
title: Install KubeFin with kubectl
---

## Prerequisites

Before installing KubeFin, please ensure the metrics API is functioning properly. If it is not, you can execute the following command to install the metrics server:
```sh
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

## Install KubeFin

1. Install the required custom resources by running the command:
   ```sh
   kubectl apply -f https://github.com/kubefin/kubefin/releases/latest/download/kubefin-crd.yaml
   ```

2. Install the components of KubeFin by running the command:
   ```sh
   kubectl apply -f https://github.com/kubefin/kubefin/releases/latest/download/kubefin-primary.yaml
   ```

## Access the KubeFin Dashboard

After installing KubeFin, wait for the pod to be ready, then establish a port-forwarding session with the following command:
```sh
kubectl port-forward -nkubefin-system svc/kubefin-cost-analyzer-service --address='0.0.0.0' 8080 3000
```

To verify that the dashboard and server are running, you may access the KubeFin dashboard at [http://localhost:3000](http://localhost:3000).
