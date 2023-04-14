FROM nginx as brottli

ADD build/ /usr/share/nginx/html/

RUN apt update && apt install brotli -y && \
cd /usr/share/nginx/html \
    && find -iname "*.js" -exec brotli -Z -v -k {} \; \
    && find -iname "*.css" -exec brotli -Z -v -k {} \; \
    && find -iname "*.ttf" -exec brotli -Z -v -k {} \; \
    && find -iname "*.js" -exec gzip -9 -v -k {} \; \
    && find -iname "*.css" -exec gzip -9 -v -k {} \;

FROM 548926480775.dkr.ecr.us-east-1.amazonaws.com/nginx:latest

EXPOSE 80/tcp

COPY --from=brottli /usr/share/nginx/html/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]