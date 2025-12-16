# Application context variables
APP_NAME := PWA React with Tailwind
APP_PORT := 3000
COMPOSE_FILE := docker/compose.yml


.PHONY: help build run stop clean

# Default target runs help
default: help
help:
	@echo "--- Makefile for $(APP_NAME) ---"
	@echo "Commands available:"
	@echo ""
	@echo "  build   : Builds the Docker image ."
	@echo "  run     : Starts the application containers. (Accessible at http://localhost:$(APP_PORT))"
	@echo "  stop    : Stops the running containers."
	@echo "  clean   : Stops containers, removes volumes, and deletes the built image."
	@echo ""
	@echo "  help    : Shows this help message."
build:
	@echo "--- Building Docker image ---"
	# Using 'docker compose' (v2) which is the modern standard.
	docker compose -f $(COMPOSE_FILE) build
	@echo "Operation 'build' completed successfully."

run:
	@echo "--- Starting container '$(APP_CONTAINER_NAME)' on http://localhost:3000 ---"
	docker compose -f $(COMPOSE_FILE) up -d
	@echo "Operation 'run' completed successfully."

stop:
	@echo "--- Stopping container '$(APP_CONTAINER_NAME)' ---"
	docker compose -f $(COMPOSE_FILE) down
	@echo "Operation 'stop' completed successfully."

clean:
	@echo "--- Stopping and removing container/network/volumes ---"
	# Stop, remove containers, network, and also remove volumes (-v) and built images (--rmi all)
	docker compose -f $(COMPOSE_FILE) down -v --rmi all
	@echo "Operation 'clean' completed successfully."
