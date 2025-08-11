# syntax=docker/dockerfile:1.7

# Global build args
ARG TARGETPLATFORM
ARG BUILDPLATFORM
ARG BASE_IMAGE=alpine:3.19

# Base stage
FROM --platform=$TARGETPLATFORM ${BASE_IMAGE} AS base

LABEL org.opencontainers.image.title="Sophia Theme Demo"
LABEL org.opencontainers.image.description="A Dockerfile exercising most syntax features for highlighting"
ARG BUILD_DATE
LABEL org.opencontainers.image.created=$BUILD_DATE \
      org.opencontainers.image.licenses=MIT

# Switch shell (exec form)
SHELL ["/bin/sh", "-euxc"]

ENV APP_DIR=/app \
    APP_ENV=production \
    PATH="/app/bin:$PATH"
WORKDIR $APP_DIR

# Install packages (with BuildKit cache mount)
RUN --mount=type=cache,target=/var/cache/apk \
    apk add --no-cache bash curl ca-certificates

# Demonstrate heredoc in RUN
RUN <<'EOF'
echo "Running setup script"
id
printf 'multiline here-doc with quotes remains literal\n'
EOF

# Copy with flags and globs
COPY --link --chown=1000:1000 package*.json ./
COPY --chmod=0755 scripts/entrypoint.sh /usr/local/bin/entrypoint.sh
ADD https://example.com/archive.tar.gz /tmp/
ADD assets/*.txt /assets/

# Healthcheck examples
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -fsS http://localhost:8080/health || exit 1

EXPOSE 8080/tcp 9090/udp
VOLUME ["/data"]
STOPSIGNAL SIGTERM

ONBUILD RUN echo "This fires in child builds"

# Builder stage
FROM base AS builder

ARG VERSION=0.0.0
ENV NODE_ENV=development

# Example of multi-line RUN with backslashes
RUN echo "Building version: ${VERSION}" && \
    mkdir -p $APP_DIR/bin && \
    echo '#!/bin/sh' > $APP_DIR/bin/serve && \
    echo 'exec echo Serving on port "$1"' >> $APP_DIR/bin/serve && \
    chmod +x $APP_DIR/bin/serve

# Demonstrate BuildKit mounts: secret and ssh
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc,required=false \
    --mount=type=ssh \
    test -f /root/.npmrc || echo "no npmrc" >/dev/null

# Runtime stage
FROM base AS runtime

COPY --from=builder $APP_DIR/bin $APP_DIR/bin
USER 1000:1000

# Shell form vs exec form
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["serve", "--port", "8080"]

# Alternative forms (commented for reference)
# SHELL ["bash", "-lc"]
# RUN ["bash", "-lc", "echo hi"]

# Scratch stage (minimal example)
FROM scratch AS minimal
COPY --from=runtime /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=runtime $APP_DIR/bin/serve /serve
ENTRYPOINT ["/serve"]
