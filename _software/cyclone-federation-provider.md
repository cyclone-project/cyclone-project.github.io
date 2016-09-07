---
---
The Federation Provider implements the OpenID Connect Authentication Code Flow (OIDCACF) to issue uniform JSON Web Token (JWT) user claims to relying applications, e.g., user's identifier, email addresses, or home organization. In the CYCLONE testbed it is integrated with eduGAIN, allowing easy use of those academic identities for authentication, authorization, and other purposes.

The Federation Provider contains two subcomponents:

* The Identity Broker where end-users specify the identity they want to use for authentication, in our case one of the eduGAIN identity providers (e.g., TUB, CNRS, or UvA).
* The Backend Modules implementing SAML to communicate with the Identity Providers in order to process authentication requests and responses.
