# syntax = docker/dockerfile:1.0-experimental
FROM ruby:3.0-alpine
LABEL maintainer="shahni@bokobo.space"

# Add basic packages
RUN apk add --no-cache \
      libcurl \
      postgresql-client \
      redis \
      tzdata \
      file

# Configure Rails
ENV RAILS_LOG_TO_STDOUT true
ENV RAILS_SERVE_STATIC_FILES true

WORKDIR /app

# Expose Puma port
EXPOSE 3000

# This image is for production env only
ENV RAILS_ENV production
ENV PATH="/app/.venv/bin:$PATH"

# Write GIT commit SHA and TIME to env vars
ONBUILD ARG COMMIT_SHA
ONBUILD ARG COMMIT_TIME

ONBUILD ENV COMMIT_SHA ${COMMIT_SHA}
ONBUILD ENV COMMIT_TIME ${COMMIT_TIME}

# Add user
ONBUILD RUN addgroup -g 1000 -S app && \
            adduser -u 1000 -S app -G app

# Copy app with gems from former build stage
ONBUILD COPY --from=builder --chown=app:app /usr/local/bundle/ /usr/local/bundle/
ONBUILD COPY --from=builder --chown=app:app /app /app
