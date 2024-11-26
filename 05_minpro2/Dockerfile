FROM quay.io/centos/centos:stream9

RUN yum -y install httpd php


COPY index.html info.php /var/www/html
COPY entrypoin.sh /entrypoin.sh
RUN chmod +x /entrypoin.sh

VOLUME /var/www/html /var/log/httpd
EXPOSE 80

ENTRYPOINT /entrypoin.sh


