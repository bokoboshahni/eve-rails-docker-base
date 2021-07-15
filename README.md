![Build images](https://github.com/bokoboshahni/eve-rails-docker-base/workflows/CICD/badge.svg)

# EVE Rails Docker Base Image

Optimized Docker base image for third-party [EVE Online](https://eveonline.com) MMORPG built with [Ruby on Rails](https://rubyonrails.org/).

This repository produces the [eve-rails-builder](https://hub.docker.com/repository/docker/bokoboshahni/eve-rails-builder) and [eve-rails-base](https://hub.docker.com/repository/docker/bokoboshahni/eve-rails-base) images.

Based on the wonderful work of [@ledermann](https://github.com/ledermann/docker-rails-base).

## Usage

Add this `Dockerfile` to your application:

```dockerfile
FROM bokoboshahni/eve-rails-builder:1-alpine AS builder
FROM bokoboshahni/eve-rails-base:1-alpine
COPY --from=builder /etc/alpine-release /tmp/dummy
USER app
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
```

## License

Copyright © 2020 Bokobo Shahni <shahni@bokobo.space> and Georg Ledermann <georg@ledermann.dev>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
