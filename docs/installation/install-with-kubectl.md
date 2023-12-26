# Install KubeFin with kubectl

## Prerequisites

Before installing KubeFin, please ensure that the metrics-server is running. If it is not, please execute the following command:
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

## Visit KubeFin Dashboard
Once your KubeFin has been installed, wait for the pod to be ready and port forward with:
```sh
kubectl port-forward -nkubefin-system svc/kubefin-cost-analyzer-service --address='0.0.0.0' 8080 3000
```

To verify that the dashboard and server are running, you may access the KubeFin dashboard at [http://localhost:3000](http://localhost:3000).
