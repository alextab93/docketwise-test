FROM ruby:2.6.3

RUN apt-get update && apt-get install -y npm vim-tiny && npm install -g yarn

RUN mkdir -p /var/app
COPY . /var/app
WORKDIR /var/app

RUN gem install bundler -v 2.1.4
RUN bundle install

CMD bundle exec rails s -b 0.0.0.0