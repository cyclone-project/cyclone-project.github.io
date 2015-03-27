---
---
SlipStream provides a web-based interface and REST API for defining complex, multi-machine applications and automating the deployment of those applications onto cloud infrastructures. SlipStream is a commercial product of SixSq. However, the core of SlipStream and all of the connectors for open source clouds are released under the Apache 2 license and are freely available.

SlipStream supports the transparent use of most commercial and academic cloud infrastructures through a series of "cloud connectors".  The abstraction provided by these connectors allows users to see a single, unified interface and API even when using incompatible cloud infrastructures.

For application service providers the reasons for incorporating SlipStream are clear:

 * SlipStream facilitates the description of complex, multi-machine deployments, allowing this knowledge to be captured.
 * SlipStream provides a mechanism for coordinating the deployment of the different elements within an application deployment (e.g. allowing database servers and clients to know each others' locations).
 * Users can define multi-cloud deployments in which different elements of an application are deployed to different cloud infrastructures.
 * The size of a deployment can be scaled up or down depending on the requirements of the user deploying the application.
 * Users can define appliances within SlipStream in a cloud-agnostic manner, allowing reuse on any cloud with a SlipStream cloud connector.
 * Appliance and application descriptions can be published and shared between users, providing a "service catalog" that promotes reuse.

The combination of multi-cloud support, automated deployment, application element coordination, and a user-defined "service catalog" make SlipStream an ideal building block connecting the CYCLONE developments in the cloud layer and those at the application level.
