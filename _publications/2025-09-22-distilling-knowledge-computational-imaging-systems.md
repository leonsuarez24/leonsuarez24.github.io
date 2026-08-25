---
title: "Distilling Knowledge for Designing Computational Imaging Systems"
collection: publications
category: manuscripts
permalink: /publication/2025-09-22-distilling-knowledge-computational-imaging-systems
excerpt: 'A knowledge-distillation framework that lets a physically unconstrained teacher system guide the design of a feasible, hardware-realizable optical encoder.'
date: 2025-09-22
venue: 'IEEE Transactions on Computational Imaging, vol. 11, pp. 1306-1319'
paperurl: 'https://arxiv.org/abs/2501.17898'
citation: 'L. Suarez-Rodriguez, R. Jacome and H. Arguello. (2025). "Distilling Knowledge for Designing Computational Imaging Systems." <i>IEEE Transactions on Computational Imaging</i>, vol. 11, pp. 1306-1319. doi: 10.1109/TCI.2025.3612849'
---

Designing the physical encoder is crucial for accurate image reconstruction in computational imaging (CI) systems. In practice, however, the encoder must satisfy hard physical constraints — binary coded apertures, limited light throughput, restricted phase modulation — and optimizing directly under those constraints leads to poor local minima.

This work casts the problem as knowledge distillation. An *unconstrained* teacher CI system, which is free to use an ideal sensing operator, is trained first and then used to supervise a *constrained* student system that respects the real optical limitations. The distillation signal transfers both the reconstruction behaviour and the intermediate feature representations of the teacher, so the student converges to an encoder that is physically implementable yet performs close to the ideal one.

The framework is validated on several computational imaging modalities, and it extends the earlier ICIP formulation into a general recipe for constrained optical design.

---

[DOI](https://doi.org/10.1109/TCI.2025.3612849) · [arXiv:2501.17898](https://arxiv.org/abs/2501.17898) · [Code](https://github.com/leonsuarez24/DKDCIS)
