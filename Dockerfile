FROM node:16.17 as dependencies
WORKDIR /liveme_next
COPY package.json package-lock.json ./
RUN npm install --force --frozen-lockfile

FROM node:16.17 as builder
WORKDIR /liveme_next
COPY . .
COPY --from=dependencies /liveme_next/node_modules ./node_modules
RUN npm run build

FROM node:16.17 as runner
WORKDIR /liveme_next
ENV NODE_ENV production

COPY --from=builder /liveme_next/public ./public
COPY --from=builder /liveme_next/package.json ./package.json
COPY --from=builder /liveme_next/.next ./.next
COPY --from=builder /liveme_next/node_modules ./node_modules

EXPOSE 3000
CMD ["npm","run", "start"]