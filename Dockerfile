FROM node:18.15.0 AS development

WORKDIR /usr/src/app

COPY . .
COPY package.json ./.package.json
COPY .env ./.env
RUN npm install
RUN npm run build

FROM node:18.15.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY .env ./.env
RUN yarn install --prod

COPY --from=development /usr/src/app/package*.json ./
COPY --from=development /usr/src/app/node_modules/ ./node_modules/
COPY --from=development /usr/src/app/dist/ ./dist/

USER node

CMD ["node", "dist/app"]
