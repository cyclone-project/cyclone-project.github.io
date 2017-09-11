---
layout: page
title: Documents
---
# Demo videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSMnrD4M5OV0R0QIw9-MGqiwwbaIDauaL" frameborder="0" allowfullscreen></iframe>

# Project Flyer

{:.preview}
[![Project Flyer](/assets/images/flyer-CYCLONE.png)](/assets/images/flyer-CYCLONE.pdf)


# Newsletters

<h2 id="newsletter-first">Project overview<small>Newsletter #1 - Q1 2016</small></h2>

{:.lead}
* CYCLONE in a Nutshell
* Manage Your Cloud Application Resources
* CYCLONE Bioinformatics Use Case Scenarios
* CYCLONE Energy Use Case Scenario

{:.preview}
[![First Newsletter](/assets/images/newsletters/CYCLONE Newsletter first edition.png)](/assets/images/newsletters/CYCLONE Newsletter first edition.pdf)

<h2 id="newsletter-second">Security and compliance within CYCLONE<small>Newsletter #2 - Q3 2016</small></h2>

{:.lead}
* CYCLONE Bioinformatics Use Cases and Security
* CYCLONE Energy Use Case Security and Compliance
* Access Control Infrastructure Provisioning in CYCLONE
* CYCLONE VPN service
* Compliance and Security - Existing Standards and Recommendations

{:.preview}
[![Second Newsletter](/assets/images/newsletters/CYCLONE Newsletter second edition.png)](/assets/images/newsletters/CYCLONE Newsletter second edition.pdf)

<h2 id="newsletter-second">CYCLONE Highlights 2015-2016<small>Newsletter #3 - Q2 2017</small></h2>

{:.lead}
* Application Performance Management for Multi-Cloud CYCLONE Environment
* SlipStream Components for Auto-scaling: Architecture
* Compliance Analysis for Bioinformatics Applications in CYCLONECYCLONE Bioinformatics Use Cases and Security
{:.preview}
[![Second Newsletter](/assets/images/newsletters/CYCLONE Newsletter second edition.png)](/assets/images/newsletters/CYCLONE_Newsletter_3_v1.0.pdf)


# Posters

<h2 id="poster-cloudscape">Cloudscape 2016<small>CYCLONE Cloud Federation and Multi-cloud Application Deployment for Bioinformatics Research</small></h2>

{:.lead}
See how all components interact to realize the Bioinformatics Use Case

{:.preview}
[![Cloudscape Poster](/assets/images/tutorials/CloudscapePoster.png)](/assets/images/tutorials/CloudscapePoster.pdf)

# Slides

## Introduction to OpenNaaS

{:.preview}
[![OpenNaaS Introduction](/assets/images/tutorials/OpenNaaSTutorial.png)](/assets/images/tutorials/OpenNaaSTutorial.pdf)

## Introduction to TRESOR

{:.preview}
[![TRESOR Introduction](/assets/images/tutorials/TRESOR-Tutorial.png)](/assets/images/tutorials/TRESOR-Tutorial.pdf)

## Turnkey appliances for biological use cases on federated clouds

{:.preview}
[![Turnkey appliances for biological use cases on federated clouds](/assets/images/tutorials/Turnkey-IFB-ELIXIR.png)](/assets/images/tutorials/Turnkey-IFB-ELIXIR.pdf)

# Papers

