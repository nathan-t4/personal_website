---
title: "Geometry of Diffusion Guidance"
description: "Exploratory post on the geometric properties of diffusion models."
date: "2025-08-17"
category: "General"
readTime: "3 min read"
active: false
---

# Why bother understanding the latent space?

I believe understanding the latent space is fundamental to improving the performance of next-generation diffusion (and generally, machine learning) architectures.

For example, image editing is a (perhaps surprisingly) difficult problem for diffusion models today.

I believe the problem lies in:

1. The mapping from text to image is not robust, nor descriptive enough, to understand styling changes (contrastive learning groups by topics only, not by style...)

2. Image editing is not editing, it is regenerating. When we take a base image as the initial context, SOTA methods use the base image to get a seeding noise value, in which the diffusion models starts on **CHECK**. 

3. Incoherencies in latent space. What do directions mean in the latent space? Should these depend on the input (e.g. "cat" vs. "change the background of this image")?

An improved understanding of how the geometry of the latent space of machine learning models affects downstream performance will help us design better model architectures (e.g. better text encoders than CLIP).

# Definitions

We define the latent space of a diffusion model as the manifold defined by $\epsilon_{\theta}(x)$. 

A few key properties of the latent space are that:

- The latent space depends on the timestep $t$, and is thus *dynamic* or time-varying.

- When $t = T$, the latent space is Gaussian noise, and thus isotropic (direction-free). 

# Diffusion models that follow instructions

**What actually is CLIP, and how are diffusion models actually text conditioned? Difference between classifier and classifier-free guidance**

To guide the generated media from diffusion models, we want to give instructions to the diffusion model to limit what media is generated.

In practice, this is achieved by conditioning the diffusion model on a text prompt. A common method is to perform some form of diffusion guidance, which first passes the text prompt through an embedding model (e.g. CLIP, LLM encoders) to get a latent vector representation of the text prompt, which is then fed as an extra input to the diffusion model. This training procedure allows the diffusion model to learn the mapping from text to image.

Which parts of the model affect the geometry of the latent space? 

1. The training data distribution. 
2. The text encoders (e.g. LLM encoders). By freezing the text encoder parameters during training, the diffusion model seeks to align the image latent space with the pretrained text latent space.
3. The noising distribution.


# Common Diffusion Backbones

As U-Nets hit the limits of scaling, recent (2025-2026) SOTA diffusion models have mainly adopted Diffusion-Transformers as the backbone of the diffusion model ($\epsilon_{\theta}(x | c)$).

The choice of backbone is not the focus of this post. Instead, we will focus on quantifying the geometry of diffusion models. The interested reader is encouraged to check out [1] for more details.


# Latent Diffusion Models

diffusion in latent space

# What does the latent space of a diffusion model look like?

Toy 2d spiral example varying the above latent space factors.

**TODO** interactive figure to play around with a toy example?

What is the trajectory of ${x}_{i \in I}$ as $t = T \to t = 0$.

Insight: the output is 2D, but the velocity vector of $x$ depends on many many factors $\epsilon_{\theta}(x)$

# What happens to the latent space of a diffusion model during denoising?

high t -> latent space is smooth (recovering global structure -- why?)

low t -> fine detail emerge (space becomes highly complex -- why?)

# Notes

Describe the difference between unconditioned and conditioned diffusion guidance mathematically

$$ 
H(x) = -\int_{x \in \mathcal{X}} p(x) \log{p(x)} dx
$$

Then geometrically, where conditioning gives subspaces of the output manifold

Then talk about conditioning on multiple variables as intersection, or not?

representation learning -> what does the latent space of diffusion models look like?

information theory tells us that conditioning increases information, mean probabilitiy concentrates -> less deviations possible

$$
H(x, t | c) \leq H(x, t)
$$

The latent space of diffusion models depend on time-step (what does the latent space look like?)


[1]: https://iclr-blogposts.github.io/2026/blog/2026/diffusion-architecture-evolution/?utm_source=chatgpt.com