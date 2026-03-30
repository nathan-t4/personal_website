---
title: "3D-Printed Quasi-Direct-Drive Gearbox"
category: "robotics"
year: "2022"
type: "Robotics"
technologies: ["Robotics", "Mechanical Design"] # , "Physics-Informed Machine Learning", "Python", "JAX"]
# demo: "https://arxiv.org/pdf/2412.11215"
# source: "https://github.com/nathan-t4/NPHDAE"
description: "Designed custom 3D-printed gearbox for robotics."
image: "/projects/actuator/actuator.JPG"
active: true
---

## Overview
![Actuator section view](../../projects/actuator/actuator.JPG)
I have developed a 3D-printed, planetary, quasi-direct-drive (4.5:1) actuator. The actuator is built on cheap BLDC drone motors and controlled using the B-G431B-ESC1 board with custom field-oriented-control (FOC) firmware [GitHub](https://github.com/nathan-t4/Recoil-Motor-Controller).

The actuator weighs 500g with 75% PLA infill, and has dimensions 62.5mm (height) x 80mm (diameter). Each motor costs less than $150.

Section view of the actuator. The sun gear (18T) is screwed onto the motor, planet gears (24T) are aligned with dowel pins press-fit into the planetary carrier, and the planet carrier is supported on both sides by roller bearings.
![Actuator section view](../../projects/actuator/section_view.png)

## Videos
Exploded view of the actuator:
https://youtu.be/cdQR5drcHQc

Video of the actuator moving:
https://youtu.be/MiaL6Zt7dgE