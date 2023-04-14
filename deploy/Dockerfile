FROM bitnami/node:14.17.3
RUN apt update && apt install curl jq python3-pip python3-dev unzip docker.io -y
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install
ENV PATH=/usr/local/bin:$PATH
RUN aws --version