---
title: Entrance  
#title: Entrance meets Cyclone components deployment and integartion of federated identities.

teaser: Linking Cyclone to other research projects. On the integration of Cyclone's Federated Identity provider to Entrance and an improved Entrance component deployment.
---
# Use case overview

[Entrance](http://entrance.snet.tu-berlin.de/ ) is a research project focussing on a meaningful application of Attribute-based Encryption (ABE) in data sharing scenarios. Entrance consists of several components and is currently not easy to setup. In order to reduce this effort a docker-based deployment is intended and addressed by top #1.
Another cumbersome task is the user provisioning. Currently, the data owner must identify all new users manually. The idea is to use the eduGAIN login, thus the Cyclone's identity service in order to automate as much as possible the initial registration of new users. This task is addressed by top #2. 

1. **Easy deployment of Entrance components**:
The Entrance backend consists of three core software components, a java service and two python services. All have to be configured to run in Docker containers. Afterwards, any trustworthy target device, such as a docker-ready home NAS or in the case of Cyclone a Nuv.la module can be used for the deployment.

2. **Identity Provider integration**:  By integrating Cyclone's Federated Identity Provider, the Entrance user (data owner) benefits from an improved new user provisioning experience based on the eduGAIN identities. This requries an openIDconnect integration to the python-based dashboard, since this is the main management component for the data owner. Incoming provisoning requests have to be stored persistantly in a database until the data owner approves the requests. After assigning attributes to each new provisioned user the user specific private key must be generated. Afterwards, this key is provided to the targed user nonrecurrently, e.g. by a HTTPS download.


