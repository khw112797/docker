ENTRYPOINT /usr/sbin/vsftpd

FROM quay.io/centos/centos:stream9

RUN yum -yq update && yum -yq install vsftpd && yum clean all
COPY vsftpd.conf.centos9.template /etc/vsftpd/vsftpd.conf

VOLUME /var/ftp/pub
COPY WelcomeToMyFTPServer.txt /var/ftp/pub/WelcomeToMyFTPServer.txt 

EXPOSE 21 20

ENTRYPOINT /usr/sbin/vsftpd
