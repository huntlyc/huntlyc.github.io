FROM jekyll/jekyll:pages

MAINTAINER huntly.cameron@gmail.com
RUN apk update && apk upgrade
WORKDIR /srv/jekyll
COPY . /srv/jekyll
RUN chown -R jekyll:jekyll /srv/jekyll
RUN su jekyll
