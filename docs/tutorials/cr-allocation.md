---
title: View CustomResource resource/cost allocation
---


## Before starting

Please confirm that KubeFin is installed in your cluster. If it is not, refer to the [Install KubeFin with kubectl](../install.md).

## View Knative Service resource/cost allocation

KubeFin utilizes the following built-in CustomAllocationConfiguration to extract the appropriate pod label selectors.

```yaml
apiVersion: insight.kubefin.dev/v1alpha1
kind: CustomAllocationConfiguration
metadata:
  name: knative
spec:
  workloadsAllocation:
  - workloadTypeAlias: ksvc
    target:
      apiVersion: serving.knative.dev/v1
      kind: Service
    podLabelSelectorExtract:
      # lua script
      script: |
        function ExtractPodLabelSelector (observedObj)
          labelSelector = {}
          labelSelector["serving.knative.dev/service"] = observedObj.metadata.name
          labelSelector["serving.knative.dev/serviceUID"] = observedObj.metadata.uid
          return labelSelector
        end
```

This lua script parses the `metadata.name` and `metadata.uid` fields of Knative services as a label selector to locate the corresponding pods and subsequently computes their resources and costs.

After deploying KubeFin in a cluster with Knative services and initiating the appropriate port forwarding, you can observe resource and cost allocation for KSVC in the dashboard or through the API, as shown below:

```sh
$ curl  http://127.0.0.1:8080/api/v1/costs/clusters/446a4a30-eab8-4c3b-a110-67a6244df058/workload?aggregateBy=ksvc | jq .
{
  "clusterId": "446a4a30-eab8-4c3b-a110-67a6244df058",
  "items": [
    {
      "namespace": "default",
      "workloadName": "hello",
      "workloadType": "ksvc",
      "costList": [
        {
          "timestamp": 1699779600,
          "podCount": 0.125,
          "cpuCoreRequest": 0.065625,
          "cpuCoreUsage": 5.003371666666667e-05,
          "ramGiBRequest": 0.015625,
          "ramGiBUsage": 0.00044600168863932293,
          "totalCost": 0.0055625
        }
      ]
    }
  ]
}
```
## View argo workflow resource/cost allocation

KubeFin utilizes the following built-in CustomAllocationConfiguration to extract the appropriate pod label selectors.
```yaml
apiVersion: insight.kubefin.dev/v1alpha1
kind: CustomAllocationConfiguration
metadata:
  name: argo-workflow
spec:
  workloadsAllocation:
  - workloadTypeAlias: argo-wf
    target:
      apiVersion: argoproj.io/v1alpha1
      kind: Workflow
    podLabelSelectorExtract:
      # lua script
      script: |
        function ExtractPodLabelSelector (observedObj)
          labelSelector = {}
          labelSelector["workflows.argoproj.io/workflow"] = observedObj.metadata.name
          return labelSelector
        end
```

This lua script parses the `metadata.name` field of argo workflow as a label selector to locate the corresponding pods and subsequently computes their resources and costs.

After deploying KubeFin in a cluster with argo workflow and initiating the appropriate port forwarding, you can observe resource and cost allocation for argo workflow in the dashboard or through the API, as shown below:

```sh
$ curl  http://127.0.0.1:8080/api/v1/costs/clusters/446a4a30-eab8-4c3b-a110-67a6244df058/workload?aggregateBy=argo-wf | jq .
{
  "clusterId": "446a4a30-eab8-4c3b-a110-67a6244df058",
  "items": [
    {
      "namespace": "default",
      "workloadName": "hello-world-llrjq",
      "workloadType": "argo-wf",
      "costList": [
          {
              "timestamp": 1703473489,
              "podCount": 0.008928571428571428,
              "cpuCoreRequest": 0.0008928571428571429,
              "ramGiBRequest": 0.0017438616071428572,
              "totalCost": 0.003720703125
          }
      ]
    },
  ]
}
```
