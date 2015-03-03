---
---
The Trusted Cloud Transfer Protocol (TCTP) is an application layer encryption protocol for HTTP which provides true end-to-end security, i.e., from the user agent (e.g. browser) to the origin server (e.g. a single PaaS container), even if the communication is performed through intermediaries acting as TLS server connection ends, e.g., cloud load balancers. There are currently two implementations of TCTP, the [distributed cloud proxy](#distributed-cloud-proxy), and the [TCTP Rack middleware](https://github.com/TU-Berlin-SNET/tctp-rack) for Ruby-based web applications, e.g., Ruby on Rails or Sinatra.

Read more about TCTP in [this CloudCom 2013 paper](http://www.snet.tu-berlin.de/fileadmin/fg220/publications/cloudcom2013_slawik.pdf).