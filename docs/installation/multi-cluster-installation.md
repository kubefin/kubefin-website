---
title: Install KubeFin for multiple clusters
---

## Introduction

KubeFin delivers a powerful visualization of resource and cost allocation for managing multiple Kubernetes clusters. It distills complex data across infrastructures into manageable insights, thereby optimizing your cluster resources and reducing expenses.

Understand two key roles in KubeFin's multi-cluster setup:
* Primary Cluster: Hosts the kubefin-cost-analyzer and the Time Series Database (TSDB).
* Secondary Cluster: Contains the kubefin-agent which forwards metrics to the Primary Cluster’s TSDB.

Below is a streamlined guide on deploying kubefin-agent on secondary clusters to enable multi-cluster resource and cost monitoring.

## Deploying KubeFin on primary cluster

To set up KubeFin on the primary cluster, visit:
- [Install KubeFin with kubectl](../install.md#installation-method): Install KubeFin with one kubectl command.

## Preparing necessary manifest for secondary clusters

Retrieve the necessary manifests for the secondary clusters from the links below:
```sh
wget https://github.com/kubefin/kubefin/releases/latest/download/kubefin-crd.yaml

wget https://github.com/kubefin/kubefin/releases/latest/download/kubefin-secondary.yaml
```

## Pointing to the TSDB

The component `kubefin-agent` will collect metrics and push them to the primary clusters TSDB. So please modify the endpoint in `kubefin-secondary.yaml` to point kubefin-agent to the primary cluster's TSDB:
```yaml
      ...
      # Substitute 127.0.0.1 with the TSDB adderss in primary cluster
      prometheusremotewrite:
        namespace: ""
        endpoint: "http://127.0.0.1/api/v1/push"
      ...
```

For example:
* Use a `LoadBalancer` service for the TSDB in public cloud environments, and set the LoadBalancer’s public IP as the TSDB address.
* For interconnected private clouds, use a `NodePort` service, specifying the primary cluster node's IP address as the TSDB address.

## Setting the cluster name

By default, the cluster name is set to cluster-1. To alter this, modify `kubefin-secondary.yaml`:
```yaml
          ...
          env:
            # If configure as default, it will detect the cloud provider automatically
            - name: CLOUD_PROVIDER
              value: "auto"
            # If the name is defined, we will use this, if not we will try to get.
            - name: CLUSTER_NAME
              value: "cluster-1"
            ...
```

## Launching `kubefin-agent` on secondary clusters

Once configurations are in place, apply the manifests on your secondary clusters:
```sh
kubectl apply -f kubefin-crd.yaml

kubectl apply -f kubefin-secondary.yaml
```

## Accessing the dashboard

Post-installation, access the unified dashboard for a holistic view of your clusters’ resource and cost allocation by running the following command with the primary cluster `KUBECONFIG`:

```sh
kubectl port-forward -nkubefin svc/kubefin-cost-analyzer-service --address='0.0.0.0' 8080 3000
```

Then, navigate to [http://localhost:3000](http://localhost:3000) to access the KubeFin dashboard.
