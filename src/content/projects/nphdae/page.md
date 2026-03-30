---
title: "Neural Port-Hamiltonian Differential Algebraic Equations"
category: "research"
year: "2024"
type: "Applied Machine Learning"
technologies: ["Research", "Physics-Informed Machine Learning", "Python", "JAX"]
demo: "https://arxiv.org/pdf/2412.11215"
source: "https://github.com/nathan-t4/NPHDAE"
description: "Developed compositional learning algorithms for coupled dynamical systems."
image: "/projects/nphdae/architecture.png"
active: true
---
*Accepted to CDC 2025.*

## Abstract

We develop compositional learning algorithms for coupled dynamical systems. While deep learning has proven effective at modeling complex relationships from data, compositional couplings between system components typically introduce algebraic constraints on state variables, posing challenges to many existing data-driven approaches to modeling dynamical systems. Towards developing deep learning models for constrained dynamical systems, we introduce neural portHamiltonian differential algebraic equations (N-PHDAEs), which use neural networks to parametrize unknown terms in both the differential and algebraic components of a port-Hamiltonian DAE. To train these models, we propose an algorithm that uses automatic differentiation to perform index reduction, automatically transforming the neural DAE into an equivalent system of neural ordinary differential equations (N-ODEs), for which established model inference and backpropagation methods exist. The proposed compositional modeling framework and learning algorithms may be applied broadly to learn control-oriented models of dynamical systems in a variety of application areas, however, in this work, we focus on their application to the modeling of electrical networks. Experiments simulating the dynamics of nonlinear circuits exemplify the benefits of our approach: the proposed N-PHDAE model achieves an order of magnitude improvement in prediction accuracy and constraint satisfaction when compared to a baseline N-ODE over long prediction time horizons. We also validate the compositional capabilities of our approach through experiments on a simulated D.C. microgrid: we train individual N-PHDAE models for separate grid components, before coupling them to accurately predict the behavior of larger-scale networks.