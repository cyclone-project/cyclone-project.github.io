---
title: Internet of Services Lab (IoSL)
teaser: We lower the effort of conducting computer science courses while raising the ease of use and the security level of the developed prototypes.
---
# Use case overview

[“Internet of Services Lab” (IoSL)](http://www.snet.tu-berlin.de/menue/teaching) is a SNET/TUB teaching project where students work a semester in groups of three to six. They most often implement software related to numerous research projects and topics: Cloud, Mobile, Social, and Ubiquitous Computing. This type of teaching project is quite popular in other computer science related study paths at TUB as well as other universities.

There are different cloud-related innovation areas where CYCLONE provides benefits within the IoSL:

1. **Rapid provisioning of resources for student projects**: Students require resources for conducting their projects, e.g., Virtual Machines. In the current set-up it is a manual procedure to provision those resources. By leveraging an infrastructure platform as well as deployment tools we minimize the required effort from the student supervisors considerably.

2. **Utilization of SlipStream modules for reproducible application deployments**: After students finish their course it is often problematic for other students and their supervisors to pick up their work. Most often, documentation is lacking and software versioning is not reliable, if available. By building upon [SlipStream](/software.html#slipstream) modules we create application deployments that can be easily reproduced, extended, and scaled. Also, students will learn how to structure their applications to leverage cloud characteristics, e.g., how to create immutable application deployments.

3. **Federation Provider Integration**: From our experience, every built demonstrator has its own user management. Furthermore, they often do not follow security best practices. By integrating the [Federation Provider](/software.html#cyclone-federation-provider) into each demonstrator, students learn about federated identity and are also liberated from implementing their own user management, as all students and supervisors will be able to login to the demonstrators via eduGAIN.
