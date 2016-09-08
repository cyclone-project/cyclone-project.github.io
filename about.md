---
title: CYCLONE at a glance
layout: default
---
# What is CYCLONE?

{:.lead}
CYCLONE integrates and extends open source software to create a unified cloud application management solution for application service providers, DevOps, and researchers.

# What challenges does CYCLONE address?

<h6></h6>

<h2 id="deployment"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cloud-upload fa-stack-1x fa-inverse"></i></span><span>Multi-cloud deployment and scaling of federated applications</span></h2>

<p>It's hard to deploy federated applications to multiple clouds and also scale them dynamically. In CYCLONE, we rely on the <a href="software.html#slipstream">Slipstream Application Deployment Platform</a> to ease these activities considerably. Besides other great features, Slipstream deployments are parameterized, making it easy to configure identity federation, for example.</p>

<h2 id="federatedidentity"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-unlock fa-stack-1x fa-inverse"></i></span><span>Using federated identities for secure access control</span></h2>

<p>The <a href="software.html#cyclone-federation-provider">CYCLONE Federation Provider</a> makes federated identities (e.g., eduGAIN) available for authentication, authorization, XACML-based distributed access control, and attribute-based encryption. In addition, CYCLONE offers end-to-end security for HTTP-based applications using the <a href="software.html#tctp">Trusted Cloud Transfer Protocol (TCTP)</a>.</p>

<h2 id="network"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-sitemap fa-stack-1x fa-inverse"></i></span><span>Automating network service deployment for enhancing application security</span></h2>
<p>We deploy <a href="software.html#opennaas-core">OpenNaaS</a> components using Slipstream to provide network services to cloud applications, for example, firewalling and load balancing. This increases cloud application security and makes network management highly flexible.</p>

<h2 id="brokering"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-exchange fa-stack-1x fa-inverse"></i></span><span>Cloud service brokering and matchmaking</span></h2>
<p>The <a href="software.html#open-service-compendium">Open Service Compendium</a> provides descriptions of cloud service offerings to be used by the Slipstream service catalog. DevOps can use these descriptions to choose fitting cloud infrastructure offerings for their application topologies. This saves costs and helps DevOps to manage their application deployments.</p>

<h2 id="monitoring"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tachometer fa-stack-1x fa-inverse"></i></span><span>Distributed monitoring and logging</span></h2>
<p>Using the <a href="software.html#cyclone-distributed-logging">CYCLONE distributed logging stack</a>, we provide distributed monitoring and logging functionality to federated cloud applications.</p>

<h2 id="security"><span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-power-off fa-stack-1x fa-inverse"></i></span><span>Cloud Security Bootstrapping</span></h2>
<p>There are many steps necessary to bootstrap security within cloud applications. Using DITBP, the Dynamic Infrastructure Bootstrapping Protocol, CYCLONE automates these activities.</p>
