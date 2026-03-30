---
title: "MetaAgent: Text Instructions to Agentic Workflows"
category: "research"
year: "2025"
type: "AI Agents"
technologies: ["AI Agents", "Generative AI", "Python", "PyTorch"]
demo: "#"
source: "#"
description: "Automatically create agent workflows Python code from text documents using MetaAgent."
image: "/projects/metaagent/workflow.png"
active: true
---

# Abstract
Large language models (LLM) augmented workflows offer promising reasoning capabilities, suitable for automating repetitive and time-consuming tasks within corporations. However, AI workflow development or even exploration can be prohibitively expensive, especially for large corporations with hundreds and thousands of procedures described in text documents. We introduce MetaAgent, an AI workflow that automatically processes text documents into executable AI workflow Python code. MetaAgent systematically reads the input text document, generates the agentic tools required to solve the task, visualizes the workflow as a graph data structure, and outputs a complete synthesized Python agentic workflow code in the LangGraph framework. Our results show that the best MetaAgent outperforms state-of-the-art AI agents on task succession by 30\% on a typical content flagging process for social platforms. Code is available at [Github](https://github.com/nathan-t4/metaagent)

![MetaAgent Workflow](/projects/metaagent/workflow.png)