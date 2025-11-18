---
title: "A1 Tail Project"
year: "2022"
type: "Robotics"
technologies: ["Robotics", "Mechanical Design", "Reinforcement Learning"]
# demo: "https://arxiv.org/pdf/2412.11215"
source: "https://github.com/nathan-t4/legged_gym/"
description: "Designed actuated tail for quadruped robots to enhance stability."
active: false
---

## Abstract

The goal of this project is to design a tail for the Unitree A1 robot to enhance agility, mobility, and stability during locomotion and enable basic manipulation tasks. The tail acts as both a counterweight and mobile manipulator to enable basic manipulation. I worked on this project during my extended visit with the Hybrid Robotics Lab at UC Berkeley (May 2022 - Jan 2023).
                
The tail is a 3D-printed, 3 DoF, serial mechanism driven by [custom QDD actuators](https://nathantsao.com/projects/actuator). 
As shown in the photo below, the tail also has a 1 DoF gripper at the end effector to allow simple manipulation.
![A1 Tail](../../projects/a1_tail/tail.jpg)

We also explored using model-free reinforcement learning (RL) to train a locomotion policy in NVIDIA Isaac Gym. The training pipeline follows this [paper](https://arxiv.org/pdf/2109.11978) closely. Briefly, we use the PPO algorithm and standard RL training tricks such as domain randomization and curriculum learning to train a robust locomotion policy in simulation.

## Videos

Video of A1 robot with tail attached:
https://youtu.be/dytMRYPr5OY

Isaac Gym training of a RL locomotion policy for the A1 quadruped with the designed tail. [Training Code](https://github.com/nathan-t4/legged_gym/)
https://youtu.be/U79C8jmMigU

## Presentations

Click on the photos below to see a set of slides I presented to the Hybrid Robotics Group:

Group Presentation on Dec 2022:
[![Slideshow](../../projects/a1_tail/120222_slides.png)](https://docs.google.com/presentation/d/1xGsDUTqnN636xjiiHPFhW-flymro5kkT-slaYePJstE/edit?usp=sharing)

Group Presentation on Aug 2022, showing the old design of the tail:
[![Slideshow](../../projects/a1_tail/082222_slides.png)](https://docs.google.com/presentation/d/1cGa5sAzDwlJlw8IenS4zFJpzU53y5GHlO34lK943wKg/edit?usp=sharing)