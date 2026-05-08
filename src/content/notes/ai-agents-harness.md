---
title: "Evaluating AI Agent Harnesses"
description: "An in-progress framework for thinking about and comparing agent harnesses."
date: "2026-04-22"
category: "AI Agents"
readTime: "3 min read"
active: true
---

An AI agent harness is all the extra information and capabilities provided to large language models (LLM) to augment the LLM's ability to complete a task. For example, the harness for a coding agent would include all the tool functions, like the bash and grep commands to search through the code base, memory and context files such as CLAUDE.md, and likewise infrastructure to improve the agent's coding ability (think Claude Code, Cursor, Codex, etc...).

Fundamentally, an LLM is a data-driven, stochastic next-token predictor. Given the context $(x_0, \dots, x_{k-1})$, the LLM samples the the output probability distribution $p_{\theta}(\cdot)$ to obtain the next token $x_k$. 
$$$
x_k \sim p_{\theta}(\cdot | x_0, \dots, x_{k-1})
$$$

It has been emphirically shown that equipping the LLM with additional context and functions helps the LLM produce higher quality and more context-aware answers. One way to understand the positive effect of the harness $\mathcal{H}$ is through the lens of conditioning:
$$$
p_{\theta}(\cdot | x_0, \dots, x_{k-1}, \mathcal{H}) = p_{\theta}(\cdot | x_0, \dots, x_{k-1}, \text{Skills}, \text{MCP}, \text{Tool})
$$$
*(Remember that MCPs, skills, and related harness components are just user-input dependent additional tokens)*

From information theory, we know that conditioning decreases entropy, which implies greater probability concentration. Keeping the coding agents example, the implication is that when you include additional context like code files or agent skills, the LLM output distribution is ideally getting more and more concentrated towards producing high-quality code.  

The implementation of the harness $\mathcal{H}$ directly affects how the LLM output probabilities are concentrated, which is related to the quality of the output. To evaluate the performance of harnesses, we can assign the quality $R \in \mathcal{R}^n$ as a real n-dimensional vector, the quality is a functional (a function of a distribution) of the LLM output $\pi_{p_{\theta}^\mathcal{H}}(y)$ based on the user input prompt $y$.
$$$
R = f(\pi_{p_{\theta}^\mathcal{H}}(y)) = g_{\mathcal{H}}(y)
$$$

In this formulation, a harness $\mathcal{H}_1$ is said to be better than an alternative $\mathcal{H}_2$ over a set of user inputs $\mathcal{Y}$ if the quality distribution of the first harness $p(R_1)$ is more desireable than $p(R_2)$, where:
$$$
p(R_i = N) = \sum_{\forall y \in \mathcal{Y} \colon g_{\mathcal{H}_i}(y) = N} p(y)
$$$

The term "desireable" is up to user definition, but is in general a functional on the quality distribution of the LLM outputs using harness $\mathcal{H}_i$. An example metric for desirable could be the mean, median, or even percentiles. For example, if we choose to evaluate the coding agent harnesses by the mean quality $\mu(R, \mathcal{H}_i)$ (e.g. boolean on whether test cases pass), then $\mathcal{H}_1$ is a better coding harness than $\mathcal{H}_2$ over a set of benchmark coding problems $\mathcal{Y}$ when:
$$$
\mu_{\mathcal{Y}}(R, \mathcal{H}_1) > \mu_{\mathcal{Y}}(R, \mathcal{H}_2)
$$$

The above is a simple framework to reason about how to evaluate agent harnesses. The implementation of an agent harness can greatly impact performance, as demonstrated by coding harness performance comparison by Matt Maher (and tweeted by Edwin from Cursor):

![Tweet comparing coding harnesses](/media/harness_tweet.png)

The question that remains is how can we built better agent harnesses? At a high level, we can only try to modify the base LLM $p_{\theta}$ (fine-tuning) or the harness implementation (e.g. system prompt, retrieval augmentation, exposing tools and MCPs, subagents, and more).

***If this post interests you, please [reach out](https://www.nathantsao.com/contact)!***

[1] https://www.youtube.com/watch?v=it8g45WERAQ

[2] https://x.com/edwinarbus/status/2033625866350334333 