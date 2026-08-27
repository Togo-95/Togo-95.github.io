---
layout: post
title: A comprehensive study of epistemic horizons
date: 2026-08-27
inline: false
related_posts: false
---

I am excited to share that a new paper, titled *The View from Within: What Can Embedded Observers (Not) Learn?* has just been made public [on arXiv](https://arxiv.org/pdf/2608.25800).

In this work, Johannes Fankhauser, Gemma De les Coves, and myself follow up on our earlier manuscript on [*Epistemic horizons from deterministic laws: lessons from a nomic toy theory*](https://link.springer.com/article/10.1007/s11229-024-04852-0). We improve and extend the analysis of limitations on learning for embeded observers (i.e. of epistemic horizons) considerably.

Similar to before, we model learning as an interaction between an observer (the subject) and another system (the object). Any correlation between them established by such a physical process can then amount to information learned by the subject about the object.

In particular, we view four distinct assumptions coming together as giving rise to epistemic horizons for such subjects.

<img src="/assets/img/announcement_2/resources-for-learning.png" 
     alt="Aspects of learning in our model"
     style="width: 75%; display: block; margin: 2em auto;">

The physical theory we study is a deliberately simple classical toy model. Each physical system is specified by a phase space, whose elements are the possible ontic states of the system. Intuitively, we can think of each ontic state as specified by a the positions and momenta of n classical particles. In mathematical terms, the phase space is a symplectic vector space. For n classical particles, its dimension is 2n. Dynamical evolutions are given by linear maps that preserve the symplectic structure. We call it the *nomic toy theory*.

A subject is then a physical systems equipped with a specification of its empirical record, which we also refer to as the manifest variable. We distinguish two important classes nomic toy theory. For a *complete* manifest variable, the empirical record is the ontic state itself --- the subject has complete self-knowledge. For a *Poisson* manifest variable, the record only distinguishes n (out of 2n) degrees of freedom of the subject's phase space. Moreover, these degrees of freedom have to be compatible in the sense that their Poisson bracket vanishes. A canonical example is the collection of all positions of the n particles that make up the subject.

Apart from empirical records, subjects also possess additional information, about the ready system that enters the interaction with the object. This information corresponds to the ready state assumption, of which we consider three distinct types here. A *complete* ready state means perfect initial information, that is, the precise inital ontic state of the ready system is known. A *Poisson* ready state is given by the knowledge of n compatible degrees of freedom. Finally, a *trivial* ready state corresponds to no initial information; any initial ontic state of the ready state is allowed.

For example, if the physical systems is a single particle, whose position (and momentum) can each take three different values (0, 1, and 2), we can visualize the ontic state space as a 3x3 grid.
A measurement interaction can be then illustrated as follows.

<img src="/assets/img/announcement_2/measurement.png" 
     alt="Measurement in nomic toy theory"
     style="width: 70%; display: block; margin: 2em auto;">

The manifest variable of the subject is the position (Q) and subject's states with identical records are represented by matching colours. The possible initial ready states are in grey. In particular, the figure depicts a Poisson ready state. Matching colours between the subject and the two instances of the object depict the correlation facilitated by the interaction. Namely, the position of the subject being $0$ (yellow/purple) implies that the initial position of the object is $0$ (yellow) and also that the final momentum of the object is $0$ (purple), and similarly for other colours.

As we can see from the illustration, each measurement interaction facilitates two basic types of learning. The subject may learn about the initial state of the object, which we refer to as *retrodiction*. At the same time, it may obtain information about the final state of the object and thus engage in *prediction*. There is a third type of learning that we highlight, namely learning by *repeatable* measurement. In this case, the retrodicted and predicted information coincides.

For each choice of a type of learning, manifest variable, and ready state, we ask what information can corresponding subjects obtain about objects.
There are three broad kinds of epistemic horizons we find. The epistemic horizon may be (a) *total*, in which case te subject cannot learn anything; (b) *knowledge-balance*, in which case the subject can learn at most n compatible degrees of freedom; or (c) *none*, in which case the subject can learn the precise ontic state of the object. The name for the middle ground case stems from the fact that the knowledge of a subject facing the knowledge-balance epistemic horizon has to conform to the so-called *knowledge-balance principle*. In other words, its knowledge of the object can be described by an epistemic state in [Spekkens' toy theory](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.75.032110). The following figure depicts the set of possible states of the object for a subject subject to each of the three kinds of epistemic horizons.

<img src="/assets/img/announcement_2/EH-pictures.png" 
     alt="Types of epistemic horizons"
     style="width: 50%; display: block; margin: 2em auto;">

Our results can be summarised in the following three tables of epistemic horizons in nomic toy theory, each table corresponding to one type of learning.

<img src="/assets/img/announcement_2/EH-retrodiction.png" 
     alt="Epistemic horizons for retrodiction"
     style="width: 50%; display: block; margin: 2em auto;">

For retrodiction, there is a non-trivial limitation only in the case of restriction on the empirical records and partial (or no) initial information.

<img src="/assets/img/announcement_2/EH-repeatable.png" 
     alt="Epistemic horizons for repeatable measurements"
     style="width: 50%; display: block; margin: 2em auto;">

The situation is quite different for retrodiction under the additional constraint that the measurement be repeatable. The subject can only acquire information repeatably if there is some pre-existing information about the ready system. The main theorem of our work concerns learning by repeatable measurements for subjects with a complete manifest variable and a Poisson ready state. It shows that even subjects with complete self-knowledge can face an epistemic horizon.

<img src="/assets/img/announcement_2/EH-prediction.png" 
     alt="Epistemic horizons for prediction"
     style="width: 50%; display: block; margin: 2em auto;">

For prediction, the situation is similar to repeatability, with the notable exception of the middle entry in the last column. These subjects, can learn the precise final ontic state of the object, or the precise initial ontic state (via retrodiction), but cannot do so simultaneously (via repeatable measurements).

We can also notice a certain asymmetry between knowledge of the past and knowledge of the future: Retrodiction is generally less constrained than prediction. Intuitively, successful prediction requires the learned information to be broadcasted. There must be two copies of it at a single time; in the final state of the object and in the final state of the subject. In causal terms, this relies on correlations generated by common causes. A disturbance of the object can thus act as a resource for prediction, provided that it is a correlated disturbance that simultaneously affects the subject's record.

By contrast, retrodiction does not require the relevant information to be present in two systems at the same time. The correlation is instead between the initial state of the object and the final state of the subject. Retrodiction can therefore be implemented through a direct causal link and the corresponding property may be erased by the interaction.

Even though our analysis is specific to nomic toy theory, we believe that our work provides language and tools to study how the first-person perspective can differ from the third-person perspective more generally, and invites explanations of the inherent uncertainty in quantum theory from the standpoint of embedded observers.
