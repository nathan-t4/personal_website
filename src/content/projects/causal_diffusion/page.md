---
title: "Causal Diffusion Guidance"
year: "2025"
type: "Generative AI"
technologies: ["Research", "Generative AI", "Python", "PyTorch"]
demo: "#"
source: "#"
description: "Working towards diffusion models capable of causal counterfactual reasoning."
active: true
---
*work in progress*

# Abstract
We propose Causal Diffusion Guidance (CDG), a diffusion-based framework for generating counterfactual samples from known structural causal models (SCMs). Existing diffusion models excel at generating high-fidelity images conditioned on text or class labels but overlook the causal structure behind data generation. We introduce a conditional score estimator parameterized by intervention variables and causal parents, and guide the reverse diffusion process toward the desired interventional distribution. Unlike prior work limited to bi-variate causal models, our method generalizes to arbitrary causal graphs and intervention sets. Using causal image datasets, we demonstrate the ability to generate high-quality, causally consistent counterfactual samples. 

## Proof of Concept

In the following, we trained a DDPM [1] on the Morpho-MNIST dataset [2]. Given a target intervention, the causal guidance leverages classifier-free diffusion guidance [2] to guide samples to the intervention distribution.

For example, the Morpho-MNIST dataset [2] has the following causal diagram:

![original](/projects/causal_diffusion/morpho_mnist_causal_diagram.png)

A random sample from the dataset gives:
![original](/projects/causal_diffusion/original.png)

Counterfactual reasoning [4] studies the question: How will the observations (the image samples) change if we varied the underlying causal variables (e.g. text width)?

By performing the intervention *do(intensity = 250)* on the same sample, the causal diffusion model gives:
![intensity250](/projects/causal_diffusion/intensity_250.png)

We can also intervene on multiple variables. For example, *do(intensity = 120, thickness = 6)* on the original sample gives:
![intensity120thickness6](/projects/causal_diffusion/intensity_120_thickness_6.png)

[1]: Ho, Jonathan, Ajay Jain, and Pieter Abbeel. "Denoising diffusion probabilistic models." Advances in neural information processing systems 33 (2020): 6840-6851.

[2]: Daniel C Castro, Jeremy Tan, Bernhard Kainz, Ender Konukoglu, and Ben Glocker. Morpho-mnist: Quantitative assessment and diagnostics for representation learning. Journal of Machine Learning Research, 20(178):1–29, 2019.

[3]: Ho, Jonathan, and Tim Salimans. "Classifier-free diffusion guidance." arXiv preprint arXiv:2207.12598 (2022).

[4]: Judea Pearl. Causality. Cambridge university press, 2009.
