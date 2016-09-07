---
---
The PAM Module allows the Linux operating system to authenticate users using their federated identities without the need for a modified SSH client or server. Instead, it provides URLs to the users through the SSH "keyboard-interactive mode", which they open in their User Agents and carry out the regular OIDCACF. At the end, when the JSON web token is retrieved by the PAM module, it transforms the federated identities into existing or newly created local user accounts. 
