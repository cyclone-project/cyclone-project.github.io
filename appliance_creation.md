---
title: Appliance Creation Workflow
layout: default
---
# Appliance Creation Roles
There are four roles:
- Cloud deployment tool host: Holds a pointer to the cloud image metadata maintainer
- Cloud image metadata maintainer: Updates the image identifiers for the base images
- Cloud image holder: Stores and provides the image file itself
- Image metadata endorser  
- Cloud appliance developer


For CYCLONE, the following take the roles depending on the SlipStream instance used:

1. slipstream.stratuslab.eu - LAL, LAL Image maintainer, for official StratusLab images LAL, any Stratuslab user with a valid certificate, any slipstream.stratuslab user
2. nuvla or slipstream.sixsq.com - SixSq, SixSq Image maintainer, clouds that nuvla has connectors to, not applicable, any slipstream.sixsq user
3. cyclone on a SixSq maintained SlipStream instance (in progress) - SixSq, SixSq Image maintainer, clouds that nuvla has connectors to and LAL, not applicable, any eduGAIN user

# Appliance Creation Workflow
The current deployment uses option 2 above. The base images on the SlipStream app store are maintained by Slipstream image metadata maintainer. The base images point at Stratuslab images/appliances which are maintained by Stratuslab. Currently, if a Stratuslab appliance further is needed by someone for a period, it is the responsibility of this person should endorse the image for that period. However, long endorsement periods are not encouraged and updates to the slipstream base images with the latest Stratuslab appliances is recommended.





