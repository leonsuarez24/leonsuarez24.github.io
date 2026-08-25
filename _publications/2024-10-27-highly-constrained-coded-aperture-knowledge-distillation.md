---
title: "Highly Constrained Coded Aperture Imaging Systems Design Via a Knowledge Distillation Approach"
collection: publications
category: conferences
permalink: /publication/2024-10-27-highly-constrained-coded-aperture-knowledge-distillation
excerpt: 'The first formulation of coded aperture design as knowledge distillation from an unconstrained teacher optical system.'
date: 2024-10-27
venue: '2024 IEEE International Conference on Image Processing (ICIP), Abu Dhabi, United Arab Emirates'
paperurl: 'https://arxiv.org/abs/2406.17970'
citation: 'L. Suarez-Rodriguez, R. Jacome and H. Arguello. (2024). "Highly Constrained Coded Aperture Imaging Systems Design Via a Knowledge Distillation Approach." <i>2024 IEEE International Conference on Image Processing (ICIP)</i>, pp. 3993-3999. doi: 10.1109/ICIP51287.2024.10648100'
---

Computational optical imaging systems acquire high-dimensional signals through optical coding elements. When those elements are *highly constrained* — binary coded apertures, fixed transmittance budgets — the end-to-end design problem becomes badly behaved and gradient-based optimization stalls in poor solutions.

This paper introduces the idea that the constrained system can be trained as the **student** of an unconstrained **teacher** system. The teacher, free of physical restrictions, is optimized first; its reconstruction behaviour is then distilled into the constrained design. This decouples "what a good encoder should do" from "what the hardware can actually build".

Presented at ICIP 2024 in Abu Dhabi. The journal extension appeared in IEEE Transactions on Computational Imaging.

---

[DOI](https://doi.org/10.1109/ICIP51287.2024.10648100) · [arXiv:2406.17970](https://arxiv.org/abs/2406.17970) · [Code](https://github.com/leonsuarez24/DKDCIS)
