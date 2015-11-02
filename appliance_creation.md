---
title: Appliance Creation Workflow
layout: default
---
# Appliance Creation Roles
There are four roles:
- Cloud deployment tool host: Holds a pointer to the cloud image metadata maintainer
- Cloud image metadata maintainer: Updates the image identifiers for the base images
- Cloud image holder: Stores and provides the image file itself
- Image metadata endorser(On Stratuslab)  
- Cloud appliance developer


For CYCLONE, the following take the roles depending on the SlipStream instance used:

1. slipstream.stratuslab.eu - LAL, LAL Image maintainer, for official StratusLab images LAL, any Stratuslab user with a valid certificate, any slipstream.stratuslab user
2. nuvla or slipstream.sixsq.com - SixSq, SixSq Image maintainer, clouds that nuvla has connectors to, not applicable, any slipstream.sixsq user
3. cyclone on a SixSq maintained SlipStream instance (in progress) - SixSq, SixSq Image maintainer, clouds that nuvla has connectors to and LAL, not applicable, any eduGAIN user

# Appliance Creation Workflow