<h2>2016</h2>
[ Yuri Demchenko, Miroslav Zivkovic, Cees de Laat, Christophe Blanchet, Mohamed Bedri, Jean-François Gibrat, Oleg Lodygensky, Zilci, B. I., Slawik, M., Loomis C., Branchat R. (2016). **"CYCLONE: A Platform for Data Intensive Scientific Applications in Heterogeneous Multi-cloud/Multi-provider Environment"**,  In Cloud Engineering (IC2E), 2016 IEEE International Conference on. (In press)](https://www.researchgate.net/publication/305869604_CYCLONE_A_Platform_for_Data_Intensive_Scientific_Applications_in_Heterogeneous_Multi-cloudMulti-provider_Environment)

[Yuri Demchenko, Paola Grosso, Cees de Laat, Sonja Filiposka, Damir Regvart, Migiel de Vos, Tasos Karaliotas "**ZeroTouch Provisioning (ZTP) Model and Infrastructure Components for Multi-provider Cloud Services Provisioning**", In Cloud Engineering (IC2E), 2016 IEEE International Conference on. (In press)](https://arxiv.org/abs/1611.02758)

[J. Aznar, E. Escalona, I. Canyameres, O. Moya, A. Viñes "**CNSMO: A Network Services Manager/Orchestrator Tool for Cloud Federated Environments**" (2016). The 15th IFIP Annual Mediterranean Ad Hoc Networking Workshop. (In Press)](http://arxiv.org/abs/1609.01043)

<h2>2015</h2>

[Zilci, B. I. and Slawik, M. and Küpper, A. (2015). **Cloud Service Matchmaking Approaches: A Systematic Literature Survey**. Proceedings of the 26th International Workshop on Database and Expert Systems Applications. DEXA 2015. IEEE.](http://arxiv.org/abs/1607.06674)

[Zilci, B. I. and Slawik, M. and Küpper, A. (2015). **Cloud Service Matchmaking using Constraint Programming**. Proceedings of the 24th IEEE International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises. IEEE.](http://arxiv.org/abs/1607.06658)

Demchenko, Yuri, Cosmin Dumitru, Ralph Koining, Cees de Laat, Taras Matselyukh, Sonja Filiposka, Migiel De Vos et al. "**Open Cloud eXchange (OCX): A Pivot for Intercloud Services Federation in Multi-provider Cloud Market Environment.**" In Cloud Engineering (IC2E), 2015 IEEE International Conference on, pp. 472-479. IEEE, 2015.

[Slawik M, Demchenko Y, Branchat R, Loomis C, Lodygensky O, Blanchet C. **CYCLONE Unified Deployment and Management of Federated, Multi-Cloud Applications**. In 2015 IEEE/ACM 8th International Conference on Utility and Cloud Computing (UCC) 2015 Dec 7 (pp. 453-457). IEEE.](http://arxiv.org/abs/1607.06688)

[Slawik, Mathias, Begüm İlke Zilci, Fabian Knaack, and Axel Küpper. "**The Open Service Compendium. Business-pertinent Cloud Service Discovery, Assessment, and Selection**" (2015)](https://arxiv.org/abs/1508.06119)

# Deliverables

<table class="table table-striped table-bordered table-deliverables sortable">
	<thead>
		<tr>
		    <th>ID</th>
		    <th>WP</th>
		    <th>Name</th>
		    <th>Expected&nbsp;date</th>
		</tr>
	</thead>
	<tbody>
		{% for deliverable in site.data.deliverables %}
		    <tr>
					<td><strong>{{ deliverable.id }}</strong></td>
					<td>{{ deliverable.wp }}</td>
					<td>
					{% if deliverable.state == 'review' %}
					<a href="{{ deliverable.name | prepend: 'assets/images/deliverables/' | append: '.pdf' }}"> {{ deliverable.name }}* </a>
					{% elsif deliverable.state == 'done' %}
					<a href="{{ deliverable.name | prepend: 'assets/images/deliverables/' | append: '.pdf' }}"> {{ deliverable.name }}</a>
					{% elsif deliverable.state == 'confidential' %}
					{{ deliverable.name }} **
					{% else %}
					{{ deliverable.name }}
					{% endif %}
					</td>
					<td data-dateformat="D MMMM YYYY">{{ deliverable.date | date: "%Y-%m-%d"}}</td>
  	    </tr>
   {% endfor %}
  </tbody>
</table>
<p>* Under EC review</p>
<p>** Confidential</p>
