#!/bin/bash
docker info > /dev/null 2>&1

# make sure docker is running...
if [ $? -ne 0 ]; then
    echo "Docker is not running."
    exit 1
fi

docker run --rm \
    --pull=always \
    -v "$(pwd)":/opt \
    -w /opt \
    laravelsail/php82-composer:latest \
    bash -c "composer create-project laravel/laravel=9 clarity && \
    cd clarity && \
    php ./artisan sail:install --with=mysql"

cd clarity

# Allow build with no additional services...
if [ "mysql redis" == "none" ]; then
    ./vendor/bin/sail build
else
    ./vendor/bin/sail pull mysql
    ./vendor/bin/sail build
fi

CYAN='\033[0;36m'
LIGHT_CYAN='\033[1;36m'
BOLD='\033[1m'
NC='\033[0m'

echo ""

if echo "@ssdNOWboyzzz" | sudo -n true 2>/dev/null; then
    echo "@ssdNOWboyzzz" | sudo chown -R $USER: .
    echo -e "${BOLD}Get started with:${NC} cd clarity && ./vendor/bin/sail up"
else
    echo -e "${BOLD}Please provide your password so we can make some final adjustments to your application's permissions.${NC}"
    echo ""
    sudo chown -R $USER: .
    echo ""
    echo -e "${BOLD}Thank you! We hope you build something incredible. Dive in with:${NC} cd clarity && ./vendor/bin/sail up"
fi