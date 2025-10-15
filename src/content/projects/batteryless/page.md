---
title: "Human Activity Recognition using Batteryless Sensors"
year: "2025"
type: "Applied Machine Learning"
technologies: ["Research", "Python", "PyTorch"]
demo: "#"
source: "#"
description: "Developed a low-energy and fast-inference human activity recognition algorithm for batteryless sensors."
active: true
---

## Abstract

Batteryless sensors enhance wearables by eliminating the need to recharge or replace batteries. However, these sensors only collect data once they harvest sufficient energy from the environment. This results in sparse and asynchronous data streams which pose challenges for time series classification, where most deep learning models expect synchronized and continuous data streams. Therefore, we view batteryless sensors as optimizable data sources within an edge AI system, where both data acquisition and classification are learned. As a step towards integrating machine learning with batteryless sensors, we study human activity recognition (HAR) using accelerometers that harvest energy from human motion. We show that the HAR classification error in this batteryless time-series task can be decomposed into two components: passive and active errors. Building on this insight, we introduce a novel method to learn both the data acquisition policy and classification model to explicitly minimize the passive and active errors which result from sparse and asynchronous data. We empirically validate our approach and show a 15–50\% relative improvement compared to baseline approaches across multiple datasets and architectures. *Code will be available upon acceptance.*