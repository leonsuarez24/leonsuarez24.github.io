---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

A single question runs through most of my work: **when a measurement system cannot see everything, how do you decide what to measure and how to recover the rest?**

That question has two halves. The first is a *design* problem — choosing the coded aperture, phase mask or illumination pattern, subject to what the hardware can physically build. The second is an *inversion* problem — recovering a signal from measurements that are undersampled, noisy, and mapped through an operator with a large null space. My research treats these as one joint problem, and the four threads below are the angles I have attacked it from.

Designing the encoder by distillation
======

An optical encoder that is easy to optimize is usually impossible to build. Binary coded apertures, fixed light-throughput budgets, single-snapshot acquisition — every real constraint turns a well-behaved design problem into a non-convex one that gradient descent solves badly.

My main line of work reframes this as **knowledge distillation**. Train an *unconstrained teacher* system that is free to use an ideal sensing operator; then use it to supervise a *constrained student* whose encoder obeys the physical limits. This separates what a good encoder should accomplish from what the fabrication process allows, and the student lands near the teacher's performance instead of in a poor local minimum.

I introduced the idea for [highly constrained coded apertures](/publication/2024-10-27-highly-constrained-coded-aperture-knowledge-distillation) and developed it into a general framework in [IEEE Transactions on Computational Imaging](/publication/2025-09-22-distilling-knowledge-computational-imaging-systems). The same teacher–student argument turns out to be surprisingly portable, and we have since applied it across three other constraint types: reducing a multi-snapshot phase retrieval system to [a single coded snapshot](/publication/2025-09-16-single-snapshot-distillation-phase-coded-mask), classifying [directly from single-pixel measurements](/publication/2025-08-20-knowledge-distillation-single-pixel-imaging-classification) without ever forming an image, and absorbing calibration error when the [sensing operator is inexact](/publication/2025-04-06-learning-reconstruct-inexact-sensing-operator-knowledge-distillation).

Making inverse problems better conditioned
======

Even with a good encoder, the sensing matrix is typically ill-conditioned, and that conditioning — not the choice of network — is often what limits reconstruction.

Rather than accept the operator as given, this thread reshapes the *geometry* of the optimization problem. One approach learns a **preconditioner** by distillation, so that a student restricted to the feasible sensing matrix takes gradient steps that behave like a teacher's better-conditioned ones: first as [deep distillation gradient preconditioning](/publication/2025-12-12-deep-distillation-gradient-preconditioning), then generalized in [DIPA](/publication/2026-05-14-dipa-distilled-preconditioned-algorithms) into linear (interpretable) and non-linear (scalable) variants validated on MRI, compressed sensing and super-resolution.

A second approach changes the problem gradually instead of the operator directly: [UTOPY](/publication/2025-12-13-utopy-unrolling-algorithm-learning-fidelity-homotopy) puts a homotopy on the fidelity term, so an unrolled network is trained on an easy surrogate that is continuously deformed into the hard problem — a curriculum built into the objective.

A third attacks the null space itself. Range–null-space decompositions keep the measured component exact and let a network hallucinate only the unmeasured one, but the classical decomposition is linear and images are not. [NPN](/publication/2025-12-01-npn-non-linear-projections-null-space), published at NeurIPS 2025, learns a **non-linear** projection instead, preserving exact data consistency while giving the prior far more room to work.

Generative priors that respect the measurements
======

Diffusion models are powerful image priors and unreliable reconstruction operators: left to themselves they produce beautiful images that do not match the data. The problem is how to bind a generative prior to a physical measurement without either one overwhelming the other.

[DICE](/publication/2025-12-14-dice-diffusion-consensus-equilibrium-sparse-view-ct) handles this for sparse-view CT by posing reconstruction as a **consensus equilibrium** between two agents — the CT forward model and a pretrained diffusion prior — and solving for a fixed point they both agree on, rather than plugging the denoiser into a fixed iteration and hoping the trajectory stays consistent.

A complementary idea is to enrich what the prior is conditioned on. Augmenting in the *measurement* domain rather than the image domain keeps every augmented sample physically valid, which regularizes [compressive imaging recovery](/publication/2025-04-08-improving-compressive-imaging-recovery-measurement-augmentation) and, when fed to a [conditional diffusion model](/publication/2025-04-07-compressive-imaging-conditional-diffusion-augmented-measurements), reduces the ambiguity that heavy undersampling creates.

Imaging the subsurface
======

Geophysics is where these methods meet field data, and it is the part of my research most connected to my civil engineering background. The sensing operators here are dictated by geology and acquisition logistics rather than by optics, but the mathematics is the same: sparse, irregular, physically constrained measurements of something you cannot observe directly.

In seismic imaging, missing traces from irregular acquisition propagate through the entire processing workflow. Supervised interpolation networks overfit the survey they were trained on, so we introduced a [GAN-supervised training scheme](/publication/2024-07-29-gan-supervised-seismic-data-reconstruction) that generalizes to surveys never seen during training — published in IEEE Transactions on Geoscience and Remote Sensing.

More recently I have worked on **gravimetric inversion**: recovering 3D subsurface density contrasts from point gravity measurements, an inversion that is both non-unique and biased towards placing anomalies near the surface. We represent the density field as an implicit neural representation — a continuous coordinate network rather than a voxel grid — and give it a [depth-aware prior](/publication/2026-08-09-depth-aware-inr-priors-3d-gravity-inversion) that supplies the depth sensitivity the gravity operator lacks. This work is validated on field data from the **Cerro Machín volcano** and carried out as part of UIS Project 8091.

Software
======

Code for several of these projects is available on [GitHub](https://github.com/leonsuarez24):

* [**DICE**](https://github.com/leonsuarez24/DICE) — diffusion consensus equilibrium for sparse-view CT reconstruction
* [**DKDCIS**](https://github.com/leonsuarez24/DKDCIS) — distilling knowledge for designing computational imaging systems
* [**Depth-gravity-inversion**](https://github.com/leonsuarez24/Depth-gravity-inversion) — depth-aware implicit neural representations for 3D gravity inversion
* [**FIRENET**](https://github.com/leonsuarez24/FIRENET) — integrated platform for forest fire management using geospatial technologies and AI
