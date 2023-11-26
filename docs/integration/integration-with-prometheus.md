---
title: Integration with Prometheus
---

## Introduction

Prometheus is the most widely used Time Series Database (TSDB) in real-world production environments. While KubeFin typically employs mimir as its default TSDB, it can also be integrated with Prometheus.

Below is a streamlined guid on deploying KubeFin with Prometheus.

## Deploying KubeFin in cluster

To set up KubeFin in cluster, visit:
- [Install KubeFin with kubectl](../install.md#installation-method): Install KubeFin with one kubectl command.

## Preparing scrap configuration

Prepare the scrape configuration by creating a file named `kubefin-prometheus-job.yaml` with the following content:
```yaml
extraScrapeConfigs: |
  - job_name: kubefin
    honor_labels: true
    scrape_interval: 15s
    scrape_timeout: 10s
    metrics_path: /metrics
    scheme: http
    dns_sd_configs:
    - names:
      - kubefin-agent-service.kubefin
      type: 'A'
      port: 8080
```

## Installing Prometheus with Scrape Configuration

Deploy Prometheus in your cluster using Helm with the created scrape configuration as follows:
```sh
helm install my-prometheus --repo https://prometheus-community.github.io/helm-charts prometheus \
  --namespace prometheus --create-namespace \
  --set prometheus-pushgateway.enabled=false \
  --set alertmanager.enabled=false \
  --set prometheus-node-exporter.enable=false \
  --set kube-state-metrics.enable=false \
  -f kubefin-prometheus-job.yaml
```

## Configuring the KubeFin Query Endpoint

To configure the query backend, update the KubeFin deployment with the correct Prometheus endpoint:
```sh
kubectl edit deployment -nkubefin kubefin-cost-analyzer
```

Modify the `QUERY_BACKEND_ENDPOINT` environmental variable value to point to your Prometheus server. Add or edit the following section in the deployment manifest:
```yaml
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: kubefin-cost-analyzer
        app.kubernetes.io/component: kubefin-cost-analyzer
        app.kubernetes.io/name: kubefin
        app.kubernetes.io/version: evel
    spec:
      containers:
      - args:
        - --v=6
        env:
        - name: QUERY_BACKEND_ENDPOINT
          value: http://my-prometheus-server.prometheus.svc.cluster.local
```

## Accessing the dashboard

Post-installation, access the unified dashboard for a holistic view of your clusters’ resource and cost allocation by running the following command:
```sh
kubectl port-forward -nkubefin svc/kubefin-cost-analyzer-service --address='0.0.0.0' 8080 3000
```

Then, navigate to [http://localhost:3000](http://localhost:3000) to access the KubeFin dashboard.

## Conclusion

The instructions provided here outline a recommended practice for integrating KubeFin with Prometheus. Note that specific steps may vary depending on your unique environment configuration.



