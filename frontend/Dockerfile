FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install

RUN npm run build

FROM nginx
EXPOSE 5000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chmod=0755 /app/build /usr/share/nginx/html