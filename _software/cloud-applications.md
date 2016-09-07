---
---
Cloud applications are commonly deployed as virtual machines and/or in a container (e.g., Docker or rkt). These applications have three integration points with the security components:

* They rely on the OIDCACF to authenticate and authorize users - both on the application layer, through OpenID Connect libraries, as well as the OS layer, through the PAM module.
* They can log to Logstash, e.g., through the simple TCP- as well as the Syslog interface.
* They rely on Nuv.la to be deployed on the IaaS platforms.
